# Benchmark Snapshot 2026-10-11-42a02ff1b95e589cb1b8b4558299ef29d3a5a78e

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
| TimezoneMapper_Random_WorldCities | 9864912 | 232.8 | 83.00 | 250.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 7821810 | 197.1 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 3935539 | 300.1 | 83.00 | 292.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10099215 | 305.9 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 1661935 | 764.2 | 208.0 | 2500 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 991299 | 1251 | 541.0 | 2041 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 1000000 | 1301 | 333.0 | 2834 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 935906 | 2793 | 1083 | 3250 | 0 | 0 |
| TZF_Full_Random_WorldCities | 1683734 | 1038 | 209.0 | 2750 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 703125 | 1429 | 542.0 | 2416 | 0 | 0 |
| Localtimezone_Random_WorldCities | 940714 | 2143 | 1125 | 3667 | 112 | 11 |
| Localtimezone_Random_EdgeCities | 1000000 | 1301 | 791.0 | 1875 | 112 | 11 |
| GoTZ_Random_WorldCities | 21961 | 96442 | 34834 | 304834 | 16 | 1 |
| GoTZ_Random_EdgeCities | 29702 | 82577 | 33083 | 264875 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 374.9738 | 14,952,916.0699 | 1,111.4667 | 52,719.5984 | 707.9216 | 208.1506 | 2;14436 | 899.7121 | 109590 | 1 |
| test_tzfpy_random_edge_cities | 458.9092 | 51,583.0470 | 1,042.9044 | 564.6580 | 917.0035 | 333.9956 | 10238;9210 | 958.8606 | 170213 | 1 |
| test_timezonefinder_random_edge_city | 832.9516 | 25,287,125.0268 | 3,889.5905 | 163,887.5079 | 2,833.0833 | 1,417.0073 | 2;1710 | 257.0965 | 46067 | 1 |
| test_timezonefinder_random_city | 957.9817 | 153,167.0569 | 2,491.8579 | 3,627.0352 | 1,374.9814 | 1,500.0114 | 169;262 | 401.3070 | 3505 | 1 |
| test_tzfpy_full_random_cities | 374.9738 | 19,708.0662 | 854.5702 | 469.2930 | 708.9693 | 249.9437 | 5240;6132 | 1,170.1788 | 44611 | 1 |
| test_tzfpy_full_random_edge_cities | 583.0079 | 161,899,416.9403 | 3,890.6014 | 592,742.6889 | 1,208.9731 | 500.0038 | 4;5367 | 257.0297 | 75948 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 484.27 | 1,870.09 |
| rtz_get_timezone_ned_random_edge_city | 819.20 | 8,210.03 |
| rtz_get_timezone_osm_random_city | 1,666.48 | 12,936.96 |
| rtz_get_timezone_osm_random_edge_city | 3,580.99 | 518.79 |
| spatialtime_ned | 168,359.77 | 266,021.74 |
| spatialtime_ned_random_edge_city | 169,322.52 | 947,351.56 |
| spatialtime_osm | 5,976,824.90 | 44,895,656.65 |
| spatialtime_osm_random_edge_city | 6,651,120.90 | 44,157,754.56 |
| tz_search_lookup_random_city | 116.27 | 1,341.74 |
| tz_search_lookup_random_edge_city | 118.88 | 10.23 |
| tzf_default_finder_random_city | 226.52 | 2,323.12 |
| tzf_default_finder_random_edge_city | 505.92 | 5,300.22 |
| tzf_embedded_finder_random_city | 334.24 | 3,135.82 |
| tzf_embedded_finder_random_edge_city | 691.01 | 3,716.91 |
| zone_detect_random_city | 474,796.25 | 1,596,697.21 |
| zone_detect_random_edge_city | 548,431.25 | 4,733,023.18 |


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
| cities | 170540 | ugjka/go-tz | 2 | 0.0012 | 0 | 0.0000 | 2 | 0.0012 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder (lite .tzm) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | EmbeddedFinder (lite .tzb) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | FullFinder (full .tzb) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder polygon-exact (GetTimezoneNames) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | bradfitz/latlong | 208 | 0.8886 | 9 | 0.0384 | 772 | 3.2980 | 150 | 0.6408 |
| edges | 23408 | zsefvlol/timezonemapper | 88 | 0.3759 | 258 | 1.1022 | 690 | 2.9477 | 0 | 0.0000 |
| edges | 23408 | albertyw/localtimezone | 51 | 0.2179 | 145 | 0.6194 | 178 | 0.7604 | 0 | 0.0000 |
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
| (go runtime floor) | 5.2 | 5.2 | 0.3 | 5.5 | 5.6 | 5.6 | 0.3 |
| DefaultFinder (lite .tzm) | 5.6 | 41.0 | 13.3 | 41.0 | 41.0 | 41.0 | 35.5 |
| EmbeddedFinder (lite .tzb in place) | 5.4 | 9.4 | 0.4 | 10.0 | 10.2 | 10.2 | 4.6 |
| FullFinder (full .tzb) | 5.6 | 288.5 | 148.3 | 288.5 | 288.6 | 288.6 | 282.9 |
| bradfitz/latlong | 5.5 | 7.7 | 1.2 | 8.1 | 8.3 | 8.3 | 2.5 |
| zsefvlol/timezonemapper | 7.8 | 7.8 | 1.2 | 8.2 | 8.7 | 8.7 | 0.5 |
| albertyw/localtimezone | 9.7 | 30.8 | 8.9 | 30.8 | 32.6 | 32.6 | 21.2 |
| ugjka/go-tz | 111.2 | 111.2 | 32.7 | 111.2 | 111.3 | 111.3 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.5 | 22.6 | n/a | 22.6 | 22.6 | 22.6 | 0.0 |
| timezonefinder | 22.3 | 74.8 | n/a | 74.8 | 74.9 | 74.9 | 52.5 |
| tzfpy (DefaultFinder) | 22.6 | 61.8 | n/a | 61.7 | 61.7 | 61.8 | 39.1 |
| tzfpy+full (EmbeddedFinder) | 22.3 | 38.5 | n/a | 38.5 | 38.5 | 38.5 | 16.1 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.8 | 0.0 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 48.0 | 23.1 | 48.0 | 48.0 | 48.0 | 42.2 |
| tzf-rs EmbeddedFinder | 5.8 | 10.2 | 0.2 | 10.2 | 10.2 | 10.2 | 4.4 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.7 | 4.2 | 14.7 | 14.9 | 14.9 | 8.9 |
| rtz NED | 5.8 | 11.7 | 4.1 | 11.7 | 11.8 | 11.8 | 5.9 |
| zone-detect | 5.8 | 10.0 | 4.1 | 10.0 | 10.0 | 10.0 | 4.2 |
| spatialtime OSM | 5.8 | 159.9 | 64.0 | 159.9 | 171.9 | 171.9 | 154.2 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.2 | 15.3 | 15.3 | 8.4 |



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
DefaultFinder (lite .tzm, aliased)     open_best=    9.26  open_median=   20.78  one_core_best=   29.29  one_core_median=   31.75  alloc_mib=   35.7  allocs=   15379  (ms)
expanded (lite .tzb)                   open_best=   14.42  open_median=   15.52  one_core_best=   36.53  one_core_median=   37.40  alloc_mib=   56.5  allocs=   84958  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.41  open_median=    2.86  one_core_best=    1.36  one_core_median=    1.40  alloc_mib=    0.0  allocs=     516  (ms)
FullFinder (full .tzb, expanded)       open_best=   64.73  open_median=   80.18  one_core_best=  273.27  one_core_median=  382.83  alloc_mib=  372.6  allocs=   87890  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.9  construct=    0.0  first_call=   14.3  total_best=   15.2  total_median=   18.2  (median import=0.9 construct=0.0 first_call=17.2)  (ms)
timezonefinder                   import=   44.1  construct=   12.6  first_call=    0.0  total_best=   56.7  total_median=   60.8  (median import=47.9 construct=12.5 first_call=0.0)  (ms)
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy+full (EmbeddedFinder)      import=    0.8  construct=    0.0  first_call=    9.7  total_best=   10.5  total_median=   10.9  (median import=0.9 construct=0.0 first_call=9.9)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   11.99  open_median=   12.54  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    2.48  open_median=   14.34  (ms)
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
tzf DefaultFinder    threads= 1  ns_per_op=     608.6  ops_per_s=     1643003  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     632.3  ops_per_s=     1581462  scaling=  0.96x
tzf DefaultFinder    threads= 4  ns_per_op=     178.4  ops_per_s=     5604860  scaling=  3.41x
tzf DefaultFinder    threads= 8  ns_per_op=      80.5  ops_per_s=    12428310  scaling=  7.56x
tzf DefaultFinder    threads=12  ns_per_op=      69.8  ops_per_s=    14330643  scaling=  8.72x
tzf DefaultFinder    threads=16  ns_per_op=      67.0  ops_per_s=    14927000  scaling=  9.09x
tzf EmbeddedFinder   threads= 1  ns_per_op=    1070.6  ops_per_s=      934037  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=     681.7  ops_per_s=     1466829  scaling=  1.57x
tzf EmbeddedFinder   threads= 4  ns_per_op=     235.9  ops_per_s=     4239714  scaling=  4.54x
tzf EmbeddedFinder   threads= 8  ns_per_op=     125.3  ops_per_s=     7978190  scaling=  8.54x
tzf EmbeddedFinder   threads=12  ns_per_op=      97.2  ops_per_s=    10283213  scaling= 11.01x
tzf EmbeddedFinder   threads=16  ns_per_op=      98.0  ops_per_s=    10208444  scaling= 10.93x
tzf FullFinder       threads= 1  ns_per_op=     937.6  ops_per_s=     1066577  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     332.7  ops_per_s=     3005373  scaling=  2.82x
tzf FullFinder       threads= 4  ns_per_op=     209.1  ops_per_s=     4782304  scaling=  4.48x
tzf FullFinder       threads= 8  ns_per_op=     111.3  ops_per_s=     8983976  scaling=  8.42x
tzf FullFinder       threads=12  ns_per_op=      92.0  ops_per_s=    10870638  scaling= 10.19x
tzf FullFinder       threads=16  ns_per_op=      75.6  ops_per_s=    13224469  scaling= 12.40x
latlong              threads= 1  ns_per_op=     270.6  ops_per_s=     3695108  scaling=  1.00x
latlong              threads= 2  ns_per_op=     113.1  ops_per_s=     8842192  scaling=  2.39x
latlong              threads= 4  ns_per_op=      61.3  ops_per_s=    16315336  scaling=  4.42x
latlong              threads= 8  ns_per_op=      21.3  ops_per_s=    47002790  scaling= 12.72x
latlong              threads=12  ns_per_op=      20.9  ops_per_s=    47805306  scaling= 12.94x
latlong              threads=16  ns_per_op=      20.2  ops_per_s=    49383778  scaling= 13.36x
timezonemapper       threads= 1  ns_per_op=     182.8  ops_per_s=     5471831  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      91.3  ops_per_s=    10949212  scaling=  2.00x
timezonemapper       threads= 4  ns_per_op=      43.3  ops_per_s=    23092397  scaling=  4.22x
timezonemapper       threads= 8  ns_per_op=      21.7  ops_per_s=    46109890  scaling=  8.43x
timezonemapper       threads=12  ns_per_op=      14.3  ops_per_s=    69787582  scaling= 12.75x
timezonemapper       threads=16  ns_per_op=      14.9  ops_per_s=    67067009  scaling= 12.26x
localtimezone        threads= 1  ns_per_op=    2135.9  ops_per_s=      468183  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=    1058.0  ops_per_s=      945207  scaling=  2.02x
localtimezone        threads= 4  ns_per_op=     532.0  ops_per_s=     1879861  scaling=  4.02x
localtimezone        threads= 8  ns_per_op=     262.5  ops_per_s=     3808988  scaling=  8.14x
localtimezone        threads=12  ns_per_op=     189.4  ops_per_s=     5280489  scaling= 11.28x
localtimezone        threads=16  ns_per_op=     215.6  ops_per_s=     4637340  scaling=  9.90x
go-tz                threads= 1  ns_per_op=  111833.3  ops_per_s=        8942  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   60171.3  ops_per_s=       16619  scaling=  1.86x
go-tz                threads= 4  ns_per_op=   22418.5  ops_per_s=       44606  scaling=  4.99x
go-tz                threads= 8  ns_per_op=   13173.8  ops_per_s=       75908  scaling=  8.49x
go-tz                threads=12  ns_per_op=    9208.2  ops_per_s=      108598  scaling= 12.14x
go-tz                threads=16  ns_per_op=    8561.4  ops_per_s=      116803  scaling= 13.06x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)        threads= 1  us_per_op=    1.709  ops_per_s=      585114  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 2  us_per_op=    1.354  ops_per_s=      738339  scaling=  1.26x
tzfpy (DefaultFinder)        threads= 4  us_per_op=    0.984  ops_per_s=     1016263  scaling=  1.74x
tzfpy (DefaultFinder)        threads= 8  us_per_op=    0.982  ops_per_s=     1017974  scaling=  1.74x
timezonefinder               threads= 1  us_per_op=    2.567  ops_per_s=      389547  scaling=  1.00x
timezonefinder               threads= 2  us_per_op=    2.681  ops_per_s=      372938  scaling=  0.96x
timezonefinder               threads= 4  us_per_op=    3.003  ops_per_s=      333055  scaling=  0.85x
timezonefinder               threads= 8  us_per_op=    2.837  ops_per_s=      352432  scaling=  0.90x
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy+full (EmbeddedFinder)  threads= 1  us_per_op=    1.323  ops_per_s=      755859  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 2  us_per_op=    1.431  ops_per_s=      698938  scaling=  0.92x
tzfpy+full (EmbeddedFinder)  threads= 4  us_per_op=    1.547  ops_per_s=      646316  scaling=  0.86x
tzfpy+full (EmbeddedFinder)  threads= 8  us_per_op=    1.338  ops_per_s=      747393  scaling=  0.99x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     403.3  ops_per_s=     2479655  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=     164.8  ops_per_s=     6067797  scaling=  2.45x
tzf-rs DefaultFinder threads= 4  ns_per_op=     103.7  ops_per_s=     9647817  scaling=  3.89x
tzf-rs DefaultFinder threads= 8  ns_per_op=      53.0  ops_per_s=    18870377  scaling=  7.61x
tzf-rs DefaultFinder threads=12  ns_per_op=      35.7  ops_per_s=    28021804  scaling= 11.30x
tzf-rs DefaultFinder threads=16  ns_per_op=      29.9  ops_per_s=    33424280  scaling= 13.48x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=     381.6  ops_per_s=     2620541  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     175.4  ops_per_s=     5700364  scaling=  2.18x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=      82.5  ops_per_s=    12118652  scaling=  4.62x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=      40.7  ops_per_s=    24558501  scaling=  9.37x
tzf-rs EmbeddedFinder threads=12  ns_per_op=      51.7  ops_per_s=    19342304  scaling=  7.38x
tzf-rs EmbeddedFinder threads=16  ns_per_op=      51.6  ops_per_s=    19394190  scaling=  7.40x
tz-search            threads= 1  ns_per_op=     156.8  ops_per_s=     6375553  scaling=  1.00x
tz-search            threads= 2  ns_per_op=     101.8  ops_per_s=     9820931  scaling=  1.54x
tz-search            threads= 4  ns_per_op=      43.6  ops_per_s=    22944976  scaling=  3.60x
tz-search            threads= 8  ns_per_op=      20.9  ops_per_s=    47764329  scaling=  7.49x
tz-search            threads=12  ns_per_op=      15.2  ops_per_s=    65994908  scaling= 10.35x
tz-search            threads=16  ns_per_op=      14.9  ops_per_s=    66990189  scaling= 10.51x
rtz (OSM)            threads= 1  ns_per_op=    2900.1  ops_per_s=      344811  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=    1324.4  ops_per_s=      755086  scaling=  2.19x
rtz (OSM)            threads= 4  ns_per_op=     591.1  ops_per_s=     1691735  scaling=  4.91x
rtz (OSM)            threads= 8  ns_per_op=     385.9  ops_per_s=     2591434  scaling=  7.52x
rtz (OSM)            threads=12  ns_per_op=     232.5  ops_per_s=     4300254  scaling= 12.47x
rtz (OSM)            threads=16  ns_per_op=     219.0  ops_per_s=     4565535  scaling= 13.24x
rtz (NED)            threads= 1  ns_per_op=     920.5  ops_per_s=     1086336  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     308.6  ops_per_s=     3240179  scaling=  2.98x
rtz (NED)            threads= 4  ns_per_op=     193.1  ops_per_s=     5178092  scaling=  4.77x
rtz (NED)            threads= 8  ns_per_op=      91.3  ops_per_s=    10948959  scaling= 10.08x
rtz (NED)            threads=12  ns_per_op=      59.6  ops_per_s=    16778603  scaling= 15.45x
rtz (NED)            threads=16  ns_per_op=      69.7  ops_per_s=    14356333  scaling= 13.22x
```
