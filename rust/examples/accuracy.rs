use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};

use chrono::{NaiveDate, Offset, TimeZone};
use chrono_tz::Tz;
use rtzlib::{CanPerformGeoLookup, NedTimezone, OsmTimezone};
use serde::Deserialize;
use spatialtime::{ned::NedReader, osm::OsmReader};
use tzf_rs::{DefaultFinder, Finder, FuzzyFinder};

#[derive(Clone, Debug, Deserialize)]
struct RawGroundTruthRow {
    lng: f64,
    lat: f64,
    name: String,
    #[serde(default)]
    names: Option<String>,
}

#[derive(Clone, Debug)]
struct GroundTruthRow {
    lng: f64,
    lat: f64,
    name: String,
    // All zones covering the point (from go/accuracy); answering any of these
    // counts as ambiguous rather than wrong.
    names: HashSet<String>,
}

struct Candidate<'a> {
    name: &'static str,
    fn_lookup: Box<dyn Fn(f64, f64) -> String + 'a>,
}

const ALIASES: &[(&str, &str)] = &[
    ("Europe/Kiev", "Europe/Kyiv"),
    ("Europe/Uzhgorod", "Europe/Kyiv"),
    ("Europe/Zaporozhye", "Europe/Kyiv"),
    ("Asia/Calcutta", "Asia/Kolkata"),
    ("Asia/Rangoon", "Asia/Yangon"),
    ("Asia/Saigon", "Asia/Ho_Chi_Minh"),
    ("Asia/Katmandu", "Asia/Kathmandu"),
    ("Asia/Dacca", "Asia/Dhaka"),
    ("Asia/Macao", "Asia/Macau"),
    ("Asia/Chongqing", "Asia/Shanghai"),
    ("Asia/Harbin", "Asia/Shanghai"),
    ("Asia/Kashgar", "Asia/Urumqi"),
    ("Asia/Ulan_Bator", "Asia/Ulaanbaatar"),
    ("America/Godthab", "America/Nuuk"),
    ("America/Nipigon", "America/Toronto"),
    ("America/Thunder_Bay", "America/Toronto"),
    ("America/Montreal", "America/Toronto"),
    ("America/Rainy_River", "America/Winnipeg"),
    ("America/Pangnirtung", "America/Iqaluit"),
    ("America/Yellowknife", "America/Edmonton"),
    ("America/Santa_Isabel", "America/Tijuana"),
    ("America/Buenos_Aires", "America/Argentina/Buenos_Aires"),
    ("America/Atka", "America/Adak"),
    ("Australia/Currie", "Australia/Hobart"),
    ("Pacific/Enderbury", "Pacific/Kanton"),
    ("Europe/Nicosia", "Asia/Nicosia"),
];

fn norm(name: &str) -> String {
    ALIASES
        .iter()
        .find_map(|(old, new)| (*old == name).then_some(*new))
        .unwrap_or(name)
        .to_string()
}

fn first_existing(candidates: &[&str]) -> PathBuf {
    for candidate in candidates {
        let path = PathBuf::from(candidate);
        if path.exists() {
            return path;
        }
    }
    panic!("none of these paths exist: {candidates:?}");
}

fn load_ground_truth(path: &Path) -> Vec<GroundTruthRow> {
    let mut reader = csv::ReaderBuilder::new()
        .has_headers(false)
        .from_path(path)
        .unwrap_or_else(|err| panic!("failed to open {}: {err}", path.display()));

    reader
        .deserialize::<RawGroundTruthRow>()
        .map(|row| {
            let row = row.unwrap_or_else(|err| panic!("failed to parse {}: {err}", path.display()));
            let name = norm(&row.name);
            let mut names = row
                .names
                .as_deref()
                .unwrap_or_default()
                .split(';')
                .filter(|part| !part.is_empty())
                .map(norm)
                .collect::<HashSet<_>>();
            names.insert(name.clone());
            GroundTruthRow {
                lng: row.lng,
                lat: row.lat,
                name,
                names,
            }
        })
        .collect()
}

