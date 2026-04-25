# tz-benchmark

Benchmarks ran [`ce33194`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/ce3319498b12955ad167287290a523ebec54c778

## Go 
```
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark/go
cpu: AMD EPYC 7763 64-Core Processor                
BenchmarkTZF_Default_Random_WorldCities-4      	  633400	      1672 ns/op	      1042 ns/p50	      4729 ns/p90	      7584 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-4          	 3829750	       318.4 ns/op	       300.0 ns/p50	       431.0 ns/p90	       671.0 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-4    	   34585	     34868 ns/op	     24206 ns/p50	     80301 ns/p90	    133600 ns/p99	      24 B/op	       1 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-4   	 3959828	       298.9 ns/op	       281.0 ns/p50	       400.0 ns/p90	       561.0 ns/p99	       8 B/op	       0 allocs/op
BenchmarkGoTZ-4                                	   12558	     94621 ns/op	     55744 ns/p50	    253835 ns/p90	    494734 ns/p99	      24 B/op	       1 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark/go	10.763s
```
## Rust
```

running 7 tests
test benches_tz_crates::bench_spatialtime_ned                ... bench:     196,692.40 ns/iter (+/- 25,683.78)
test benches_tz_crates::bench_spatialtime_osm                ... bench:   6,264,272.45 ns/iter (+/- 4,117,593.18)
test benches_tz_crates::bench_tz_search_lookup_random_city   ... bench:         171.18 ns/iter (+/- 3.43)
test benches_tz_crates::bench_tzf_default_finder_random_city ... bench:       2,087.49 ns/iter (+/- 56.29)
test benches_tz_crates::bench_tzf_finder_random_city         ... bench:       9,119.38 ns/iter (+/- 472.40)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city   ... bench:         783.78 ns/iter (+/- 13.94)
test benches_tz_crates::bench_zone_detect_random_city        ... bench:     739,340.54 ns/iter (+/- 322,340.71)

test result: ok. 0 passed; 0 failed; 0 ignored; 7 measured; 0 filtered out; finished in 27.80s

```
## Python 
```
================================================= test session starts ==================================================
platform linux -- Python 3.14.4, pytest-9.0.2, pluggy-1.5.0
benchmark: 5.2.3 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /home/runner/work/tz-benchmark/tz-benchmark/python
configfile: pyproject.toml
plugins: pretty-1.3.0, benchmark-5.2.3
collected 2 items

tz_test.py ..                                                                                                    [100%]


--------------------------------------------------------------------------------------------- benchmark: 2 tests ---------------------------------------------------------------------------------------------
Name (time in us)                      Min                    Max               Mean              StdDev            Median                IQR             Outliers  OPS (Kops/s)            Rounds  Iterations
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities            1.6830 (1.0)          43.8620 (1.0)       3.2612 (1.0)        2.6516 (1.0)      2.1940 (1.0)       0.3100 (1.0)      8936;9391      306.6350 (1.0)       58645           1
test_timezonefinder_random_city     1.9840 (1.18)     75,695.9250 (>1000.0)  27.3673 (8.39)     626.1621 (236.14)   4.0280 (1.84)     26.0790 (84.13)       1;1352       36.5399 (0.12)      14657           1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (4.13s):
         2 passed
```