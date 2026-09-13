//! Startup evaluation: how long each tzf-rs finder takes to become ready --
//! construct it and answer one query -- which bounds cold starts in
//! serverless, CLI, and test-suite settings.
//!
//! Each finder is built ROUNDS times in one process; the report gives the
//! best and median wall-clock time. Both finders are built from the bytes
//! bundled by `tzf-dist`, so the numbers are pure decode/validation cost with
//! no file I/O. The first build includes page-faulting the embedded bytes in
//! and is therefore usually the slowest; it is kept in the median but never
//! wins "best".
//!
//! Other crates in this harness (tz-search, rtz, spatialtime, zone-detect)
//! either initialize lazily behind a static or open a file; they have no
//! comparable constructor and are omitted.
//!
//! Usage: cargo run --release --example startup

use std::hint::black_box;
use std::time::{Duration, Instant};

use tzf_rs::{DefaultFinder, EmbeddedFinder};

const ROUNDS: usize = 7;

// Beijing: a tile pre-index hit, the path every real process warms up with.
const QUERY: (f64, f64) = (116.3883, 39.9289);

fn measure<F: Fn() -> Duration>(build: F) -> (Duration, Duration) {
    let mut samples: Vec<Duration> = (0..ROUNDS).map(|_| build()).collect();
    samples.sort();
    (samples[0], samples[ROUNDS / 2])
}

fn ms(d: Duration) -> f64 {
    d.as_secs_f64() * 1e3
}

fn main() {
    println!(
        "startup cost per finder (best/median of {ROUNDS} builds, construct + first query, ms)"
    );

    let (best, median) = measure(|| {
        let start = Instant::now();
        let f = DefaultFinder::new();
        black_box(f.get_tz_name(QUERY.0, QUERY.1));
        start.elapsed()
    });
    println!(
        "{:<38} open_best={:8.2}  open_median={:8.2}  (ms)",
        "DefaultFinder (lite .tzb, expanded)",
        ms(best),
        ms(median)
    );

    let (best, median) = measure(|| {
        let start = Instant::now();
        let f = EmbeddedFinder::new();
        black_box(f.get_tz_name(QUERY.0, QUERY.1));
        start.elapsed()
    });
    println!(
        "{:<38} open_best={:8.2}  open_median={:8.2}  (ms)",
        "EmbeddedFinder (lite .tzb, in place)",
        ms(best),
        ms(median)
    );
}
