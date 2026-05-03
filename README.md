# tz-benchmark

Benchmarks ran [`b7388af`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/b7388affcd505f8bb2b2b5ce2978b113d71a9f0a

## Go 
```
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark/go
cpu: AMD EPYC 7763 64-Core Processor                
BenchmarkTZF_Default_Random_WorldCities-4      	 2382949	       511.1 ns/op	       321.0 ns/p50	       941.0 ns/p90	      1944 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Default_Random_EdgeCities-4       	 1000000	      1034 ns/op	       901.0 ns/p50	      1453 ns/p90	      2234 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-4          	 5748999	       204.4 ns/op	       130.0 ns/p50	       240.0 ns/p90	       381.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLatlong_Random_EdgeCities-4           	 6022730	       199.8 ns/op	       140.0 ns/p50	       210.0 ns/p90	       320.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-4    	   27144	     44940 ns/op	     30046 ns/p50	    104696 ns/p90	    178264 ns/p99	      16 B/op	       1 allocs/op
BenchmarkLocaltimezone_Random_EdgeCities-4     	   34246	     35521 ns/op	     32861 ns/p50	     51096 ns/p90	    147115 ns/p99	      16 B/op	       1 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-4   	 6142552	       194.6 ns/op	       120.0 ns/p50	       211.0 ns/p90	       291.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTimezoneMapper_Random_EdgeCities-4    	 7056580	       171.1 ns/op	       110.0 ns/p50	       170.0 ns/p90	       240.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkGoTZ_Random_WorldCities-4             	   12643	     93717 ns/op	     55343 ns/p50	    252422 ns/p90	    489075 ns/p99	      16 B/op	       1 allocs/op
BenchmarkGoTZ_Random_EdgeCities-4              	   13270	     89047 ns/op	     74599 ns/p50	    136355 ns/p90	    445063 ns/p99	      16 B/op	       1 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark/go	20.018s
```
## Rust
```

running 14 tests
test benches_tz_crates::bench_spatialtime_ned                     ... bench:     180,371.62 ns/iter (+/- 16,893.71)
test benches_tz_crates::bench_spatialtime_ned_random_edge_city    ... bench:     173,995.35 ns/iter (+/- 19,799.91)
test benches_tz_crates::bench_spatialtime_osm                     ... bench:   6,139,662.95 ns/iter (+/- 3,124,852.11)
test benches_tz_crates::bench_spatialtime_osm_random_edge_city    ... bench:   6,149,985.60 ns/iter (+/- 3,507,264.61)
test benches_tz_crates::bench_tz_search_lookup_random_city        ... bench:         130.77 ns/iter (+/- 32.77)
test benches_tz_crates::bench_tz_search_lookup_random_edge_city   ... bench:         165.23 ns/iter (+/- 6.46)
test benches_tz_crates::bench_tzf_default_finder_random_city      ... bench:       1,032.61 ns/iter (+/- 35.70)
test benches_tz_crates::bench_tzf_default_finder_random_edge_city ... bench:       2,913.49 ns/iter (+/- 99.72)
test benches_tz_crates::bench_tzf_finder_random_city              ... bench:      13,086.22 ns/iter (+/- 1,728.48)
test benches_tz_crates::bench_tzf_finder_random_edge_city         ... bench:       9,833.42 ns/iter (+/- 978.29)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city        ... bench:         648.59 ns/iter (+/- 31.90)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_edge_city   ... bench:         883.29 ns/iter (+/- 3.67)
test benches_tz_crates::bench_zone_detect_random_city             ... bench:     729,856.36 ns/iter (+/- 326,141.22)
test benches_tz_crates::bench_zone_detect_random_edge_city        ... bench:     871,752.62 ns/iter (+/- 232,757.74)

test result: ok. 0 passed; 0 failed; 0 ignored; 14 measured; 0 filtered out; finished in 54.66s

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
test_tzfpy_random_cities                 1.0220 (1.0)          30.7370 (1.0)       2.3583 (1.0)        1.7034 (1.00)      1.7540 (1.0)       0.4700 (1.0)      4008;4590      424.0327 (1.0)       29930           1
test_tzfpy_random_edge_cities            2.0430 (2.00)         34.0740 (1.11)      5.1804 (2.20)       1.6971 (1.0)       5.1190 (2.92)      1.4830 (3.16)    11224;2224      193.0345 (0.46)      58405           1
test_timezonefinder_random_city          2.0740 (2.03)     71,080.5990 (>1000.0)  24.9950 (10.60)    485.5682 (286.11)    4.0670 (2.32)     25.2668 (53.76)       1;2010       40.0080 (0.09)      21531           1
test_timezonefinder_random_edge_city     2.4040 (2.35)        373.2760 (12.14)    52.8568 (22.41)     47.9367 (28.25)    36.4190 (20.76)    51.6367 (109.87)    1330;501       18.9190 (0.04)       8199           1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (5.01s):
         4 passed
```
