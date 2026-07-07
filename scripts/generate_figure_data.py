#!/usr/bin/env python3
"""Generate benchmark figure data."""

from __future__ import annotations

import argparse
import csv
import gc
import random
import re
import statistics
import time
from collections.abc import Callable
from dataclasses import dataclass
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_GO_SNAPSHOT = REPO_ROOT / "snapshot/2026-05-04-0b7659e1957245fcddd79b4dd9224fee82b3b0ea"
DEFAULT_RUST_SNAPSHOT = REPO_ROOT / "snapshot/2026-05-04-0b7659e1957245fcddd79b4dd9224fee82b3b0ea"
DEFAULT_OUTPUT_DIR = REPO_ROOT / "figures"
DEFAULT_SEED = 20260707
DEFAULT_PYTHON_SAMPLES = 20_000
DEFAULT_PYTHON_WARMUP = 1_000
PERCENTILES = [0, 1, 5, 10, 25, 50, 75, 90, 95, 99, 99.5, 99.9, 100]
RUST_BENCH_RE = re.compile(
    r"^test\s+(.+?)\s+\.\.\.\s+bench:\s+([0-9,.]+)\s+ns/iter\s+\(\+/-\s+([0-9,.]+)\)"
)
GO_BENCH_RE = re.compile(r"^(Benchmark\S+)\s+\d+\s+([0-9,.]+)\s+ns/op")


@dataclass(frozen=True)
class SeriesSummary:
    name: str
    n: int
    mean_us: float
    median_us: float
    max_us: float


RUST_SERIES = [
    ("tz-search", "tz_search_lookup_random_city", "tz_search_lookup_random_edge_city"),
    ("tzf-rs Fuzzy", "tzf_fuzzy_finder_random_city", "tzf_fuzzy_finder_random_edge_city"),
    ("tzf-rs Default", "tzf_default_finder_random_city", "tzf_default_finder_random_edge_city"),
    ("rtz NED", "rtz_get_timezone_ned_random_city", "rtz_get_timezone_ned_random_edge_city"),
    ("rtz OSM", "rtz_get_timezone_osm_random_city", "rtz_get_timezone_osm_random_edge_city"),
    ("tzf-rs Finder NoIndex", "tzf_finder_random_city", "tzf_finder_random_edge_city"),
    ("spatialtime NED", "spatialtime_ned", "spatialtime_ned_random_edge_city"),
    ("zone detect", "zone_detect_random_city", "zone_detect_random_edge_city"),
    ("spatialtime OSM", "spatialtime_osm", "spatialtime_osm_random_edge_city"),
]

GO_SERIES = [
    ("timezonemapper", "TimezoneMapper_Random_WorldCities", "TimezoneMapper_Random_EdgeCities"),
    ("latlong", "Latlong_Random_WorldCities", "Latlong_Random_EdgeCities"),
    ("tzf Default", "TZF_Default_Random_WorldCities", "TZF_Default_Random_EdgeCities"),
    ("localtimezone", "Localtimezone_Random_WorldCities", "Localtimezone_Random_EdgeCities"),
    ("go-tz", "GoTZ_Random_WorldCities", "GoTZ_Random_EdgeCities"),
]


def write_tsv(path: Path, header: list[str], rows: list[list[object]]) -> None:
    with path.open("w", newline="") as f:
        writer = csv.writer(f, delimiter="\t", lineterminator="\n")
        writer.writerow(header)
        writer.writerows(rows)


def parse_rust_benchmarks(snapshot_dir: Path) -> dict[str, float]:
    path = snapshot_dir / "benchmark_result_rust.txt"
    if not path.is_file():
        raise FileNotFoundError(f"Rust benchmark output not found: {path}")

    values: dict[str, float] = {}
    for line in path.read_text().splitlines():
        match = RUST_BENCH_RE.match(line)
        if not match:
            continue
        name = match.group(1).removeprefix("benches_tz_crates::bench_")
        ns_iter = float(match.group(2).replace(",", ""))
        values[name] = ns_iter
    return values


def parse_go_benchmarks(snapshot_dir: Path) -> dict[str, float]:
    path = snapshot_dir / "benchmark_result_go.txt"
    if not path.is_file():
        raise FileNotFoundError(f"Go benchmark output not found: {path}")

    values: dict[str, float] = {}
    for line in path.read_text().splitlines():
        match = GO_BENCH_RE.match(line)
        if not match:
            continue
        name = re.sub(r"-\d+$", "", match.group(1)).removeprefix("Benchmark")
        ns_op = float(match.group(2).replace(",", ""))
        values[name] = ns_op
    return values


