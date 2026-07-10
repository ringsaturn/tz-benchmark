# Benchmark Snapshot 2026-07-11-67cf32c444dab10207499dd3e87e2f25248f61f8

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
| TimezoneMapper_Random_WorldCities | 10887435 | 132.2 | 83.00 | 250.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 9678732 | 108.4 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10011046 | 162.5 | 83.00 | 292.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 9420802 | 138.8 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3258328 | 389.4 | 208.0 | 2375 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2000907 | 547.9 | 459.0 | 1250 | 0 | 0 |
| Localtimezone_Random_WorldCities | 47800 | 24815 | 16541 | 100167 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 57134 | 21255 | 19250 | 87083 | 16 | 1 |
| GoTZ_Random_WorldCities | 30277 | 40088 | 31458 | 229459 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30496 | 40666 | 31625 | 245959 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 499.9747 | 119,458.0109 | 1,527.5574 | 1,697.8315 | 958.0108 | 333.0060 | 4990;6474 | 654.6399 | 40202 | 1 |
| test_tzfpy_random_edge_cities | 875.0067 | 24,582.9870 | 3,820.1855 | 1,241.1464 | 4,041.9982 | 1,500.0114 | 25540;1114 | 261.7674 | 96769 | 1 |
| test_timezonefinder_random_edge_city | 916.9744 | 253,792.0082 | 32,502.4113 | 31,114.2042 | 21,979.5038 | 32,146.4904 | 1997;1078 | 30.7669 | 16644 | 1 |
| test_timezonefinder_random_city | 958.0108 | 12,009,124.9992 | 14,576.1659 | 114,498.0447 | 2,582.9941 | 14,958.9978 | 75;1169 | 68.6051 | 11473 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 444.29 | 144.60 |
| rtz_get_timezone_ned_random_edge_city | 768.71 | 55.48 |
| rtz_get_timezone_osm_random_city | 1,526.58 | 60.92 |
| rtz_get_timezone_osm_random_edge_city | 3,047.92 | 145.44 |
| spatialtime_ned | 237,258.33 | 22,397.42 |
| spatialtime_ned_random_edge_city | 239,514.84 | 22,407.14 |
| spatialtime_osm | 8,178,158.40 | 6,035,898.15 |
| spatialtime_osm_random_edge_city | 8,258,908.35 | 4,781,654.13 |
| tz_search_lookup_random_city | 112.03 | 33.25 |
| tz_search_lookup_random_edge_city | 128.15 | 1.77 |
| tzf_default_finder_random_city | 331.84 | 152.75 |
| tzf_default_finder_random_edge_city | 815.63 | 208.89 |
| tzf_finder_random_city | 6,535.57 | 811.95 |
| tzf_finder_random_edge_city | 4,550.27 | 680.60 |
| tzf_fuzzy_finder_random_city | 157.78 | 44.51 |
| tzf_fuzzy_finder_random_edge_city | 160.28 | 6.70 |
| zone_detect_random_city | 429,636.46 | 141,292.22 |
| zone_detect_random_edge_city | 507,410.42 | 120,767.57 |


## Accuracy

### Go

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | DefaultFinder (lite+preindex) | 1 | 0.0006 | 3 | 0.0019 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | Finder (lite) | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | FullFinder (full+preindex) | 0 | 0.0000 | 3 | 0.0019 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | FuzzyFinder (preindex only) | 0 | 0.0000 | 3 | 0.0019 | 0 | 0.0000 | 23474 | 15.1745 |
| cities | 154694 | bradfitz/latlong | 408 | 0.2637 | 230 | 0.1487 | 1105 | 0.7143 | 166 | 0.1073 |
| cities | 154694 | zsefvlol/timezonemapper | 816 | 0.5275 | 394 | 0.2547 | 1032 | 0.6671 | 0 | 0.0000 |
| cities | 154694 | albertyw/localtimezone | 22 | 0.0142 | 6 | 0.0039 | 60 | 0.0388 | 0 | 0.0000 |
| cities | 154694 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 2 | 0.0013 | 0 | 0.0000 |
| edges | 23408 | DefaultFinder (lite+preindex) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | Finder (lite) | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | FullFinder (full+preindex) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | FuzzyFinder (preindex only) | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 23408 | 100.0000 |
| edges | 23408 | bradfitz/latlong | 208 | 0.8886 | 9 | 0.0384 | 771 | 3.2937 | 150 | 0.6408 |
| edges | 23408 | zsefvlol/timezonemapper | 88 | 0.3759 | 258 | 1.1022 | 689 | 2.9434 | 0 | 0.0000 |
| edges | 23408 | albertyw/localtimezone | 22 | 0.0940 | 6 | 0.0256 | 59 | 0.2521 | 0 | 0.0000 |
| edges | 23408 | ugjka/go-tz | 0 | 0.0000 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| uniform | 1000000 | DefaultFinder (lite+preindex) | 22 | 0.0022 | 18 | 0.0018 | 16 | 0.0016 | 0 | 0.0000 |
| uniform | 1000000 | Finder (lite) | 20 | 0.0020 | 0 | 0.0000 | 15 | 0.0015 | 0 | 0.0000 |
| uniform | 1000000 | FullFinder (full+preindex) | 2 | 0.0002 | 18 | 0.0018 | 1 | 0.0001 | 0 | 0.0000 |
| uniform | 1000000 | FuzzyFinder (preindex only) | 2 | 0.0002 | 18 | 0.0018 | 1 | 0.0001 | 116277 | 11.6277 |


