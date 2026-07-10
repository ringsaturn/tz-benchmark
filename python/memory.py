"""Memory evaluation: measures the steady-state resident memory footprint of
each timezone-lookup library.

Each candidate runs in an isolated child process (the parent re-executes this
script with ``--candidate``) so imports do not share or accumulate RSS.
Reported columns (MiB):

  * baseline:  RSS of the bare interpreter, before the candidate is imported
  * post_load: RSS after import, construction, and the first query -- the
    steady-state footprint of a process ready to serve queries
  * post_loop: RSS after a warm query loop
  * peak:      ru_maxrss high-water mark
  * delta:     post_load - baseline, the cost attributable to the candidate

Usage: uv run python memory.py
"""

import argparse
import os
import resource
import subprocess
import sys

POINTS = [
    (116.3833, 39.9167),  # Beijing
    (-73.9857, 40.7484),  # New York
    (2.3522, 48.8566),  # Paris
    (151.2093, -33.8688),  # Sydney
    (139.6917, 35.6895),  # Tokyo
    (-0.1276, 51.5072),  # London
    (37.6173, 55.7558),  # Moscow
    (-58.3816, -34.6037),  # Buenos Aires
]

LOOP_ROUNDS = 10000  # x len(POINTS) queries

CANDIDATES = ["noop", "timezonefinder", "tzfpy"]


def rss_mib() -> float:
    """Current resident set size in MiB, via ps (portable on macOS/Linux)."""
    out = subprocess.check_output(["ps", "-o", "rss=", "-p", str(os.getpid())])
    return int(out.strip()) / 1024.0  # ps reports KiB


def peak_mib() -> float:
    """Peak resident set size in MiB. ru_maxrss is bytes on macOS, KiB on Linux."""
    maxrss = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss
    if sys.platform == "darwin":
        return maxrss / (1024.0 * 1024.0)
    return maxrss / 1024.0


def build(key):
    if key == "noop":
        return "(python interpreter floor)", lambda lng, lat: ""
    if key == "timezonefinder":
        import timezonefinder

        tf = timezonefinder.TimezoneFinder(in_memory=True)
        return "timezonefinder", lambda lng, lat: tf.timezone_at(lng=lng, lat=lat)
    if key == "tzfpy":
        import tzfpy

        return "tzfpy (DefaultFinder)", tzfpy.get_tz
    raise ValueError(f"unknown candidate: {key}")


def run_child(key: str) -> None:
    baseline = rss_mib()

    label, lookup = build(key)
    lookup(*POINTS[0])
    post_load = rss_mib()

    for _ in range(LOOP_ROUNDS):
        for lng, lat in POINTS:
            lookup(lng, lat)
    post_loop = rss_mib()

    print(
        f"{label:<32} baseline={baseline:7.1f}  post_load={post_load:7.1f}  "
        f"post_loop={post_loop:7.1f}  peak={peak_mib():7.1f}  "
        f"delta={post_load - baseline:7.1f}  (MiB)"
    )


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--candidate", choices=CANDIDATES)
    args = parser.parse_args()

    if args.candidate:
        run_child(args.candidate)
        return

    print(
        "memory footprint per candidate (isolated child process, RSS in MiB)",
        flush=True,
    )
    for key in CANDIDATES:
        subprocess.run(
            [sys.executable, os.path.abspath(__file__), "--candidate", key],
            check=True,
        )


if __name__ == "__main__":
    main()
