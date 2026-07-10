# Benchmark Snapshot 2026-05-03-267604cf2732fdcce33be0f2e73b7dcef0bac500

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
| TZF_Default_Random_WorldCities | 4469569 | 270.0 | 167.0 | 459.0 | 833.0 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2415062 | 500.1 | 458.0 | 667.0 | 959.0 | 0 | 0 |
| Latlong_Random_WorldCities | 12004826 | 98.51 | 83.00 | 125.0 | 167.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10889580 | 108.6 | 83.00 | 125.0 | 125.0 | 0 | 0 |
| Localtimezone_Random_WorldCities | 50701 | 23954 | 15875 | 56167 | 96583 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 60325 | 20405 | 18625 | 29500 | 81542 | 16 | 1 |
| TimezoneMapper_Random_WorldCities | 13573796 | 87.85 | 42.00 | 84.00 | 125.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14759140 | 80.05 | 42.00 | 83.00 | 84.00 | 0 | 0 |
| GoTZ_Random_WorldCities | 24415 | 50715 | 29458 | 134834 | 262875 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30614 | 40051 | 31166 | 65000 | 242167 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 500.0038 | 17,999.9915 | 1,498.5845 | 1,367.7499 | 959.0003 | 374.0133 | 3805;4848 | 667.2964 | 29198 | 1 |
| test_tzfpy_random_edge_cities | 915.9849 | 8,194,916.9980 | 5,402.8289 | 55,258.4635 | 4,375.0042 | 1,624.9833 | 129;7145 | 185.0882 | 117647 | 1 |
| test_timezonefinder_random_edge_city | 958.0108 | 346,584.0127 | 31,417.1666 | 30,720.1433 | 21,166.9831 | 31,499.9779 | 2859;1527 | 31.8297 | 23763 | 1 |
| test_timezonefinder_random_city | 1,207.9836 | 151,792.0173 | 12,996.8252 | 21,581.9873 | 3,687.4990 | 13,604.9930 | 13;12 | 76.9419 | 144 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| spatialtime_ned | 220,010.16 | 32,970.91 |
| spatialtime_ned_random_edge_city | 218,999.09 | 23,675.87 |
| spatialtime_osm | 6,559,227.10 | 4,148,139.78 |
| spatialtime_osm_random_edge_city | 7,356,693.70 | 5,540,137.51 |
| tz_search_lookup_random_city | 104.37 | 7.93 |
| tz_search_lookup_random_edge_city | 120.42 | 3.71 |
| tzf_default_finder_random_city | 530.72 | 215.34 |
| tzf_default_finder_random_edge_city | 1,543.14 | 319.34 |
| tzf_finder_random_city | 6,836.98 | 1,426.48 |
| tzf_finder_random_edge_city | 4,967.58 | 374.87 |
| tzf_fuzzy_finder_random_city | 306.12 | 75.73 |
| tzf_fuzzy_finder_random_edge_city | 358.91 | 55.20 |
| zone_detect_random_city | 429,072.60 | 50,015.88 |
| zone_detect_random_edge_city | 502,141.93 | 124,054.26 |
