# tz-benchmark

Benchmarks ran [`804a99e`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/804a99e8c6e3edae9024dfbf210ac95df728f79a

## Go 
```
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark/go
cpu: AMD EPYC 7763 64-Core Processor                
BenchmarkTZF_Default_Random_WorldCities-4      	  469153	      2154 ns/op	      1072 ns/p50	      7554 ns/p90	     12363 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-4          	 3482382	       369.5 ns/op	       331.0 ns/p50	       551.0 ns/p90	       801.0 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-4    	   13896	     86124 ns/op	     59551 ns/p50	    199463 ns/p90	    341720 ns/p99	      24 B/op	       1 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-4   	 4208377	       276.3 ns/op	       261.0 ns/p50	       371.0 ns/p90	       511.0 ns/p99	       8 B/op	       0 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark/go	8.000s
```
## Python 3.12
```
================================================= test session starts ==================================================
platform linux -- Python 3.12.5, pytest-8.3.3, pluggy-1.5.0
benchmark: 4.0.0 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /home/runner/work/tz-benchmark/tz-benchmark/python
plugins: pretty-1.2.0, benchmark-4.0.0
collected 2 items

tz_test.py ..                                                                                                    [100%]


-------------------------------------------------------------------------------------------- benchmark: 2 tests -------------------------------------------------------------------------------------------
Name (time in us)                      Min                   Max               Mean             StdDev            Median                IQR            Outliers  OPS (Kops/s)            Rounds  Iterations
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities            1.2430 (1.0)         57.9180 (1.0)       3.1189 (1.0)       3.4236 (1.0)      1.9540 (1.0)       0.4900 (1.0)     2078;2818      320.6229 (1.0)       17876           1
test_timezonefinder_random_city     2.8650 (2.30)     6,518.5350 (112.55)   28.5702 (9.16)     71.0831 (20.76)    6.0910 (3.12)     33.6120 (68.60)    727;1102       35.0015 (0.11)      15796           1
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (4.44s):
         2 passed
```
## Rust
```

running 8 tests
test benches_tz_crates::bench_rtz_get_timezone_ned_random_city ... bench:         664.48 ns/iter (+/- 39.55)
test benches_tz_crates::bench_rtz_get_timezone_osm_random_city ... bench:       2,673.14 ns/iter (+/- 198.19)
test benches_tz_crates::bench_spatialtime_ned                  ... bench:   4,584,448.65 ns/iter (+/- 187,473.02)
test benches_tz_crates::bench_spatialtime_osm                  ... bench: 125,178,429.80 ns/iter (+/- 4,608,114.04)
test benches_tz_crates::bench_tz_search_lookup_random_city     ... bench:         125.00 ns/iter (+/- 9.41)
test benches_tz_crates::bench_tzf_default_finder_random_city   ... bench:       1,892.46 ns/iter (+/- 78.09)
test benches_tz_crates::bench_tzf_finder_random_city           ... bench:       7,108.74 ns/iter (+/- 248.69)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city     ... bench:         729.72 ns/iter (+/- 38.26)

test result: ok. 0 passed; 0 failed; 0 ignored; 8 measured; 0 filtered out; finished in 61.20s

```
