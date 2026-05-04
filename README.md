# tz-benchmark

Benchmarks ran [`7ca78cc`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/7ca78cc73ee73baecb9bca229aa83fb2d5ed57f9

## Go

```
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark/go
cpu: AMD EPYC 7763 64-Core Processor
BenchmarkTimezoneMapper_Random_WorldCities-4   	 5825750	       204.3 ns/op	       130.0 ns/p50	       330.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTimezoneMapper_Random_EdgeCities-4    	 6960492	       172.0 ns/op	       110.0 ns/p50	       240.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-4          	 5771500	       208.6 ns/op	       130.0 ns/p50	       411.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLatlong_Random_EdgeCities-4           	 5964618	       201.5 ns/op	       140.0 ns/p50	       321.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Default_Random_WorldCities-4      	 2210546	       555.8 ns/op	       341.0 ns/p50	      2164 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Default_Random_EdgeCities-4       	 1219864	       983.9 ns/op	       872.0 ns/p50	      2054 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-4    	   25629	     46760 ns/op	     31308 ns/p50	    185157 ns/p99	      16 B/op	       1 allocs/op
BenchmarkLocaltimezone_Random_EdgeCities-4     	   32947	     37020 ns/op	     32892 ns/p50	    155692 ns/p99	      16 B/op	       1 allocs/op
BenchmarkGoTZ_Random_WorldCities-4             	   13396	     89075 ns/op	     74721 ns/p50	    442031 ns/p99	      16 B/op	       1 allocs/op
BenchmarkGoTZ_Random_EdgeCities-4              	   13365	     89347 ns/op	     74921 ns/p50	    444514 ns/p99	      16 B/op	       1 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark/go	20.388s
```

## Rust

```

running 18 tests
test benches_tz_crates::bench_rtz_get_timezone_ned_random_city      ... bench:         833.24 ns/iter (+/- 51.26)
test benches_tz_crates::bench_rtz_get_timezone_ned_random_edge_city ... bench:       1,605.58 ns/iter (+/- 92.35)
test benches_tz_crates::bench_rtz_get_timezone_osm_random_city      ... bench:       3,153.83 ns/iter (+/- 212.03)
test benches_tz_crates::bench_rtz_get_timezone_osm_random_edge_city ... bench:       6,536.26 ns/iter (+/- 597.69)
test benches_tz_crates::bench_spatialtime_ned                       ... bench:     183,137.90 ns/iter (+/- 21,002.04)
test benches_tz_crates::bench_spatialtime_ned_random_edge_city      ... bench:     179,787.85 ns/iter (+/- 16,340.45)
test benches_tz_crates::bench_spatialtime_osm                       ... bench:   6,180,753.70 ns/iter (+/- 3,464,876.52)
test benches_tz_crates::bench_spatialtime_osm_random_edge_city      ... bench:   6,412,599.20 ns/iter (+/- 3,865,720.96)
test benches_tz_crates::bench_tz_search_lookup_random_city          ... bench:         168.74 ns/iter (+/- 31.80)
test benches_tz_crates::bench_tz_search_lookup_random_edge_city     ... bench:         160.63 ns/iter (+/- 2.81)
test benches_tz_crates::bench_tzf_default_finder_random_city        ... bench:         516.11 ns/iter (+/- 72.59)
test benches_tz_crates::bench_tzf_default_finder_random_edge_city   ... bench:       1,379.11 ns/iter (+/- 31.38)
test benches_tz_crates::bench_tzf_finder_random_city                ... bench:      13,186.70 ns/iter (+/- 1,149.22)
test benches_tz_crates::bench_tzf_finder_random_edge_city           ... bench:       9,692.46 ns/iter (+/- 621.27)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city          ... bench:         265.35 ns/iter (+/- 11.09)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_edge_city     ... bench:         257.37 ns/iter (+/- 2.75)
test benches_tz_crates::bench_zone_detect_random_city               ... bench:     773,409.13 ns/iter (+/- 249,937.77)
test benches_tz_crates::bench_zone_detect_random_edge_city          ... bench:     897,885.74 ns/iter (+/- 275,550.71)

test result: ok. 0 passed; 0 failed; 0 ignored; 18 measured; 0 filtered out; finished in 69.87s

```

## Python

```
================================================= test session starts ==================================================
platform linux -- Python 3.14.4, pytest-9.0.3, pluggy-1.5.0
benchmark: 5.2.3 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /home/runner/work/tz-benchmark/tz-benchmark/python
configfile: pyproject.toml
plugins: pretty-1.3.0, benchmark-5.2.3
collected 4 items

tz_test.py ....                                                                                                  [100%]


------------------------------------------------------------------------------------------------ benchmark: 4 tests ------------------------------------------------------------------------------------------------
Name (time in us)                           Min                    Max               Mean              StdDev             Median                IQR             Outliers  OPS (Kops/s)            Rounds  Iterations
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities                 1.0220 (1.0)          64.1500 (1.27)      2.4087 (1.0)        1.8026 (1.0)       1.7830 (1.0)       0.4910 (1.0)      7110;8311      415.1679 (1.0)       53121           1
test_tzfpy_random_edge_cities            2.0740 (2.03)         50.4250 (1.0)       5.7724 (2.40)       1.8762 (1.04)      5.6300 (3.16)      1.6130 (3.29)    11205;2166      173.2388 (0.42)      59734           1
test_timezonefinder_random_city          2.1240 (2.08)     75,237.0430 (>1000.0)  28.2844 (11.74)    624.4646 (346.43)    4.6180 (2.59)     26.6142 (54.20)       1;1332       35.3552 (0.09)      14559           1
test_timezonefinder_random_edge_city     2.9550 (2.89)        359.7720 (7.13)     55.5607 (23.07)     48.9833 (27.17)    39.4130 (22.10)    52.7633 (107.46)     528;209       17.9983 (0.04)       3357           1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (4.82s):
         4 passed
```
