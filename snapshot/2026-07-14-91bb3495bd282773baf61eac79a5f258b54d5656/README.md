# Benchmark Snapshot 2026-07-14-91bb3495bd282773baf61eac79a5f258b54d5656

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
| TimezoneMapper_Random_WorldCities | 12087680 | 95.11 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14813816 | 81.31 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 11049052 | 106.9 | 83.00 | 209.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10586782 | 113.1 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3779365 | 316.8 | 208.0 | 1291 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2037010 | 557.4 | 500.0 | 1250 | 0 | 0 |
| Localtimezone_Random_WorldCities | 50337 | 23277 | 16125 | 90917 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 58966 | 20551 | 18958 | 80250 | 16 | 1 |
| GoTZ_Random_WorldCities | 31082 | 39153 | 30584 | 238875 | 16 | 1 |
| GoTZ_Random_EdgeCities | 31149 | 39222 | 30584 | 239000 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 374.9992 | 18,791.9977 | 788.9321 | 384.3353 | 667.0016 | 167.0014 | 7467;9183 | 1,267.5363 | 75002 | 1 |
| test_tzfpy_random_edge_cities | 416.9997 | 39,917.0021 | 1,153.9951 | 781.6048 | 957.9999 | 415.9956 | 9209;10586 | 866.5548 | 173914 | 1 |
| test_timezonefinder_random_edge_city | 1,000.0003 | 232,624.9996 | 32,411.4465 | 31,658.1782 | 21,520.5000 | 33,895.4997 | 943;511 | 30.8533 | 7688 | 1 |
| test_timezonefinder_random_city | 1,124.9977 | 10,675,500.0015 | 30,834.2275 | 435,127.5765 | 2,770.4991 | 14,375.0003 | 1;64 | 32.4315 | 602 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 374.35 | 16.26 |
| rtz_get_timezone_ned_random_edge_city | 751.71 | 23.64 |
| rtz_get_timezone_osm_random_city | 1,506.21 | 126.84 |
| rtz_get_timezone_osm_random_edge_city | 2,994.83 | 135.95 |
| spatialtime_ned | 214,267.61 | 27,624.98 |
| spatialtime_ned_random_edge_city | 209,053.23 | 22,668.68 |
| spatialtime_osm | 7,014,670.85 | 3,773,301.22 |
| spatialtime_osm_random_edge_city | 7,319,779.15 | 4,021,776.48 |
| tz_search_lookup_random_city | 106.70 | 6.06 |
| tz_search_lookup_random_edge_city | 121.54 | 2.46 |
| tzf_default_finder_random_city | 217.35 | 18.02 |
| tzf_default_finder_random_edge_city | 517.93 | 19.29 |
| tzf_finder_random_city | 6,899.06 | 609.40 |
| tzf_finder_random_edge_city | 4,879.70 | 374.57 |
| tzf_fuzzy_finder_random_city | 142.53 | 23.97 |
| tzf_fuzzy_finder_random_edge_city | 134.29 | 1.57 |
| zone_detect_random_city | 432,033.07 | 94,445.16 |
| zone_detect_random_edge_city | 492,892.02 | 135,049.19 |


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
| cities | 154694 | timezonefinder           N=154694 | 0 | 0.0000 | 493 | 0.3187 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzfpy (DefaultFinder)    N=154694 | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| edges | 23408 | timezonefinder           N=23408 | 0 | 0.0000 | 272 | 1.1620 | 1 | 0.0043 | 0 | 0.0000 |
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

### Go

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (go runtime floor) | 4.6 | 4.9 | 5.1 | 5.1 | 0.3 |
| DefaultFinder (lite+preindex) | 5.7 | 132.8 | 132.9 | 132.9 | 127.1 |
| Finder (lite) | 5.7 | 114.7 | 114.7 | 114.7 | 109.0 |
| FullFinder (full+preindex) | 5.8 | 363.7 | 363.7 | 363.7 | 357.9 |
| FuzzyFinder (preindex only) | 5.6 | 30.3 | 30.3 | 30.3 | 24.7 |
| bradfitz/latlong | 4.9 | 8.2 | 8.4 | 8.4 | 3.4 |
| zsefvlol/timezonemapper | 7.3 | 7.8 | 8.0 | 8.0 | 0.5 |
| albertyw/localtimezone | 6.1 | 19.1 | 19.4 | 19.4 | 13.0 |
| ugjka/go-tz | 109.8 | 109.8 | 109.8 | 109.8 | 0.0 |


### Python

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.3 | 22.3 | 22.3 | 22.3 | 0.0 |
| timezonefinder | 22.3 | 109.2 | 111.7 | 111.7 | 86.9 |
| tzfpy (DefaultFinder) | 22.6 | 92.4 | 92.4 | 92.4 | 69.8 |


### Rust

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 77.3 | 77.4 | 77.4 | 71.5 |
| tzf-rs Finder | 5.8 | 48.6 | 48.6 | 48.6 | 42.8 |
| tzf-rs FuzzyFinder | 5.8 | 23.9 | 23.9 | 23.9 | 18.1 |
| tz-search | 5.8 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.6 | 170.3 | 170.3 | 151.8 |
| spatialtime NED | 5.8 | 14.1 | 14.4 | 14.4 | 8.3 |
