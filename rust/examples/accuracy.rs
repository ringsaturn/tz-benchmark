use std::collections::{HashMap, HashSet};
use std::path::{Path, PathBuf};

use rtzlib::{CanPerformGeoLookup, NedTimezone, OsmTimezone};
use serde::Deserialize;
use spatialtime::{ned::NedReader, osm::OsmReader};
use tzf_rs::{DefaultFinder, Finder, FuzzyFinder};

#[derive(Clone, Debug, Deserialize)]
struct GroundTruthRow {
    lng: f64,
    lat: f64,
    name: String,
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
        .deserialize::<GroundTruthRow>()
        .map(|row| {
            let mut row =
                row.unwrap_or_else(|err| panic!("failed to parse {}: {err}", path.display()));
            row.name = norm(&row.name);
            row
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

fn evaluate(label: &str, rows: &[GroundTruthRow], lookup: &dyn Fn(f64, f64) -> String) {
    let mut wrong = 0usize;
    let mut empty = 0usize;
    let mut wrong_pairs = HashSet::<(String, String)>::new();

    for row in rows {
        let got = norm(&lookup(row.lng, row.lat));
        if got.is_empty() {
            empty += 1;
        } else if got != row.name {
            wrong += 1;
            if wrong_pairs.len() < 20 {
                wrong_pairs.insert((got, row.name.clone()));
            }
        }
    }

    let n = rows.len() as f64;
    println!(
        "{label:<32} wrong={wrong:6} ({:8.4}%)  empty={empty:6} ({:8.4}%)",
        100.0 * wrong as f64 / n,
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

    for dataset in ["cities", "edges"] {
        let path = first_existing(&[
            &format!("../data/gt_{dataset}.csv"),
            &format!("data/gt_{dataset}.csv"),
        ]);
        let rows = load_ground_truth(&path);
        println!("\n=== dataset {dataset} (N={}) ===", rows.len());
        for candidate in &candidates {
            evaluate(candidate.name, &rows, &candidate.fn_lookup);
        }
        if dump_fuzzy {
            dump_fuzzy_errors(dataset, &rows, &fuzzy_finder);
        }
    }
}
