# Benchmark Snapshot 2026-09-14-b5387c237c1c7be07d2ac510c4e16878b83b29b3

This file summarizes the raw benchmark outputs in this directory as Markdown tables.

Raw sources:

- `benchmark_result_go.txt`
- `benchmark_result_python.txt`
- `benchmark_result_rust.txt`
- `accuracy_result_go.txt`
- `accuracy_result_python.txt`
- `accuracy_result_rust.txt`
- `memory_result_go.txt`
- `memory_result_python.txt`
- `memory_result_rust.txt`
- `startup_result_go.txt`
- `startup_result_python.txt`
- `startup_result_rust.txt`
- `concurrency_result_go.txt`
- `concurrency_result_python.txt`
- `concurrency_result_rust.txt`

## Performance

### Go

- `goos: darwin`
- `goarch: arm64`
- `pkg: github.com/ringsaturn/tz-benchmark/go`
- `cpu: Apple M3 Max`

| Benchmark | Iterations | ns/op | p50 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- |
| TimezoneMapper_Random_WorldCities | 11693688 | 99.08 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14699509 | 80.98 | 42.00 | 84.00 | 0 | 0 |
| Latlong_Random_WorldCities | 10844278 | 106.6 | 83.00 | 208.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 9694123 | 116.0 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3570141 | 345.8 | 208.0 | 1500 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2220721 | 543.7 | 459.0 | 1208 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 2202000 | 533.7 | 333.0 | 2500 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 1000000 | 1162 | 1000 | 2791 | 0 | 0 |
| TZF_Full_Random_WorldCities | 3414728 | 347.9 | 208.0 | 1583 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 2096583 | 606.7 | 500.0 | 1750 | 0 | 0 |
| Localtimezone_Random_WorldCities | 48501 | 24781 | 16875 | 96416 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 58863 | 20871 | 19166 | 80459 | 16 | 1 |
| GoTZ_Random_WorldCities | 22371 | 51946 | 30500 | 273625 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30285 | 39132 | 30750 | 226209 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 333.0060 | 26,165.9734 | 718.7261 | 393.4754 | 624.9757 | 208.0342 | 10859;12107 | 1,391.3505 | 125000 | 1 |
| test_tzfpy_random_edge_cities | 457.9779 | 6,958.0274 | 907.0432 | 265.5743 | 833.9994 | 290.9801 | 36163;7517 | 1,102.4833 | 162154 | 1 |
| test_timezonefinder_random_edge_city | 791.9734 | 17,665.9669 | 2,541.1790 | 1,040.1676 | 2,707.9950 | 1,332.9554 | 25097;1047 | 393.5181 | 74538 | 1 |
| test_timezonefinder_random_city | 833.0098 | 47,749.9561 | 1,739.9675 | 1,283.5654 | 1,250.0095 | 250.0019 | 3084;3825 | 574.7234 | 20236 | 1 |
| test_tzfpy_full_random_cities | 374.9738 | 8,625.0366 | 822.6876 | 450.8339 | 667.0016 | 249.0124 | 7164;8312 | 1,215.5282 | 59260 | 1 |
| test_tzfpy_full_random_edge_cities | 457.9779 | 7,416.0052 | 1,292.2724 | 463.2383 | 1,167.0054 | 457.9779 | 18199;5685 | 773.8307 | 109087 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 393.80 | 94.87 |
| rtz_get_timezone_ned_random_edge_city | 749.29 | 16.60 |
| rtz_get_timezone_osm_random_city | 1,513.03 | 208.93 |
| rtz_get_timezone_osm_random_edge_city | 3,045.01 | 184.64 |
| spatialtime_ned | 164,821.61 | 16,704.39 |
| spatialtime_ned_random_edge_city | 161,508.07 | 16,323.01 |
| spatialtime_osm | 5,109,368.75 | 3,713,031.25 |
| spatialtime_osm_random_edge_city | 5,723,483.35 | 3,730,396.03 |
| tz_search_lookup_random_city | 103.23 | 16.41 |
| tz_search_lookup_random_edge_city | 117.59 | 3.09 |
| tzf_default_finder_random_city | 221.13 | 41.39 |
| tzf_default_finder_random_edge_city | 474.83 | 52.12 |
| tzf_embedded_finder_random_city | 292.68 | 51.42 |
| tzf_embedded_finder_random_edge_city | 666.11 | 48.17 |
| zone_detect_random_city | 430,043.49 | 97,695.14 |
| zone_detect_random_edge_city | 504,164.84 | 132,014.43 |


