# Benchmark Snapshot 2026-09-13-78381cc000828a074f5780d933d3ad693fd5483f

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
| TimezoneMapper_Random_WorldCities | 11720342 | 101.1 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14607884 | 82.54 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10634973 | 113.3 | 83.00 | 250.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10405093 | 116.6 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3310668 | 339.4 | 208.0 | 1542 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2031751 | 613.8 | 459.0 | 1375 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 532246 | 2157 | 583.0 | 20375 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 118654 | 11595 | 9042 | 31459 | 0 | 0 |
| TZF_Full_Random_WorldCities | 3229921 | 367.9 | 208.0 | 1792 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 2038604 | 586.3 | 500.0 | 1583 | 0 | 0 |
| Localtimezone_Random_WorldCities | 49150 | 24186 | 16500 | 93917 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 57142 | 21097 | 19250 | 80750 | 16 | 1 |
| GoTZ_Random_WorldCities | 23996 | 50007 | 28959 | 266125 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30589 | 39941 | 30833 | 239417 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 415.9810 | 46,041.0083 | 771.4665 | 421.2180 | 667.0016 | 208.0051 | 6695;8256 | 1,296.2326 | 78946 | 1 |
| test_tzfpy_random_edge_cities | 458.0070 | 51,125.0109 | 993.0602 | 360.5522 | 917.0035 | 375.0029 | 29313;6029 | 1,006.9883 | 164393 | 1 |
| test_timezonefinder_random_edge_city | 792.0025 | 81,875.0123 | 2,678.5904 | 1,263.9361 | 2,790.9991 | 1,376.0291 | 10061;626 | 373.3307 | 33852 | 1 |
| test_timezonefinder_random_city | 833.0098 | 31,333.0092 | 1,630.5477 | 1,018.0127 | 1,208.0127 | 291.9987 | 2440;3234 | 613.2909 | 15979 | 1 |
| test_tzfpy_full_random_cities | 499.9747 | 48,749.9929 | 2,193.1750 | 3,499.2315 | 917.0035 | 374.0133 | 3584;8044 | 455.9600 | 37855 | 1 |
| test_tzfpy_full_random_edge_cities | 1,125.0086 | 104,374.9799 | 7,620.7922 | 5,339.3290 | 5,750.0147 | 5,541.0201 | 4811;1628 | 131.2200 | 30849 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 401.67 | 81.83 |
| rtz_get_timezone_ned_random_edge_city | 758.06 | 21.93 |
| rtz_get_timezone_osm_random_city | 1,556.39 | 126.75 |
| rtz_get_timezone_osm_random_edge_city | 3,029.49 | 182.48 |
| spatialtime_ned | 231,201.17 | 35,025.73 |
| spatialtime_ned_random_edge_city | 230,108.59 | 28,539.34 |
| spatialtime_osm | 7,901,410.40 | 4,060,928.68 |
| spatialtime_osm_random_edge_city | 8,177,324.95 | 4,839,225.87 |
| tz_search_lookup_random_city | 115.12 | 38.97 |
| tz_search_lookup_random_edge_city | 126.29 | 5.99 |
| tzf_default_finder_random_city | 226.68 | 24.11 |
| tzf_default_finder_random_edge_city | 488.64 | 13.03 |
| tzf_embedded_finder_random_city | 1,154.51 | 70.48 |
| tzf_embedded_finder_random_edge_city | 4,646.96 | 354.88 |
| zone_detect_random_city | 424,980.38 | 70,945.98 |
| zone_detect_random_edge_city | 506,870.58 | 123,827.59 |


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
| (go runtime floor) | 4.6 | 4.6 | 0.2 | 4.9 | 5.1 | 5.1 | 0.3 |
| DefaultFinder (lite .tzm) | 4.9 | 44.0 | 13.1 | 44.0 | 44.0 | 44.0 | 39.1 |
| EmbeddedFinder (lite .tzb in place) | 4.9 | 8.7 | 0.3 | 9.1 | 9.3 | 9.3 | 4.2 |
| FullFinder (full .tzb) | 5.0 | 287.4 | 147.0 | 287.4 | 287.4 | 287.4 | 282.4 |
| bradfitz/latlong | 4.9 | 7.8 | 1.1 | 8.3 | 8.4 | 8.4 | 3.4 |
| zsefvlol/timezonemapper | 7.2 | 7.2 | 1.1 | 7.7 | 8.0 | 8.0 | 0.5 |
| albertyw/localtimezone | 6.1 | 20.1 | 2.8 | 20.5 | 20.6 | 20.6 | 14.4 |
| ugjka/go-tz | 110.2 | 110.2 | 32.6 | 110.2 | 110.2 | 110.2 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.4 | 22.4 | n/a | 22.4 | 22.4 | 22.4 | 0.0 |
| timezonefinder | 22.4 | 74.9 | n/a | 74.9 | 75.0 | 75.0 | 52.5 |
| tzfpy (DefaultFinder) | 22.4 | 61.5 | n/a | 61.3 | 61.3 | 61.5 | 39.0 |
| tzfpy+full (EmbeddedFinder) | 22.4 | 35.9 | n/a | 35.9 | 35.9 | 35.9 | 13.5 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.8 | 0.0 | 5.8 | 5.8 | 5.8 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 46.8 | 22.8 | 46.7 | 46.7 | 46.8 | 40.9 |
| tzf-rs EmbeddedFinder | 5.8 | 9.8 | 0.0 | 9.8 | 9.8 | 9.8 | 4.0 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.6 | 4.1 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 9.9 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.6 | 64.0 | 157.6 | 170.3 | 170.3 | 151.8 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.1 | 14.8 | 14.8 | 8.4 |



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
DefaultFinder (lite .tzm, aliased)     open_best=    8.67  open_median=    9.88  one_core_best=   28.80  one_core_median=   29.09  alloc_mib=   35.3  allocs=   15188  (ms)
expanded (lite .tzb)                   open_best=   17.66  open_median=   17.99  one_core_best=   37.63  one_core_median=   38.84  alloc_mib=   55.9  allocs=   85852  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.66  open_median=    1.71  one_core_best=    1.66  one_core_median=    1.67  alloc_mib=    0.0  allocs=     515  (ms)
FullFinder (full .tzb, expanded)       open_best=   67.32  open_median=   68.98  one_core_best=  199.31  one_core_median=  201.10  alloc_mib=  373.5  allocs=   87633  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.7  construct=    0.0  first_call=   14.7  total_best=   15.4  total_median=   15.9  (median import=0.7 construct=0.0 first_call=15.2)  (ms)
timezonefinder                   import=   40.9  construct=   11.6  first_call=    0.0  total_best=   52.6  total_median=   53.7  (median import=41.5 construct=12.0 first_call=0.0)  (ms)
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy+full (EmbeddedFinder)      import=    0.8  construct=    0.0  first_call=    7.0  total_best=    7.8  total_median=    7.8  (median import=0.8 construct=0.0 first_call=7.1)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   12.91  open_median=   14.51  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.98  open_median=    2.09  (ms)
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
tzf DefaultFinder    threads= 1  ns_per_op=     350.4  ops_per_s=     2853734  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     163.1  ops_per_s=     6131030  scaling=  2.15x
tzf DefaultFinder    threads= 4  ns_per_op=      81.8  ops_per_s=    12221035  scaling=  4.28x
tzf DefaultFinder    threads= 8  ns_per_op=      42.5  ops_per_s=    23509190  scaling=  8.24x
tzf DefaultFinder    threads=12  ns_per_op=      28.4  ops_per_s=    35217030  scaling= 12.34x
tzf DefaultFinder    threads=16  ns_per_op=      25.6  ops_per_s=    39048596  scaling= 13.68x
tzf EmbeddedFinder   threads= 1  ns_per_op=    2219.4  ops_per_s=      450571  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=    2789.0  ops_per_s=      358551  scaling=  0.80x
tzf EmbeddedFinder   threads= 4  ns_per_op=    2730.4  ops_per_s=      366246  scaling=  0.81x
tzf EmbeddedFinder   threads= 8  ns_per_op=    2733.8  ops_per_s=      365789  scaling=  0.81x
tzf EmbeddedFinder   threads=12  ns_per_op=    2703.7  ops_per_s=      369869  scaling=  0.82x
tzf EmbeddedFinder   threads=16  ns_per_op=    2692.4  ops_per_s=      371419  scaling=  0.82x
tzf FullFinder       threads= 1  ns_per_op=     367.5  ops_per_s=     2721457  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     183.5  ops_per_s=     5448975  scaling=  2.00x
tzf FullFinder       threads= 4  ns_per_op=      93.1  ops_per_s=    10745770  scaling=  3.95x
tzf FullFinder       threads= 8  ns_per_op=      48.4  ops_per_s=    20675751  scaling=  7.60x
tzf FullFinder       threads=12  ns_per_op=      31.7  ops_per_s=    31567911  scaling= 11.60x
tzf FullFinder       threads=16  ns_per_op=      28.7  ops_per_s=    34845216  scaling= 12.80x
latlong              threads= 1  ns_per_op=      97.2  ops_per_s=    10292003  scaling=  1.00x
latlong              threads= 2  ns_per_op=      49.7  ops_per_s=    20116345  scaling=  1.95x
latlong              threads= 4  ns_per_op=      27.2  ops_per_s=    36729566  scaling=  3.57x
latlong              threads= 8  ns_per_op=      12.4  ops_per_s=    80512436  scaling=  7.82x
latlong              threads=12  ns_per_op=       8.3  ops_per_s=   120360998  scaling= 11.69x
latlong              threads=16  ns_per_op=       7.7  ops_per_s=   129132411  scaling= 12.55x
timezonemapper       threads= 1  ns_per_op=      85.8  ops_per_s=    11649999  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      41.5  ops_per_s=    24098860  scaling=  2.07x
timezonemapper       threads= 4  ns_per_op=      20.8  ops_per_s=    48002572  scaling=  4.12x
timezonemapper       threads= 8  ns_per_op=      10.2  ops_per_s=    97615377  scaling=  8.38x
timezonemapper       threads=12  ns_per_op=       7.0  ops_per_s=   142041553  scaling= 12.19x
timezonemapper       threads=16  ns_per_op=       6.3  ops_per_s=   157553309  scaling= 13.52x
localtimezone        threads= 1  ns_per_op=   24594.8  ops_per_s=       40659  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=   12353.4  ops_per_s=       80949  scaling=  1.99x
localtimezone        threads= 4  ns_per_op=    6326.6  ops_per_s=      158062  scaling=  3.89x
localtimezone        threads= 8  ns_per_op=    3161.0  ops_per_s=      316354  scaling=  7.78x
localtimezone        threads=12  ns_per_op=    2165.9  ops_per_s=      461712  scaling= 11.36x
localtimezone        threads=16  ns_per_op=    1935.0  ops_per_s=      516788  scaling= 12.71x
go-tz                threads= 1  ns_per_op=   50398.4  ops_per_s=       19842  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   25689.7  ops_per_s=       38926  scaling=  1.96x
go-tz                threads= 4  ns_per_op=   13048.7  ops_per_s=       76636  scaling=  3.86x
go-tz                threads= 8  ns_per_op=    6493.9  ops_per_s=      153992  scaling=  7.76x
go-tz                threads=12  ns_per_op=    4640.3  ops_per_s=      215505  scaling= 10.86x
go-tz                threads=16  ns_per_op=    4171.5  ops_per_s=      239723  scaling= 12.08x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)        threads= 1  us_per_op=    0.549  ops_per_s=     1822617  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 2  us_per_op=    0.548  ops_per_s=     1825963  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 4  us_per_op=    0.526  ops_per_s=     1900749  scaling=  1.04x
tzfpy (DefaultFinder)        threads= 8  us_per_op=    0.534  ops_per_s=     1872295  scaling=  1.03x
timezonefinder               threads= 1  us_per_op=    1.313  ops_per_s=      761568  scaling=  1.00x
timezonefinder               threads= 2  us_per_op=    1.676  ops_per_s=      596640  scaling=  0.78x
timezonefinder               threads= 4  us_per_op=    1.783  ops_per_s=      560777  scaling=  0.74x
timezonefinder               threads= 8  us_per_op=    1.802  ops_per_s=      554847  scaling=  0.73x
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy+full (EmbeddedFinder)  threads= 1  us_per_op=    1.931  ops_per_s=      517971  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 2  us_per_op=    1.938  ops_per_s=      515977  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 4  us_per_op=    1.949  ops_per_s=      512988  scaling=  0.99x
tzfpy+full (EmbeddedFinder)  threads= 8  us_per_op=    1.911  ops_per_s=      523150  scaling=  1.01x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     201.9  ops_per_s=     4952693  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=     102.4  ops_per_s=     9764996  scaling=  1.97x
tzf-rs DefaultFinder threads= 4  ns_per_op=      51.7  ops_per_s=    19357559  scaling=  3.91x
tzf-rs DefaultFinder threads= 8  ns_per_op=      25.7  ops_per_s=    38905490  scaling=  7.86x
tzf-rs DefaultFinder threads=12  ns_per_op=      17.7  ops_per_s=    56383763  scaling= 11.38x
tzf-rs DefaultFinder threads=16  ns_per_op=      15.6  ops_per_s=    64156121  scaling= 12.95x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=    1176.6  ops_per_s=      849912  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     594.0  ops_per_s=     1683469  scaling=  1.98x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=     304.7  ops_per_s=     3282429  scaling=  3.86x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=     153.5  ops_per_s=     6514833  scaling=  7.67x
tzf-rs EmbeddedFinder threads=12  ns_per_op=     103.0  ops_per_s=     9705920  scaling= 11.42x
tzf-rs EmbeddedFinder threads=16  ns_per_op=      92.0  ops_per_s=    10867014  scaling= 12.79x
tz-search            threads= 1  ns_per_op=     102.2  ops_per_s=     9786156  scaling=  1.00x
tz-search            threads= 2  ns_per_op=      55.2  ops_per_s=    18130503  scaling=  1.85x
tz-search            threads= 4  ns_per_op=      26.6  ops_per_s=    37618995  scaling=  3.84x
tz-search            threads= 8  ns_per_op=      16.5  ops_per_s=    60621104  scaling=  6.19x
tz-search            threads=12  ns_per_op=      13.1  ops_per_s=    76057702  scaling=  7.77x
tz-search            threads=16  ns_per_op=      13.2  ops_per_s=    75965813  scaling=  7.76x
rtz (OSM)            threads= 1  ns_per_op=    1498.1  ops_per_s=      667507  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=     749.5  ops_per_s=     1334276  scaling=  2.00x
rtz (OSM)            threads= 4  ns_per_op=     385.0  ops_per_s=     2597243  scaling=  3.89x
rtz (OSM)            threads= 8  ns_per_op=     193.6  ops_per_s=     5164111  scaling=  7.74x
rtz (OSM)            threads=12  ns_per_op=     130.6  ops_per_s=     7655160  scaling= 11.47x
rtz (OSM)            threads=16  ns_per_op=     122.1  ops_per_s=     8193133  scaling= 12.27x
rtz (NED)            threads= 1  ns_per_op=     366.4  ops_per_s=     2729578  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     187.7  ops_per_s=     5326375  scaling=  1.95x
rtz (NED)            threads= 4  ns_per_op=      94.3  ops_per_s=    10609622  scaling=  3.89x
rtz (NED)            threads= 8  ns_per_op=      49.3  ops_per_s=    20293558  scaling=  7.43x
rtz (NED)            threads=12  ns_per_op=      33.3  ops_per_s=    30015696  scaling= 11.00x
rtz (NED)            threads=16  ns_per_op=      31.1  ops_per_s=    32205028  scaling= 11.80x
```
