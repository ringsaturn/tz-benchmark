# Benchmark Snapshot 2026-07-07-6a4e0c11b11578e33d1e8a7dfce3792474d57a88

This file summarizes the raw benchmark outputs in this directory as Markdown tables.

Raw sources:

- `benchmark_result_go.txt`
- `benchmark_result_python.txt`
- `benchmark_result_rust.txt`
- `accuracy_result_go.txt`
- `accuracy_result_python.txt`
- `accuracy_result_rust.txt`

## Go

- `goos: darwin`
- `goarch: arm64`
- `pkg: github.com/ringsaturn/tz-benchmark/go`
- `cpu: Apple M3 Max`

| Benchmark | Iterations | ns/op | p50 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- |
| TimezoneMapper_Random_WorldCities | 11983731 | 102.4 | 83.00 | 208.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14430108 | 99.79 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 8940538 | 146.0 | 83.00 | 292.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10277840 | 114.4 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3761986 | 325.5 | 208.0 | 1375 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2314773 | 559.1 | 500.0 | 1250 | 0 | 0 |
| Localtimezone_Random_WorldCities | 47431 | 29879 | 17250 | 105875 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 56407 | 25889 | 19959 | 88458 | 16 | 1 |
| GoTZ_Random_WorldCities | 29212 | 40535 | 31583 | 235083 | 16 | 1 |
| GoTZ_Random_EdgeCities | 29452 | 41416 | 32292 | 240750 | 16 | 1 |


## Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 541.5641 | 45,333.9890 | 1,837.1628 | 2,234.4262 | 1,042.1500 | 500.1202 | 1357;1868 | 544.3176 | 10275 | 1 |
| test_tzfpy_random_edge_cities | 874.9776 | 78,999.9031 | 4,499.6481 | 1,836.7743 | 4,374.8878 | 1,625.1579 | 27683;8086 | 222.2396 | 118817 | 1 |
| test_timezonefinder_random_city | 917.3527 | 10,646,541.1372 | 13,846.7446 | 102,820.9545 | 2,499.6698 | 14,584.0459 | 73;1074 | 72.2191 | 11236 | 1 |
| test_timezonefinder_random_edge_city | 1,167.4128 | 245,791.8599 | 33,173.1246 | 31,674.7227 | 22,457.9126 | 32,458.9200 | 2901;1673 | 30.1449 | 24465 | 1 |


## Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 418.93 | 117.19 |
| rtz_get_timezone_ned_random_edge_city | 765.45 | 62.82 |
| rtz_get_timezone_osm_random_city | 1,688.11 | 265.58 |
| rtz_get_timezone_osm_random_edge_city | 3,239.43 | 647.11 |
| spatialtime_ned | 217,255.21 | 24,766.37 |
| spatialtime_ned_random_edge_city | 215,650.26 | 29,007.20 |
| spatialtime_osm | 6,960,543.75 | 4,419,826.96 |
| spatialtime_osm_random_edge_city | 7,493,004.15 | 4,605,105.58 |
| tz_search_lookup_random_city | 121.30 | 54.09 |
| tz_search_lookup_random_edge_city | 127.95 | 9.10 |
| tzf_default_finder_random_city | 326.99 | 107.84 |
| tzf_default_finder_random_edge_city | 776.87 | 231.04 |
| tzf_finder_random_city | 6,646.27 | 775.15 |
| tzf_finder_random_edge_city | 4,482.46 | 456.11 |
| tzf_fuzzy_finder_random_city | 173.10 | 72.35 |
| tzf_fuzzy_finder_random_edge_city | 164.49 | 7.00 |
| zone_detect_random_city | 428,253.12 | 105,127.32 |
| zone_detect_random_edge_city | 512,581.94 | 137,425.76 |


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
| cities | 154694 | timezonefinder           N=154694 | 0 | 0.0000 | 493 | 0.3187 | 0 | 0.0000 |
| cities | 154694 | tzfpy (DefaultFinder)    N=154694 | 2 | 0.0013 | 3 | 0.0019 | 0 | 0.0000 |
| edges | 23408 | timezonefinder           N=23408 | 0 | 0.0000 | 272 | 1.1620 | 0 | 0.0000 |
| edges | 23408 | tzfpy (DefaultFinder)    N=23408 | 2 | 0.0085 | 0 | 0.0000 | 0 | 0.0000 |


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
