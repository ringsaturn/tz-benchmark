# Benchmark Snapshot 2026-11-01-2c95ce4ca5cc7035449b22ad2500032c54cbdf78

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
| TimezoneMapper_Random_WorldCities | 11426108 | 102.1 | 83.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14345665 | 83.30 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10212798 | 114.2 | 83.00 | 209.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10264418 | 125.2 | 84.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3132426 | 350.0 | 208.0 | 1500 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2114216 | 556.5 | 500.0 | 1250 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 2164329 | 535.8 | 333.0 | 2542 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 958580 | 1230 | 1042 | 2750 | 0 | 0 |
| TZF_Full_Random_WorldCities | 3354610 | 354.5 | 208.0 | 1708 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 1999484 | 591.8 | 500.0 | 1542 | 0 | 0 |
| Localtimezone_Random_WorldCities | 1548813 | 772.0 | 708.0 | 1208 | 40 | 3 |
| Localtimezone_Random_EdgeCities | 2193591 | 543.4 | 459.0 | 875.0 | 40 | 3 |
| GoTZ_Random_WorldCities | 22004 | 54250 | 32000 | 276041 | 16 | 1 |
| GoTZ_Random_EdgeCities | 29476 | 41365 | 32250 | 238500 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 374.9738 | 27,792.0044 | 745.3946 | 409.0420 | 665.9538 | 207.9760 | 7584;9362 | 1,341.5713 | 84510 | 1 |
| test_tzfpy_random_edge_cities | 499.9456 | 7,833.0049 | 958.8444 | 318.4393 | 875.0358 | 333.0060 | 19492;4443 | 1,042.9221 | 104801 | 1 |
| test_timezonefinder_random_edge_city | 790.9839 | 36,042.0090 | 2,659.6429 | 1,217.7929 | 2,749.9627 | 1,332.9554 | 22513;2214 | 375.9903 | 70176 | 1 |
| test_timezonefinder_random_city | 874.9776 | 49,124.9957 | 1,595.6583 | 1,067.2804 | 1,208.0418 | 208.9655 | 1740;2062 | 626.7006 | 11606 | 1 |
| test_tzfpy_full_random_cities | 374.9738 | 24,083.0122 | 810.5000 | 422.0331 | 667.0016 | 249.0124 | 6988;7458 | 1,233.8062 | 55945 | 1 |
| test_tzfpy_full_random_edge_cities | 583.9975 | 15,124.9697 | 1,313.4541 | 454.7307 | 1,207.9836 | 459.0256 | 18696;5410 | 761.3513 | 106667 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 385.84 | 78.86 |
| rtz_get_timezone_ned_random_edge_city | 768.33 | 28.38 |
| rtz_get_timezone_osm_random_city | 1,534.11 | 95.81 |
| rtz_get_timezone_osm_random_edge_city | 3,110.99 | 117.27 |
| spatialtime_ned | 167,071.09 | 15,951.74 |
| spatialtime_ned_random_edge_city | 164,157.60 | 14,014.88 |
| spatialtime_osm | 5,278,552.10 | 3,559,057.29 |
| spatialtime_osm_random_edge_city | 5,979,143.75 | 2,283,241.88 |
| tz_search_lookup_random_city | 105.09 | 6.87 |
| tz_search_lookup_random_edge_city | 119.39 | 1.69 |
| tzf_default_finder_random_city | 225.62 | 21.17 |
| tzf_default_finder_random_edge_city | 489.33 | 10.13 |
| tzf_embedded_finder_random_city | 350.34 | 110.85 |
| tzf_embedded_finder_random_edge_city | 686.94 | 8.99 |
| zone_detect_random_city | 441,954.17 | 87,269.50 |
| zone_detect_random_edge_city | 518,433.59 | 132,182.83 |


## Accuracy

