# tz-benchmark

Benchmarks ran [`aef61f7`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/aef61f754b5f7a497630e9c129b9e8d603dc8006

## Go 
```
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark/go
cpu: AMD EPYC 7763 64-Core Processor                
BenchmarkTZF_Default_Random_WorldCities-4      	  568519	      2003 ns/op	       941.0 ns/p50	      7213 ns/p90	     11942 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-4          	 4283955	       275.3 ns/op	       250.0 ns/p50	       380.0 ns/p90	       561.0 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-4    	   34564	     34857 ns/op	     24215 ns/p50	     80411 ns/p90	    132879 ns/p99	      24 B/op	       1 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-4   	 4437944	       271.0 ns/op	       251.0 ns/p50	       360.0 ns/p90	       481.0 ns/p99	       8 B/op	       0 allocs/op
BenchmarkGoTZ-4                                	   12910	     93143 ns/op	     54772 ns/p50	    244137 ns/p90	    488234 ns/p99	      24 B/op	       1 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark/go	10.985s
```
## Rust
```

running 7 tests
test benches_tz_crates::bench_spatialtime_ned                ... bench:     182,374.66 ns/iter (+/- 27,241.16)
test benches_tz_crates::bench_spatialtime_osm                ... bench:   6,185,373.85 ns/iter (+/- 3,763,755.81)
test benches_tz_crates::bench_tz_search_lookup_random_city   ... bench:         160.34 ns/iter (+/- 40.65)
test benches_tz_crates::bench_tzf_default_finder_random_city ... bench:       3,601.49 ns/iter (+/- 152.52)
test benches_tz_crates::bench_tzf_finder_random_city         ... bench:       8,331.89 ns/iter (+/- 333.32)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city   ... bench:         854.64 ns/iter (+/- 18.50)
test benches_tz_crates::bench_zone_detect_random_city        ... bench:     776,716.35 ns/iter (+/- 310,444.42)

test result: ok. 0 passed; 0 failed; 0 ignored; 7 measured; 0 filtered out; finished in 25.63s

```
## Python 
```
================================================= test session starts ==================================================
platform linux -- Python 3.14.3, pytest-9.0.2, pluggy-1.5.0
benchmark: 5.2.3 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /home/runner/work/tz-benchmark/tz-benchmark/python
configfile: pyproject.toml
plugins: pretty-1.3.0, benchmark-5.2.3
collected 2 items

tz_test.py ..                                                                                                    [100%]


--------------------------------------------------------------------------------------------- benchmark: 2 tests ---------------------------------------------------------------------------------------------
Name (time in us)                      Min                    Max               Mean              StdDev            Median                IQR             Outliers  OPS (Kops/s)            Rounds  Iterations
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities            1.7060 (1.0)         146.8960 (1.0)       4.8605 (1.0)        7.4470 (1.0)      2.3060 (1.0)       0.3990 (1.0)      7334;9379      205.7421 (1.0)       58998           1
test_timezonefinder_random_city     1.7400 (1.02)     79,149.6690 (538.81)   30.4171 (6.26)     601.7210 (80.80)    3.8460 (1.67)     29.5880 (74.16)       1;1754       32.8763 (0.16)      17392           1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (4.20s):
         2 passed
```
