//! Memory evaluation: measures the steady-state resident memory footprint of
//! each timezone-lookup crate.
//!
//! Each candidate runs in an isolated child process (the parent re-executes
//! itself with the candidate key) so lazily-initialized statics do not share
//! or accumulate RSS. Reported columns (MiB):
//!
//!   - baseline:  RSS before the candidate is constructed
//!   - post_load: RSS after construction plus the first query, the
//!     steady-state footprint of a process ready to serve queries
//!   - post_loop: RSS after a warm query loop
//!   - peak:      ru_maxrss high-water mark
//!   - delta:     post_load - baseline
//!
//! Usage: cargo run --release --example memory

use std::hint::black_box;
use std::path::PathBuf;
use std::process::Command;

use rtzlib::{CanPerformGeoLookup, NedTimezone, OsmTimezone};
use spatialtime::{ned::NedReader, osm::OsmReader};
use tzf_rs::{DefaultFinder, Finder, FuzzyFinder};

const POINTS: &[(f64, f64)] = &[
    (116.3833, 39.9167),  // Beijing
    (-73.9857, 40.7484),  // New York
    (2.3522, 48.8566),    // Paris
    (151.2093, -33.8688), // Sydney
    (139.6917, 35.6895),  // Tokyo
    (-0.1276, 51.5072),   // London
    (37.6173, 55.7558),   // Moscow
    (-58.3816, -34.6037), // Buenos Aires
];

// (key, warm-loop queries); slow candidates get shorter loops.
const CANDIDATES: &[(&str, usize)] = &[
    ("noop", 80_000),
    ("tzf-default", 80_000),
    ("tzf-finder", 80_000),
    ("tzf-fuzzy", 80_000),
    ("tz-search", 80_000),
    ("rtz-osm", 80_000),
    ("rtz-ned", 80_000),
    ("zone-detect", 2_000),
    ("spatialtime-osm", 500),
    ("spatialtime-ned", 2_000),
];

fn rss_mib() -> f64 {
    let out = Command::new("ps")
        .args(["-o", "rss=", "-p", &std::process::id().to_string()])
        .output()
        .expect("failed to run ps");
    let kib = String::from_utf8_lossy(&out.stdout)
        .trim()
        .parse::<f64>()
        .expect("failed to parse ps output");
    kib / 1024.0
}

fn peak_mib() -> f64 {
    let mut usage = std::mem::MaybeUninit::<libc::rusage>::zeroed();
    let maxrss = unsafe {
        libc::getrusage(libc::RUSAGE_SELF, usage.as_mut_ptr());
        usage.assume_init().ru_maxrss as f64
    };
    // ru_maxrss is bytes on macOS, KiB on Linux.
    if cfg!(target_os = "macos") {
        maxrss / (1024.0 * 1024.0)
    } else {
        maxrss / 1024.0
    }
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

fn measure(
    label: &str,
    iterations: usize,
    build: impl FnOnce() -> Box<dyn Fn(f64, f64) -> String>,
) {
    let baseline = rss_mib();

    let lookup = build();
    black_box(lookup(POINTS[0].0, POINTS[0].1));
    let post_load = rss_mib();

    for i in 0..iterations {
        let (lng, lat) = POINTS[i % POINTS.len()];
        black_box(lookup(lng, lat));
    }
    let post_loop = rss_mib();

    println!(
        "{label:<32} baseline={baseline:7.1}  post_load={post_load:7.1}  post_loop={post_loop:7.1}  peak={:7.1}  delta={:7.1}  (MiB)",
        peak_mib(),
        post_load - baseline
    );
}

fn run_child(key: &str, iterations: usize) {
    match key {
        "noop" => measure("(rust runtime floor)", iterations, || {
            Box::new(|_, _| String::new())
        }),
        "tzf-default" => measure("tzf-rs DefaultFinder", iterations, || {
            let finder = DefaultFinder::new();
            Box::new(move |lng, lat| finder.get_tz_name(lng, lat).to_string())
        }),
        "tzf-finder" => measure("tzf-rs Finder", iterations, || {
            let finder = Finder::new();
            Box::new(move |lng, lat| finder.get_tz_name(lng, lat).to_string())
        }),
        "tzf-fuzzy" => measure("tzf-rs FuzzyFinder", iterations, || {
            let finder = FuzzyFinder::new();
            Box::new(move |lng, lat| finder.get_tz_name(lng, lat).to_string())
        }),
        "tz-search" => measure("tz-search", iterations, || {
            Box::new(|lng, lat| tz_search::lookup(lat, lng).unwrap_or_default())
        }),
        "rtz-osm" => measure("rtz OSM", iterations, || {
            Box::new(|lng, lat| {
                OsmTimezone::lookup(lng as f32, lat as f32)
                    .first()
                    .map(|zone| zone.identifier.to_string())
                    .unwrap_or_default()
            })
        }),
        "rtz-ned" => measure("rtz NED", iterations, || {
            Box::new(|lng, lat| {
                NedTimezone::lookup(lng as f32, lat as f32)
                    .first()
                    .and_then(|zone| zone.identifier.as_ref())
                    .map(ToString::to_string)
                    .unwrap_or_default()
            })
        }),
        "zone-detect" => measure("zone-detect", iterations, || {
            let database = zone_detect::Database::open(first_existing(&[
                "data/timezone21.bin",
                "rust/data/timezone21.bin",
            ]))
            .expect("failed to open zone-detect database");
            Box::new(move |lng, lat| {
                database
                    .simple_lookup(zone_detect::Location {
                        latitude: lat as f32,
                        longitude: lng as f32,
                    })
                    .unwrap_or_default()
            })
        }),
        "spatialtime-osm" => measure("spatialtime OSM", iterations, || {
            let reader = OsmReader::new().expect("failed to create spatialtime OSM reader");
            Box::new(move |lng, lat| {
                reader
                    .lookup(lng, lat)
                    .map(|response| response.tzid)
                    .unwrap_or_default()
            })
        }),
        "spatialtime-ned" => measure("spatialtime NED", iterations, || {
            let reader = NedReader::new().expect("failed to create spatialtime NED reader");
            Box::new(move |lng, lat| {
                reader
                    .lookup(lng, lat)
                    .ok()
                    .and_then(|response| response.tzid)
                    .unwrap_or_default()
            })
        }),
        _ => panic!("unknown candidate: {key}"),
    }
}

fn main() {
    if let Some(key) = std::env::args().nth(1) {
        let iterations = CANDIDATES
            .iter()
            .find_map(|(name, iterations)| (*name == key).then_some(*iterations))
            .unwrap_or_else(|| panic!("unknown candidate: {key}"));
        run_child(&key, iterations);
        return;
    }

    let exe = std::env::current_exe().expect("failed to resolve current executable");
    println!("memory footprint per candidate (isolated child process, RSS in MiB)");
    for (key, _) in CANDIDATES {
        let status = Command::new(&exe)
            .arg(key)
            .status()
            .expect("failed to spawn child");
        assert!(status.success(), "candidate {key} failed");
    }
}
