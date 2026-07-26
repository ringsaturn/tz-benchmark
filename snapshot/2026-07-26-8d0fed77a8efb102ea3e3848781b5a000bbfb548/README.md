# Benchmark Snapshot 2026-07-26-8d0fed77a8efb102ea3e3848781b5a000bbfb548

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

## Performance

### Go

- `goos: darwin`
- `goarch: arm64`
- `pkg: github.com/ringsaturn/tz-benchmark/go`
- `cpu: Apple M3 Max`

| Benchmark | Iterations | ns/op | p50 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- |
| TimezoneMapper_Random_WorldCities | 10908528 | 95.08 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14698923 | 80.79 | 42.00 | 84.00 | 0 | 0 |
| Latlong_Random_WorldCities | 10436029 | 106.4 | 83.00 | 208.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10689661 | 111.2 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3660550 | 321.6 | 208.0 | 1375 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2166598 | 531.8 | 459.0 | 1083 | 0 | 0 |
| Localtimezone_Random_WorldCities | 50709 | 23561 | 16167 | 92334 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 59347 | 20301 | 18583 | 75291 | 16 | 1 |
| GoTZ_Random_WorldCities | 30820 | 39704 | 30708 | 239417 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30637 | 39668 | 30667 | 240416 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 416.0102 | 38,917.0018 | 980.7423 | 1,174.8571 | 708.9693 | 208.9655 | 1129;3631 | 1,019.6358 | 23622 | 1 |
| test_tzfpy_random_edge_cities | 499.9456 | 69,750.0072 | 1,235.5491 | 963.2751 | 959.0294 | 457.9779 | 10510;13004 | 809.3568 | 171408 | 1 |
| test_timezonefinder_random_edge_city | 1,207.9836 | 81,658,249.9538 | 42,224.8034 | 577,147.3854 | 22,583.9904 | 36,542.0128 | 34;1498 | 23.6828 | 22388 | 1 |
| test_timezonefinder_random_city | 1,333.0136 | 162,125.0412 | 18,877.9892 | 28,749.2626 | 5,124.9517 | 20,343.8103 | 10;8 | 52.9717 | 83 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 386.31 | 96.95 |
| rtz_get_timezone_ned_random_edge_city | 759.64 | 39.05 |
| rtz_get_timezone_osm_random_city | 1,577.66 | 239.20 |
| rtz_get_timezone_osm_random_edge_city | 3,142.42 | 431.41 |
| spatialtime_ned | 240,307.94 | 32,804.01 |
| spatialtime_ned_random_edge_city | 225,077.78 | 31,448.99 |
| spatialtime_osm | 7,638,020.85 | 4,139,843.92 |
| spatialtime_osm_random_edge_city | 7,980,337.55 | 5,372,858.95 |
| tz_search_lookup_random_city | 114.21 | 51.49 |
| tz_search_lookup_random_edge_city | 124.91 | 5.79 |
| tzf_default_finder_random_city | 227.87 | 22.54 |
| tzf_default_finder_random_edge_city | 549.93 | 104.71 |
| tzf_finder_random_city | 7,079.98 | 1,079.76 |
| tzf_finder_random_edge_city | 4,985.75 | 951.00 |
| tzf_fuzzy_finder_random_city | 137.88 | 20.63 |
| tzf_fuzzy_finder_random_edge_city | 142.33 | 8.33 |
| zone_detect_random_city | 417,754.17 | 146,240.96 |
| zone_detect_random_edge_city | 519,179.43 | 132,379.35 |


## Accuracy

