# tz-benchmark

Benchmarks ran [`53547e6`][commit] locally on an Apple M3 Max (macOS, darwin/arm64);
the raw files live in [`snapshot/2026-09-11-53547e63ddbc2736b8435f02abb53c398375e258`](snapshot/2026-09-11-53547e63ddbc2736b8435f02abb53c398375e258).

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/53547e63ddbc2736b8435f02abb53c398375e258

## Go

```
goos: darwin
goarch: arm64
pkg: github.com/ringsaturn/tz-benchmark/go
cpu: Apple M3 Max
BenchmarkTimezoneMapper_Random_WorldCities-16    	10535722	       108.9 ns/op	        42.00 ns/p50	       209.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTimezoneMapper_Random_EdgeCities-16     	14515923	        82.23 ns/op	        42.00 ns/p50	       125.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-16           	10776724	       112.3 ns/op	        83.00 ns/p50	       250.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLatlong_Random_EdgeCities-16            	10415422	       114.5 ns/op	        83.00 ns/p50	       167.0 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Default_Random_WorldCities-16       	 3393488	       357.5 ns/op	       208.0 ns/p50	      1667 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Default_Random_EdgeCities-16        	 2204626	       553.6 ns/op	       500.0 ns/p50	      1292 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Embedded_Random_WorldCities-16      	  556704	      2207 ns/op	       583.0 ns/p50	     21250 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Embedded_Random_EdgeCities-16       	  114115	     10170 ns/op	      8959 ns/p50	     30791 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Full_Random_WorldCities-16          	 2966158	       394.6 ns/op	       208.0 ns/p50	      2250 ns/p99	       0 B/op	       0 allocs/op
BenchmarkTZF_Full_Random_EdgeCities-16           	 1985430	       612.1 ns/op	       500.0 ns/p50	      1708 ns/p99	       0 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-16     	   49111	     24565 ns/op	     16666 ns/p50	     95042 ns/p99	      16 B/op	       1 allocs/op
BenchmarkLocaltimezone_Random_EdgeCities-16      	   57770	     21146 ns/op	     19250 ns/p50	     80083 ns/p99	      16 B/op	       1 allocs/op
BenchmarkGoTZ_Random_WorldCities-16              	   23505	     50107 ns/op	     28708 ns/p50	    264917 ns/p99	      16 B/op	       1 allocs/op
BenchmarkGoTZ_Random_EdgeCities-16               	   30756	     44762 ns/op	     31583 ns/p50	    248958 ns/p99	      16 B/op	       1 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark/go	23.624s
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/accuracy	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/defaultfinder	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/embeddedfinder	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/fullfinder	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/gotz	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/latlong	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/localtimezone	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/noop	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/cmd/memory/candidates/timezonemapper	[no test files]
?   	github.com/ringsaturn/tz-benchmark/go/internal/memprobe	[no test files]
```

## Rust

```

running 16 tests
test benches_tz_crates::bench_rtz_get_timezone_ned_random_city      ... bench:         434.72 ns/iter (+/- 94.85)
test benches_tz_crates::bench_rtz_get_timezone_ned_random_edge_city ... bench:         754.65 ns/iter (+/- 36.69)
test benches_tz_crates::bench_rtz_get_timezone_osm_random_city      ... bench:       1,524.37 ns/iter (+/- 181.04)
test benches_tz_crates::bench_rtz_get_timezone_osm_random_edge_city ... bench:       3,089.48 ns/iter (+/- 400.16)
test benches_tz_crates::bench_spatialtime_ned                       ... bench:     168,661.59 ns/iter (+/- 27,082.40)
test benches_tz_crates::bench_spatialtime_ned_random_edge_city      ... bench:     162,564.15 ns/iter (+/- 14,981.33)
test benches_tz_crates::bench_spatialtime_osm                       ... bench:   5,352,820.80 ns/iter (+/- 3,437,132.94)
test benches_tz_crates::bench_spatialtime_osm_random_edge_city      ... bench:   5,944,612.50 ns/iter (+/- 3,505,518.75)
test benches_tz_crates::bench_tz_search_lookup_random_city          ... bench:         108.65 ns/iter (+/- 40.63)
test benches_tz_crates::bench_tz_search_lookup_random_edge_city     ... bench:         118.67 ns/iter (+/- 1.34)
test benches_tz_crates::bench_tzf_default_finder_random_city        ... bench:         228.81 ns/iter (+/- 86.41)
test benches_tz_crates::bench_tzf_default_finder_random_edge_city   ... bench:         519.44 ns/iter (+/- 108.17)
test benches_tz_crates::bench_tzf_embedded_finder_random_city       ... bench:       1,182.07 ns/iter (+/- 224.02)
test benches_tz_crates::bench_tzf_embedded_finder_random_edge_city  ... bench:       4,779.81 ns/iter (+/- 327.40)
test benches_tz_crates::bench_zone_detect_random_city               ... bench:     443,339.58 ns/iter (+/- 83,013.68)
test benches_tz_crates::bench_zone_detect_random_edge_city          ... bench:     517,721.09 ns/iter (+/- 117,364.15)

test result: ok. 0 passed; 0 failed; 0 ignored; 16 measured; 0 filtered out; finished in 69.39s
```

## Python

```
============================= test session starts ==============================
platform darwin -- Python 3.14.0, pytest-9.1.1, pluggy-1.5.0
benchmark: 5.2.3 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /Users/ringsaturn/Projects/tz-benchmark/python
configfile: pyproject.toml
plugins: benchmark-5.2.3, pretty-1.3.0
collected 4 items

tz_test.py ....                                                          [100%]


------------------------------------------------------------------------------------------------------------ benchmark: 4 tests ------------------------------------------------------------------------------------------------------------
Name (time in ns)                               Min                        Max                   Mean                 StdDev                 Median                    IQR              Outliers  OPS (Kops/s)            Rounds  Iterations
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities                   374.9956 (1.0)          27,500.0057 (1.0)         913.7036 (1.0)         734.0160 (1.0)         708.0016 (1.0)         208.9946 (1.0)      4775;10897    1,094.4468 (1.0)       76676           1
test_tzfpy_random_edge_cities              457.9997 (1.22)        207,083.9982 (7.53)      1,283.9529 (1.41)      1,175.4593 (1.60)      1,125.0013 (1.59)        499.9965 (2.39)      4754;8219      778.8448 (0.71)     176461           1
test_timezonefinder_random_city            957.9962 (2.55)     10,931,041.0044 (397.49)    7,158.5244 (7.83)     76,258.0336 (103.89)    1,791.9956 (2.53)      7,292.0011 (34.89)       23;1965      139.6936 (0.13)      20834           1
test_timezonefinder_random_edge_city     1,041.0004 (2.78)        780,792.0047 (28.39)    16,081.5488 (17.60)    13,241.5370 (18.04)    11,875.0031 (16.77)    13,666.0019 (65.39)    15446;6695       62.1831 (0.06)     101266           1
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (3.78s):
         4 passed
```