def generate_go_log_bars(snapshot_dir: Path, output_dir: Path) -> None:
    values = parse_go_benchmarks(snapshot_dir)
    rows: list[list[object]] = []
    missing: list[str] = []
    for label, random_key, edge_key in GO_SERIES:
        if random_key not in values:
            missing.append(random_key)
        if edge_key not in values:
            missing.append(edge_key)
        if random_key in values and edge_key in values:
            rows.append([label, int(values[random_key] + 0.5), int(values[edge_key] + 0.5)])

    if missing:
        raise KeyError("Missing Go benchmark rows: " + ", ".join(sorted(missing)))

    write_tsv(output_dir / "go_log_bars.tsv", ["label", "random_ns", "edge_ns"], rows)


def generate_rust_log_bars(snapshot_dir: Path, output_dir: Path) -> None:
    values = parse_rust_benchmarks(snapshot_dir)
    rows: list[list[object]] = []
    missing: list[str] = []
    for label, random_key, edge_key in RUST_SERIES:
        if random_key not in values:
            missing.append(random_key)
        if edge_key not in values:
            missing.append(edge_key)
        if random_key in values and edge_key in values:
            rows.append([label, int(values[random_key] + 0.5), int(values[edge_key] + 0.5)])

    if missing:
        raise KeyError("Missing Rust benchmark rows: " + ", ".join(sorted(missing)))

    write_tsv(output_dir / "rust_log_bars.tsv", ["label", "random_ns", "edge_ns"], rows)


def load_points(path: Path) -> list[tuple[float, float]]:
    points: list[tuple[float, float]] = []
    with path.open() as f:
        for row in csv.reader(f):
            if len(row) >= 2:
                points.append((float(row[0]), float(row[1])))
    if not points:
        raise ValueError(f"No coordinate rows found in {path}")
    return points


def percentile_rows(values_ns: list[int]) -> list[list[object]]:
    values = sorted(values_ns)
    rows: list[list[object]] = []
    for percentile in PERCENTILES:
        if percentile == 100:
            value_ns = values[-1]
        else:
            index = int((percentile / 100) * (len(values) - 1))
            value_ns = values[index]
        rows.append([f"{value_ns / 1000:.3f}", f"{percentile:g}"])
    return rows


def measure_latency_cdf(
    name: str,
    points: list[tuple[float, float]],
    query: Callable[[float, float], object],
    seed: int,
    samples: int,
    warmup: int,
) -> tuple[list[list[object]], SeriesSummary]:
    rng = random.Random(seed)
    for _ in range(warmup):
        lng, lat = points[rng.randrange(len(points))]
        query(lng, lat)

    rng = random.Random(seed)
    gc_was_enabled = gc.isenabled()
    gc.disable()
    values_ns: list[int] = []
    try:
        for _ in range(samples):
            start = time.perf_counter_ns()
            lng, lat = points[rng.randrange(len(points))]
            query(lng, lat)
            values_ns.append(time.perf_counter_ns() - start)
    finally:
        if gc_was_enabled:
            gc.enable()

    summary = SeriesSummary(
        name=name,
        n=len(values_ns),
        mean_us=statistics.mean(values_ns) / 1000,
        median_us=statistics.median(values_ns) / 1000,
        max_us=max(values_ns) / 1000,
    )
    return percentile_rows(values_ns), summary


def generate_python_latency_cdf(output_dir: Path, samples: int, warmup: int, seed: int) -> list[SeriesSummary]:
    from timezonefinder import TimezoneFinder
    from tzfpy import get_tz

    cities = load_points(REPO_ROOT / "data/gt_cities.csv")
    edges = load_points(REPO_ROOT / "data/gt_edges.csv")
    tf = TimezoneFinder(in_memory=True)

    get_tz(cities[0][0], cities[0][1])
    tf.timezone_at(lng=cities[0][0], lat=cities[0][1])

    series = [
        (
            "tzfpy_random",
            cities,
            lambda lng, lat: get_tz(lng, lat),
            seed,
        ),
        (
            "timezonefinder_random",
            cities,
            lambda lng, lat: tf.timezone_at(lng=lng, lat=lat),
            seed,
        ),
        (
            "tzfpy_edge",
            edges,
            lambda lng, lat: get_tz(lng, lat),
            seed + 1,
        ),
        (
            "timezonefinder_edge",
            edges,
            lambda lng, lat: tf.timezone_at(lng=lng, lat=lat),
            seed + 1,
        ),
    ]

    summaries: list[SeriesSummary] = []
    for name, points, query, series_seed in series:
        rows, summary = measure_latency_cdf(name, points, query, series_seed, samples, warmup)
        write_tsv(output_dir / f"python_latency_cdf_{name}.tsv", ["lat_us", "pct"], rows)
        summaries.append(summary)

    write_tsv(
        output_dir / "python_latency_cdf_summary.tsv",
        ["series", "n", "mean_us", "median_us", "max_us"],
        [
            [item.name, item.n, f"{item.mean_us:.3f}", f"{item.median_us:.3f}", f"{item.max_us:.3f}"]
            for item in summaries
        ],
    )
    return summaries