## Accuracy

### Go

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | DefaultFinder (lite .tzm) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | EmbeddedFinder (lite .tzb) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | FullFinder (full .tzb) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | DefaultFinder polygon-exact (GetTimezoneNames) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | bradfitz/latlong | 408 | 0.2637 | 230 | 0.1487 | 1106 | 0.7150 | 166 | 0.1073 |
| cities | 154694 | zsefvlol/timezonemapper | 816 | 0.5275 | 394 | 0.2547 | 1033 | 0.6678 | 0 | 0.0000 |
| cities | 154694 | albertyw/localtimezone | 22 | 0.0142 | 6 | 0.0039 | 60 | 0.0388 | 0 | 0.0000 |
| cities | 154694 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 3 | 0.0019 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder (lite .tzm) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | EmbeddedFinder (lite .tzb) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | FullFinder (full .tzb) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder polygon-exact (GetTimezoneNames) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | bradfitz/latlong | 208 | 0.8886 | 9 | 0.0384 | 772 | 3.2980 | 150 | 0.6408 |
| edges | 23408 | zsefvlol/timezonemapper | 88 | 0.3759 | 258 | 1.1022 | 690 | 2.9477 | 0 | 0.0000 |
| edges | 23408 | albertyw/localtimezone | 22 | 0.0940 | 6 | 0.0256 | 59 | 0.2521 | 0 | 0.0000 |
| edges | 23408 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 2 | 0.0085 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder (lite .tzm) | 19 | 0.0019 | 10 | 0.0010 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | EmbeddedFinder (lite .tzb) | 19 | 0.0019 | 10 | 0.0010 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | FullFinder (full .tzb) | 0 | 0.0000 | 10 | 0.0010 | 0 | 0.0000 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder polygon-exact (GetTimezoneNames) | 19 | 0.0019 | 0 | 0.0000 | 14 | 0.0014 | 0 | 0.0000 |


### Python

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | timezonefinder               N=154694 | 0 | 0.0000 | 493 | 0.3187 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | tzfpy (DefaultFinder)        N=154694 | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| edges | 23408 | timezonefinder               N=23408 | 0 | 0.0000 | 272 | 1.1620 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzfpy (DefaultFinder)        N=23408 | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| cities | 154694 | tzfpy+full (EmbeddedFinder)  N=154694 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzfpy+full (EmbeddedFinder)  N=23408 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |


### Rust

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | tzf-rs DefaultFinder | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzf-rs EmbeddedFinder | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzf-rs DefaultFinder polygon-exact (get_tz_names) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tz-search | 818 | 0.5288 | 230 | 0.1487 | 1272 | 0.8223 | 6 | 0.0039 |
| cities | 154694 | rtz OSM | 59 | 0.0381 | 3 | 0.0019 | 53 | 0.0343 | 19 | 0.0123 |
| cities | 154694 | rtz NED | 28759 | 18.5909 | 15 | 0.0097 | 75606 | 48.8746 | 23 | 0.0149 |
| edges | 23408 | tzf-rs DefaultFinder | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tzf-rs EmbeddedFinder | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tzf-rs DefaultFinder polygon-exact (get_tz_names) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tz-search | 412 | 1.7601 | 9 | 0.0384 | 788 | 3.3664 | 5 | 0.0214 |
| edges | 23408 | rtz OSM | 15 | 0.0641 | 3 | 0.0128 | 28 | 0.1196 | 19 | 0.0812 |
| edges | 23408 | rtz NED | 4446 | 18.9935 | 6 | 0.0256 | 14797 | 63.2134 | 9 | 0.0384 |



