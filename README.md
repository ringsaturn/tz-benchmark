# tz-benchmark

Benchmarks ran [`9a19b74`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/9a19b7444647553f6b29d673c8884fd6d0d4ab2a

## Go 1.20

```
go test -bench=. -benchmem ./...
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark
cpu: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz
BenchmarkTZF_Default_Random_WorldCities-2      	  432300	      2826 ns/op	      1400 ns/p50	     10100 ns/p90	     16299 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-2          	 2465140	       497.7 ns/op	       400.0 ns/p50	       800.0 ns/p90	      1100 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-2    	   12309	     95640 ns/op	     68799 ns/p50	    216398 ns/p90	    360597 ns/p99	      24 B/op	       1 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-2   	 3549535	       335.2 ns/op	       300.0 ns/p50	       500.0 ns/p90	       600.0 ns/p99	       8 B/op	       0 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark	8.680s
```

## Python 3.11

```
================================================= test session starts ==================================================
platform linux -- Python 3.11.4, pytest-7.4.0, pluggy-1.2.0
benchmark: 4.0.0 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /home/runner/work/tz-benchmark/tz-benchmark
plugins: pretty-1.2.0, benchmark-4.0.0
collected 2 items


Wrote benchmark data in: <_io.BufferedWriter name='output.json'>
tz_test.py ..                                                                                                    [100%]


--------------------------------------------------------------------------------------------- benchmark: 2 tests ---------------------------------------------------------------------------------------------
Name (time in us)                      Min                   Max               Mean              StdDev             Median                 IQR            Outliers  OPS (Kops/s)            Rounds  Iterations
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities            1.7000 (1.0)        131.7040 (1.0)       4.4470 (1.0)        6.1762 (1.0)       2.4000 (1.0)        0.5000 (1.0)     6852;9122      224.8721 (1.0)       61346           1
test_timezonefinder_random_city     5.7000 (3.35)     1,364.1430 (10.36)    87.5908 (19.70)    146.6163 (23.74)    10.8010 (4.50)     105.2040 (210.41)    946;775       11.4167 (0.05)       7994           1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (6.02s):
         2 passed
```

## Rust

```
running 6 tests
test benches_tz_crates::bench_rtz_get_timezone_ned_random_city ... bench:         914 ns/iter (+/- 63)
test benches_tz_crates::bench_rtz_get_timezone_osm_random_city ... bench:       3,690 ns/iter (+/- 263)
test benches_tz_crates::bench_tz_search_lookup_random_city     ... bench:         220 ns/iter (+/- 17)
test benches_tz_crates::bench_tzf_default_finder_random_city   ... bench:       2,897 ns/iter (+/- 300)
test benches_tz_crates::bench_tzf_finder_random_city           ... bench:      13,311 ns/iter (+/- 711)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city     ... bench:       1,093 ns/iter (+/- 19)

test result: ok. 0 passed; 0 failed; 0 ignored; 6 measured; 0 filtered out; finished in 21.63s
```