def write_readme(
    output_dir: Path,
    go_snapshot: Path,
    rust_snapshot: Path,
    samples: int,
    warmup: int,
    seed: int,
    include_python: bool,
) -> None:
    lines = [
        "# Figure Data",
        "",
        "This directory contains generated data files for benchmark figures.",
        "",
        "Regenerate from the repository root with:",
        "",
        "```sh",
        "cd python",
        "uv run python ../scripts/generate_figure_data.py",
        "```",
        "",
        "Files:",
        "",
        "- `rust_log_bars.tsv`: Rust cross-library log-scale bar chart data.",
        "- `go_log_bars.tsv`: Go cross-library log-scale bar chart data.",
    ]
    if include_python:
        lines.extend(
            [
                "- `python_latency_cdf_tzfpy_random.tsv`: tzfpy random-city CDF points.",
                "- `python_latency_cdf_timezonefinder_random.tsv`: timezonefinder random-city CDF points.",
                "- `python_latency_cdf_tzfpy_edge.tsv`: tzfpy edge-city CDF points.",
                "- `python_latency_cdf_timezonefinder_edge.tsv`: timezonefinder edge-city CDF points.",
                "- `python_latency_cdf_summary.tsv`: summary statistics for the CDF sampling run.",
            ]
        )
    lines.extend(
        [
            "",
            "Parameters:",
            "",
            f"- Go snapshot: `{go_snapshot.relative_to(REPO_ROOT)}`",
            f"- Rust snapshot: `{rust_snapshot.relative_to(REPO_ROOT)}`",
            f"- Python samples per series: `{samples}`",
            f"- Python warmup queries per series: `{warmup}`",
            f"- Python random seed: `{seed}`",
            "",
            "The Python CDF sampler measures coordinate selection plus lookup time.",
        ]
    )
    (output_dir / "README.md").write_text("\n".join(lines) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT_DIR)
    parser.add_argument("--go-snapshot", type=Path, default=DEFAULT_GO_SNAPSHOT)
    parser.add_argument("--rust-snapshot", type=Path, default=DEFAULT_RUST_SNAPSHOT)
    parser.add_argument("--python-samples", type=int, default=DEFAULT_PYTHON_SAMPLES)
    parser.add_argument("--python-warmup", type=int, default=DEFAULT_PYTHON_WARMUP)
    parser.add_argument("--seed", type=int, default=DEFAULT_SEED)
    parser.add_argument("--skip-python", action="store_true", help="Only generate Go and Rust figure data.")
    args = parser.parse_args()

    output_dir = args.output_dir
    if not output_dir.is_absolute():
        output_dir = REPO_ROOT / output_dir
    rust_snapshot = args.rust_snapshot
    if not rust_snapshot.is_absolute():
        rust_snapshot = REPO_ROOT / rust_snapshot
    go_snapshot = args.go_snapshot
    if not go_snapshot.is_absolute():
        go_snapshot = REPO_ROOT / go_snapshot

    output_dir.mkdir(parents=True, exist_ok=True)
    generate_go_log_bars(go_snapshot, output_dir)
    generate_rust_log_bars(rust_snapshot, output_dir)
    if not args.skip_python:
        generate_python_latency_cdf(output_dir, args.python_samples, args.python_warmup, args.seed)
    write_readme(
        output_dir=output_dir,
        go_snapshot=go_snapshot,
        rust_snapshot=rust_snapshot,
        samples=args.python_samples,
        warmup=args.python_warmup,
        seed=args.seed,
        include_python=(not args.skip_python) or (output_dir / "python_latency_cdf_summary.tsv").is_file(),
    )
    print(f"generated figure data in {output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
