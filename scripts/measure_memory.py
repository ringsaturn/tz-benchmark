"""Measure the resident memory footprint of tzfpy's default finder.

tzfpy is a PyO3 wrapper over tzf-rs; ``get_tz`` lazily constructs the
DefaultFinder (lite topology data + tile pre-index + YStripes) on the first
call. We report:

  * baseline RSS   -- Python interpreter before importing tzfpy
  * post-import    -- after ``import tzfpy`` (module + embedded data bytes)
  * init peak      -- ru_maxrss high-water mark right after the first query has
    built the finder, before the warm loop
  * post-load      -- RSS after the first query builds the finder
  * peak RSS       -- ru_maxrss high-water mark after a warm query loop

Initialization cost and runtime cost are not the same number. Building the
finder decodes the embedded dataset into an intermediate representation, builds
the query structures from it, and drops the intermediate -- so the peak reached
during construction is well above what the finder ends up holding. Freeing that
intermediate does not shrink RSS either: the allocator keeps the pages mapped
for reuse rather than returning them to the kernel. Post-load RSS therefore
tracks the initialization peak much more closely than it tracks the retained
data, and "init peak" is the number a container memory limit has to
accommodate.

Note this script cannot report the retained size: tzfpy's data lives in Rust
allocations that never reach Python's allocator, so ``tracemalloc`` would report
close to zero. For that number use the counting-allocator probe on the Rust
side (``rust/examples/memory.rs`` in this repo, or tzf-rs's
``examples/index_memory_probe_alloc.rs``).
"""

import os
import resource
import subprocess
import sys


def current_rss_mb() -> float:
    """Current resident set size in MiB, via ps (portable on macOS/Linux)."""
    out = subprocess.check_output(
        ["ps", "-o", "rss=", "-p", str(os.getpid())]
    )
    return int(out.strip()) / 1024.0  # ps reports KiB


def peak_rss_mb() -> float:
    """Peak resident set size in MiB. ru_maxrss is bytes on macOS, KiB on Linux."""
    maxrss = resource.getrusage(resource.RUSAGE_SELF).ru_maxrss
    if sys.platform == "darwin":
        return maxrss / (1024.0 * 1024.0)
    return maxrss / 1024.0


def main() -> None:
    baseline = current_rss_mb()

    import tzfpy  # noqa: E402

    post_import = current_rss_mb()

    # First query forces the DefaultFinder to be constructed from embedded data.
    tzfpy.get_tz(116.3833, 39.9167)  # Beijing
    # High-water mark from construction alone, before the warm loop runs.
    init_peak = peak_rss_mb()
    post_load = current_rss_mb()

    # Warm loop over a spread of coordinates to reach steady state / peak.
    coords = [
        (116.3833, 39.9167),   # Beijing
        (-73.9857, 40.7484),   # New York
        (2.3522, 48.8566),     # Paris
        (151.2093, -33.8688),  # Sydney
        (139.6917, 35.6895),   # Tokyo
        (-0.1276, 51.5072),    # London
        (37.6173, 55.7558),    # Moscow
        (-58.3816, -34.6037),  # Buenos Aires
    ]
    for _ in range(50000):
        for lng, lat in coords:
            tzfpy.get_tz(lng, lat)

    post_loop = current_rss_mb()
    peak = peak_rss_mb()

    print(f"tzfpy version         : {tzfpy.data_version()}")
    print(f"Python                : {sys.version.split()[0]}  ({sys.platform}/{os.uname().machine})")
    print(f"baseline RSS (MiB)    : {baseline:8.1f}")
    print(f"post-import RSS (MiB) : {post_import:8.1f}")
    print(f"init peak RSS (MiB)   : {init_peak:8.1f}  (cost of building the finder)")
    print(f"post-load RSS (MiB)   : {post_load:8.1f}")
    print(f"post-loop RSS (MiB)   : {post_loop:8.1f}")
    print(f"peak RSS (MiB)        : {peak:8.1f}")
    print(f"finder delta (MiB)    : {post_load - baseline:8.1f}  (post-load - baseline)")


if __name__ == "__main__":
    main()