### Go

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 170540 | DefaultFinder (lite .tzm) | 2 | 0.0012 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 170540 | EmbeddedFinder (lite .tzb) | 2 | 0.0012 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 170540 | FullFinder (full .tzb) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 170540 | DefaultFinder polygon-exact (GetTimezoneNames) | 2 | 0.0012 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 170540 | bradfitz/latlong | 461 | 0.2703 | 243 | 0.1425 | 1364 | 0.7998 | 204 | 0.1196 |
| cities | 170540 | zsefvlol/timezonemapper | 831 | 0.4873 | 409 | 0.2398 | 1222 | 0.7165 | 0 | 0.0000 |
| cities | 170540 | albertyw/localtimezone | 67 | 0.0393 | 190 | 0.1114 | 200 | 0.1173 | 0 | 0.0000 |
| cities | 170540 | ugjka/go-tz | 2 | 0.0012 | 0 | 0.0000 | 2 | 0.0012 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder (lite .tzm) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | EmbeddedFinder (lite .tzb) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | FullFinder (full .tzb) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder polygon-exact (GetTimezoneNames) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | bradfitz/latlong | 208 | 0.8886 | 9 | 0.0384 | 772 | 3.2980 | 150 | 0.6408 |
| edges | 23408 | zsefvlol/timezonemapper | 88 | 0.3759 | 258 | 1.1022 | 690 | 2.9477 | 0 | 0.0000 |
| edges | 23408 | albertyw/localtimezone | 51 | 0.2179 | 145 | 0.6194 | 179 | 0.7647 | 0 | 0.0000 |
| edges | 23408 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder (lite .tzm) | 21 | 0.0021 | 10 | 0.0010 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | EmbeddedFinder (lite .tzb) | 21 | 0.0021 | 10 | 0.0010 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | FullFinder (full .tzb) | 0 | 0.0000 | 10 | 0.0010 | 0 | 0.0000 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder polygon-exact (GetTimezoneNames) | 21 | 0.0021 | 0 | 0.0000 | 14 | 0.0014 | 0 | 0.0000 |


### Python

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 170540 | timezonefinder               N=170540 | 0 | 0.0000 | 510 | 0.2991 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 170540 | tzfpy (DefaultFinder)        N=170540 | 2 | 0.0012 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| edges | 23408 | timezonefinder               N=23408 | 0 | 0.0000 | 272 | 1.1620 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzfpy (DefaultFinder)        N=23408 | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| cities | 170540 | tzfpy+full (EmbeddedFinder)  N=170540 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzfpy+full (EmbeddedFinder)  N=23408 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |


