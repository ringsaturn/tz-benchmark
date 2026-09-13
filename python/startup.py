"""Startup evaluation for each Python timezone-lookup library.

Measures how long a fresh interpreter needs before it can answer its first
query: the cost of importing the package plus constructing the finder. For a
long-running service this is paid once; for CLI tools, notebooks, serverless
functions, and test suites it is paid on every process.

Each sample runs in a fresh child interpreter (the parent re-executes this
script with ``--candidate``) so nothing is cached between samples except the
OS page cache; the report gives the best and median over ROUNDS children.

Reported columns (ms):

  * import:     wall-clock time of the ``import`` statement
  * construct:  constructing the finder object. tzfpy has no object -- its
    global DefaultFinder is built lazily inside the first ``get_tz`` call, so
    this column is 0 and the cost lands in ``first_call``
  * first_call: the first query, including any lazy initialization
  * total:      import + construct + first_call

timezonefinder is constructed with ``in_memory=True``, the same configuration
used by the query benchmarks and memory probe in this repository.

Usage: uv run python startup.py
"""

import argparse
import os
import statistics
import subprocess
import sys
import time

ROUNDS = 7

# Beijing: a tile pre-index hit, the path every real process warms up with.
LNG, LAT = 116.3883, 39.9289

CANDIDATES = ["tzfpy", "timezonefinder"]


def run_child(key: str) -> None:
    t0 = time.perf_counter()
    if key == "tzfpy":
        import tzfpy

        t1 = time.perf_counter()
        t2 = t1
        tzfpy.get_tz(LNG, LAT)
        t3 = time.perf_counter()
        label = "tzfpy (DefaultFinder)"
    elif key == "timezonefinder":
        from timezonefinder import TimezoneFinder

        t1 = time.perf_counter()
        tf = TimezoneFinder(in_memory=True)
        t2 = time.perf_counter()
        tf.timezone_at(lng=LNG, lat=LAT)
        t3 = time.perf_counter()
        label = "timezonefinder"
    else:
        raise ValueError(f"unknown candidate: {key}")
    print(f"{label}\t{(t1 - t0) * 1e3:.3f}\t{(t2 - t1) * 1e3:.3f}\t{(t3 - t2) * 1e3:.3f}")


def sample(key: str) -> tuple[str, list[tuple[float, float, float]]]:
    label = ""
    rows = []
    for _ in range(ROUNDS):
        out = subprocess.check_output(
            [sys.executable, os.path.abspath(__file__), "--candidate", key],
            text=True,
        )
        label, imp, con, first = out.strip().split("\t")
        rows.append((float(imp), float(con), float(first)))
    return label, rows


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--candidate", choices=CANDIDATES)
    args = parser.parse_args()

    if args.candidate:
        run_child(args.candidate)
        return

    print(
        f"startup cost per candidate (fresh interpreter per sample, best/median of {ROUNDS}, ms)",
        flush=True,
    )
    for key in CANDIDATES:
        label, rows = sample(key)
        totals = [sum(r) for r in rows]
        best = rows[totals.index(min(totals))]
        med = tuple(statistics.median(col) for col in zip(*rows))
        print(
            f"{label:<32} import={best[0]:7.1f}  construct={best[1]:7.1f}  "
            f"first_call={best[2]:7.1f}  total_best={min(totals):7.1f}  "
            f"total_median={statistics.median(totals):7.1f}  "
            f"(median import={med[0]:.1f} construct={med[1]:.1f} first_call={med[2]:.1f})  (ms)"
        )


if __name__ == "__main__":
    main()
