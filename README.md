# tz-benchmark

Benchmarks ran [`1f09e51`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/1f09e51acc184385df56e08aa2a219daf1aa643b

## Go 1.20

```
go test -bench=. -benchmem ./...
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark
cpu: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz
BenchmarkTZF_Default_Random_WorldCities-2      	  395805	      2974 ns/op	      1500 ns/p50	     10500 ns/p90	     17200 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-2          	 2101012	       569.0 ns/op	       500.0 ns/p50	       900.0 ns/p90	      1300 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-2    	   12228	     96403 ns/op	     68500 ns/p50	    217001 ns/p90	    360401 ns/p99	      24 B/op	       1 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-2   	 2811265	       418.8 ns/op	       400.0 ns/p50	       600.0 ns/p90	       800.0 ns/p99	       8 B/op	       0 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark	8.838s
```

## Python 3.11

```
================================================= test session starts ==================================================
platform linux -- Python 3.11.4, pytest-7.4.0, pluggy-1.2.0
benchmark: 4.0.0 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /home/runner/work/tz-benchmark/tz-benchmark
plugins: pretty-1.2.0, benchmark-4.0.0
collected 2 items

tz_test.py ..                                                                                                    [100%]


--------------------------------------------------------------------------------------------- benchmark: 2 tests ---------------------------------------------------------------------------------------------
Name (time in us)                      Min                   Max               Mean              StdDev            Median                IQR              Outliers  OPS (Kops/s)            Rounds  Iterations
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities            1.8000 (1.0)        142.3010 (1.0)       4.6914 (1.0)        6.4905 (1.0)      2.6000 (1.0)       0.5000 (1.0)      7777;10585      213.1560 (1.0)       71943           1
test_timezonefinder_random_city     5.9000 (3.28)     1,100.5070 (7.73)     84.9650 (18.11)    143.5849 (22.12)    9.5000 (3.65)     97.4005 (194.80)      161;138       11.7695 (0.06)       1244           1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (4.37s):
         2 passed
```

## Rust

```
running 4 tests
test benches_tz_crates::bench_tz_search_lookup_random_city   ... bench:         276 ns/iter (+/- 26)
test benches_tz_crates::bench_tzf_default_finder_random_city ... bench:       3,251 ns/iter (+/- 247)
test benches_tz_crates::bench_tzf_finder_random_city         ... bench:      15,453 ns/iter (+/- 818)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city   ... bench:         967 ns/iter (+/- 15)

test result: ok. 0 passed; 0 failed; 0 ignored; 4 measured; 0 filtered out; finished in 17.06s
```
