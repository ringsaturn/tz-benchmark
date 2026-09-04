# Benchmark Snapshot 2026-09-04-c062a02bbc475c726f65aef7efbebebfea98f501

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
| TimezoneMapper_Random_WorldCities | 11221861 | 99.89 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14587329 | 81.66 | 42.00 | 84.00 | 0 | 0 |
| Latlong_Random_WorldCities | 10525111 | 111.9 | 83.00 | 209.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10405461 | 115.1 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3629782 | 324.1 | 208.0 | 1375 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2238242 | 532.7 | 458.0 | 1166 | 0 | 0 |
| TZF_Embedded_Random_WorldCities | 541317 | 2182 | 583.0 | 20542 | 0 | 0 |
| TZF_Embedded_Random_EdgeCities | 117746 | 10075 | 8917 | 30334 | 0 | 0 |
| TZF_Full_Random_WorldCities | 3175863 | 368.7 | 208.0 | 1791 | 0 | 0 |
| TZF_Full_Random_EdgeCities | 2083448 | 588.8 | 500.0 | 1583 | 0 | 0 |
| Localtimezone_Random_WorldCities | 48121 | 24438 | 16667 | 94500 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 56908 | 21253 | 19375 | 80750 | 16 | 1 |
| GoTZ_Random_WorldCities | 23985 | 50121 | 28916 | 261167 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30619 | 39995 | 30958 | 240125 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 333.9956 | 13,625.0019 | 746.4379 | 413.2681 | 625.0048 | 167.0123 | 4099;5491 | 1,339.6962 | 43165 | 1 |
| test_tzfpy_random_edge_cities | 416.9997 | 19,292.0124 | 932.5369 | 325.5811 | 874.9921 | 292.0133 | 26668;8812 | 1,072.3436 | 173914 | 1 |
| test_timezonefinder_random_city | 917.0035 | 10,739,542.0055 | 13,615.2324 | 93,461.1253 | 2,041.9975 | 13,793.0001 | 233;1533 | 73.4471 | 14003 | 1 |
| test_timezonefinder_random_edge_city | 1,124.9940 | 242,209.0038 | 32,271.0000 | 31,793.8782 | 20,875.0134 | 36,864.7452 | 2066;949 | 30.9876 | 15575 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 409.83 | 84.38 |
| rtz_get_timezone_ned_random_edge_city | 763.97 | 28.97 |
| rtz_get_timezone_osm_random_city | 1,533.70 | 86.51 |
| rtz_get_timezone_osm_random_edge_city | 3,108.28 | 132.79 |
| spatialtime_ned | 165,332.29 | 21,159.15 |
| spatialtime_ned_random_edge_city | 172,349.69 | 16,707.05 |
| spatialtime_osm | 5,273,922.90 | 2,448,233.97 |
| spatialtime_osm_random_edge_city | 5,626,893.75 | 4,028,255.64 |
| tz_search_lookup_random_city | 111.11 | 37.12 |
| tz_search_lookup_random_edge_city | 119.10 | 5.81 |
| tzf_default_finder_random_city | 236.09 | 24.98 |
| tzf_default_finder_random_edge_city | 486.34 | 75.04 |
| tzf_embedded_finder_random_city | 1,187.07 | 114.71 |
| tzf_embedded_finder_random_edge_city | 4,665.48 | 195.45 |
| zone_detect_random_city | 426,038.37 | 93,548.68 |
| zone_detect_random_edge_city | 499,201.82 | 115,504.37 |


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
| (go runtime floor) | 5.0 | 5.0 | 0.2 | 5.3 | 5.5 | 5.5 | 0.3 |
| DefaultFinder (lite .tzm) | 5.0 | 41.6 | 13.1 | 41.6 | 41.6 | 41.6 | 36.6 |
| EmbeddedFinder (lite .tzb in place) | 5.1 | 9.0 | 0.3 | 9.3 | 9.6 | 9.6 | 4.2 |
| FullFinder (full .tzb) | 5.1 | 274.6 | 147.0 | 274.7 | 274.8 | 274.8 | 269.6 |
| bradfitz/latlong | 5.0 | 8.0 | 1.1 | 8.4 | 8.5 | 8.5 | 3.4 |
| zsefvlol/timezonemapper | 7.3 | 7.3 | 1.1 | 7.8 | 8.2 | 8.2 | 0.5 |
| albertyw/localtimezone | 6.4 | 19.0 | 2.8 | 19.3 | 19.5 | 19.5 | 12.9 |
| ugjka/go-tz | 110.0 | 110.0 | 32.6 | 110.0 | 110.0 | 110.0 | 0.0 |


### Python

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.4 | 22.4 | n/a | 22.4 | 22.4 | 22.4 | 0.0 |
| timezonefinder | 22.5 | 110.4 | n/a | 110.4 | 113.2 | 113.2 | 87.9 |
| tzfpy (DefaultFinder) | 22.4 | 63.2 | n/a | 63.1 | 63.1 | 63.2 | 40.6 |


### Rust

| Candidate | Baseline MiB | Init peak MiB | Live MiB | RSS after load MiB | RSS after loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.8 | 0.0 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 46.2 | 22.8 | 46.1 | 46.2 | 46.2 | 40.3 |
| tzf-rs EmbeddedFinder | 5.8 | 9.8 | 0.0 | 9.8 | 9.9 | 9.9 | 4.0 |
| tz-search | 5.8 | 8.9 | 2.2 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 4.2 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.6 | 4.1 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 10.0 | 4.1 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.7 | 64.0 | 157.7 | 170.1 | 170.1 | 151.9 |
| spatialtime NED | 5.8 | 14.1 | 4.0 | 14.2 | 14.3 | 14.3 | 8.3 |
