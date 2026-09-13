//! Concurrency evaluation: how query throughput scales when one shared
//! finder is queried from N threads at once.
//!
//! For each thread count, N scoped threads each draw random world cities
//! (own xorshift PRNG, no shared counter) and query the shared candidate
//! until a fixed wall-clock budget expires. The reported number is wall-clock
//! nanoseconds per query across all threads (budget / total queries), so a
//! candidate that scales perfectly halves it every time the thread count
//! doubles. "scaling" is the throughput ratio relative to one thread.
//!
//! A candidate whose per-query cost stays flat as threads grow serializes
//! its queries on shared state; one that scales sub-linearly past the
//! performance-core count is limited by the machine, not the crate.
//!
//! zone-detect and spatialtime are omitted: the former's database handle is
//! not shareable across threads and the latter's per-query cost (hundreds of
//! microseconds to milliseconds) makes the fixed budget too coarse.
//!
//! Usage: cargo run --release --example concurrency

use std::hint::black_box;
use std::time::{Duration, Instant};

use cities_json::CITIES;
use rtzlib::{CanPerformGeoLookup, NedTimezone, OsmTimezone};
use tzf_rs::{DefaultFinder, EmbeddedFinder};

const BUDGET: Duration = Duration::from_secs(1);

fn thread_counts() -> Vec<usize> {
    let max = std::thread::available_parallelism()
        .map(|n| n.get())
        .unwrap_or(1);
    let mut out: Vec<usize> = [1usize, 2, 4, 8, 12, 16, 24, 32, 48, 64]
        .into_iter()
        .filter(|&n| n < max)
        .collect();
    out.push(max);
    out
}

fn run<F: Fn(f64, f64) -> usize + Sync>(f: &F, threads: usize, cities: &[(f64, f64)]) -> f64 {
    let deadline = Instant::now() + BUDGET;
    let start = Instant::now();
    let total: u64 = std::thread::scope(|s| {
        let handles: Vec<_> = (0..threads)
            .map(|t| {
                s.spawn(move || {
                    let mut x: u64 = 0x9E37_79B9_7F4A_7C15 ^ (t as u64 + 1);
                    let n = cities.len() as u64;
                    let mut ops: u64 = 0;
                    let mut acc = 0usize;
                    while Instant::now() < deadline {
                        for _ in 0..256 {
                            x ^= x << 13;
                            x ^= x >> 7;
                            x ^= x << 17;
                            let c = cities[(x % n) as usize];
                            acc += f(c.0, c.1);
                        }
                        ops += 256;
                    }
                    black_box(acc);
                    ops
                })
            })
            .collect();
        handles.into_iter().map(|h| h.join().unwrap()).sum()
    });
    start.elapsed().as_nanos() as f64 / total as f64
}

fn report<F: Fn(f64, f64) -> usize + Sync>(label: &str, f: F, cities: &[(f64, f64)]) {
    let mut base = 0.0;
    for n in thread_counts() {
        let ns = run(&f, n, cities);
        if n == 1 {
            base = ns;
        }
        println!(
            "{label:<20} threads={n:2}  ns_per_op={ns:10.1}  ops_per_s={:12.0}  scaling={:6.2}x",
            1e9 / ns,
            base / ns
        );
    }
}

fn main() {
    let cities: Vec<(f64, f64)> = CITIES.iter().map(|c| (c.lng, c.lat)).collect();
    let default_finder = DefaultFinder::new();
    let embedded_finder = EmbeddedFinder::new();
    // Warm the lazily-initialized statics of the other crates outside the
    // timed region so their first-call cost does not land on one thread.
    black_box(tz_search::lookup(39.9289, 116.3883));
    black_box(OsmTimezone::lookup(116.3883, 39.9289));
    black_box(NedTimezone::lookup(116.3883, 39.9289));

    println!(
        "throughput scaling per candidate (shared instance, random world cities, {:?} budget per row, wall ns per query; available_parallelism={})",
        BUDGET,
        std::thread::available_parallelism().map(|n| n.get()).unwrap_or(1)
    );
    report("tzf-rs DefaultFinder", |lng, lat| default_finder.get_tz_name(lng, lat).len(), &cities);
    report("tzf-rs EmbeddedFinder", |lng, lat| embedded_finder.get_tz_name(lng, lat).len(), &cities);
    report("tz-search", |lng, lat| tz_search::lookup(lat, lng).map(|s| s.len()).unwrap_or(0), &cities);
    report("rtz (OSM)", |lng, lat| OsmTimezone::lookup(lng as f32, lat as f32).len(), &cities);
    report("rtz (NED)", |lng, lat| NedTimezone::lookup(lng as f32, lat as f32).len(), &cities);
}
