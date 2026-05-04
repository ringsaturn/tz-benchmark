# Benchmark Snapshot 2026-04-30-504508aca596fb3a5f0f9cc817edd0e26d0ff553

This file summarizes the raw benchmark outputs in this directory as Markdown tables.

Raw sources:

- `benchmark_result_go.txt`
- `benchmark_result_python.txt`
- `benchmark_result_rust.txt`

## Go

- `goos: darwin`
- `goarch: arm64`
- `pkg: github.com/ringsaturn/tz-benchmark/go`
- `cpu: Apple M3 Max`

| Benchmark | Iterations | ns/op | p50 | p90 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TZF_Default_Random_WorldCities | 1586829 | 744.7 | 1000 | 2000 | 3000 | 8 | 0 |
| TZF_Default_Random_EdgeCities | 505677 | 2392 | 2000 | 3000 | 4000 | 8 | 0 |
| Latlong_Random_WorldCities | 7968852 | 141.3 | 0 | 1000 | 1000 | 8 | 0 |
| Latlong_Random_EdgeCities | 7268283 | 164.6 | 0 | 1000 | 1000 | 8 | 0 |
| Localtimezone_Random_WorldCities | 65630 | 17909 | 12000 | 40000 | 68000 | 24 | 1 |
| Localtimezone_Random_EdgeCities | 67747 | 17653 | 14000 | 39000 | 69000 | 24 | 1 |
| TimezoneMapper_Random_WorldCities | 8369706 | 130.8 | 0 | 1000 | 1000 | 8 | 0 |
| TimezoneMapper_Random_EdgeCities | 8500316 | 139.3 | 0 | 1000 | 1000 | 8 | 0 |
| GoTZ_Random_WorldCities | 23414 | 50843 | 29000 | 137000 | 267000 | 24 | 1 |
| GoTZ_Random_EdgeCities | 22958 | 53276 | 41000 | 117000 | 279000 | 24 | 1 |


## Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 499.8874 | 31,708.0412 | 1,415.6534 | 1,336.2125 | 917.1199 | 291.9696 | 6871;8594 | 706.3876 | 55301 | 1 |
| test_timezonefinder_random_city | 832.8352 | 7,358,416.9149 | 12,675.9411 | 58,600.6197 | 1,792.0975 | 13,863.9007 | 474;1810 | 78.8896 | 18335 | 1 |
| test_timezonefinder_random_edge_city | 915.9558 | 240,792.0547 | 31,492.0662 | 30,576.9443 | 20,958.0176 | 33,082.9062 | 1953;972 | 31.7540 | 15969 | 1 |
| test_tzfpy_random_edge_cities | 916.8871 | 53,290.9762 | 3,953.3496 | 1,363.0728 | 4,084.0823 | 1,542.0374 | 28133;2659 | 252.9501 | 109087 | 1 |


## Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| spatialtime_ned | 220,251.04 | 34,230.80 |
| spatialtime_ned_random_edge_city | 219,931.77 | 41,278.03 |
| spatialtime_osm | 7,966,518.80 | 4,453,287.51 |
| spatialtime_osm_random_edge_city | 8,120,106.25 | 4,389,951.00 |
| tz_search_lookup_random_city | 131.08 | 51.57 |
| tz_search_lookup_random_edge_city | 128.39 | 11.03 |
| tzf_default_finder_random_city | 544.17 | 82.84 |
| tzf_default_finder_random_edge_city | 1,629.64 | 271.51 |
| tzf_finder_random_city | 6,664.43 | 684.80 |
| tzf_finder_random_edge_city | 5,272.29 | 874.42 |
| tzf_fuzzy_finder_random_city | 309.92 | 142.64 |
| tzf_fuzzy_finder_random_edge_city | 358.54 | 6.01 |
| zone_detect_random_city | 427,045.49 | 80,755.89 |
| zone_detect_random_edge_city | 513,141.15 | 122,446.16 |