fn lookup_rtz_osm(lng: f64, lat: f64) -> String {
    OsmTimezone::lookup(lng as f32, lat as f32)
        .first()
        .map(|zone| zone.identifier.to_string())
        .unwrap_or_default()
}

fn lookup_rtz_ned(lng: f64, lat: f64) -> String {
    NedTimezone::lookup(lng as f32, lat as f32)
        .first()
        .and_then(|zone| zone.identifier.as_ref())
        .map(ToString::to_string)
        .unwrap_or_default()
}

fn lookup_tz_search(lng: f64, lat: f64) -> String {
    tz_search::lookup(lat, lng).unwrap_or_default()
}

fn lookup_zone_detect(database: &zone_detect::Database, lng: f64, lat: f64) -> String {
    database
        .simple_lookup(zone_detect::Location {
            latitude: lat as f32,
            longitude: lng as f32,
        })
        .unwrap_or_default()
}

// UTC offsets at two probe instants (northern winter and summer). Two zone
// names with equal signatures produce the same clock time year-round, which
// separates offset-band data (e.g. rtz NED answering Europe/Paris for all of
// CET) from answers that put the clock at a genuinely different time.
type OffsetSignature = Option<(i32, i32)>;

fn offset_signature(name: &str) -> OffsetSignature {
    let tz: Tz = name.parse().ok()?;
    let probe = |month: u32| {
        let instant = NaiveDate::from_ymd_opt(2026, month, 15)?.and_hms_opt(12, 0, 0)?;
        Some(
            tz.offset_from_utc_datetime(&instant)
                .fix()
                .local_minus_utc(),
        )
    };
    Some((probe(1)?, probe(7)?))
}

fn same_clock(got: &str, expected: &str, cache: &mut HashMap<String, OffsetSignature>) -> bool {
    let mut lookup = |name: &str| {
        *cache
            .entry(name.to_string())
            .or_insert_with(|| offset_signature(name))
    };
    match (lookup(got), lookup(expected)) {
        (Some(got_sig), Some(expected_sig)) => got_sig == expected_sig,
        _ => false,
    }
}

fn evaluate(
    label: &str,
    rows: &[GroundTruthRow],
    lookup: &dyn Fn(f64, f64) -> String,
    offset_cache: &mut HashMap<String, OffsetSignature>,
) -> Vec<usize> {
    let mut wrong_idx = Vec::<usize>::new();
    let mut ambiguous = 0usize;
    let mut offset_eq = 0usize;
    let mut empty = 0usize;
    let mut wrong_pairs = HashSet::<(String, String)>::new();

    for (i, row) in rows.iter().enumerate() {
        let got = norm(&lookup(row.lng, row.lat));
        if got.is_empty() {
            empty += 1;
        } else if got != row.name {
            if row.names.len() > 1 && row.names.contains(&got) {
                ambiguous += 1;
            } else if same_clock(&got, &row.name, offset_cache) {
                offset_eq += 1;
            } else {
                wrong_idx.push(i);
                if wrong_pairs.len() < 20 {
                    wrong_pairs.insert((got, row.name.clone()));
                }
            }
        }
    }

    let wrong = wrong_idx.len();
    let n = rows.len() as f64;
    println!(
        "{label:<32} wrong={wrong:6} ({:8.4}%)  ambiguous={ambiguous:4} ({:7.4}%)  offset_eq={offset_eq:6} ({:8.4}%)  empty={empty:6} ({:8.4}%)",
        100.0 * wrong as f64 / n,
        100.0 * ambiguous as f64 / n,
        100.0 * offset_eq as f64 / n,
        100.0 * empty as f64 / n
    );

    if !wrong_pairs.is_empty() {
        let mut pairs = wrong_pairs.into_iter().collect::<Vec<_>>();
        pairs.sort();
        let examples = pairs
            .into_iter()
            .take(5)
            .map(|(got, expected)| format!("{got} != {expected}"))
            .collect::<Vec<_>>()
            .join("; ");
        println!("    sample disagreements: {examples}");
    }

    wrong_idx
}

