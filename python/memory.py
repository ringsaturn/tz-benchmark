"""Memory evaluation for each timezone-lookup library.

Each candidate runs in an isolated child process (the parent re-executes this
script with ``--candidate``) so imports do not share or accumulate RSS.

Initialization cost and runtime cost are not the same number
------------------------------------------------------------

Building a finder allocates far more memory than the finder ends up holding:
the dataset is decoded into an intermediate representation, the query
structures are built from it, and the intermediate is then garbage. So::

    live  <=  rss_load  <=  init_peak

``init_peak`` is what a container memory limit has to accommodate, or the
process is killed during startup even though its steady state would have fit.
``rss_load`` is usually much closer to ``init_peak`` than to ``live``, because
freeing memory does not shrink RSS -- the allocator keeps the pages mapped for
reuse rather than returning them to the kernel.

Unlike the Go and Rust probes, this one cannot report ``live``. Both candidates
keep their data outside the Python heap: tzfpy is a PyO3 wrapper whose Rust
allocations never reach Python's allocator, and timezonefinder holds numpy
arrays. ``tracemalloc`` would report a number close to zero for tzfpy, which is
worse than reporting nothing, so ``live`` is emitted as ``n/a`` and ``rss_load``
is the number to read here.

Reported columns (MiB):

  * baseline:   RSS of the bare interpreter, before the candidate is imported
  * init_peak:  ru_maxrss high-water mark right after import, construction and
    the first query -- the transient cost of initialization
  * live:       always ``n/a``; see above
  * rss_load:   RSS after import, construction, and the first query -- what the
    OS reports for a process ready to serve queries
  * rss_loop:   RSS after a warm query loop; compare against ``rss_load`` to see
    whether querying itself allocates
  * peak:       ru_maxrss high-water mark at the end of the run
  * delta:      rss_load - baseline, the cost attributable to the candidate

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
    # Read the high-water mark before anything is released: this is the peak
    # the process actually demanded from the OS in order to initialize.
    init_peak = peak_mib()
    rss_load = rss_mib()

    for _ in range(LOOP_ROUNDS):
        for lng, lat in POINTS:
            lookup(lng, lat)
    rss_loop = rss_mib()

    print(
        f"{label:<32} baseline={baseline:7.1f}  init_peak={init_peak:7.1f}  "
        f"live={'n/a':>7}  rss_load={rss_load:7.1f}  "
        f"rss_loop={rss_loop:7.1f}  peak={peak_mib():7.1f}  "
        f"delta={rss_load - baseline:7.1f}  (MiB)"
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
