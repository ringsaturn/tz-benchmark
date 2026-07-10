# Benchmark Snapshot 2026-07-10-2f299755700fa552131fa3957be320936fa41d6d

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

## Go

- `goos: darwin`
- `goarch: arm64`
- `pkg: github.com/ringsaturn/tz-benchmark/go`
- `cpu: Apple M3 Max`

| Benchmark | Iterations | ns/op | p50 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- |
| TimezoneMapper_Random_WorldCities | 10805107 | 99.38 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14411276 | 81.61 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 9977270 | 116.1 | 83.00 | 250.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10430492 | 116.2 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3227397 | 338.5 | 208.0 | 1542 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2275146 | 520.8 | 458.0 | 1041 | 0 | 0 |
| Localtimezone_Random_WorldCities | 46674 | 25364 | 16750 | 101583 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 56205 | 21274 | 19375 | 86917 | 16 | 1 |
| GoTZ_Random_WorldCities | 29748 | 41417 | 32458 | 239792 | 16 | 1 |
| GoTZ_Random_EdgeCities | 29650 | 41318 | 32166 | 234042 | 16 | 1 |


## Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 541.0111 | 47,459.0051 | 1,980.4699 | 2,367.6934 | 1,083.0117 | 875.0067 | 1155;1605 | 504.9307 | 9397 | 1 |
| test_tzfpy_random_edge_cities | 916.0140 | 64,958.9929 | 4,621.7920 | 2,210.9734 | 4,375.0042 | 1,707.0270 | 24483;9561 | 216.3663 | 131874 | 1 |
| test_timezonefinder_random_edge_city | 1,082.9826 | 583,416.9860 | 32,941.0936 | 32,026.0069 | 22,166.9907 | 32,208.2560 | 5907;3544 | 30.3572 | 51949 | 1 |
| test_timezonefinder_random_city | 1,167.0054 | 11,948,084.0222 | 35,268.4978 | 514,501.3896 | 3,583.0017 | 13,541.7358 | 1;54 | 28.3539 | 539 | 1 |


## Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 480.51 | 103.46 |
| rtz_get_timezone_ned_random_edge_city | 826.36 | 105.06 |
| rtz_get_timezone_osm_random_city | 1,756.23 | 5,511.37 |
| rtz_get_timezone_osm_random_edge_city | 3,274.25 | 287.56 |
| spatialtime_ned | 225,714.06 | 31,358.46 |
| spatialtime_ned_random_edge_city | 222,970.58 | 21,954.19 |
| spatialtime_osm | 7,529,410.40 | 4,453,363.72 |
| spatialtime_osm_random_edge_city | 7,330,806.25 | 5,569,915.01 |
| tz_search_lookup_random_city | 141.27 | 41.56 |
| tz_search_lookup_random_edge_city | 134.55 | 21.98 |
| tzf_default_finder_random_city | 366.50 | 126.64 |
| tzf_default_finder_random_edge_city | 921.79 | 294.05 |
| tzf_finder_random_city | 6,368.17 | 770.60 |
| tzf_finder_random_edge_city | 4,777.38 | 857.52 |
| tzf_fuzzy_finder_random_city | 189.89 | 67.33 |
| tzf_fuzzy_finder_random_edge_city | 167.10 | 10.94 |
| zone_detect_random_city | 438,994.79 | 162,551.11 |
| zone_detect_random_edge_city | 498,836.98 | 104,155.29 |


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
| cities | 154694 | tzf-rs DefaultFinder | 2 | 0.0013 | 3 | 0.0019 | 0 | 0.0000 |
| cities | 154694 | tzf-rs Finder | 2 | 0.0013 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | tzf-rs FuzzyFinder | 0 | 0.0000 | 3 | 0.0019 | 23474 | 15.1745 |
| cities | 154694 | tz-search | 2089 | 1.3504 | 230 | 0.1487 | 6 | 0.0039 |
| cities | 154694 | rtz OSM | 111 | 0.0718 | 3 | 0.0019 | 19 | 0.0123 |
| cities | 154694 | rtz NED | 104365 | 67.4654 | 15 | 0.0097 | 23 | 0.0149 |
| edges | 23408 | tzf-rs DefaultFinder | 2 | 0.0085 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzf-rs Finder | 2 | 0.0085 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzf-rs FuzzyFinder | 0 | 0.0000 | 0 | 0.0000 | 23408 | 100.0000 |
| edges | 23408 | tz-search | 1199 | 5.1222 | 9 | 0.0384 | 5 | 0.0214 |
| edges | 23408 | rtz OSM | 42 | 0.1794 | 3 | 0.0128 | 19 | 0.0812 |
| edges | 23408 | rtz NED | 19243 | 82.2069 | 6 | 0.0256 | 9 | 0.0384 |



## Memory

### Go

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (go runtime floor) | 4.6 | 5.0 | 5.1 | 5.1 | 0.4 |
| DefaultFinder (lite+preindex) | 6.0 | 185.9 | 186.0 | 186.0 | 180.0 |
| Finder (lite) | 5.6 | 173.2 | 173.2 | 173.2 | 167.6 |
| FullFinder (full+preindex) | 5.9 | 667.2 | 667.2 | 667.2 | 661.2 |
| FuzzyFinder (preindex only) | 5.8 | 30.4 | 30.4 | 30.4 | 24.7 |
| bradfitz/latlong | 5.1 | 8.2 | 8.3 | 8.3 | 3.1 |
| zsefvlol/timezonemapper | 7.3 | 7.7 | 7.8 | 7.8 | 0.4 |
| albertyw/localtimezone | 6.0 | 20.0 | 20.0 | 20.0 | 13.9 |
| ugjka/go-tz | 109.8 | 109.8 | 109.8 | 109.8 | 0.0 |


### Python

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.5 | 22.5 | 22.5 | 22.5 | 0.0 |
| timezonefinder | 22.6 | 109.7 | 112.1 | 112.1 | 87.1 |
| tzfpy (DefaultFinder) | 22.5 | 147.5 | 147.5 | 147.5 | 125.0 |


### Rust

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 138.5 | 138.6 | 138.6 | 132.8 |
| tzf-rs Finder | 5.8 | 64.5 | 64.5 | 64.5 | 58.7 |
| tzf-rs FuzzyFinder | 5.8 | 35.2 | 35.2 | 35.2 | 29.5 |
| tz-search | 5.8 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 14.9 | 14.9 | 9.0 |
| rtz NED | 5.8 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.7 | 170.5 | 170.5 | 151.9 |
| spatialtime NED | 5.8 | 14.1 | 14.4 | 14.4 | 8.3 |
