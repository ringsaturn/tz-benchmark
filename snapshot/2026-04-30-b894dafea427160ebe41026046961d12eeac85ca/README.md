# Benchmark Snapshot 2026-04-30-b894dafea427160ebe41026046961d12eeac85ca

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
| TZF_Default_Random_WorldCities | 899456 | 1168 | 1000 | 3000 | 6000 | 8 | 0 |
| TZF_Default_Random_EdgeCities | 395608 | 2743 | 3000 | 4000 | 7000 | 8 | 0 |
| Latlong_Random_WorldCities | 8052350 | 158.7 | 0 | 1000 | 1000 | 8 | 0 |
| Latlong_Random_EdgeCities | 7022109 | 169.1 | 0 | 1000 | 1000 | 8 | 0 |
| Localtimezone_Random_WorldCities | 63648 | 18435 | 13000 | 42000 | 72000 | 24 | 1 |
| Localtimezone_Random_EdgeCities | 64581 | 18242 | 14000 | 40000 | 73000 | 24 | 1 |
| TimezoneMapper_Random_WorldCities | 6241035 | 186.1 | 0 | 1000 | 1000 | 8 | 0 |
| TimezoneMapper_Random_EdgeCities | 8224244 | 147.0 | 0 | 1000 | 1000 | 8 | 0 |
| GoTZ_Random_WorldCities | 23142 | 53053 | 31000 | 140000 | 278000 | 24 | 1 |
| GoTZ_Random_EdgeCities | 21408 | 56206 | 43000 | 125000 | 288000 | 24 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 499.8874 | 99,417.0550 | 1,463.6547 | 1,562.5581 | 917.1199 | 291.9696 | 5804;7569 | 683.2213 | 47246 | 1 |
| test_tzfpy_random_edge_cities | 791.8570 | 105,417.1007 | 3,854.3158 | 1,420.3055 | 3,959.0523 | 1,459.1496 | 38284;5446 | 259.4494 | 166666 | 1 |
| test_timezonefinder_random_edge_city | 833.0680 | 386,250.2053 | 30,725.3300 | 30,493.5039 | 20,541.9492 | 31,874.9808 | 9813;5184 | 32.5464 | 81362 | 1 |
| test_timezonefinder_random_city | 874.9776 | 6,608,665.9208 | 12,535.2650 | 45,404.9793 | 1,708.0456 | 14,249.9339 | 1261;2652 | 79.7749 | 27242 | 1 |


### Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| spatialtime_ned | 222,478.52 | 34,329.78 |
| spatialtime_ned_random_edge_city | 216,552.60 | 33,186.46 |
| spatialtime_osm | 7,014,983.30 | 5,324,034.16 |
| spatialtime_osm_random_edge_city | 7,777,391.65 | 4,429,575.05 |
| tz_search_lookup_random_city | 129.22 | 107.27 |
| tz_search_lookup_random_edge_city | 126.13 | 10.23 |
| tzf_default_finder_random_city | 550.81 | 134.36 |
| tzf_default_finder_random_edge_city | 1,544.07 | 116.08 |
| tzf_finder_random_city | 6,632.35 | 664.38 |
| tzf_finder_random_edge_city | 4,959.39 | 477.46 |
| tzf_fuzzy_finder_random_city | 297.61 | 30.10 |
| tzf_fuzzy_finder_random_edge_city | 359.09 | 30.80 |
| zone_detect_random_city | 418,563.81 | 113,751.28 |
| zone_detect_random_edge_city | 494,156.78 | 132,297.27 |
