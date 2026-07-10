# Benchmark Snapshot 2026-05-03-02205f8c406cb55d2e6ccc8b7dc1e27b6555fc47

This file summarizes the raw benchmark outputs in this directory as Markdown tables.

Raw sources:

- `benchmark_result_go.txt`
- `benchmark_result_python.txt`
- `benchmark_result_rust.txt`

## Performance

### Go

- `goos: darwin`
- `goarch: arm64`
- `pkg: github.com/ringsaturn/tz-benchmark/go`
- `cpu: Apple M3 Max`

| Benchmark | Iterations | ns/op | p50 | p90 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TZF_Default_Random_WorldCities | 3018721 | 382.5 | 0 | 1000 | 2000 | 8 | 0 |
| TZF_Default_Random_EdgeCities | 1704829 | 672.6 | 1000 | 1000 | 2000 | 8 | 0 |
| Latlong_Random_WorldCities | 7500944 | 138.3 | 0 | 1000 | 1000 | 8 | 0 |
| Latlong_Random_EdgeCities | 6781183 | 163.6 | 0 | 1000 | 1000 | 8 | 0 |
| Localtimezone_Random_WorldCities | 46795 | 24547 | 17000 | 55000 | 95000 | 24 | 1 |
| Localtimezone_Random_EdgeCities | 51153 | 23286 | 18000 | 53000 | 97000 | 24 | 1 |
| TimezoneMapper_Random_WorldCities | 8028813 | 129.6 | 0 | 1000 | 1000 | 8 | 0 |
| TimezoneMapper_Random_EdgeCities | 8484441 | 138.1 | 0 | 1000 | 1000 | 8 | 0 |
| GoTZ_Random_WorldCities | 24976 | 49217 | 29000 | 132000 | 262000 | 24 | 1 |
| GoTZ_Random_EdgeCities | 23112 | 51249 | 40000 | 114000 | 261000 | 24 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 540.9820 | 19,541.0103 | 1,485.4243 | 1,312.7471 | 959.0003 | 374.0133 | 4489;5600 | 673.2083 | 33756 | 1 |
| test_tzfpy_random_edge_cities | 916.0140 | 71,665.9997 | 4,084.6647 | 1,482.6441 | 4,125.0023 | 1,499.0219 | 23956;3834 | 244.8181 | 101699 | 1 |
| test_timezonefinder_random_edge_city | 1,040.9858 | 231,792.0153 | 31,858.7562 | 30,712.2023 | 21,415.9954 | 32,248.9941 | 2029;1092 | 31.3885 | 16914 | 1 |
| test_timezonefinder_random_city | 1,999.9861 | 83,417.0205 | 13,351.3830 | 18,087.0400 | 4,792.0039 | 13,926.9905 | 14;11 | 74.8986 | 115 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| spatialtime_ned | 217,351.17 | 27,808.30 |
| spatialtime_ned_random_edge_city | 211,089.50 | 24,661.11 |
| spatialtime_osm | 7,404,993.75 | 4,190,341.32 |
| spatialtime_osm_random_edge_city | 7,939,502.10 | 4,015,338.98 |
| tz_search_lookup_random_city | 103.08 | 2.19 |
| tz_search_lookup_random_edge_city | 117.91 | 16.80 |
| tzf_default_finder_random_city | 484.18 | 25.67 |
| tzf_default_finder_random_edge_city | 1,576.41 | 198.27 |
| tzf_finder_random_city | 6,611.52 | 625.38 |
| tzf_finder_random_edge_city | 4,993.95 | 308.31 |
| tzf_fuzzy_finder_random_city | 330.63 | 109.86 |
| tzf_fuzzy_finder_random_edge_city | 376.98 | 16.11 |
| zone_detect_random_city | 429,435.94 | 107,198.52 |
| zone_detect_random_edge_city | 509,974.74 | 113,542.37 |