### Python

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | timezonefinder           N=154694 | 0 | 0.0000 | 493 | 0.3187 | 0 | 0.0000 | 0 | 0.0000 |
| cities | 154694 | tzfpy (DefaultFinder)    N=154694 | 1 | 0.0006 | 3 | 0.0019 | 1 | 0.0006 | 0 | 0.0000 |
| edges | 23408 | timezonefinder           N=23408 | 0 | 0.0000 | 272 | 1.1620 | 0 | 0.0000 | 0 | 0.0000 |
| edges | 23408 | tzfpy (DefaultFinder)    N=23408 | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |


### Rust

| Dataset | N | Candidate | Wrong | Wrong % | Ambiguous | Ambiguous % | Offset-eq | Offset-eq % | Empty | Empty % |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cities | 154694 | tzf-rs DefaultFinder | 1 | 0.0006 | 3 | 0.0019 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzf-rs Finder | 1 | 0.0006 | 0 | 0.0000 | 1 | 0.0006 | 0 | 0.0000 |
| cities | 154694 | tzf-rs FuzzyFinder | 0 | 0.0000 | 3 | 0.0019 | 0 | 0.0000 | 23474 | 15.1745 |
| cities | 154694 | tz-search | 818 | 0.5288 | 230 | 0.1487 | 1271 | 0.8216 | 6 | 0.0039 |
| cities | 154694 | rtz OSM | 59 | 0.0381 | 3 | 0.0019 | 52 | 0.0336 | 19 | 0.0123 |
| cities | 154694 | rtz NED | 28759 | 18.5909 | 15 | 0.0097 | 75606 | 48.8746 | 23 | 0.0149 |
| edges | 23408 | tzf-rs DefaultFinder | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tzf-rs Finder | 1 | 0.0043 | 0 | 0.0000 | 1 | 0.0043 | 0 | 0.0000 |
| edges | 23408 | tzf-rs FuzzyFinder | 0 | 0.0000 | 0 | 0.0000 | 0 | 0.0000 | 23408 | 100.0000 |
| edges | 23408 | tz-search | 412 | 1.7601 | 9 | 0.0384 | 787 | 3.3621 | 5 | 0.0214 |
| edges | 23408 | rtz OSM | 15 | 0.0641 | 3 | 0.0128 | 27 | 0.1153 | 19 | 0.0812 |
| edges | 23408 | rtz NED | 4446 | 18.9935 | 6 | 0.0256 | 14797 | 63.2134 | 9 | 0.0384 |



## Memory

### Go

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (go runtime floor) | 4.6 | 5.0 | 5.1 | 5.1 | 0.4 |
| DefaultFinder (lite+preindex) | 5.7 | 173.7 | 173.8 | 173.8 | 168.0 |
| Finder (lite) | 5.8 | 178.7 | 178.7 | 178.7 | 172.9 |
| FullFinder (full+preindex) | 6.0 | 703.1 | 703.1 | 703.1 | 697.2 |
| FuzzyFinder (preindex only) | 5.7 | 29.9 | 29.9 | 29.9 | 24.2 |
| bradfitz/latlong | 4.9 | 8.2 | 8.3 | 8.3 | 3.3 |
| zsefvlol/timezonemapper | 7.2 | 7.8 | 8.0 | 8.0 | 0.5 |
| albertyw/localtimezone | 6.2 | 19.2 | 19.3 | 19.3 | 13.0 |
| ugjka/go-tz | 109.5 | 109.5 | 109.5 | 109.5 | 0.0 |


### Python

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (python interpreter floor) | 22.5 | 22.5 | 22.5 | 22.5 | 0.0 |
| timezonefinder | 22.4 | 109.4 | 111.7 | 111.7 | 86.9 |
| tzfpy (DefaultFinder) | 22.4 | 147.4 | 147.4 | 147.4 | 124.9 |


### Rust

| Candidate | Baseline MiB | Post-load MiB | Post-loop MiB | Peak MiB | Delta MiB |
| --- | --- | --- | --- | --- | --- |
| (rust runtime floor) | 5.8 | 5.9 | 5.9 | 5.9 | 0.1 |
| tzf-rs DefaultFinder | 5.8 | 137.8 | 137.8 | 137.8 | 132.0 |
| tzf-rs Finder | 5.8 | 64.3 | 64.3 | 64.3 | 58.5 |
| tzf-rs FuzzyFinder | 5.8 | 35.2 | 35.3 | 35.3 | 29.5 |
| tz-search | 5.8 | 9.0 | 9.0 | 9.0 | 3.2 |
| rtz OSM | 5.8 | 14.7 | 14.9 | 14.9 | 9.0 |
| rtz NED | 5.8 | 11.7 | 11.7 | 11.7 | 5.9 |
| zone-detect | 5.8 | 10.0 | 10.1 | 10.1 | 4.2 |
| spatialtime OSM | 5.8 | 157.7 | 170.5 | 170.5 | 151.9 |
| spatialtime NED | 5.8 | 14.1 | 14.9 | 14.9 | 8.3 |
