use std::hint::black_box;
use std::thread;
use std::time::Duration;

use rtzlib::{CanPerformGeoLookup, OsmTimezone};
use tzf_rs::DefaultFinder;

const POINTS: &[(f64, f64)] = &[
    (-74.0060, 40.7128),
    (139.6917, 35.6895),
    (2.3522, 48.8566),
    (151.2093, -33.8688),
    (-58.3816, -34.6037),
    (37.6173, 55.7558),
    (31.2357, 30.0444),
    (18.4241, -33.9249),
];

fn run_tzf_default(iterations: usize) {
    let finder: DefaultFinder = DefaultFinder::new();
    for i in 0..iterations {
        let (lng, lat) = POINTS[i % POINTS.len()];
        black_box(finder.get_tz_name(lng, lat));
    }
}

fn run_rtz_osm(iterations: usize) {
    for i in 0..iterations {
        let (lng, lat) = POINTS[i % POINTS.len()];
        black_box(OsmTimezone::lookup(lng as f32, lat as f32));
    }
}

fn main() {
    let target = std::env::args().nth(1).unwrap_or_else(|| {
        eprintln!("usage: mem_probe <tzf-default|rtz-osm> [iterations]");
        std::process::exit(2);
    });
    let iterations = std::env::args()
        .nth(2)
        .and_then(|value| value.parse::<usize>().ok())
        .unwrap_or(5_000_000);

    match target.as_str() {
        "tzf-default" => run_tzf_default(iterations),
        "rtz-osm" => run_rtz_osm(iterations),
        _ => {
            eprintln!("unknown target: {target}");
            std::process::exit(2);
        }
    }

    eprintln!("ready pid={} target={target}", std::process::id());
    thread::sleep(Duration::from_secs(5));
}
