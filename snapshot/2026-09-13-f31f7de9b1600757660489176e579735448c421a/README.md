# Benchmark Snapshot 2026-09-13-f31f7de9b1600757660489176e579735448c421a

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
| TimezoneMapper_Random_WorldCities | 9549032 | 119.4 | 83.00 | 250.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14653549 | 81.64 | 42.00 | 84.00 | 0 | 0 |
| Latlong_Random_WorldCities | 9931208 | 111.2 | 83.00 | 250.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10394743 | 114.1 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3670035 | 343.5 | 208.0 | 1583 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2212112 | 578.0 | 500.0 | 1417 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 509287 | 2194 | 583.0 | 20959 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 117489 | 10204 | 9041 | 30667 | 0 | 0 |
| TZF_Full_Random_WorldCities | 3270418 | 364.0 | 208.0 | 1792 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 2100409 | 573.7 | 500.0 | 1500 | 0 | 0 |
| Localtimezone_Random_WorldCities | 48474 | 24205 | 16500 | 94375 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 57799 | 21091 | 19250 | 80666 | 16 | 1 |
| GoTZ_Random_WorldCities | 24304 | 49653 | 28625 | 267125 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30417 | 39775 | 30875 | 229542 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 374.9738 | 62,542.0071 | 758.1727 | 488.5836 | 667.0016 | 208.9655 | 5318;7341 | 1,318.9606 | 72286 | 1 |
| test_tzfpy_random_edge_cities | 457.9779 | 33,582.9973 | 921.4099 | 327.5616 | 833.9994 | 333.0060 | 27980;6715 | 1,085.2933 | 177779 | 1 |
| test_timezonefinder_random_edge_city | 875.0067 | 106,292.0201 | 14,659.2735 | 11,768.7034 | 10,542.0186 | 13,583.0196 | 5000;1776 | 68.2162 | 28269 | 1 |
| test_timezonefinder_random_city | 958.0108 | 10,492,417.0009 | 7,268.3747 | 84,279.1713 | 2,207.9912 | 7,249.0075 | 2;1374 | 137.5823 | 15656 | 1 |
| test_tzfpy_full_random_cities | 500.0038 | 75,707.9979 | 2,212.6969 | 3,647.2197 | 917.0035 | 291.9696 | 5778;11893 | 451.9372 | 61384 | 1 |
| test_tzfpy_full_random_edge_cities | 1,040.9858 | 186,999.9978 | 8,157.3922 | 5,774.6445 | 6,250.0185 | 5,832.9897 | 7332;2710 | 122.5882 | 50315 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 400.97 | 45.77 |
| rtz_get_timezone_ned_random_edge_city | 756.83 | 36.78 |
| rtz_get_timezone_osm_random_city | 1,537.06 | 118.09 |
| rtz_get_timezone_osm_random_edge_city | 3,035.83 | 146.17 |
| spatialtime_ned | 226,512.37 | 27,429.87 |
| spatialtime_ned_random_edge_city | 221,227.08 | 23,725.96 |
| spatialtime_osm | 7,359,206.25 | 4,364,936.23 |
| spatialtime_osm_random_edge_city | 7,818,800.05 | 4,888,711.12 |
| tz_search_lookup_random_city | 111.68 | 14.32 |
| tz_search_lookup_random_edge_city | 124.74 | 7.22 |
| tzf_default_finder_random_city | 221.95 | 28.07 |
| tzf_default_finder_random_edge_city | 485.63 | 105.40 |
| tzf_embedded_finder_random_city | 1,193.92 | 127.21 |
| tzf_embedded_finder_random_edge_city | 4,698.54 | 191.82 |
| zone_detect_random_city | 423,423.96 | 108,325.70 |
| zone_detect_random_edge_city | 504,924.21 | 106,664.09 |


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
| (go runtime floor) | 4.6 | 4.6 | 0.2 | 5.0 | 5.1 | 5.1 | 0.4 |
| DefaultFinder (lite .tzm) | 5.1 | 40.8 | 13.1 | 40.8 | 40.8 | 40.8 | 35.7 |
| EmbeddedFinder (lite .tzb in place) | 5.1 | 9.0 | 0.3 | 9.4 | 9.7 | 9.7 | 4.3 |
| FullFinder (full .tzb) | 5.0 | 273.2 | 147.0 | 273.2 | 273.2 | 273.2 | 268.2 |
| bradfitz/latlong | 5.1 | 7.8 | 1.1 | 8.2 | 8.4 | 8.4 | 3.2 |
| zsefvlol/timezonemapper | 7.2 | 7.2 | 1.1 | 7.7 | 8.0 | 8.0 | 0.5 |
| albertyw/localtimezone | 6.2 | 19.3 | 2.8 | 19.3 | 19.4 | 19.4 | 13.1 |
| ugjka/go-tz | 109.8 | 109.8 | 32.6 | 109.8 | 109.8 | 109.8 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.3 | 22.3 | n/a | 22.3 | 22.3 | 22.3 | 0.0 |
| timezonefinder | 22.5 | 107.1 | n/a | 107.1 | 109.7 | 109.7 | 84.7 |
| tzfpy (DefaultFinder) | 22.4 | 63.4 | n/a | 63.3 | 63.3 | 63.4 | 40.9 |
| tzfpy+full (EmbeddedFinder) | 22.4 | 35.9 | n/a | 35.9 | 35.9 | 35.9 | 13.5 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.8 | 0.0 | 5.8 | 5.8 | 5.8 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 46.9 | 22.8 | 46.8 | 46.8 | 46.9 | 41.0 |
| tzf-rs EmbeddedFinder | 5.8 | 9.8 | 0.0 | 9.8 | 9.8 | 9.8 | 4.0 |
| tz-search | 5.8 | 8.9 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.6 | 4.1 | 11.6 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 9.9 | 4.1 | 10.0 | 10.0 | 10.0 | 4.2 |
| spatialtime OSM | 5.8 | 157.6 | 64.0 | 157.7 | 168.7 | 168.7 | 151.9 |
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
DefaultFinder (lite .tzm, aliased)     open_best=    9.45  open_median=    9.98  one_core_best=   28.65  one_core_median=   29.14  alloc_mib=   35.3  allocs=   15198  (ms)
expanded (lite .tzb)                   open_best=   17.25  open_median=   18.35  one_core_best=   38.25  one_core_median=   39.21  alloc_mib=   55.9  allocs=   85852  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.65  open_median=    1.68  one_core_best=    1.69  one_core_median=    1.74  alloc_mib=    0.0  allocs=     515  (ms)
FullFinder (full .tzb, expanded)       open_best=   67.99  open_median=   68.86  one_core_best=  199.88  one_core_median=  201.87  alloc_mib=  373.5  allocs=   87632  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.7  construct=    0.0  first_call=   14.8  total_best=   15.5  total_median=   16.5  (median import=0.7 construct=0.0 first_call=15.8)  (ms)
timezonefinder                   import=   41.3  construct=  241.7  first_call=    0.0  total_best=  283.0  total_median=  286.1  (median import=41.3 construct=244.2 first_call=0.0)  (ms)
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy+full (EmbeddedFinder)      import=    0.7  construct=    0.0  first_call=    7.0  total_best=    7.7  total_median=    7.8  (median import=0.7 construct=0.0 first_call=7.1)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   13.33  open_median=   14.94  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.92  open_median=    2.02  (ms)
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
tzf DefaultFinder    threads= 1  ns_per_op=     329.4  ops_per_s=     3035713  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     162.7  ops_per_s=     6146670  scaling=  2.02x
tzf DefaultFinder    threads= 4  ns_per_op=      83.5  ops_per_s=    11978351  scaling=  3.95x
tzf DefaultFinder    threads= 8  ns_per_op=      42.7  ops_per_s=    23439910  scaling=  7.72x
tzf DefaultFinder    threads=12  ns_per_op=      28.4  ops_per_s=    35178318  scaling= 11.59x
tzf DefaultFinder    threads=16  ns_per_op=      26.3  ops_per_s=    38040603  scaling= 12.53x
tzf EmbeddedFinder   threads= 1  ns_per_op=    2214.8  ops_per_s=      451517  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=    2772.8  ops_per_s=      360648  scaling=  0.80x
tzf EmbeddedFinder   threads= 4  ns_per_op=    2755.9  ops_per_s=      362863  scaling=  0.80x
tzf EmbeddedFinder   threads= 8  ns_per_op=    2784.2  ops_per_s=      359165  scaling=  0.80x
tzf EmbeddedFinder   threads=12  ns_per_op=    2697.1  ops_per_s=      370765  scaling=  0.82x
tzf EmbeddedFinder   threads=16  ns_per_op=    2687.4  ops_per_s=      372107  scaling=  0.82x
tzf FullFinder       threads= 1  ns_per_op=     374.5  ops_per_s=     2670101  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     190.4  ops_per_s=     5251112  scaling=  1.97x
tzf FullFinder       threads= 4  ns_per_op=      92.0  ops_per_s=    10871438  scaling=  4.07x
tzf FullFinder       threads= 8  ns_per_op=      49.1  ops_per_s=    20349989  scaling=  7.62x
tzf FullFinder       threads=12  ns_per_op=      32.5  ops_per_s=    30775755  scaling= 11.53x
tzf FullFinder       threads=16  ns_per_op=      29.3  ops_per_s=    34088038  scaling= 12.77x
latlong              threads= 1  ns_per_op=     101.5  ops_per_s=     9850155  scaling=  1.00x
latlong              threads= 2  ns_per_op=      51.6  ops_per_s=    19389878  scaling=  1.97x
latlong              threads= 4  ns_per_op=      24.9  ops_per_s=    40198114  scaling=  4.08x
latlong              threads= 8  ns_per_op=      12.4  ops_per_s=    80635913  scaling=  8.19x
latlong              threads=12  ns_per_op=       8.2  ops_per_s=   121425081  scaling= 12.33x
latlong              threads=16  ns_per_op=       7.6  ops_per_s=   131685120  scaling= 13.37x
timezonemapper       threads= 1  ns_per_op=      84.6  ops_per_s=    11813779  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      41.6  ops_per_s=    24038435  scaling=  2.03x
timezonemapper       threads= 4  ns_per_op=      20.6  ops_per_s=    48514391  scaling=  4.11x
timezonemapper       threads= 8  ns_per_op=      10.5  ops_per_s=    95338109  scaling=  8.07x
timezonemapper       threads=12  ns_per_op=       6.8  ops_per_s=   146407921  scaling= 12.39x
timezonemapper       threads=16  ns_per_op=       6.3  ops_per_s=   158453967  scaling= 13.41x
localtimezone        threads= 1  ns_per_op=   24410.7  ops_per_s=       40966  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=   12355.3  ops_per_s=       80937  scaling=  1.98x
localtimezone        threads= 4  ns_per_op=    6327.7  ops_per_s=      158035  scaling=  3.86x
localtimezone        threads= 8  ns_per_op=    3200.8  ops_per_s=      312426  scaling=  7.63x
localtimezone        threads=12  ns_per_op=    2169.3  ops_per_s=      460986  scaling= 11.25x
localtimezone        threads=16  ns_per_op=    1988.6  ops_per_s=      502876  scaling= 12.28x
go-tz                threads= 1  ns_per_op=   50398.8  ops_per_s=       19842  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   25574.0  ops_per_s=       39102  scaling=  1.97x
go-tz                threads= 4  ns_per_op=   13108.3  ops_per_s=       76287  scaling=  3.84x
go-tz                threads= 8  ns_per_op=    6507.4  ops_per_s=      153672  scaling=  7.74x
go-tz                threads=12  ns_per_op=    4638.5  ops_per_s=      215585  scaling= 10.87x
go-tz                threads=16  ns_per_op=    4082.0  ops_per_s=      244978  scaling= 12.35x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)        threads= 1  us_per_op=    0.549  ops_per_s=     1821655  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 2  us_per_op=    0.546  ops_per_s=     1833070  scaling=  1.01x
tzfpy (DefaultFinder)        threads= 4  us_per_op=    0.533  ops_per_s=     1874892  scaling=  1.03x
tzfpy (DefaultFinder)        threads= 8  us_per_op=    0.575  ops_per_s=     1740553  scaling=  0.96x
timezonefinder               threads= 1  us_per_op=    6.121  ops_per_s=      163380  scaling=  1.00x
timezonefinder               threads= 2  us_per_op=    5.485  ops_per_s=      182316  scaling=  1.12x
timezonefinder               threads= 4  us_per_op=    6.230  ops_per_s=      160507  scaling=  0.98x
timezonefinder               threads= 8  us_per_op=    6.389  ops_per_s=      156531  scaling=  0.96x
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy+full (EmbeddedFinder)  threads= 1  us_per_op=    1.975  ops_per_s=      506443  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 2  us_per_op=    1.978  ops_per_s=      505497  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 4  us_per_op=    1.941  ops_per_s=      515283  scaling=  1.02x
tzfpy+full (EmbeddedFinder)  threads= 8  us_per_op=    1.999  ops_per_s=      500164  scaling=  0.99x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     208.4  ops_per_s=     4797768  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=     105.2  ops_per_s=     9505835  scaling=  1.98x
tzf-rs DefaultFinder threads= 4  ns_per_op=      53.2  ops_per_s=    18792297  scaling=  3.92x
tzf-rs DefaultFinder threads= 8  ns_per_op=      26.6  ops_per_s=    37577160  scaling=  7.83x
tzf-rs DefaultFinder threads=12  ns_per_op=      18.7  ops_per_s=    53442229  scaling= 11.14x
tzf-rs DefaultFinder threads=16  ns_per_op=      16.5  ops_per_s=    60547442  scaling= 12.62x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=    1213.6  ops_per_s=      823970  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     610.1  ops_per_s=     1639101  scaling=  1.99x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=     305.7  ops_per_s=     3270864  scaling=  3.97x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=     152.9  ops_per_s=     6538682  scaling=  7.94x
tzf-rs EmbeddedFinder threads=12  ns_per_op=     103.5  ops_per_s=     9657402  scaling= 11.72x
tzf-rs EmbeddedFinder threads=16  ns_per_op=      92.4  ops_per_s=    10818034  scaling= 13.13x
tz-search            threads= 1  ns_per_op=     102.3  ops_per_s=     9773375  scaling=  1.00x
tz-search            threads= 2  ns_per_op=      55.6  ops_per_s=    17990706  scaling=  1.84x
tz-search            threads= 4  ns_per_op=      26.9  ops_per_s=    37122454  scaling=  3.80x
tz-search            threads= 8  ns_per_op=      14.2  ops_per_s=    70393467  scaling=  7.20x
tz-search            threads=12  ns_per_op=      10.9  ops_per_s=    91771603  scaling=  9.39x
tz-search            threads=16  ns_per_op=      10.4  ops_per_s=    95958444  scaling=  9.82x
rtz (OSM)            threads= 1  ns_per_op=    1517.4  ops_per_s=      659012  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=     768.8  ops_per_s=     1300667  scaling=  1.97x
rtz (OSM)            threads= 4  ns_per_op=     391.8  ops_per_s=     2552636  scaling=  3.87x
rtz (OSM)            threads= 8  ns_per_op=     193.4  ops_per_s=     5169387  scaling=  7.84x
rtz (OSM)            threads=12  ns_per_op=     132.6  ops_per_s=     7542204  scaling= 11.44x
rtz (OSM)            threads=16  ns_per_op=     119.9  ops_per_s=     8343545  scaling= 12.66x
rtz (NED)            threads= 1  ns_per_op=     381.0  ops_per_s=     2624748  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     198.8  ops_per_s=     5029503  scaling=  1.92x
rtz (NED)            threads= 4  ns_per_op=      96.3  ops_per_s=    10381085  scaling=  3.96x
rtz (NED)            threads= 8  ns_per_op=      48.0  ops_per_s=    20814104  scaling=  7.93x
rtz (NED)            threads=12  ns_per_op=      32.6  ops_per_s=    30714033  scaling= 11.70x
rtz (NED)            threads=16  ns_per_op=      29.9  ops_per_s=    33419633  scaling= 12.73x
```
