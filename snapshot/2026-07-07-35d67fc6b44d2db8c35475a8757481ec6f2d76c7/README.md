# Benchmark Snapshot 2026-07-07-35d67fc6b44d2db8c35475a8757481ec6f2d76c7

This file summarizes the raw benchmark outputs in this directory as Markdown tables.

Raw sources:

- `benchmark_result_go.txt`
- `benchmark_result_python.txt`
- `benchmark_result_rust.txt`
- `accuracy_result_go.txt`
- `accuracy_result_python.txt`
- `accuracy_result_rust.txt`

## Performance

### Go

- `goos: darwin`
- `goarch: arm64`
- `pkg: github.com/ringsaturn/tz-benchmark/go`
- `cpu: Apple M3 Max`

| Benchmark | Iterations | ns/op | p50 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- |
| TimezoneMapper_Random_WorldCities | 11349770 | 105.7 | 83.00 | 209.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14296088 | 81.73 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10778124 | 109.0 | 83.00 | 209.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10236010 | 115.3 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3675361 | 330.1 | 208.0 | 1459 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2352220 | 499.7 | 458.0 | 958.0 | 0 | 0 |
| Localtimezone_Random_WorldCities | 47144 | 24724 | 16417 | 99917 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 57994 | 21152 | 19292 | 86542 | 16 | 1 |
| GoTZ_Random_WorldCities | 30481 | 40222 | 31417 | 240250 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30559 | 40138 | 31333 | 244417 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 499.6546 | 23,500.0625 | 1,396.5864 | 1,259.6642 | 916.8871 | 291.9696 | 12721;15155 | 716.0316 | 97961 | 1 |
| test_tzfpy_random_edge_cities | 874.9776 | 23,291.9119 | 3,882.3671 | 1,183.2961 | 4,124.8277 | 1,542.2702 | 33883;635 | 257.5748 | 116496 | 1 |
| test_timezonefinder_random_edge_city | 917.3527 | 243,999.9953 | 30,843.3054 | 30,455.2793 | 20,542.1820 | 32,291.2820 | 3368;1819 | 32.4219 | 28169 | 1 |
| test_timezonefinder_random_city | 1,125.0377 | 11,551,708.9143 | 32,018.4037 | 472,015.6476 | 2,874.9928 | 13,426.7611 | 1;62 | 31.2320 | 599 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 390.97 | 30.45 |
| rtz_get_timezone_ned_random_edge_city | 760.42 | 29.16 |
| rtz_get_timezone_osm_random_city | 1,548.50 | 214.02 |
| rtz_get_timezone_osm_random_edge_city | 3,054.46 | 192.30 |
| spatialtime_ned | 223,212.63 | 36,126.74 |
| spatialtime_ned_random_edge_city | 217,573.31 | 26,254.67 |
| spatialtime_osm | 7,324,275.05 | 4,231,267.93 |
| spatialtime_osm_random_edge_city | 7,605,179.20 | 3,766,466.61 |
| tz_search_lookup_random_city | 135.58 | 103.32 |
| tz_search_lookup_random_edge_city | 128.44 | 9.34 |
| tzf_default_finder_random_city | 307.42 | 124.16 |
| tzf_default_finder_random_edge_city | 767.09 | 57.36 |
| tzf_finder_random_city | 6,249.29 | 1,117.34 |
| tzf_finder_random_edge_city | 4,411.57 | 439.69 |
| tzf_fuzzy_finder_random_city | 154.70 | 20.78 |
| tzf_fuzzy_finder_random_edge_city | 162.36 | 1.63 |
| zone_detect_random_city | 441,177.61 | 116,369.33 |
| zone_detect_random_edge_city | 493,789.06 | 128,133.77 |


## Accuracy