const CERT_DELTAS: &[f64] = &[0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1];
const CERT_DIRS: &[(f64, f64)] = &[
    (1.0, 0.0),
    (-1.0, 0.0),
    (0.0, 1.0),
    (0.0, -1.0),
    (1.0, 1.0),
    (1.0, -1.0),
    (-1.0, 1.0),
    (-1.0, -1.0),
];

// Wrong-answer distance certification (same methodology as go/accuracy): for
// each genuinely wrong answer, find the smallest delta such that the probe
// (tzf-rs Finder, full polygons) returns that answer somewhere within delta,
// i.e. the answer's true region is at most ~delta degrees away.
fn certify_wrong_answers(
    rows: &[GroundTruthRow],
    wrong_idx: &[usize],
    lookup: &dyn Fn(f64, f64) -> String,
    probe: &dyn Fn(f64, f64) -> String,
) {
    let mut hist = HashMap::<usize, usize>::new();
    let mut uncertified = 0usize;

    for &i in wrong_idx {
        let row = &rows[i];
        let got = norm(&lookup(row.lng, row.lat));
        let certified = CERT_DELTAS.iter().enumerate().find(|(_, delta)| {
            CERT_DIRS
                .iter()
                .any(|(dx, dy)| norm(&probe(row.lng + dx * *delta, row.lat + dy * *delta)) == got)
        });
        match certified {
            Some((delta_idx, _)) => *hist.entry(delta_idx).or_default() += 1,
            None => uncertified += 1,
        }
    }

    let total = wrong_idx.len() as f64;
    let mut cum = 0usize;
    println!("    wrong-answer distance certification (deg -> cumulative %):");
    print!("    ");
    for (delta_idx, delta) in CERT_DELTAS.iter().enumerate() {
        cum += hist.get(&delta_idx).copied().unwrap_or_default();
        print!("<={delta:.3}: {:.1}%  ", 100.0 * cum as f64 / total);
    }
    println!(">0.1: {:.1}%", 100.0 * uncertified as f64 / total);
}

fn dump_fuzzy_errors(dataset: &str, rows: &[GroundTruthRow], fuzzy_finder: &FuzzyFinder) {
    let mut wrong = 0usize;
    let mut empty = 0usize;
    let mut empty_by_gt = HashMap::<String, usize>::new();
    let mut empty_bbox = HashMap::<String, (f64, f64, f64, f64)>::new();

    println!("\n=== fuzzy detail {dataset} ===");
    for row in rows {
        let got = norm(fuzzy_finder.get_tz_name(row.lng, row.lat));
        if got.is_empty() {
            empty += 1;
            *empty_by_gt.entry(row.name.clone()).or_default() += 1;
            empty_bbox
                .entry(row.name.clone())
                .and_modify(|bbox| {
                    bbox.0 = bbox.0.min(row.lng);
                    bbox.1 = bbox.1.min(row.lat);
                    bbox.2 = bbox.2.max(row.lng);
                    bbox.3 = bbox.3.max(row.lat);
                })
                .or_insert((row.lng, row.lat, row.lng, row.lat));
        } else if got != row.name {
            wrong += 1;
            println!(
                "wrong,{dataset},{:.6},{:.6},{got},{}",
                row.lng, row.lat, row.name
            );
        }
    }
    let mut empty_counts = empty_by_gt.into_iter().collect::<Vec<_>>();
    empty_counts.sort_by(|left, right| right.1.cmp(&left.1).then_with(|| left.0.cmp(&right.0)));
    for (name, count) in empty_counts.into_iter().take(25) {
        let bbox = empty_bbox[&name];
        println!(
            "empty_top,{dataset},{count},{name},{:.3},{:.3},{:.3},{:.3}",
            bbox.0, bbox.1, bbox.2, bbox.3
        );
    }
    println!("fuzzy_detail_summary,{dataset},wrong={wrong},empty={empty}");
}

