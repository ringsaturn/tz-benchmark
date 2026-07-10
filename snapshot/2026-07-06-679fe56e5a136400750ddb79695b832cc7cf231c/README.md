# Benchmark Snapshot 2026-07-06-679fe56e5a136400750ddb79695b832cc7cf231c

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

| Benchmark | Iterations | ns/op | p50 | p99 | B/op | allocs/op |
| --- | --- | --- | --- | --- | --- | --- |
| TimezoneMapper_Random_WorldCities | 12148315 | 96.35 | 42.00 | 167.0 | 0 | 0 |
| TimezoneMapper_Random_EdgeCities | 14801451 | 96.71 | 42.00 | 125.0 | 0 | 0 |
| Latlong_Random_WorldCities | 10304596 | 109.6 | 83.00 | 209.0 | 0 | 0 |
| Latlong_Random_EdgeCities | 10455465 | 115.1 | 83.00 | 167.0 | 0 | 0 |
| TZF_Default_Random_WorldCities | 3659935 | 314.8 | 208.0 | 1375 | 0 | 0 |
| TZF_Default_Random_EdgeCities | 2336930 | 509.1 | 458.0 | 1000 | 0 | 0 |
| Localtimezone_Random_WorldCities | 47766 | 25310 | 16750 | 101708 | 16 | 1 |
| Localtimezone_Random_EdgeCities | 55010 | 21033 | 19209 | 87125 | 16 | 1 |
| GoTZ_Random_WorldCities | 30604 | 40034 | 31292 | 241667 | 16 | 1 |
| GoTZ_Random_EdgeCities | 30640 | 40867 | 31833 | 245042 | 16 | 1 |


### Python

| Benchmark | Min ns | Max ns | Mean ns | StdDev ns | Median ns | IQR ns | Outliers | OPS Kops/s | Rounds | Iterations |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| test_tzfpy_random_cities | 500.1202 | 61,375.0890 | 1,854.4635 | 2,173.2070 | 1,041.6843 | 750.1803 | 1373;1819 | 539.2395 | 10569 | 1 |
| test_timezonefinder_random_edge_city | 915.9558 | 267,417.1701 | 31,547.5083 | 30,299.2827 | 21,332.8749 | 31,458.9124 | 3562;1845 | 31.6982 | 29127 | 1 |
| test_tzfpy_random_edge_cities | 916.8871 | 58,792.0658 | 4,245.7624 | 1,705.1219 | 4,207.7154 | 1,541.8045 | 17503;4398 | 235.5290 | 79208 | 1 |
| test_timezonefinder_random_city | 1,499.8950 | 191,917.1773 | 14,299.2332 | 23,041.9899 | 3,874.7676 | 16,416.4230 | 17;12 | 69.9338 | 138 | 1 |


### Rust

_No benchmark rows found._