## Memory

Initialization cost and runtime cost are not the same number. Building a finder
allocates far more than the finder ends up holding: the dataset is decoded into
an intermediate representation, the query structures are built from it, and the
intermediate is then garbage. So `live <= rss_load <= init_peak`.

| Column | Meaning |
| --- | --- |
| Baseline MiB | RSS before the candidate is constructed. Libraries that load data at import/init time hide that cost here, so prefer `Live` or `RSS after load` over `Delta`. |
| Init peak MiB | High-water mark (`ru_maxrss`) reached while loading. What a container memory limit has to accommodate, or the process is killed at startup even though its steady state would have fit. |
| Live MiB | Data the candidate actually retains once ready to serve queries, from language-native accounting (Go `HeapAlloc` after a forced GC; Rust a counting global allocator). Absolute, not a delta. `n/a` for Python, whose candidates keep their data outside the Python heap. |
| RSS after load MiB | What the OS reports for a process ready to serve queries. Usually much closer to `Init peak` than to `Live`, because freeing memory does not shrink RSS -- the allocator keeps the pages mapped for reuse rather than returning them to the kernel. |
| RSS after loop MiB | RSS after a warm query loop. Above `RSS after load` only when querying itself allocates. |
| Peak MiB | `ru_maxrss` at the end of the run. Above `Init peak` only when the warm loop allocated more than loading did. |
| Delta MiB | `RSS after load - Baseline`. |

Reading only RSS makes a library look several times heavier than it is; reading
only live bytes hides a startup spike that can OOM a container.

Snapshots taken before these columns were introduced show `n/a` for `Init peak`
and `Live`; their `RSS after load` / `RSS after loop` are the old `post_load` /
`post_loop`, measured identically.

### Go

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (go runtime floor) | 4.7 | 4.7 | 0.2 | 5.0 | 5.2 | 5.2 | 0.3 |
| DefaultFinder (lite .tzm) | 5.1 | 41.5 | 13.1 | 41.5 | 41.6 | 41.6 | 36.4 |
| EmbeddedFinder (lite .tzb in place) | 5.2 | 9.2 | 0.3 | 9.6 | 9.8 | 9.8 | 4.4 |
| FullFinder (full .tzb) | 5.2 | 315.5 | 147.0 | 315.5 | 315.6 | 315.6 | 310.3 |
| bradfitz/latlong | 5.0 | 7.8 | 1.1 | 8.2 | 8.5 | 8.5 | 3.2 |
| zsefvlol/timezonemapper | 7.4 | 7.4 | 1.1 | 7.9 | 8.2 | 8.2 | 0.5 |
| albertyw/localtimezone | 6.4 | 18.5 | 2.8 | 19.1 | 19.3 | 19.3 | 12.7 |
| ugjka/go-tz | 110.3 | 110.3 | 32.6 | 110.3 | 110.3 | 110.3 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.4 | 22.4 | n/a | 22.4 | 22.4 | 22.4 | 0.0 |
| timezonefinder | 22.4 | 75.0 | n/a | 75.0 | 75.0 | 75.0 | 52.6 |
| tzfpy (DefaultFinder) | 22.4 | 60.3 | n/a | 60.2 | 60.2 | 60.3 | 37.8 |
| tzfpy+full (EmbeddedFinder) | 22.4 | 38.2 | n/a | 38.2 | 38.3 | 38.3 | 15.9 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 0.0 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 46.6 | 22.8 | 46.5 | 46.5 | 46.6 | 40.7 |
| tzf-rs EmbeddedFinder | 5.8 | 10.3 | 0.2 | 10.4 | 10.4 | 10.4 | 4.6 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.6 | 4.1 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 10.0 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.6 | 64.0 | 157.6 | 170.0 | 170.0 | 151.8 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.1 | 14.3 | 14.3 | 8.3 |



