# Benchmark Snapshot 2026-07-26-0f1d4c6220a006b1fee8846c1d7d7becd0621825

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
| TimezoneMapper_Random_WorldCities | 10218193 | 103.6 | 42.00 | 208.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14349997 | 81.83 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10431988 | 111.7 | 83.00 | 209.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10202299 | 114.6 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3520176 | 325.4 | 208.0 | 1375 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2169230 | 556.2 | 500.0 | 1208 | 0 | 0 |
| Localtimezone_Random_WorldCities | 49423 | 24268 | 16625 | 94292 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 57552 | 21031 | 19250 | 80333 | 16 | 1 |
| GoTZ_Random_WorldCities | 30672 | 39971 | 30875 | 240208 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30666 | 40253 | 31083 | 240209 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 416.9997 | 33,457.9963 | 1,056.1834 | 895.2410 | 790.9839 | 209.0237 | 3532;7420 | 946.8052 | 43877 | 1 |
| test_tzfpy_random_edge_cities | 500.0038 | 49,666.0359 | 1,221.9879 | 735.2893 | 1,042.0335 | 416.9997 | 8556;8556 | 818.3387 | 142025 | 1 |
| test_timezonefinder_random_edge_city | 1,000.0076 | 380,125.0132 | 34,109.9993 | 32,850.8647 | 22,416.9926 | 37,042.0166 | 5128;2483 | 29.3169 | 39933 | 1 |
| test_timezonefinder_random_city | 1,540.9896 | 80,833.9682 | 12,751.0674 | 18,518.0521 | 3,895.9843 | 11,500.0294 | 11;11 | 78.4248 | 88 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 393.19 | 64.74 |
| rtz_get_timezone_ned_random_edge_city | 761.59 | 67.91 |
| rtz_get_timezone_osm_random_city | 1,550.87 | 222.60 |
| rtz_get_timezone_osm_random_edge_city | 3,093.58 | 603.38 |
| spatialtime_ned | 219,244.53 | 29,023.19 |
| spatialtime_ned_random_edge_city | 216,106.25 | 35,090.88 |
| spatialtime_osm | 7,079,689.60 | 4,484,224.79 |
| spatialtime_osm_random_edge_city | 7,498,391.65 | 4,169,855.61 |
| tz_search_lookup_random_city | 111.30 | 17.91 |
| tz_search_lookup_random_edge_city | 125.47 | 14.83 |
| tzf_default_finder_random_city | 243.62 | 90.78 |
| tzf_default_finder_random_edge_city | 533.83 | 34.67 |
| tzf_finder_random_city | 7,310.36 | 1,269.56 |
| tzf_finder_random_edge_city | 5,025.22 | 555.10 |
| tzf_fuzzy_finder_random_city | 138.92 | 7.04 |
| tzf_fuzzy_finder_random_edge_city | 144.39 | 8.36 |
| zone_detect_random_city | 460,758.96 | 128,197.62 |
| zone_detect_random_edge_city | 507,283.86 | 180,891.48 |


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

### Go

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (go runtime floor) | 4.5 | 4.9 | 5.1 | 5.1 | 0.5 |
| DefaultFinder (lite+preindex) | 5.8 | 133.7 | 133.7 | 133.7 | 127.8 |
| Finder (lite) | 5.8 | 121.9 | 122.0 | 122.0 | 116.1 |
| FullFinder (full+preindex) | 5.7 | 353.4 | 353.5 | 353.5 | 347.7 |
| FuzzyFinder (preindex only) | 5.7 | 30.4 | 30.4 | 30.4 | 24.7 |
| bradfitz/latlong | 4.9 | 8.1 | 8.3 | 8.3 | 3.2 |
| zsefvlol/timezonemapper | 7.3 | 7.8 | 8.0 | 8.0 | 0.5 |
| albertyw/localtimezone | 5.9 | 18.8 | 18.8 | 18.8 | 12.9 |
| ugjka/go-tz | 109.8 | 109.8 | 109.8 | 109.8 | 0.0 |


### Python

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.4 | 22.4 | 22.4 | 22.4 | 0.0 |
| timezonefinder | 22.4 | 110.1 | 112.2 | 112.2 | 87.7 |
| tzfpy (DefaultFinder) | 22.4 | 92.5 | 92.5 | 92.5 | 70.1 |


### Rust

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 77.7 | 77.7 | 77.7 | 71.9 |
| tzf-rs Finder | 5.8 | 48.5 | 48.5 | 48.5 | 42.7 |
| tzf-rs FuzzyFinder | 5.8 | 23.9 | 24.0 | 24.0 | 18.1 |
| tz-search | 5.8 | 9.2 | 9.2 | 9.2 | 3.4 |
| rtz OSM | 5.8 | 14.8 | 15.0 | 15.0 | 9.0 |
| rtz NED | 5.8 | 11.7 | 11.8 | 11.8 | 5.9 |
| zone-detect | 5.8 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.7 | 170.4 | 170.4 | 151.9 |
| spatialtime NED | 5.8 | 14.1 | 14.9 | 14.9 | 8.3 |