### Go

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | DefaultFinder (lite+preindex) | 2 | 0.0013 | 3 | 0.0019 | 0 | 0.0000 |
| cities | 154694 | Finder (lite) | 2 | 0.0013 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | FullFinder (full+preindex) | 0 | 0.0000 | 3 | 0.0019 | 0 | 0.0000 |
| cities | 154694 | FuzzyFinder (preindex only) | 0 | 0.0000 | 3 | 0.0019 | 23474 | 15.1745 |
| cities | 154694 | bradfitz/latlong | 1513 | 0.9781 | 230 | 0.1487 | 166 | 0.1073 |
| cities | 154694 | zsefvlol/timezonemapper | 1848 | 1.1946 | 394 | 0.2547 | 0 | 0.0000 |
| cities | 154694 | albertyw/localtimezone | 82 | 0.0530 | 6 | 0.0039 | 0 | 0.0000 |
| cities | 154694 | ugjka/go-tz | 2 | 0.0013 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder (lite+preindex) | 2 | 0.0085 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | Finder (lite) | 2 | 0.0085 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | FullFinder (full+preindex) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | FuzzyFinder (preindex only) | 0 | 0.0000 | 0 | 0.0000 | 23408 | 100.0000 |
| edges | 23408 | bradfitz/latlong | 979 | 4.1823 | 9 | 0.0384 | 150 | 0.6408 |
| edges | 23408 | zsefvlol/timezonemapper | 777 | 3.3194 | 258 | 1.1022 | 0 | 0.0000 |
| edges | 23408 | albertyw/localtimezone | 81 | 0.3460 | 6 | 0.0256 | 0 | 0.0000 |
| edges | 23408 | ugjka/go-tz | 1 | 0.0043 | 0 | 0.0000 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder (lite+preindex) | 38 | 0.0038 | 18 | 0.0018 | 0 | 0.0000 |
| uniform | 1000000 | Finder (lite) | 35 | 0.0035 | 0 | 0.0000 | 0 | 0.0000 |
| uniform | 1000000 | FullFinder (full+preindex) | 3 | 0.0003 | 18 | 0.0018 | 0 | 0.0000 |
| uniform | 1000000 | FuzzyFinder (preindex only) | 3 | 0.0003 | 18 | 0.0018 | 116277 | 11.6277 |


### Python

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | timezonefinder | 493 | 0.3187 |  |  | 0 | 0.0000 |
| cities | 154694 | tzfpy (DefaultFinder) | 5 | 0.0032 |  |  | 0 | 0.0000 |
| edges | 23408 | timezonefinder | 272 | 1.1620 |  |  | 0 | 0.0000 |
| edges | 23408 | tzfpy (DefaultFinder) | 2 | 0.0085 |  |  | 0 | 0.0000 |


### Rust

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | tzf-rs DefaultFinder | 5 | 0.0032 |  |  | 0 | 0.0000 |
| cities | 154694 | tzf-rs Finder | 2 | 0.0013 |  |  | 0 | 0.0000 |
| cities | 154694 | tzf-rs FuzzyFinder | 3 | 0.0019 |  |  | 23474 | 15.1745 |
| cities | 154694 | tz-search | 2319 | 1.4991 |  |  | 6 | 0.0039 |
| cities | 154694 | rtz OSM | 114 | 0.0737 |  |  | 19 | 0.0123 |
| cities | 154694 | rtz NED | 104380 | 67.4751 |  |  | 23 | 0.0149 |
| edges | 23408 | tzf-rs DefaultFinder | 2 | 0.0085 |  |  | 0 | 0.0000 |
| edges | 23408 | tzf-rs Finder | 2 | 0.0085 |  |  | 0 | 0.0000 |
| edges | 23408 | tzf-rs FuzzyFinder | 0 | 0.0000 |  |  | 23408 | 100.0000 |
| edges | 23408 | tz-search | 1208 | 5.1606 |  |  | 5 | 0.0214 |
| edges | 23408 | rtz OSM | 45 | 0.1922 |  |  | 19 | 0.0812 |
| edges | 23408 | rtz NED | 19249 | 82.2326 |  |  | 9 | 0.0384 |