fn main() {
    let include_slow = std::env::args().any(|arg| arg == "--include-slow");
    let dump_fuzzy = std::env::args().any(|arg| arg == "--dump-fuzzy-errors");

    let default_finder = DefaultFinder::new();
    let finder = Finder::new();
    let fuzzy_finder = FuzzyFinder::new();

    println!("tzf-rs data version: {}", default_finder.data_version());

    let mut candidates = vec![
        Candidate {
            name: "tzf-rs DefaultFinder",
            fn_lookup: Box::new(|lng, lat| default_finder.get_tz_name(lng, lat).to_string()),
        },
        Candidate {
            name: "tzf-rs Finder",
            fn_lookup: Box::new(|lng, lat| finder.get_tz_name(lng, lat).to_string()),
        },
        Candidate {
            name: "tzf-rs FuzzyFinder",
            fn_lookup: Box::new(|lng, lat| fuzzy_finder.get_tz_name(lng, lat).to_string()),
        },
        Candidate {
            name: "tz-search",
            fn_lookup: Box::new(lookup_tz_search),
        },
        Candidate {
            name: "rtz OSM",
            fn_lookup: Box::new(lookup_rtz_osm),
        },
        Candidate {
            name: "rtz NED",
            fn_lookup: Box::new(lookup_rtz_ned),
        },
    ];

    if include_slow {
        let zone_detect_db = zone_detect::Database::open(first_existing(&[
            "data/timezone21.bin",
            "rust/data/timezone21.bin",
        ]))
        .expect("failed to open zone-detect database");
        let spatialtime_osm = OsmReader::new().expect("failed to create spatialtime OSM reader");
        let spatialtime_ned = NedReader::new().expect("failed to create spatialtime NED reader");

        candidates.extend([
            Candidate {
                name: "zone-detect",
                fn_lookup: Box::new(move |lng, lat| lookup_zone_detect(&zone_detect_db, lng, lat)),
            },
            Candidate {
                name: "spatialtime OSM",
                fn_lookup: Box::new(move |lng, lat| {
                    spatialtime_osm
                        .lookup(lng, lat)
                        .map(|response| response.tzid)
                        .unwrap_or_default()
                }),
            },
            Candidate {
                name: "spatialtime NED",
                fn_lookup: Box::new(move |lng, lat| {
                    spatialtime_ned
                        .lookup(lng, lat)
                        .ok()
                        .and_then(|response| response.tzid)
                        .unwrap_or_default()
                }),
            },
        ]);
    } else {
        println!(
            "slow candidates skipped; pass --include-slow to include zone-detect and spatialtime"
        );
    }

    let mut offset_cache = HashMap::<String, OffsetSignature>::new();
    for dataset in ["cities", "edges"] {
        let path = first_existing(&[
            &format!("../data/gt_{dataset}.csv"),
            &format!("data/gt_{dataset}.csv"),
        ]);
        let rows = load_ground_truth(&path);
        println!("\n=== dataset {dataset} (N={}) ===", rows.len());
        for candidate in &candidates {
            let wrong_idx = evaluate(
                candidate.name,
                &rows,
                &candidate.fn_lookup,
                &mut offset_cache,
            );
            if candidate.name == "tz-search" && !wrong_idx.is_empty() {
                certify_wrong_answers(&rows, &wrong_idx, &candidate.fn_lookup, &|lng, lat| {
                    finder.get_tz_name(lng, lat).to_string()
                });
            }
        }
        if dump_fuzzy {
            dump_fuzzy_errors(dataset, &rows, &fuzzy_finder);
        }
    }
}
