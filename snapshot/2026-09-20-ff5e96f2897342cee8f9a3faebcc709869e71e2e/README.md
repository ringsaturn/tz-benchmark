# Benchmark Snapshot 2026-09-20-ff5e96f2897342cee8f9a3faebcc709869e71e2e

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
| TimezoneMapper_Random_WorldCities | 9793455 | 118.7 | 83.00 | 250.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 13890710 | 108.9 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 9119557 | 126.2 | 83.00 | 292.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 9911770 | 119.1 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 2715802 | 456.7 | 209.0 | 2292 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 1987303 | 623.8 | 541.0 | 1667 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 2092242 | 577.7 | 333.0 | 2875 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 955921 | 1217 | 1041 | 3042 | 0 | 0 |
| TZF_Full_Random_WorldCities | 2627060 | 464.7 | 209.0 | 3333 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 1686308 | 679.5 | 542.0 | 2125 | 0 | 0 |
| Localtimezone_Random_WorldCities | 785823 | 1307 | 1167 | 4458 | 112 | 11 |
| Localtimezone_Random_EdgeCities | 1261827 | 934.7 | 834.0 | 1625 | 112 | 11 |
| GoTZ_Random_WorldCities | 21936 | 55207 | 33792 | 279083 | 16 | 1 |
| GoTZ_Random_EdgeCities | 29433 | 41098 | 31792 | 235417 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 374.9738 | 18,167.0184 | 787.5351 | 507.2069 | 667.0016 | 166.9978 | 3408;6145 | 1,269.7847 | 50315 | 1 |
| test_tzfpy_random_edge_cities | 457.9779 | 17,832.9647 | 973.2544 | 399.4882 | 875.0358 | 333.0060 | 17186;7945 | 1,027.4806 | 167842 | 1 |
| test_timezonefinder_random_city | 832.9516 | 101,749.9599 | 1,992.8865 | 2,015.1054 | 1,250.0095 | 1,123.9899 | 494;508 | 501.7847 | 5879 | 1 |
| test_timezonefinder_random_edge_city | 832.9516 | 110,666.0347 | 2,867.3137 | 1,490.2125 | 2,916.9605 | 1,457.9855 | 12151;1342 | 348.7585 | 43167 | 1 |
| test_tzfpy_full_random_cities | 374.9738 | 15,666.9994 | 876.1148 | 481.1547 | 709.0275 | 249.9437 | 8897;10820 | 1,141.4029 | 73845 | 1 |
| test_tzfpy_full_random_edge_cities | 584.0557 | 45,666.9950 | 1,459.1743 | 687.4777 | 1,292.0354 | 541.9715 | 10966;6220 | 685.3191 | 111111 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 459.53 | 85.86 |
| rtz_get_timezone_ned_random_edge_city | 779.57 | 27.74 |
| rtz_get_timezone_osm_random_city | 1,582.86 | 151.61 |
| rtz_get_timezone_osm_random_edge_city | 3,160.00 | 182.51 |
| spatialtime_ned | 168,201.82 | 15,460.05 |
| spatialtime_ned_random_edge_city | 165,313.09 | 13,374.43 |
| spatialtime_osm | 5,811,468.80 | 3,854,555.36 |
| spatialtime_osm_random_edge_city | 5,549,797.90 | 3,103,028.78 |
| tz_search_lookup_random_city | 109.48 | 17.66 |
| tz_search_lookup_random_edge_city | 121.49 | 1.99 |
| tzf_default_finder_random_city | 230.43 | 65.87 |
| tzf_default_finder_random_edge_city | 499.63 | 41.76 |
| tzf_embedded_finder_random_city | 310.27 | 24.77 |
| tzf_embedded_finder_random_edge_city | 703.18 | 42.35 |
| zone_detect_random_city | 440,355.21 | 103,465.02 |
| zone_detect_random_edge_city | 515,196.88 | 152,193.61 |


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
| cities | 170540 | albertyw/localtimezone | 67 | 0.0393 | 190 | 0.1114 | 199 | 0.1167 | 0 | 0.0000 |
| cities | 170540 | ugjka/go-tz | 2 | 0.0012 | 0 | 0.0000 | 3 | 0.0018 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder (lite .tzm) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | EmbeddedFinder (lite .tzb) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | FullFinder (full .tzb) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder polygon-exact (GetTimezoneNames) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | bradfitz/latlong | 208 | 0.8886 | 9 | 0.0384 | 772 | 3.2980 | 150 | 0.6408 |
| edges | 23408 | zsefvlol/timezonemapper | 88 | 0.3759 | 258 | 1.1022 | 690 | 2.9477 | 0 | 0.0000 |
| edges | 23408 | albertyw/localtimezone | 51 | 0.2179 | 145 | 0.6194 | 178 | 0.7604 | 0 | 0.0000 |
| edges | 23408 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 2 | 0.0085 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder (lite .tzm) | 19 | 0.0019 | 10 | 0.0010 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | EmbeddedFinder (lite .tzb) | 19 | 0.0019 | 10 | 0.0010 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | FullFinder (full .tzb) | 0 | 0.0000 | 10 | 0.0010 | 0 | 0.0000 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder polygon-exact (GetTimezoneNames) | 19 | 0.0019 | 0 | 0.0000 | 14 | 0.0014 | 0 | 0.0000 |


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
| (go runtime floor) | 4.7 | 4.7 | 0.2 | 5.0 | 5.2 | 5.2 | 0.3 |
| DefaultFinder (lite .tzm) | 5.0 | 43.6 | 13.1 | 43.7 | 43.8 | 43.8 | 38.7 |
| EmbeddedFinder (lite .tzb in place) | 5.0 | 9.0 | 0.3 | 9.4 | 9.6 | 9.6 | 4.4 |
| FullFinder (full .tzb) | 5.1 | 267.8 | 147.6 | 267.8 | 267.8 | 267.8 | 262.8 |
| bradfitz/latlong | 5.1 | 7.8 | 1.1 | 8.1 | 8.3 | 8.3 | 3.1 |
| zsefvlol/timezonemapper | 7.4 | 7.4 | 1.1 | 7.7 | 8.0 | 8.0 | 0.4 |
| albertyw/localtimezone | 9.2 | 30.5 | 8.8 | 30.6 | 32.2 | 32.2 | 21.4 |
| ugjka/go-tz | 109.8 | 109.8 | 32.6 | 109.8 | 109.9 | 109.9 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.5 | 22.5 | n/a | 22.5 | 22.5 | 22.5 | 0.0 |
| timezonefinder | 22.5 | 74.9 | n/a | 74.9 | 75.0 | 75.0 | 52.5 |
| tzfpy (DefaultFinder) | 22.5 | 61.1 | n/a | 61.0 | 61.0 | 61.1 | 38.5 |
| tzfpy+full (EmbeddedFinder) | 22.5 | 38.2 | n/a | 38.2 | 38.2 | 38.2 | 15.7 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 0.0 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 44.7 | 22.9 | 44.6 | 44.6 | 44.7 | 38.8 |
| tzf-rs EmbeddedFinder | 5.8 | 10.3 | 0.2 | 10.4 | 10.4 | 10.4 | 4.5 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.9 | 15.1 | 15.1 | 9.0 |
| rtz NED | 5.8 | 11.7 | 4.1 | 11.7 | 11.8 | 11.8 | 5.9 |
| zone-detect | 5.8 | 10.0 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.6 | 64.0 | 157.7 | 170.0 | 170.0 | 151.8 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.2 | 14.9 | 14.9 | 8.3 |



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
DefaultFinder (lite .tzm, aliased)     open_best=    9.13  open_median=    9.83  one_core_best=   29.09  one_core_median=   30.33  alloc_mib=   35.4  allocs=   15342  (ms)
expanded (lite .tzb)                   open_best=   15.27  open_median=   16.08  one_core_best=   36.59  one_core_median=   37.58  alloc_mib=   56.1  allocs=   85954  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.45  open_median=    1.46  one_core_best=    1.42  one_core_median=    1.44  alloc_mib=    0.0  allocs=     516  (ms)
FullFinder (full .tzb, expanded)       open_best=   62.72  open_median=   65.70  one_core_best=  200.33  one_core_median=  203.28  alloc_mib=  370.7  allocs=   87819  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.7  construct=    0.0  first_call=   14.3  total_best=   15.1  total_median=   15.6  (median import=0.8 construct=0.0 first_call=14.9)  (ms)
timezonefinder                   import=   42.6  construct=   12.0  first_call=    0.0  total_best=   54.6  total_median=   55.5  (median import=43.1 construct=12.4 first_call=0.0)  (ms)
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy+full (EmbeddedFinder)      import=    0.8  construct=    0.0  first_call=    9.6  total_best=   10.5  total_median=   10.7  (median import=0.9 construct=0.0 first_call=9.9)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   11.81  open_median=   12.89  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    2.41  open_median=    2.45  (ms)
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
tzf DefaultFinder    threads= 1  ns_per_op=     369.5  ops_per_s=     2706233  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     187.4  ops_per_s=     5337474  scaling=  1.97x
tzf DefaultFinder    threads= 4  ns_per_op=      91.8  ops_per_s=    10889385  scaling=  4.02x
tzf DefaultFinder    threads= 8  ns_per_op=      44.4  ops_per_s=    22506820  scaling=  8.32x
tzf DefaultFinder    threads=12  ns_per_op=      31.1  ops_per_s=    32156769  scaling= 11.88x
tzf DefaultFinder    threads=16  ns_per_op=      28.1  ops_per_s=    35533505  scaling= 13.13x
tzf EmbeddedFinder   threads= 1  ns_per_op=     565.7  ops_per_s=     1767570  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=     277.4  ops_per_s=     3604371  scaling=  2.04x
tzf EmbeddedFinder   threads= 4  ns_per_op=     136.1  ops_per_s=     7348166  scaling=  4.16x
tzf EmbeddedFinder   threads= 8  ns_per_op=      67.1  ops_per_s=    14900012  scaling=  8.43x
tzf EmbeddedFinder   threads=12  ns_per_op=      47.0  ops_per_s=    21255341  scaling= 12.03x
tzf EmbeddedFinder   threads=16  ns_per_op=      43.2  ops_per_s=    23148569  scaling= 13.10x
tzf FullFinder       threads= 1  ns_per_op=     469.1  ops_per_s=     2131593  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     220.9  ops_per_s=     4527401  scaling=  2.12x
tzf FullFinder       threads= 4  ns_per_op=     105.9  ops_per_s=     9446136  scaling=  4.43x
tzf FullFinder       threads= 8  ns_per_op=      51.0  ops_per_s=    19598388  scaling=  9.19x
tzf FullFinder       threads=12  ns_per_op=      35.4  ops_per_s=    28249245  scaling= 13.25x
tzf FullFinder       threads=16  ns_per_op=      31.8  ops_per_s=    31454978  scaling= 14.76x
latlong              threads= 1  ns_per_op=     109.0  ops_per_s=     9174045  scaling=  1.00x
latlong              threads= 2  ns_per_op=      54.9  ops_per_s=    18216141  scaling=  1.99x
latlong              threads= 4  ns_per_op=      26.5  ops_per_s=    37709501  scaling=  4.11x
latlong              threads= 8  ns_per_op=      13.3  ops_per_s=    75350816  scaling=  8.21x
latlong              threads=12  ns_per_op=       9.3  ops_per_s=   108054657  scaling= 11.78x
latlong              threads=16  ns_per_op=       8.5  ops_per_s=   117481064  scaling= 12.81x
timezonemapper       threads= 1  ns_per_op=      97.8  ops_per_s=    10227762  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      46.8  ops_per_s=    21375881  scaling=  2.09x
timezonemapper       threads= 4  ns_per_op=      22.7  ops_per_s=    43996190  scaling=  4.30x
timezonemapper       threads= 8  ns_per_op=      11.1  ops_per_s=    89806903  scaling=  8.78x
timezonemapper       threads=12  ns_per_op=       7.8  ops_per_s=   128192613  scaling= 12.53x
timezonemapper       threads=16  ns_per_op=       7.3  ops_per_s=   137417795  scaling= 13.44x
localtimezone        threads= 1  ns_per_op=    1256.5  ops_per_s=      795840  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=     641.4  ops_per_s=     1558977  scaling=  1.96x
localtimezone        threads= 4  ns_per_op=     320.0  ops_per_s=     3124846  scaling=  3.93x
localtimezone        threads= 8  ns_per_op=     162.7  ops_per_s=     6147594  scaling=  7.72x
localtimezone        threads=12  ns_per_op=     119.2  ops_per_s=     8389749  scaling= 10.54x
localtimezone        threads=16  ns_per_op=     114.5  ops_per_s=     8735983  scaling= 10.98x
go-tz                threads= 1  ns_per_op=   54208.1  ops_per_s=       18447  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   27622.5  ops_per_s=       36202  scaling=  1.96x
go-tz                threads= 4  ns_per_op=   13811.5  ops_per_s=       72404  scaling=  3.92x
go-tz                threads= 8  ns_per_op=    6899.9  ops_per_s=      144930  scaling=  7.86x
go-tz                threads=12  ns_per_op=    5051.3  ops_per_s=      197968  scaling= 10.73x
go-tz                threads=16  ns_per_op=    4573.8  ops_per_s=      218635  scaling= 11.85x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)        threads= 1  us_per_op=    0.592  ops_per_s=     1689402  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 2  us_per_op=    0.560  ops_per_s=     1784771  scaling=  1.06x
tzfpy (DefaultFinder)        threads= 4  us_per_op=    0.531  ops_per_s=     1882157  scaling=  1.11x
tzfpy (DefaultFinder)        threads= 8  us_per_op=    0.569  ops_per_s=     1758734  scaling=  1.04x
timezonefinder               threads= 1  us_per_op=    1.283  ops_per_s=      779508  scaling=  1.00x
timezonefinder               threads= 2  us_per_op=    1.722  ops_per_s=      580707  scaling=  0.74x
timezonefinder               threads= 4  us_per_op=    1.796  ops_per_s=      556779  scaling=  0.71x
timezonefinder               threads= 8  us_per_op=    1.867  ops_per_s=      535535  scaling=  0.69x
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy+full (EmbeddedFinder)  threads= 1  us_per_op=    0.636  ops_per_s=     1572202  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 2  us_per_op=    0.638  ops_per_s=     1568089  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 4  us_per_op=    0.703  ops_per_s=     1422744  scaling=  0.90x
tzfpy+full (EmbeddedFinder)  threads= 8  us_per_op=    0.716  ops_per_s=     1396350  scaling=  0.89x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     208.2  ops_per_s=     4803089  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=     103.1  ops_per_s=     9700938  scaling=  2.02x
tzf-rs DefaultFinder threads= 4  ns_per_op=      50.3  ops_per_s=    19876865  scaling=  4.14x
tzf-rs DefaultFinder threads= 8  ns_per_op=      25.1  ops_per_s=    39773431  scaling=  8.28x
tzf-rs DefaultFinder threads=12  ns_per_op=      17.6  ops_per_s=    56676811  scaling= 11.80x
tzf-rs DefaultFinder threads=16  ns_per_op=      16.1  ops_per_s=    61946825  scaling= 12.90x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=     320.2  ops_per_s=     3123169  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     161.6  ops_per_s=     6188217  scaling=  1.98x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=      80.5  ops_per_s=    12418324  scaling=  3.98x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=      40.5  ops_per_s=    24703969  scaling=  7.91x
tzf-rs EmbeddedFinder threads=12  ns_per_op=      28.4  ops_per_s=    35173277  scaling= 11.26x
tzf-rs EmbeddedFinder threads=16  ns_per_op=      25.8  ops_per_s=    38703247  scaling= 12.39x
tz-search            threads= 1  ns_per_op=      96.5  ops_per_s=    10362545  scaling=  1.00x
tz-search            threads= 2  ns_per_op=      48.4  ops_per_s=    20661532  scaling=  1.99x
tz-search            threads= 4  ns_per_op=      24.3  ops_per_s=    41199964  scaling=  3.98x
tz-search            threads= 8  ns_per_op=      12.2  ops_per_s=    81849038  scaling=  7.90x
tz-search            threads=12  ns_per_op=       8.6  ops_per_s=   116290007  scaling= 11.22x
tz-search            threads=16  ns_per_op=       7.8  ops_per_s=   129023657  scaling= 12.45x
rtz (OSM)            threads= 1  ns_per_op=    1540.5  ops_per_s=      649136  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=     778.9  ops_per_s=     1283813  scaling=  1.98x
rtz (OSM)            threads= 4  ns_per_op=     380.6  ops_per_s=     2627415  scaling=  4.05x
rtz (OSM)            threads= 8  ns_per_op=     189.4  ops_per_s=     5279171  scaling=  8.13x
rtz (OSM)            threads=12  ns_per_op=     133.9  ops_per_s=     7465818  scaling= 11.50x
rtz (OSM)            threads=16  ns_per_op=     125.2  ops_per_s=     7986577  scaling= 12.30x
rtz (NED)            threads= 1  ns_per_op=     380.3  ops_per_s=     2629829  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     186.5  ops_per_s=     5361456  scaling=  2.04x
rtz (NED)            threads= 4  ns_per_op=      93.6  ops_per_s=    10685346  scaling=  4.06x
rtz (NED)            threads= 8  ns_per_op=      48.1  ops_per_s=    20772888  scaling=  7.90x
rtz (NED)            threads=12  ns_per_op=      33.3  ops_per_s=    30001881  scaling= 11.41x
rtz (NED)            threads=16  ns_per_op=      30.7  ops_per_s=    32570613  scaling= 12.39x
```
