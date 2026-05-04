# Benchmark Snapshot 2026-05-04-0b7659e1957245fcddd79b4dd9224fee82b3b0ea

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

| Benchmark | Iterations | ns/op | p50 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- |
| TimezoneMapper_Random_WorldCities | 11964832 | 104.4 | 83.00 | 209.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14179186 | 81.45 | 42.00 | 84.00 | 0 | 0 |
| Latlong_Random_WorldCities | 10446537 | 113.7 | 83.00 | 250.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10160517 | 116.3 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3825013 | 312.4 | 208.0 | 1292 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2291846 | 537.4 | 459.0 | 1208 | 0 | 0 |
| Localtimezone_Random_WorldCities | 45528 | 25993 | 17125 | 104208 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 56756 | 21285 | 19334 | 86750 | 16 | 1 |
| GoTZ_Random_WorldCities | 29220 | 41446 | 32333 | 240167 | 16 | 1 |
| GoTZ_Random_EdgeCities | 29287 | 41394 | 32167 | 239167 | 16 | 1 |


## Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 500.0038 | 23,041.9973 | 1,454.5644 | 1,318.4693 | 958.0108 | 333.9956 | 6435;7945 | 687.4910 | 49383 | 1 |
| test_tzfpy_random_edge_cities | 915.9849 | 40,999.9921 | 3,769.0444 | 1,191.2874 | 4,000.0014 | 1,501.0010 | 42610;1060 | 265.3192 | 161057 | 1 |
| test_timezonefinder_random_edge_city | 1,000.0076 | 229,583.0054 | 31,196.5881 | 30,566.0075 | 20,959.0071 | 31,582.9966 | 1776;960 | 32.0548 | 14852 | 1 |
| test_timezonefinder_random_city | 1,415.9887 | 218,666.0131 | 14,169.4327 | 26,118.0013 | 3,750.5088 | 13,333.5125 | 9;14 | 70.5745 | 104 | 1 |


## Rust

| Benchmark | ns/iter | stddev ns |
| --- | --- | --- |
| rtz_get_timezone_ned_random_city | 413.08 | 120.83 |
| rtz_get_timezone_ned_random_edge_city | 766.68 | 54.18 |
| rtz_get_timezone_osm_random_city | 1,548.52 | 182.77 |
| rtz_get_timezone_osm_random_edge_city | 3,049.55 | 164.12 |
| spatialtime_ned | 234,897.80 | 34,337.16 |
| spatialtime_ned_random_edge_city | 229,509.85 | 27,695.19 |
| spatialtime_osm | 8,214,418.75 | 4,744,504.84 |
| spatialtime_osm_random_edge_city | 8,240,266.65 | 5,011,549.98 |
| tz_search_lookup_random_city | 111.03 | 35.99 |
| tz_search_lookup_random_edge_city | 127.85 | 5.97 |
| tzf_default_finder_random_city | 289.58 | 39.33 |
| tzf_default_finder_random_edge_city | 769.78 | 144.80 |
| tzf_finder_random_city | 6,457.03 | 2,790.78 |
| tzf_finder_random_edge_city | 4,377.46 | 394.63 |
| tzf_fuzzy_finder_random_city | 163.17 | 99.85 |
| tzf_fuzzy_finder_random_edge_city | 165.52 | 3.30 |
| zone_detect_random_city | 422,910.42 | 93,639.93 |
| zone_detect_random_edge_city | 508,917.97 | 134,116.90 |