### Go

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | DefaultFinder (lite+preindex) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | Finder (lite) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | FullFinder (full+preindex) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | FuzzyFinder (preindex only) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 29628 | 19.1526 |
| cities | 154694 | bradfitz/latlong | 408 | 0.2637 | 230 | 0.1487 | 1106 | 0.7150 | 166 | 0.1073 |
| cities | 154694 | zsefvlol/timezonemapper | 816 | 0.5275 | 394 | 0.2547 | 1033 | 0.6678 | 0 | 0.0000 |
| cities | 154694 | albertyw/localtimezone | 22 | 0.0142 | 6 | 0.0039 | 60 | 0.0388 | 0 | 0.0000 |
| cities | 154694 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 3 | 0.0019 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder (lite+preindex) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | Finder (lite) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | FullFinder (full+preindex) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | FuzzyFinder (preindex only) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 23407 | 99.9957 |
| edges | 23408 | bradfitz/latlong | 208 | 0.8886 | 9 | 0.0384 | 772 | 3.2980 | 150 | 0.6408 |
| edges | 23408 | zsefvlol/timezonemapper | 88 | 0.3759 | 258 | 1.1022 | 690 | 2.9477 | 0 | 0.0000 |
| edges | 23408 | albertyw/localtimezone | 22 | 0.0940 | 6 | 0.0256 | 59 | 0.2521 | 0 | 0.0000 |
| edges | 23408 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 2 | 0.0085 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder (lite+preindex) | 19 | 0.0019 | 10 | 0.0010 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | Finder (lite) | 19 | 0.0019 | 0 | 0.0000 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | FullFinder (full+preindex) | 0 | 0.0000 | 10 | 0.0010 | 0 | 0.0000 | 0 | 0.0000 |
| uniform | 1000000 | FuzzyFinder (preindex only) | 0 | 0.0000 | 10 | 0.0010 | 0 | 0.0000 | 129595 | 12.9595 |


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
| cities | 154694 | tzf-rs Finder | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzf-rs FuzzyFinder | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 29628 | 19.1526 |
| cities | 154694 | tz-search | 818 | 0.5288 | 230 | 0.1487 | 1272 | 0.8223 | 6 | 0.0039 |
| cities | 154694 | rtz OSM | 59 | 0.0381 | 3 | 0.0019 | 53 | 0.0343 | 19 | 0.0123 |
| cities | 154694 | rtz NED | 28759 | 18.5909 | 15 | 0.0097 | 75606 | 48.8746 | 23 | 0.0149 |
| edges | 23408 | tzf-rs DefaultFinder | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tzf-rs Finder | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tzf-rs FuzzyFinder | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 23407 | 99.9957 |
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
| (go runtime floor) | 4.5 | 4.5 | 0.2 | 4.8 | 5.0 | 5.0 | 0.3 |
| DefaultFinder (lite+preindex) | 5.8 | 124.3 | 32.3 | 124.3 | 124.4 | 124.4 | 118.5 |
| Finder (lite) | 5.8 | 127.8 | 30.0 | 127.9 | 127.9 | 127.9 | 122.1 |
| FullFinder (full+preindex) | 5.9 | 359.4 | 155.7 | 359.4 | 359.5 | 359.5 | 353.5 |
| FuzzyFinder (preindex only) | 5.7 | 30.4 | 2.6 | 30.4 | 30.4 | 30.4 | 24.8 |
| bradfitz/latlong | 4.9 | 7.6 | 1.1 | 8.2 | 8.4 | 8.4 | 3.3 |
| zsefvlol/timezonemapper | 7.2 | 7.2 | 1.1 | 7.6 | 8.0 | 8.0 | 0.4 |
| albertyw/localtimezone | 6.2 | 18.6 | 2.8 | 19.0 | 19.6 | 19.6 | 12.9 |
| ugjka/go-tz | 109.8 | 109.8 | 32.6 | 109.8 | 109.8 | 109.8 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.4 | 22.4 | n/a | 22.4 | 22.4 | 22.4 | 0.0 |
| timezonefinder | 22.4 | 110.3 | n/a | 110.3 | 113.1 | 113.1 | 87.9 |
| tzfpy (DefaultFinder) | 22.4 | 94.8 | n/a | 94.8 | 94.8 | 94.8 | 72.4 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.8 | 0.0 | 5.8 | 5.8 | 5.8 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 77.0 | 36.3 | 77.0 | 77.0 | 77.0 | 71.3 |
| tzf-rs Finder | 5.8 | 48.0 | 20.7 | 48.1 | 48.1 | 48.1 | 42.3 |
| tzf-rs FuzzyFinder | 5.8 | 23.8 | 5.1 | 23.8 | 23.9 | 23.9 | 18.1 |
| tz-search | 5.8 | 9.0 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.6 | 4.1 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 9.9 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 159.9 | 64.0 | 159.9 | 170.0 | 170.0 | 154.2 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.2 | 14.3 | 14.3 | 8.4 |