## Startup

Time for a fresh process to construct a finder and answer its first query.
Go reports best/median over repeated builds with all cores and with
`GOMAXPROCS=1`, plus the bytes and allocations of one build; Rust reports
best/median over repeated builds; Python reports import, construction, and
first-call time of a fresh interpreter (best sample, with medians in
parentheses). See the header comment of each harness for details.

### `startup_result_go.txt`

```
startup cost per finder (best/median of 7 builds, ms; 16 cores vs 1 core)
DefaultFinder (lite .tzm, aliased)     open_best=    9.49  open_median=   11.24  one_core_best=   28.49  one_core_median=   29.32  alloc_mib=   35.3  allocs=   15208  (ms)
expanded (lite .tzb)                   open_best=   15.65  open_median=   15.86  one_core_best=   35.28  one_core_median=   35.64  alloc_mib=   55.9  allocs=   85844  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.39  open_median=    1.41  one_core_best=    1.40  one_core_median=    1.41  alloc_mib=    0.0  allocs=     516  (ms)
FullFinder (full .tzb, expanded)       open_best=   62.55  open_median=   64.11  one_core_best=  194.43  one_core_median=  196.19  alloc_mib=  373.6  allocs=   87628  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.7  construct=    0.0  first_call=   13.9  total_best=   14.6  total_median=   14.8  (median import=0.7 construct=0.0 first_call=14.0)  (ms)
timezonefinder                   import=   40.9  construct=   12.1  first_call=    0.0  total_best=   52.9  total_median=   53.2  (median import=41.3 construct=12.0 first_call=0.0)  (ms)
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy+full (EmbeddedFinder)      import=    0.7  construct=    0.0  first_call=    9.3  total_best=   10.0  total_median=   10.1  (median import=0.8 construct=0.0 first_call=9.3)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   11.81  open_median=   13.61  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    2.36  open_median=    2.38  (ms)
```


## Concurrency

Wall-clock time per query when one shared finder is queried from N threads at
once (fixed budget per row; each thread draws random world cities from its own
PRNG). A candidate that scales perfectly halves `ns_per_op` every time the
thread count doubles; `scaling` is the throughput ratio relative to one thread.
A flat `ns_per_op` means queries serialize on shared state (a mutex, a shared
scratch buffer, or the Python interpreter lock).

