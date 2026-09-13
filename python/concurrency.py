"""Concurrency evaluation for each Python timezone-lookup library.

Measures how query throughput scales when one shared finder is queried from
N Python threads at once. Each thread draws random world cities from its own
``random.Random`` instance and queries until a fixed wall-clock budget
expires; the report gives wall-clock microseconds per query across all
threads and the throughput ratio relative to one thread.

The expected answer for a CPython extension that holds the interpreter lock
for the duration of a call is "no scaling": threads take turns, and the
per-query cost stays flat or rises slightly with the switching overhead. A
library that releases the lock while it computes (or a free-threaded build)
would show the per-query cost falling as threads are added. Multi-process
deployment sidesteps the question at the cost of one finder per process; see
``memory.py`` for that cost.

timezonefinder is constructed with ``in_memory=True``, the same configuration
used by the query benchmarks and memory probe in this repository.

Usage: uv run python concurrency.py
"""

import os
import random
import sys
import threading
import time

import citiespy

BUDGET_S = 1.0
THREAD_COUNTS = [1, 2, 4, 8]


def run(fn, threads: int, cities) -> float:
    counts = [0] * threads
    deadline = time.perf_counter() + BUDGET_S

    def worker(t: int) -> None:
        rng = random.Random(t + 1)
        n = len(cities)
        ops = 0
        while time.perf_counter() < deadline:
            for _ in range(64):
                c = cities[rng.randrange(n)]
                fn(c.lng, c.lat)
            ops += 64
        counts[t] = ops

    start = time.perf_counter()
    ts = [threading.Thread(target=worker, args=(t,)) for t in range(threads)]
    for th in ts:
        th.start()
    for th in ts:
        th.join()
    elapsed = time.perf_counter() - start
    return elapsed * 1e6 / sum(counts)


def main() -> None:
    import tzfpy
    from timezonefinder import TimezoneFinder

    tf = TimezoneFinder(in_memory=True)
    cities = citiespy.all_cities()
    candidates = [
        ("tzfpy (DefaultFinder)", tzfpy.get_tz),
        ("timezonefinder", lambda lng, lat: tf.timezone_at(lng=lng, lat=lat)),
    ]
    gil = "free-threaded" if not getattr(sys, "_is_gil_enabled", lambda: True)() else "GIL enabled"
    print(
        f"throughput scaling per candidate (shared instance, random world cities, "
        f"{BUDGET_S:.0f} s budget per row, wall us per query; {gil}, cpu_count={os.cpu_count()})",
        flush=True,
    )
    for label, fn in candidates:
        base = 0.0
        for n in THREAD_COUNTS:
            us = run(fn, n, cities)
            if n == 1:
                base = us
            print(
                f"{label:<24} threads={n:2}  us_per_op={us:9.3f}  ops_per_s={1e6 / us:12.0f}  scaling={base / us:6.2f}x",
                flush=True,
            )


if __name__ == "__main__":
    main()
