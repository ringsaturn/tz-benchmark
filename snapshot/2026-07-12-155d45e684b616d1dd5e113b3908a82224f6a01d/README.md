# Benchmark Snapshot 2026-07-12-155d45e684b616d1dd5e113b3908a82224f6a01d

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
| TimezoneMapper_Random_WorldCities | 11484250 | 122.4 | 42.00 | 209.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14400518 | 81.70 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10766128 | 108.1 | 83.00 | 209.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10590781 | 112.1 | 83.00 | 166.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3598111 | 363.0 | 208.0 | 2000 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 1969363 | 588.3 | 500.0 | 1459 | 0 | 0 |
| Localtimezone_Random_WorldCities | 48334 | 24567 | 16667 | 94084 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 56683 | 21048 | 19250 | 80542 | 16 | 1 |
| GoTZ_Random_WorldCities | 30477 | 39943 | 30875 | 240083 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30820 | 41003 | 31708 | 242625 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 375.0320 | 78,291.9815 | 1,070.6431 | 1,233.5966 | 708.9693 | 250.0019 | 2047;4912 | 934.0181 | 30342 | 1 |
| test_tzfpy_random_edge_cities | 458.9674 | 43,332.9842 | 1,175.7014 | 812.9043 | 958.9712 | 416.9997 | 10949;12639 | 850.5561 | 187513 | 1 |
| test_timezonefinder_random_edge_city | 1,000.0076 | 260,250.0026 | 31,490.5114 | 30,599.9292 | 21,125.0153 | 31,395.4952 | 1732;930 | 31.7556 | 14176 | 1 |
| test_timezonefinder_random_city | 1,709.0351 | 256,333.9658 | 21,351.6297 | 36,939.9190 | 6,667.0473 | 21,676.7512 | 8;8 | 46.8348 | 73 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 404.78 | 111.57 |
| rtz_get_timezone_ned_random_edge_city | 767.13 | 47.79 |
| rtz_get_timezone_osm_random_city | 1,585.67 | 149.17 |
| rtz_get_timezone_osm_random_edge_city | 3,056.24 | 171.23 |
| spatialtime_ned | 217,712.41 | 23,796.46 |
| spatialtime_ned_random_edge_city | 212,511.85 | 28,755.96 |
| spatialtime_osm | 6,798,008.30 | 4,373,027.91 |
| spatialtime_osm_random_edge_city | 7,800,975.00 | 4,629,880.80 |
| tz_search_lookup_random_city | 109.98 | 7.90 |
| tz_search_lookup_random_edge_city | 126.78 | 2.38 |
| tzf_default_finder_random_city | 223.27 | 83.18 |
| tzf_default_finder_random_edge_city | 533.05 | 14.44 |
| tzf_finder_random_city | 6,940.76 | 600.79 |
| tzf_finder_random_edge_city | 4,969.46 | 448.71 |
| tzf_fuzzy_finder_random_city | 138.49 | 6.06 |
| tzf_fuzzy_finder_random_edge_city | 145.34 | 4.80 |
| zone_detect_random_city | 427,798.96 | 154,985.11 |
| zone_detect_random_edge_city | 508,624.74 | 122,359.40 |


## Accuracy

### Go

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | DefaultFinder (lite+preindex) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | Finder (lite) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | FullFinder (full+preindex) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | FuzzyFinder (preindex only) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 23506 | 15.1952 |
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
| uniform | 1000000 | DefaultFinder (lite+preindex) | 21 | 0.0021 | 11 | 0.0011 | 15 | 0.0015 | 0 | 0.0000 |
| uniform | 1000000 | Finder (lite) | 19 | 0.0019 | 0 | 0.0000 | 14 | 0.0014 | 0 | 0.0000 |
| uniform | 1000000 | FullFinder (full+preindex) | 2 | 0.0002 | 11 | 0.0011 | 1 | 0.0001 | 0 | 0.0000 |
| uniform | 1000000 | FuzzyFinder (preindex only) | 2 | 0.0002 | 11 | 0.0011 | 1 | 0.0001 | 116603 | 11.6603 |


### Python

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | timezonefinder           N=154694 | 0 | 0.0000 | 493 | 0.3187 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzfpy (DefaultFinder)    N=154694 | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| edges | 23408 | timezonefinder           N=23408 | 0 | 0.0000 | 272 | 1.1620 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tzfpy (DefaultFinder)    N=23408 | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |


### Rust

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | tzf-rs DefaultFinder | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzf-rs Finder | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzf-rs FuzzyFinder | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 23506 | 15.1952 |
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

### Go

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (go runtime floor) | 4.6 | 4.9 | 5.0 | 5.0 | 0.3 |
| DefaultFinder (lite+preindex) | 5.8 | 120.6 | 120.6 | 120.6 | 114.8 |
| Finder (lite) | 5.6 | 121.1 | 121.1 | 121.1 | 115.4 |
| FullFinder (full+preindex) | 5.9 | 354.3 | 354.3 | 354.3 | 348.4 |
| FuzzyFinder (preindex only) | 5.8 | 31.1 | 31.1 | 31.1 | 25.3 |
| bradfitz/latlong | 4.9 | 8.2 | 8.4 | 8.4 | 3.3 |
| zsefvlol/timezonemapper | 7.4 | 7.8 | 8.0 | 8.0 | 0.5 |
| albertyw/localtimezone | 6.0 | 19.1 | 19.4 | 19.4 | 13.0 |
| ugjka/go-tz | 109.9 | 109.9 | 109.9 | 109.9 | 0.0 |


### Python

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.5 | 22.5 | 22.5 | 22.5 | 0.0 |
| timezonefinder | 22.6 | 109.4 | 111.7 | 111.7 | 86.8 |
| tzfpy (DefaultFinder) | 22.5 | 94.8 | 94.8 | 94.8 | 72.3 |


### Rust

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 78.8 | 78.8 | 78.8 | 73.0 |
| tzf-rs Finder | 5.8 | 48.5 | 48.5 | 48.5 | 42.7 |
| tzf-rs FuzzyFinder | 5.8 | 24.1 | 24.1 | 24.1 | 18.3 |
| tz-search | 5.8 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 15.0 | 15.0 | 9.1 |
| rtz NED | 5.8 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.6 | 170.3 | 170.3 | 151.9 |
| spatialtime NED | 5.8 | 14.1 | 14.5 | 14.5 | 8.4 |
