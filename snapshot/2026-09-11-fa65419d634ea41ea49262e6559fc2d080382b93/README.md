# Benchmark Snapshot 2026-09-11-fa65419d634ea41ea49262e6559fc2d080382b93

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
| TimezoneMapper_Random_WorldCities | 11681446 | 97.96 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 13991163 | 82.80 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10466469 | 116.0 | 83.00 | 250.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10360752 | 116.5 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3714656 | 334.8 | 208.0 | 1459 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2187166 | 539.2 | 459.0 | 1167 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 525079 | 2235 | 583.0 | 20750 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 117260 | 10238 | 9041 | 30917 | 0 | 0 |
| TZF_Full_Random_WorldCities | 2751855 | 392.7 | 208.0 | 2125 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 1796697 | 618.9 | 500.0 | 1791 | 0 | 0 |
| Localtimezone_Random_WorldCities | 48922 | 25404 | 17208 | 98333 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 57531 | 20968 | 19208 | 80584 | 16 | 1 |
| GoTZ_Random_WorldCities | 23763 | 49319 | 28375 | 265250 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30931 | 39464 | 30584 | 239416 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 332.9988 | 24,541.0047 | 714.4708 | 364.0691 | 624.9975 | 207.9978 | 6103;6102 | 1,399.6374 | 58966 | 1 |
| test_tzfpy_random_edge_cities | 520.7494 | 8,760.2511 | 852.1456 | 154.0469 | 833.2499 | 176.9986 | 46530;4500 | 1,173.5084 | 196734 | 4 |
| test_timezonefinder_random_edge_city | 958.9930 | 127,583.9968 | 14,978.6552 | 12,080.8307 | 10,874.9955 | 13,540.9937 | 7535;2798 | 66.7617 | 44693 | 1 |
| test_timezonefinder_random_city | 1,166.9981 | 11,011,583.0030 | 25,457.4359 | 439,896.3808 | 3,375.0039 | 8,124.9964 | 1;48 | 39.2813 | 626 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 375.99 | 23.78 |
| rtz_get_timezone_ned_random_edge_city | 754.00 | 28.44 |
| rtz_get_timezone_osm_random_city | 1,495.22 | 131.24 |
| rtz_get_timezone_osm_random_edge_city | 3,044.78 | 146.18 |
| spatialtime_ned | 171,744.01 | 29,130.72 |
| spatialtime_ned_random_edge_city | 166,050.09 | 19,605.25 |
| spatialtime_osm | 5,899,187.45 | 3,922,742.12 |
| spatialtime_osm_random_edge_city | 5,584,818.70 | 3,182,189.53 |
| tz_search_lookup_random_city | 101.68 | 10.10 |
| tz_search_lookup_random_edge_city | 117.62 | 1.40 |
| tzf_default_finder_random_city | 219.40 | 91.68 |
| tzf_default_finder_random_edge_city | 476.27 | 37.95 |
| tzf_embedded_finder_random_city | 1,159.12 | 55.05 |
| tzf_embedded_finder_random_edge_city | 4,668.31 | 199.22 |
| zone_detect_random_city | 432,261.98 | 106,798.33 |
| zone_detect_random_edge_city | 506,457.03 | 109,569.02 |


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
| cities | 154694 | timezonefinder           N=154694 | 0 | 0.0000 | 493 | 0.3187 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | tzfpy (DefaultFinder)    N=154694 | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| edges | 23408 | timezonefinder           N=23408 | 0 | 0.0000 | 272 | 1.1620 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzfpy (DefaultFinder)    N=23408 | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |


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
| (go runtime floor) | 4.8 | 4.8 | 0.2 | 5.0 | 5.2 | 5.2 | 0.2 |
| DefaultFinder (lite .tzm) | 5.0 | 43.6 | 13.1 | 43.7 | 43.7 | 43.7 | 38.6 |
| EmbeddedFinder (lite .tzb in place) | 5.1 | 9.0 | 0.3 | 9.3 | 9.5 | 9.5 | 4.2 |
| FullFinder (full .tzb) | 5.0 | 272.2 | 147.0 | 272.2 | 272.2 | 272.2 | 267.2 |
| bradfitz/latlong | 5.1 | 7.9 | 1.1 | 8.3 | 8.5 | 8.5 | 3.2 |
| zsefvlol/timezonemapper | 7.5 | 7.5 | 1.1 | 8.0 | 8.3 | 8.3 | 0.5 |
| albertyw/localtimezone | 6.1 | 19.3 | 2.8 | 19.7 | 19.7 | 19.7 | 13.5 |
| ugjka/go-tz | 110.3 | 110.3 | 32.6 | 110.3 | 110.4 | 110.4 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.4 | 22.4 | n/a | 22.4 | 22.4 | 22.4 | 0.0 |
| timezonefinder | 22.2 | 107.1 | n/a | 107.1 | 108.4 | 108.4 | 84.8 |
| tzfpy (DefaultFinder) | 22.4 | 61.6 | n/a | 61.5 | 61.5 | 61.6 | 39.1 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.8 | 0.0 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 46.1 | 22.8 | 46.0 | 46.0 | 46.1 | 40.2 |
| tzf-rs EmbeddedFinder | 5.8 | 9.8 | 0.0 | 9.8 | 9.9 | 9.9 | 4.0 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.6 | 4.1 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 10.0 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.7 | 64.0 | 157.7 | 170.4 | 170.4 | 151.9 |
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
DefaultFinder (lite .tzm, aliased)     open_best=    9.78  open_median=   10.70  one_core_best=   28.97  one_core_median=   30.18  alloc_mib=   35.3  allocs=   15206  (ms)
expanded (lite .tzb)                   open_best=   18.17  open_median=   18.68  one_core_best=   38.21  one_core_median=   38.99  alloc_mib=   55.9  allocs=   85855  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.69  open_median=    1.71  one_core_best=    1.66  one_core_median=    1.68  alloc_mib=    0.0  allocs=     515  (ms)
FullFinder (full .tzb, expanded)       open_best=   68.05  open_median=   69.92  one_core_best=  200.99  one_core_median=  205.13  alloc_mib=  373.5  allocs=   87633  (ms)
```

### `startup_result_python.txt`

```
startup cost per candidate (fresh interpreter per sample, best/median of 7, ms)
tzfpy (DefaultFinder)            import=    0.8  construct=    0.0  first_call=   14.6  total_best=   15.5  total_median=   15.9  (median import=0.8 construct=0.0 first_call=15.1)  (ms)
timezonefinder                   import=   43.3  construct=  245.7  first_call=    0.0  total_best=  289.0  total_median=  302.0  (median import=45.7 construct=249.7 first_call=0.0)  (ms)
```

### `startup_result_rust.txt`

```
startup cost per finder (best/median of 7 builds, construct + first query, ms)
DefaultFinder (lite .tzb, expanded)    open_best=   12.54  open_median=   13.43  (ms)
EmbeddedFinder (lite .tzb, in place)   open_best=    1.99  open_median=    2.01  (ms)
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
tzf DefaultFinder    threads= 1  ns_per_op=     350.9  ops_per_s=     2849953  scaling=  1.00x
tzf DefaultFinder    threads= 2  ns_per_op=     170.8  ops_per_s=     5853465  scaling=  2.05x
tzf DefaultFinder    threads= 4  ns_per_op=      85.6  ops_per_s=    11677750  scaling=  4.10x
tzf DefaultFinder    threads= 8  ns_per_op=      43.3  ops_per_s=    23111572  scaling=  8.11x
tzf DefaultFinder    threads=12  ns_per_op=      28.7  ops_per_s=    34823159  scaling= 12.22x
tzf DefaultFinder    threads=16  ns_per_op=      26.2  ops_per_s=    38109811  scaling= 13.37x
tzf EmbeddedFinder   threads= 1  ns_per_op=    2282.6  ops_per_s=      438106  scaling=  1.00x
tzf EmbeddedFinder   threads= 2  ns_per_op=    2761.2  ops_per_s=      362162  scaling=  0.83x
tzf EmbeddedFinder   threads= 4  ns_per_op=    3087.4  ops_per_s=      323896  scaling=  0.74x
tzf EmbeddedFinder   threads= 8  ns_per_op=    3659.8  ops_per_s=      273239  scaling=  0.62x
tzf EmbeddedFinder   threads=12  ns_per_op=    2745.9  ops_per_s=      364180  scaling=  0.83x
tzf EmbeddedFinder   threads=16  ns_per_op=    2703.4  ops_per_s=      369903  scaling=  0.84x
tzf FullFinder       threads= 1  ns_per_op=     460.4  ops_per_s=     2172156  scaling=  1.00x
tzf FullFinder       threads= 2  ns_per_op=     235.4  ops_per_s=     4247267  scaling=  1.96x
tzf FullFinder       threads= 4  ns_per_op=      96.0  ops_per_s=    10417335  scaling=  4.80x
tzf FullFinder       threads= 8  ns_per_op=      48.8  ops_per_s=    20505913  scaling=  9.44x
tzf FullFinder       threads=12  ns_per_op=      32.0  ops_per_s=    31273801  scaling= 14.40x
tzf FullFinder       threads=16  ns_per_op=      31.2  ops_per_s=    32086840  scaling= 14.77x
latlong              threads= 1  ns_per_op=     114.7  ops_per_s=     8717850  scaling=  1.00x
latlong              threads= 2  ns_per_op=      54.3  ops_per_s=    18431626  scaling=  2.11x
latlong              threads= 4  ns_per_op=      25.8  ops_per_s=    38789368  scaling=  4.45x
latlong              threads= 8  ns_per_op=      12.7  ops_per_s=    78731400  scaling=  9.03x
latlong              threads=12  ns_per_op=       8.4  ops_per_s=   119407728  scaling= 13.70x
latlong              threads=16  ns_per_op=       8.1  ops_per_s=   122896434  scaling= 14.10x
timezonemapper       threads= 1  ns_per_op=      95.9  ops_per_s=    10422276  scaling=  1.00x
timezonemapper       threads= 2  ns_per_op=      44.5  ops_per_s=    22449554  scaling=  2.15x
timezonemapper       threads= 4  ns_per_op=      22.0  ops_per_s=    45420666  scaling=  4.36x
timezonemapper       threads= 8  ns_per_op=      10.7  ops_per_s=    93052983  scaling=  8.93x
timezonemapper       threads=12  ns_per_op=       7.1  ops_per_s=   140518722  scaling= 13.48x
timezonemapper       threads=16  ns_per_op=       6.9  ops_per_s=   145399321  scaling= 13.95x
localtimezone        threads= 1  ns_per_op=   24805.5  ops_per_s=       40314  scaling=  1.00x
localtimezone        threads= 2  ns_per_op=   12637.5  ops_per_s=       79130  scaling=  1.96x
localtimezone        threads= 4  ns_per_op=    6396.7  ops_per_s=      156332  scaling=  3.88x
localtimezone        threads= 8  ns_per_op=    3182.2  ops_per_s=      314245  scaling=  7.80x
localtimezone        threads=12  ns_per_op=    2174.3  ops_per_s=      459918  scaling= 11.41x
localtimezone        threads=16  ns_per_op=    1900.7  ops_per_s=      526121  scaling= 13.05x
go-tz                threads= 1  ns_per_op=   50889.3  ops_per_s=       19650  scaling=  1.00x
go-tz                threads= 2  ns_per_op=   25831.6  ops_per_s=       38712  scaling=  1.97x
go-tz                threads= 4  ns_per_op=   13052.6  ops_per_s=       76613  scaling=  3.90x
go-tz                threads= 8  ns_per_op=    6513.7  ops_per_s=      153523  scaling=  7.81x
go-tz                threads=12  ns_per_op=    4769.9  ops_per_s=      209647  scaling= 10.67x
go-tz                threads=16  ns_per_op=    4380.2  ops_per_s=      228302  scaling= 11.62x
```

### `concurrency_result_python.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1 s budget per row, wall us per query; GIL enabled, cpu_count=16)
tzfpy (DefaultFinder)    threads= 1  us_per_op=    0.675  ops_per_s=     1481414  scaling=  1.00x
tzfpy (DefaultFinder)    threads= 2  us_per_op=    0.800  ops_per_s=     1249418  scaling=  0.84x
tzfpy (DefaultFinder)    threads= 4  us_per_op=    0.935  ops_per_s=     1069998  scaling=  0.72x
tzfpy (DefaultFinder)    threads= 8  us_per_op=    0.667  ops_per_s=     1499029  scaling=  1.01x
timezonefinder           threads= 1  us_per_op=    6.599  ops_per_s=      151533  scaling=  1.00x
timezonefinder           threads= 2  us_per_op=    5.640  ops_per_s=      177321  scaling=  1.17x
timezonefinder           threads= 4  us_per_op=    6.590  ops_per_s=      151755  scaling=  1.00x
timezonefinder           threads= 8  us_per_op=    6.702  ops_per_s=      149210  scaling=  0.98x
```

### `concurrency_result_rust.txt`

```
throughput scaling per candidate (shared instance, random world cities, 1s budget per row, wall ns per query; available_parallelism=16)
tzf-rs DefaultFinder threads= 1  ns_per_op=     213.6  ops_per_s=     4681799  scaling=  1.00x
tzf-rs DefaultFinder threads= 2  ns_per_op=     104.3  ops_per_s=     9585221  scaling=  2.05x
tzf-rs DefaultFinder threads= 4  ns_per_op=      52.3  ops_per_s=    19113536  scaling=  4.08x
tzf-rs DefaultFinder threads= 8  ns_per_op=      31.4  ops_per_s=    31846403  scaling=  6.80x
tzf-rs DefaultFinder threads=12  ns_per_op=      20.6  ops_per_s=    48570731  scaling= 10.37x
tzf-rs DefaultFinder threads=16  ns_per_op=      18.0  ops_per_s=    55455189  scaling= 11.84x
tzf-rs EmbeddedFinder threads= 1  ns_per_op=    1378.9  ops_per_s=      725192  scaling=  1.00x
tzf-rs EmbeddedFinder threads= 2  ns_per_op=     634.1  ops_per_s=     1577137  scaling=  2.17x
tzf-rs EmbeddedFinder threads= 4  ns_per_op=     310.6  ops_per_s=     3219964  scaling=  4.44x
tzf-rs EmbeddedFinder threads= 8  ns_per_op=     157.5  ops_per_s=     6349268  scaling=  8.76x
tzf-rs EmbeddedFinder threads=12  ns_per_op=     108.5  ops_per_s=     9220007  scaling= 12.71x
tzf-rs EmbeddedFinder threads=16  ns_per_op=     107.6  ops_per_s=     9292531  scaling= 12.81x
tz-search            threads= 1  ns_per_op=     106.2  ops_per_s=     9420077  scaling=  1.00x
tz-search            threads= 2  ns_per_op=      50.8  ops_per_s=    19682648  scaling=  2.09x
tz-search            threads= 4  ns_per_op=      25.2  ops_per_s=    39698442  scaling=  4.21x
tz-search            threads= 8  ns_per_op=      12.8  ops_per_s=    78066113  scaling=  8.29x
tz-search            threads=12  ns_per_op=      10.0  ops_per_s=   100490500  scaling= 10.67x
tz-search            threads=16  ns_per_op=       8.0  ops_per_s=   125354119  scaling= 13.31x
rtz (OSM)            threads= 1  ns_per_op=    1660.2  ops_per_s=      602328  scaling=  1.00x
rtz (OSM)            threads= 2  ns_per_op=     791.1  ops_per_s=     1263988  scaling=  2.10x
rtz (OSM)            threads= 4  ns_per_op=     389.1  ops_per_s=     2569988  scaling=  4.27x
rtz (OSM)            threads= 8  ns_per_op=     190.9  ops_per_s=     5238717  scaling=  8.70x
rtz (OSM)            threads=12  ns_per_op=     142.4  ops_per_s=     7024051  scaling= 11.66x
rtz (OSM)            threads=16  ns_per_op=     134.0  ops_per_s=     7461604  scaling= 12.39x
rtz (NED)            threads= 1  ns_per_op=     495.6  ops_per_s=     2017877  scaling=  1.00x
rtz (NED)            threads= 2  ns_per_op=     236.3  ops_per_s=     4231472  scaling=  2.10x
rtz (NED)            threads= 4  ns_per_op=      96.2  ops_per_s=    10390762  scaling=  5.15x
rtz (NED)            threads= 8  ns_per_op=      47.9  ops_per_s=    20882380  scaling= 10.35x
rtz (NED)            threads=12  ns_per_op=      34.4  ops_per_s=    29029641  scaling= 14.39x
rtz (NED)            threads=16  ns_per_op=      31.8  ops_per_s=    31452649  scaling= 15.59x
```
