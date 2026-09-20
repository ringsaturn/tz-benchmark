# Benchmark Snapshot 2026-09-20-9ff2479c9fef71c53863c48d983e29ee5a089fb3

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
| TimezoneMapper_Random_WorldCities | 11847039 | 101.2 | 42.00 | 208.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14677597 | 81.30 | 42.00 | 84.00 | 0 | 0 |
| Latlong_Random_WorldCities | 10389009 | 112.8 | 83.00 | 250.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10498928 | 113.9 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3457519 | 341.4 | 208.0 | 1417 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2166986 | 555.2 | 500.0 | 1291 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 2237100 | 537.9 | 333.0 | 2500 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 1000000 | 1166 | 1000 | 2792 | 0 | 0 |
| TZF_Full_Random_WorldCities | 2969655 | 376.1 | 208.0 | 1958 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 2009818 | 571.8 | 459.0 | 1500 | 0 | 0 |
| Localtimezone_Random_WorldCities | 912619 | 1186 | 1125 | 2000 | 112 | 11 |
| Localtimezone_Random_EdgeCities | 1358730 | 877.8 | 833.0 | 1250 | 112 | 11 |
| GoTZ_Random_WorldCities | 23026 | 52504 | 30917 | 268958 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30879 | 39579 | 30916 | 239500 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 374.9738 | 24,707.9879 | 722.5335 | 348.0566 | 625.0339 | 207.9760 | 11252;11252 | 1,384.0188 | 113199 | 1 |
| test_tzfpy_random_edge_cities | 416.9997 | 13,208.0168 | 920.6186 | 305.4459 | 874.9776 | 292.0278 | 27776;7742 | 1,086.2261 | 184603 | 1 |
| test_timezonefinder_random_edge_city | 791.9734 | 16,291.9750 | 2,519.2687 | 1,051.6926 | 2,667.0168 | 1,291.9772 | 23837;1012 | 396.9406 | 72728 | 1 |
| test_timezonefinder_random_city | 915.9558 | 217,000.0225 | 2,066.1646 | 8,733.5464 | 1,250.0095 | 208.0342 | 4;114 | 483.9885 | 622 | 1 |
| test_tzfpy_full_random_cities | 333.0060 | 19,499.9739 | 868.8302 | 567.1691 | 708.0380 | 250.0019 | 4845;6777 | 1,150.9729 | 46966 | 1 |
| test_tzfpy_full_random_edge_cities | 583.0079 | 12,249.9769 | 1,326.8318 | 512.7762 | 1,208.0418 | 500.0038 | 16345;5034 | 753.6751 | 108108 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 425.99 | 32.29 |
| rtz_get_timezone_ned_random_edge_city | 784.73 | 25.54 |
| rtz_get_timezone_osm_random_city | 1,584.27 | 97.80 |
| rtz_get_timezone_osm_random_edge_city | 3,220.59 | 164.31 |
| spatialtime_ned | 166,455.40 | 23,073.54 |
| spatialtime_ned_random_edge_city | 157,494.27 | 13,965.67 |
| spatialtime_osm | 5,323,614.60 | 2,695,364.37 |
| spatialtime_osm_random_edge_city | 5,270,281.25 | 3,442,315.61 |
| tz_search_lookup_random_city | 107.78 | 16.82 |
| tz_search_lookup_random_edge_city | 118.25 | 5.12 |
| tzf_default_finder_random_city | 231.15 | 30.16 |
| tzf_default_finder_random_edge_city | 475.45 | 18.56 |
| tzf_embedded_finder_random_city | 303.96 | 24.05 |
| tzf_embedded_finder_random_edge_city | 667.36 | 22.94 |
| zone_detect_random_city | 434,478.65 | 119,871.25 |
| zone_detect_random_edge_city | 507,496.88 | 152,289.17 |


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
| (go runtime floor) | 4.6 | 4.6 | 0.2 | 4.9 | 5.2 | 5.2 | 0.3 |
| DefaultFinder (lite .tzm) | 5.2 | 43.9 | 13.1 | 44.0 | 44.0 | 44.0 | 38.8 |
| EmbeddedFinder (lite .tzb in place) | 5.1 | 9.1 | 0.3 | 9.5 | 9.8 | 9.8 | 4.4 |
| FullFinder (full .tzb) | 5.1 | 273.5 | 147.6 | 273.5 | 273.6 | 273.6 | 268.4 |
| bradfitz/latlong | 4.9 | 7.8 | 1.1 | 8.2 | 8.4 | 8.4 | 3.3 |
| zsefvlol/timezonemapper | 7.7 | 7.7 | 1.1 | 8.1 | 8.4 | 8.4 | 0.4 |
| albertyw/localtimezone | 9.1 | 30.5 | 8.8 | 30.7 | 31.6 | 31.6 | 21.6 |
| ugjka/go-tz | 110.2 | 110.2 | 32.6 | 110.2 | 110.2 | 110.2 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.5 | 22.5 | n/a | 22.5 | 22.5 | 22.5 | 0.0 |
| timezonefinder | 22.4 | 74.9 | n/a | 74.9 | 75.0 | 75.0 | 52.5 |
| tzfpy (DefaultFinder) | 22.5 | 62.6 | n/a | 62.5 | 62.5 | 62.6 | 40.0 |
| tzfpy+full (EmbeddedFinder) | 22.3 | 38.1 | n/a | 38.1 | 38.2 | 38.2 | 15.8 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 0.0 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 47.8 | 22.9 | 47.7 | 47.7 | 47.8 | 41.8 |
| tzf-rs EmbeddedFinder | 5.8 | 10.3 | 0.2 | 10.3 | 10.4 | 10.4 | 4.5 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.7 | 4.1 | 11.7 | 11.8 | 11.8 | 5.9 |
| zone-detect | 5.8 | 10.0 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.7 | 64.0 | 157.7 | 168.8 | 168.8 | 151.9 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.2 | 14.4 | 14.4 | 8.3 |



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
DefaultFinder (lite .tzm, aliased)     open_best=    9.55  open_median=   10.07  one_core_best=   28.39  one_core_median=   28.82  alloc_mib=   35.4  allocs=   15341  (ms)
expanded (lite .tzb)                   open_best=   15.69  open_median=   16.79  one_core_best=   35.62  one_core_median=   35.98  alloc_mib=   56.1  allocs=   85956  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.41  open_median=    1.43  one_core_best=    1.39  one_core_median=    1.40  alloc_mib=    0.0  allocs=     516  (ms)
FullFinder (full .tzb, expanded)       open_best=   62.95  open_median=   65.01  one_core_best=  194.54  one_core_median=  195.53  alloc_mib=  370.7  allocs=   87818  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.7  construct=    0.0  first_call=   13.8  total_best=   14.5  total_median=   14.8  (median import=0.7 construct=0.0 first_call=14.1)  (ms)
timezonefinder                   import=   40.9  construct=   11.7  first_call=    0.0  total_best=   52.6  total_median=   53.3  (median import=41.4 construct=11.9 first_call=0.0)  (ms)
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy+full (EmbeddedFinder)      import=    0.7  construct=    0.0  first_call=    9.3  total_best=   10.1  total_median=   10.2  (median import=0.8 construct=0.0 first_call=9.4)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   11.97  open_median=   13.51  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    2.33  open_median=    2.39  (ms)
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
tzf DefaultFinder    threads= 1  ns_per_op=     340.7  ops_per_s=     2935092  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     165.9  ops_per_s=     6026118  scaling=  2.05x
tzf DefaultFinder    threads= 4  ns_per_op=      82.4  ops_per_s=    12132671  scaling=  4.13x
tzf DefaultFinder    threads= 8  ns_per_op=      42.1  ops_per_s=    23775440  scaling=  8.10x
tzf DefaultFinder    threads=12  ns_per_op=      27.8  ops_per_s=    35988211  scaling= 12.26x
tzf DefaultFinder    threads=16  ns_per_op=      24.1  ops_per_s=    41522248  scaling= 14.15x
tzf EmbeddedFinder   threads= 1  ns_per_op=     516.6  ops_per_s=     1935551  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=     265.2  ops_per_s=     3770538  scaling=  1.95x
tzf EmbeddedFinder   threads= 4  ns_per_op=     135.4  ops_per_s=     7384042  scaling=  3.81x
tzf EmbeddedFinder   threads= 8  ns_per_op=      65.9  ops_per_s=    15167622  scaling=  7.84x
tzf EmbeddedFinder   threads=12  ns_per_op=      45.8  ops_per_s=    21850464  scaling= 11.29x
tzf EmbeddedFinder   threads=16  ns_per_op=      40.7  ops_per_s=    24596225  scaling= 12.71x
tzf FullFinder       threads= 1  ns_per_op=     558.4  ops_per_s=     1790745  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     200.5  ops_per_s=     4986296  scaling=  2.78x
tzf FullFinder       threads= 4  ns_per_op=      99.1  ops_per_s=    10087116  scaling=  5.63x
tzf FullFinder       threads= 8  ns_per_op=      50.5  ops_per_s=    19809481  scaling= 11.06x
tzf FullFinder       threads=12  ns_per_op=      33.1  ops_per_s=    30251438  scaling= 16.89x
tzf FullFinder       threads=16  ns_per_op=      28.7  ops_per_s=    34785493  scaling= 19.43x
latlong              threads= 1  ns_per_op=     129.0  ops_per_s=     7749788  scaling=  1.00x
latlong              threads= 2  ns_per_op=      52.3  ops_per_s=    19137444  scaling=  2.47x
latlong              threads= 4  ns_per_op=      25.8  ops_per_s=    38726066  scaling=  5.00x
latlong              threads= 8  ns_per_op=      12.8  ops_per_s=    77955981  scaling= 10.06x
latlong              threads=12  ns_per_op=       8.5  ops_per_s=   117466451  scaling= 15.16x
latlong              threads=16  ns_per_op=       7.6  ops_per_s=   131677465  scaling= 16.99x
timezonemapper       threads= 1  ns_per_op=     131.0  ops_per_s=     7634969  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      44.0  ops_per_s=    22706348  scaling=  2.97x
timezonemapper       threads= 4  ns_per_op=      21.7  ops_per_s=    45999846  scaling=  6.02x
timezonemapper       threads= 8  ns_per_op=      10.8  ops_per_s=    92347499  scaling= 12.10x
timezonemapper       threads=12  ns_per_op=       7.6  ops_per_s=   131044126  scaling= 17.16x
timezonemapper       threads=16  ns_per_op=       6.8  ops_per_s=   147884787  scaling= 19.37x
localtimezone        threads= 1  ns_per_op=    1258.7  ops_per_s=      794478  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=     605.1  ops_per_s=     1652751  scaling=  2.08x
localtimezone        threads= 4  ns_per_op=     307.8  ops_per_s=     3248996  scaling=  4.09x
localtimezone        threads= 8  ns_per_op=     160.0  ops_per_s=     6249903  scaling=  7.87x
localtimezone        threads=12  ns_per_op=     113.3  ops_per_s=     8822749  scaling= 11.11x
localtimezone        threads=16  ns_per_op=     108.2  ops_per_s=     9238684  scaling= 11.63x
go-tz                threads= 1  ns_per_op=   52509.9  ops_per_s=       19044  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   26771.0  ops_per_s=       37354  scaling=  1.96x
go-tz                threads= 4  ns_per_op=   13791.6  ops_per_s=       72508  scaling=  3.81x
go-tz                threads= 8  ns_per_op=    7461.8  ops_per_s=      134016  scaling=  7.04x
go-tz                threads=12  ns_per_op=    5547.8  ops_per_s=      180252  scaling=  9.47x
go-tz                threads=16  ns_per_op=    4719.0  ops_per_s=      211907  scaling= 11.13x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)        threads= 1  us_per_op=    0.549  ops_per_s=     1822845  scaling=  1.00x
tzfpy (DefaultFinder)        threads= 2  us_per_op=    0.530  ops_per_s=     1887247  scaling=  1.04x
tzfpy (DefaultFinder)        threads= 4  us_per_op=    0.533  ops_per_s=     1876397  scaling=  1.03x
tzfpy (DefaultFinder)        threads= 8  us_per_op=    0.534  ops_per_s=     1871239  scaling=  1.03x
timezonefinder               threads= 1  us_per_op=    1.247  ops_per_s=      802091  scaling=  1.00x
timezonefinder               threads= 2  us_per_op=    1.703  ops_per_s=      587367  scaling=  0.73x
timezonefinder               threads= 4  us_per_op=    1.807  ops_per_s=      553274  scaling=  0.69x
timezonefinder               threads= 8  us_per_op=    1.810  ops_per_s=      552599  scaling=  0.69x
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy+full (EmbeddedFinder)  threads= 1  us_per_op=    0.626  ops_per_s=     1596643  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 2  us_per_op=    0.625  ops_per_s=     1601125  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 4  us_per_op=    0.623  ops_per_s=     1604386  scaling=  1.00x
tzfpy+full (EmbeddedFinder)  threads= 8  us_per_op=    0.626  ops_per_s=     1596732  scaling=  1.00x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     198.6  ops_per_s=     5034181  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=     100.4  ops_per_s=     9958724  scaling=  1.98x
tzf-rs DefaultFinder threads= 4  ns_per_op=      50.8  ops_per_s=    19702266  scaling=  3.91x
tzf-rs DefaultFinder threads= 8  ns_per_op=      25.2  ops_per_s=    39667422  scaling=  7.88x
tzf-rs DefaultFinder threads=12  ns_per_op=      16.9  ops_per_s=    59002096  scaling= 11.72x
tzf-rs DefaultFinder threads=16  ns_per_op=      14.7  ops_per_s=    67923438  scaling= 13.49x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=     316.7  ops_per_s=     3157552  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     157.1  ops_per_s=     6364867  scaling=  2.02x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=      80.4  ops_per_s=    12437323  scaling=  3.94x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=      40.1  ops_per_s=    24961043  scaling=  7.91x
tzf-rs EmbeddedFinder threads=12  ns_per_op=      27.0  ops_per_s=    37068536  scaling= 11.74x
tzf-rs EmbeddedFinder threads=16  ns_per_op=      23.6  ops_per_s=    42396114  scaling= 13.43x
tz-search            threads= 1  ns_per_op=     101.8  ops_per_s=     9820280  scaling=  1.00x
tz-search            threads= 2  ns_per_op=      47.3  ops_per_s=    21155533  scaling=  2.15x
tz-search            threads= 4  ns_per_op=      24.2  ops_per_s=    41391689  scaling=  4.21x
tz-search            threads= 8  ns_per_op=      12.1  ops_per_s=    82688907  scaling=  8.42x
tz-search            threads=12  ns_per_op=       8.2  ops_per_s=   122646929  scaling= 12.49x
tz-search            threads=16  ns_per_op=       7.1  ops_per_s=   140255110  scaling= 14.28x
rtz (OSM)            threads= 1  ns_per_op=    1581.6  ops_per_s=      632285  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=     741.9  ops_per_s=     1347894  scaling=  2.13x
rtz (OSM)            threads= 4  ns_per_op=     376.3  ops_per_s=     2657746  scaling=  4.20x
rtz (OSM)            threads= 8  ns_per_op=     188.0  ops_per_s=     5319502  scaling=  8.41x
rtz (OSM)            threads=12  ns_per_op=     133.0  ops_per_s=     7521350  scaling= 11.90x
rtz (OSM)            threads=16  ns_per_op=     119.0  ops_per_s=     8405065  scaling= 13.29x
rtz (NED)            threads= 1  ns_per_op=     368.2  ops_per_s=     2716029  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     182.5  ops_per_s=     5480557  scaling=  2.02x
rtz (NED)            threads= 4  ns_per_op=      92.5  ops_per_s=    10814453  scaling=  3.98x
rtz (NED)            threads= 8  ns_per_op=      46.3  ops_per_s=    21598833  scaling=  7.95x
rtz (NED)            threads=12  ns_per_op=      33.5  ops_per_s=    29892937  scaling= 11.01x
rtz (NED)            threads=16  ns_per_op=      29.3  ops_per_s=    34153218  scaling= 12.57x
```