### Rust

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 170540 | tzf-rs DefaultFinder | 2 | 0.0012 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 170540 | tzf-rs EmbeddedFinder | 2 | 0.0012 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 170540 | tzf-rs DefaultFinder polygon-exact (get_tz_names) | 2 | 0.0012 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 170540 | tz-search | 911 | 0.5342 | 243 | 0.1425 | 1535 | 0.9001 | 7 | 0.0041 |
| cities | 170540 | rtz OSM | 59 | 0.0346 | 3 | 0.0018 | 57 | 0.0334 | 21 | 0.0123 |
| cities | 170540 | rtz NED | 30445 | 17.8521 | 45 | 0.0264 | 82335 | 48.2790 | 29 | 0.0170 |
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
| (go runtime floor) | 5.1 | 5.1 | 0.3 | 5.4 | 5.6 | 5.6 | 0.3 |
| DefaultFinder (lite .tzm) | 5.5 | 44.5 | 13.3 | 44.6 | 44.6 | 44.6 | 39.1 |
| EmbeddedFinder (lite .tzb in place) | 5.7 | 9.6 | 0.4 | 10.1 | 10.3 | 10.3 | 4.4 |
| FullFinder (full .tzb) | 5.7 | 266.7 | 148.9 | 266.9 | 266.9 | 266.9 | 261.2 |
| bradfitz/latlong | 5.6 | 7.6 | 1.2 | 8.3 | 8.5 | 8.5 | 2.7 |
| zsefvlol/timezonemapper | 7.8 | 7.9 | 1.2 | 8.5 | 8.8 | 8.8 | 0.6 |
| albertyw/localtimezone | 9.4 | 30.6 | 8.9 | 30.8 | 31.9 | 31.9 | 21.4 |
| ugjka/go-tz | 111.6 | 111.6 | 32.7 | 111.6 | 111.7 | 111.7 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.5 | 22.5 | n/a | 22.5 | 22.5 | 22.5 | 0.0 |
| timezonefinder | 22.5 | 75.0 | n/a | 75.0 | 75.0 | 75.0 | 52.5 |
| tzfpy (DefaultFinder) | 22.5 | 61.3 | n/a | 61.2 | 61.2 | 61.3 | 38.7 |
| tzfpy+full (EmbeddedFinder) | 22.5 | 38.8 | n/a | 38.8 | 38.8 | 38.8 | 16.2 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.8 | 0.0 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 44.5 | 23.1 | 44.3 | 44.4 | 44.5 | 38.5 |
| tzf-rs EmbeddedFinder | 5.8 | 10.2 | 0.2 | 10.2 | 10.2 | 10.2 | 4.4 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.6 | 4.2 | 14.6 | 14.8 | 14.8 | 8.8 |
| rtz NED | 5.8 | 11.7 | 4.1 | 11.7 | 11.8 | 11.8 | 5.9 |
| zone-detect | 5.8 | 10.0 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.7 | 64.0 | 157.8 | 170.2 | 170.2 | 152.0 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.2 | 14.4 | 14.4 | 8.4 |



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
DefaultFinder (lite .tzm, aliased)     open_best=    8.67  open_median=    9.19  one_core_best=   28.75  one_core_median=   30.05  alloc_mib=   35.7  allocs=   15378  (ms)
expanded (lite .tzb)                   open_best=   14.57  open_median=   15.14  one_core_best=   36.30  one_core_median=   37.50  alloc_mib=   56.5  allocs=   84953  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.36  open_median=    1.41  one_core_best=    1.36  one_core_median=    1.38  alloc_mib=    0.0  allocs=     516  (ms)
FullFinder (full .tzb, expanded)       open_best=   62.43  open_median=   63.37  one_core_best=  198.62  one_core_median=  199.77  alloc_mib=  374.7  allocs=   87906  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.7  construct=    0.0  first_call=   13.6  total_best=   14.3  total_median=   14.5  (median import=0.8 construct=0.0 first_call=13.7)  (ms)
timezonefinder                   import=   42.3  construct=   12.0  first_call=    0.0  total_best=   54.3  total_median=   54.8  (median import=42.6 construct=12.3 first_call=0.0)  (ms)
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy+full (EmbeddedFinder)      import=    0.7  construct=    0.0  first_call=    9.6  total_best=   10.3  total_median=   10.4  (median import=0.8 construct=0.0 first_call=9.6)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   11.25  open_median=   12.30  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    2.32  open_median=    2.39  (ms)
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
tzf DefaultFinder    threads= 1  ns_per_op=     342.7  ops_per_s=     2918309  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     169.4  ops_per_s=     5902946  scaling=  2.02x
tzf DefaultFinder    threads= 4  ns_per_op=      85.5  ops_per_s=    11693293  scaling=  4.01x
tzf DefaultFinder    threads= 8  ns_per_op=      44.8  ops_per_s=    22331580  scaling=  7.65x
tzf DefaultFinder    threads=12  ns_per_op=      29.5  ops_per_s=    33923231  scaling= 11.62x
tzf DefaultFinder    threads=16  ns_per_op=      26.2  ops_per_s=    38205706  scaling= 13.09x
tzf EmbeddedFinder   threads= 1  ns_per_op=     557.6  ops_per_s=     1793272  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=     266.6  ops_per_s=     3750314  scaling=  2.09x
tzf EmbeddedFinder   threads= 4  ns_per_op=     135.0  ops_per_s=     7406236  scaling=  4.13x
tzf EmbeddedFinder   threads= 8  ns_per_op=      67.0  ops_per_s=    14924022  scaling=  8.32x
tzf EmbeddedFinder   threads=12  ns_per_op=      44.6  ops_per_s=    22396596  scaling= 12.49x
tzf EmbeddedFinder   threads=16  ns_per_op=      39.0  ops_per_s=    25622781  scaling= 14.29x
tzf FullFinder       threads= 1  ns_per_op=     385.8  ops_per_s=     2592072  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     188.6  ops_per_s=     5302341  scaling=  2.05x
tzf FullFinder       threads= 4  ns_per_op=      96.4  ops_per_s=    10378782  scaling=  4.00x
tzf FullFinder       threads= 8  ns_per_op=      52.0  ops_per_s=    19234242  scaling=  7.42x
tzf FullFinder       threads=12  ns_per_op=      34.6  ops_per_s=    28871001  scaling= 11.14x
tzf FullFinder       threads=16  ns_per_op=      28.8  ops_per_s=    34753163  scaling= 13.41x
latlong              threads= 1  ns_per_op=     107.3  ops_per_s=     9318432  scaling=  1.00x
latlong              threads= 2  ns_per_op=      53.2  ops_per_s=    18798041  scaling=  2.02x
latlong              threads= 4  ns_per_op=      27.2  ops_per_s=    36762933  scaling=  3.95x
latlong              threads= 8  ns_per_op=      13.4  ops_per_s=    74733489  scaling=  8.02x
latlong              threads=12  ns_per_op=       8.9  ops_per_s=   111929616  scaling= 12.01x
latlong              threads=16  ns_per_op=       7.9  ops_per_s=   126154853  scaling= 13.54x
timezonemapper       threads= 1  ns_per_op=     112.8  ops_per_s=     8862498  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      47.5  ops_per_s=    21065655  scaling=  2.38x
timezonemapper       threads= 4  ns_per_op=      24.1  ops_per_s=    41528162  scaling=  4.69x
timezonemapper       threads= 8  ns_per_op=      12.0  ops_per_s=    83435633  scaling=  9.41x
timezonemapper       threads=12  ns_per_op=       8.0  ops_per_s=   124874331  scaling= 14.09x
timezonemapper       threads=16  ns_per_op=       6.7  ops_per_s=   150287648  scaling= 16.96x
localtimezone        threads= 1  ns_per_op=     846.8  ops_per_s=     1180981  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=     381.0  ops_per_s=     2624977  scaling=  2.22x
localtimezone        threads= 4  ns_per_op=     192.3  ops_per_s=     5200103  scaling=  4.40x
localtimezone        threads= 8  ns_per_op=      96.2  ops_per_s=    10394741  scaling=  8.80x
localtimezone        threads=12  ns_per_op=      66.7  ops_per_s=    14998434  scaling= 12.70x
localtimezone        threads=16  ns_per_op=      56.4  ops_per_s=    17719385  scaling= 15.00x
go-tz                threads= 1  ns_per_op=   55040.5  ops_per_s=       18168  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   27535.5  ops_per_s=       36317  scaling=  2.00x
go-tz                threads= 4  ns_per_op=   14158.2  ops_per_s=       70630  scaling=  3.89x
go-tz                threads= 8  ns_per_op=    6977.7  ops_per_s=      143314  scaling=  7.89x
go-tz                threads=12  ns_per_op=    4932.4  ops_per_s=      202742  scaling= 11.16x
go-tz                threads=16  ns_per_op=    4185.9  ops_per_s=      238900  scaling= 13.15x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)        threads= 1  us_per_op=    0.588  ops_per_s=     1700130  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 2  us_per_op=    0.534  ops_per_s=     1874319  scaling=  1.10x
tzfpy (DefaultFinder)        threads= 4  us_per_op=    0.512  ops_per_s=     1952837  scaling=  1.15x
tzfpy (DefaultFinder)        threads= 8  us_per_op=    0.515  ops_per_s=     1942844  scaling=  1.14x
timezonefinder               threads= 1  us_per_op=    1.287  ops_per_s=      777262  scaling=  1.00x
timezonefinder               threads= 2  us_per_op=    1.707  ops_per_s=      585673  scaling=  0.75x
timezonefinder               threads= 4  us_per_op=    1.778  ops_per_s=      562533  scaling=  0.72x
timezonefinder               threads= 8  us_per_op=    1.761  ops_per_s=      567905  scaling=  0.73x
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy+full (EmbeddedFinder)  threads= 1  us_per_op=    0.631  ops_per_s=     1583651  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 2  us_per_op=    0.598  ops_per_s=     1671506  scaling=  1.06x
tzfpy+full (EmbeddedFinder)  threads= 4  us_per_op=    0.603  ops_per_s=     1657920  scaling=  1.05x
tzfpy+full (EmbeddedFinder)  threads= 8  us_per_op=    0.661  ops_per_s=     1512095  scaling=  0.95x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     201.0  ops_per_s=     4976059  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=     101.5  ops_per_s=     9849334  scaling=  1.98x
tzf-rs DefaultFinder threads= 4  ns_per_op=      51.1  ops_per_s=    19568636  scaling=  3.93x
tzf-rs DefaultFinder threads= 8  ns_per_op=      25.2  ops_per_s=    39646728  scaling=  7.97x
tzf-rs DefaultFinder threads=12  ns_per_op=      17.3  ops_per_s=    57828832  scaling= 11.62x
tzf-rs DefaultFinder threads=16  ns_per_op=      14.9  ops_per_s=    67332672  scaling= 13.53x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=     336.7  ops_per_s=     2970086  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     161.4  ops_per_s=     6197173  scaling=  2.09x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=      80.9  ops_per_s=    12358905  scaling=  4.16x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=      40.3  ops_per_s=    24790582  scaling=  8.35x
tzf-rs EmbeddedFinder threads=12  ns_per_op=      28.0  ops_per_s=    35773358  scaling= 12.04x
tzf-rs EmbeddedFinder threads=16  ns_per_op=      23.9  ops_per_s=    41842686  scaling= 14.09x
tz-search            threads= 1  ns_per_op=     100.2  ops_per_s=     9977972  scaling=  1.00x
tz-search            threads= 2  ns_per_op=      48.4  ops_per_s=    20664007  scaling=  2.07x
tz-search            threads= 4  ns_per_op=      24.5  ops_per_s=    40882917  scaling=  4.10x
tz-search            threads= 8  ns_per_op=      12.2  ops_per_s=    82188583  scaling=  8.24x
tz-search            threads=12  ns_per_op=       8.4  ops_per_s=   119652560  scaling= 11.99x
tz-search            threads=16  ns_per_op=       7.1  ops_per_s=   141325349  scaling= 14.16x
rtz (OSM)            threads= 1  ns_per_op=    1567.3  ops_per_s=      638054  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=     758.9  ops_per_s=     1317734  scaling=  2.07x
rtz (OSM)            threads= 4  ns_per_op=     379.7  ops_per_s=     2633394  scaling=  4.13x
rtz (OSM)            threads= 8  ns_per_op=     190.6  ops_per_s=     5247492  scaling=  8.22x
rtz (OSM)            threads=12  ns_per_op=     134.6  ops_per_s=     7431579  scaling= 11.65x
rtz (OSM)            threads=16  ns_per_op=     112.3  ops_per_s=     8908395  scaling= 13.96x
rtz (NED)            threads= 1  ns_per_op=     400.8  ops_per_s=     2494836  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     188.3  ops_per_s=     5309442  scaling=  2.13x
rtz (NED)            threads= 4  ns_per_op=      94.0  ops_per_s=    10641390  scaling=  4.27x
rtz (NED)            threads= 8  ns_per_op=      46.7  ops_per_s=    21391390  scaling=  8.57x
rtz (NED)            threads=12  ns_per_op=      33.3  ops_per_s=    30047137  scaling= 12.04x
rtz (NED)            threads=16  ns_per_op=      27.7  ops_per_s=    36159068  scaling= 14.49x
```