### `concurrency_result_go.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; NumCPU=16)
tzf DefaultFinder    threads= 1  ns_per_op=     324.6  ops_per_s=     3080250  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     161.0  ops_per_s=     6210981  scaling=  2.02x
tzf DefaultFinder    threads= 4  ns_per_op=      80.1  ops_per_s=    12477804  scaling=  4.05x
tzf DefaultFinder    threads= 8  ns_per_op=      42.8  ops_per_s=    23343961  scaling=  7.58x
tzf DefaultFinder    threads=12  ns_per_op=      28.4  ops_per_s=    35195595  scaling= 11.43x
tzf DefaultFinder    threads=16  ns_per_op=      25.4  ops_per_s=    39355663  scaling= 12.78x
tzf EmbeddedFinder   threads= 1  ns_per_op=     533.0  ops_per_s=     1876029  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=     260.9  ops_per_s=     3832992  scaling=  2.04x
tzf EmbeddedFinder   threads= 4  ns_per_op=     130.9  ops_per_s=     7637013  scaling=  4.07x
tzf EmbeddedFinder   threads= 8  ns_per_op=      65.9  ops_per_s=    15181301  scaling=  8.09x
tzf EmbeddedFinder   threads=12  ns_per_op=      43.3  ops_per_s=    23103478  scaling= 12.32x
tzf EmbeddedFinder   threads=16  ns_per_op=      39.6  ops_per_s=    25242902  scaling= 13.46x
tzf FullFinder       threads= 1  ns_per_op=     387.9  ops_per_s=     2578220  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     181.2  ops_per_s=     5519438  scaling=  2.14x
tzf FullFinder       threads= 4  ns_per_op=      89.1  ops_per_s=    11228356  scaling=  4.36x
tzf FullFinder       threads= 8  ns_per_op=      48.9  ops_per_s=    20469464  scaling=  7.94x
tzf FullFinder       threads=12  ns_per_op=      31.4  ops_per_s=    31802524  scaling= 12.34x
tzf FullFinder       threads=16  ns_per_op=      28.6  ops_per_s=    35002788  scaling= 13.58x
latlong              threads= 1  ns_per_op=     101.7  ops_per_s=     9829906  scaling=  1.00x
latlong              threads= 2  ns_per_op=      54.3  ops_per_s=    18407148  scaling=  1.87x
latlong              threads= 4  ns_per_op=      25.3  ops_per_s=    39449127  scaling=  4.01x
latlong              threads= 8  ns_per_op=      12.7  ops_per_s=    78737908  scaling=  8.01x
latlong              threads=12  ns_per_op=       8.5  ops_per_s=   118272645  scaling= 12.03x
latlong              threads=16  ns_per_op=       7.9  ops_per_s=   127348397  scaling= 12.96x
timezonemapper       threads= 1  ns_per_op=      84.8  ops_per_s=    11786239  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      43.1  ops_per_s=    23221476  scaling=  1.97x
timezonemapper       threads= 4  ns_per_op=      21.3  ops_per_s=    47039453  scaling=  3.99x
timezonemapper       threads= 8  ns_per_op=      10.6  ops_per_s=    94034556  scaling=  7.98x
timezonemapper       threads=12  ns_per_op=       6.9  ops_per_s=   144457071  scaling= 12.26x
timezonemapper       threads=16  ns_per_op=       6.4  ops_per_s=   155593810  scaling= 13.20x
localtimezone        threads= 1  ns_per_op=   25021.3  ops_per_s=       39966  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=   12484.2  ops_per_s=       80102  scaling=  2.00x
localtimezone        threads= 4  ns_per_op=    6327.8  ops_per_s=      158032  scaling=  3.95x
localtimezone        threads= 8  ns_per_op=    3192.4  ops_per_s=      313248  scaling=  7.84x
localtimezone        threads=12  ns_per_op=    2145.5  ops_per_s=      466101  scaling= 11.66x
localtimezone        threads=16  ns_per_op=    1913.9  ops_per_s=      522491  scaling= 13.07x
go-tz                threads= 1  ns_per_op=   50920.9  ops_per_s=       19638  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   25581.6  ops_per_s=       39091  scaling=  1.99x
go-tz                threads= 4  ns_per_op=   13021.0  ops_per_s=       76799  scaling=  3.91x
go-tz                threads= 8  ns_per_op=    6620.9  ops_per_s=      151037  scaling=  7.69x
go-tz                threads=12  ns_per_op=    4643.2  ops_per_s=      215368  scaling= 10.97x
go-tz                threads=16  ns_per_op=    4127.5  ops_per_s=      242277  scaling= 12.34x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)        threads= 1  us_per_op=    0.514  ops_per_s=     1946653  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 2  us_per_op=    0.527  ops_per_s=     1895892  scaling=  0.97x
tzfpy (DefaultFinder)        threads= 4  us_per_op=    0.501  ops_per_s=     1996502  scaling=  1.03x
tzfpy (DefaultFinder)        threads= 8  us_per_op=    0.523  ops_per_s=     1913655  scaling=  0.98x
timezonefinder               threads= 1  us_per_op=    1.233  ops_per_s=      810922  scaling=  1.00x
timezonefinder               threads= 2  us_per_op=    1.702  ops_per_s=      587688  scaling=  0.72x
timezonefinder               threads= 4  us_per_op=    1.783  ops_per_s=      560789  scaling=  0.69x
timezonefinder               threads= 8  us_per_op=    1.825  ops_per_s=      547874  scaling=  0.68x
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy+full (EmbeddedFinder)  threads= 1  us_per_op=    0.596  ops_per_s=     1676898  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 2  us_per_op=    0.626  ops_per_s=     1598206  scaling=  0.95x
tzfpy+full (EmbeddedFinder)  threads= 4  us_per_op=    0.595  ops_per_s=     1679512  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 8  us_per_op=    0.630  ops_per_s=     1587448  scaling=  0.95x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     196.4  ops_per_s=     5090960  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=      96.9  ops_per_s=    10320957  scaling=  2.03x
tzf-rs DefaultFinder threads= 4  ns_per_op=      50.1  ops_per_s=    19979571  scaling=  3.92x
tzf-rs DefaultFinder threads= 8  ns_per_op=      24.8  ops_per_s=    40298648  scaling=  7.92x
tzf-rs DefaultFinder threads=12  ns_per_op=      17.1  ops_per_s=    58513791  scaling= 11.49x
tzf-rs DefaultFinder threads=16  ns_per_op=      14.8  ops_per_s=    67653928  scaling= 13.29x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=     311.9  ops_per_s=     3206104  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     156.7  ops_per_s=     6382715  scaling=  1.99x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=      81.2  ops_per_s=    12321343  scaling=  3.84x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=      40.1  ops_per_s=    24907502  scaling=  7.77x
tzf-rs EmbeddedFinder threads=12  ns_per_op=      27.6  ops_per_s=    36205253  scaling= 11.29x
tzf-rs EmbeddedFinder threads=16  ns_per_op=      23.9  ops_per_s=    41854331  scaling= 13.05x
tz-search            threads= 1  ns_per_op=      96.2  ops_per_s=    10390834  scaling=  1.00x
tz-search            threads= 2  ns_per_op=      47.7  ops_per_s=    20958573  scaling=  2.02x
tz-search            threads= 4  ns_per_op=      24.4  ops_per_s=    41055176  scaling=  3.95x
tz-search            threads= 8  ns_per_op=      12.1  ops_per_s=    82465024  scaling=  7.94x
tz-search            threads=12  ns_per_op=       8.3  ops_per_s=   119764880  scaling= 11.53x
tz-search            threads=16  ns_per_op=       7.2  ops_per_s=   138479802  scaling= 13.33x
rtz (OSM)            threads= 1  ns_per_op=    1476.8  ops_per_s=      677136  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=     735.7  ops_per_s=     1359262  scaling=  2.01x
rtz (OSM)            threads= 4  ns_per_op=     378.8  ops_per_s=     2640113  scaling=  3.90x
rtz (OSM)            threads= 8  ns_per_op=     187.6  ops_per_s=     5329913  scaling=  7.87x
rtz (OSM)            threads=12  ns_per_op=     129.1  ops_per_s=     7746377  scaling= 11.44x
rtz (OSM)            threads=16  ns_per_op=     114.2  ops_per_s=     8756960  scaling= 12.93x
rtz (NED)            threads= 1  ns_per_op=     373.6  ops_per_s=     2677013  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     180.9  ops_per_s=     5528106  scaling=  2.07x
rtz (NED)            threads= 4  ns_per_op=      93.2  ops_per_s=    10730073  scaling=  4.01x
rtz (NED)            threads= 8  ns_per_op=      46.5  ops_per_s=    21495319  scaling=  8.03x
rtz (NED)            threads=12  ns_per_op=      32.0  ops_per_s=    31214057  scaling= 11.66x
rtz (NED)            threads=16  ns_per_op=      28.5  ops_per_s=    35133008  scaling= 13.12x
```
