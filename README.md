# tz-benchmark

Benchmarks ran [`9d0a532`][commit] in GitHub Actions.

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/9d0a532fc7ece699ecefa6fabbcdc0f74a574307

## Go 1.19

std benchmark:

```
go test -bench=. -benchmem ./...
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark
cpu: Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz
BenchmarkTZF_Lite_Random-2                     	  385284	      2796 ns/op	      1300 ns/p50	      6800 ns/p90	     17900 ns/p99	       8 B/op	       0 allocs/op
BenchmarkTZF_Lite_Gloabl-2                     	       8	 144234722 ns/op	 141896529 ns/p50	      16 B/op	       0 allocs/op
BenchmarkTZF_Lite_Random_WorldCities-2         	  421426	      2755 ns/op	      1300 ns/p50	     10200 ns/p90	     16200 ns/p99	       8 B/op	       0 allocs/op
BenchmarkTZF_Full_Random-2                     	  103034	     11578 ns/op	     13300 ns/p50	     15000 ns/p90	     21400 ns/p99	       8 B/op	       0 allocs/op
BenchmarkTZF_Full_Random_WorldCities-2         	  121387	      9805 ns/op	     10000 ns/p50	     14300 ns/p90	     23500 ns/p99	       8 B/op	       0 allocs/op
BenchmarkTZF_Full_Gloabl-2                     	       2	 638091284 ns/op	      40 B/op	       1 allocs/op
BenchmarkLatlong_Random-2                      	 2192751	       542.2 ns/op	       500.0 ns/p50	       900.0 ns/p90	      1000 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLatlong_Random_WorldCities-2          	 2393151	       500.3 ns/op	       400.0 ns/p50	       800.0 ns/p90	      1100 ns/p99	       8 B/op	       0 allocs/op
BenchmarkLatlong_Global-2                      	      61	  19215028 ns/op	  19208564 ns/p50	  19237965 ns/p90	       9 B/op	       0 allocs/op
BenchmarkLocaltimezone_Random-2                	   17145	     69225 ns/op	     40501 ns/p50	    161702 ns/p90	    332703 ns/p99	      37 B/op	       2 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-2    	   12643	     95776 ns/op	     69600 ns/p50	    206402 ns/p90	    344403 ns/p99	      24 B/op	       1 allocs/op
BenchmarkLocaltimezone_Global-2                	       1	4105927874 ns/op	 1915896 B/op	  136576 allocs/op
BenchmarkTimezoneMapper_Random-2               	 4530771	       261.8 ns/op	       200.0 ns/p50	       400.0 ns/p90	       500.0 ns/p99	       8 B/op	       0 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-2   	 3371113	       356.1 ns/op	       300.0 ns/p50	       500.0 ns/p90	       700.0 ns/p99	       8 B/op	       0 allocs/op
BenchmarkTimezoneMapper_Global-2               	     530	   2252251 ns/op	   2252119 ns/p50	   2264619 ns/p90	   2311520 ns/p99	       9 B/op	       0 allocs/op
PASS
ok  	github.com/ringsaturn/tz-benchmark	53.461s
```

lotsa benchmark:

```
tz_test.go:232: TestTZFDefaultFinder_IterAllCities	140,962 ops over 2 threads in 167ms, 843,779/sec, 1185 ns/op
tz_test.go:243: TestTZFFullFinder_IterAllCities	140,962 ops over 2 threads in 608ms, 231,865/sec, 4312 ns/op
tz_test.go:257: TestLocaltimezone_IterAllCities	140,962 ops over 2 threads in 6810ms, 20,699/sec, 48310 ns/op
tz_test.go:268: TestBradtitzLatlong_IterAllCities	140,962 ops over 2 threads in 23ms, 6,206,981/sec, 161 ns/op
tz_test.go:279: TestTimezonemapper_IterAllCities	140,962 ops over 2 threads in 5ms, 27,384,396/sec, 36 ns/op
```

## Python 3.11

```
--------------------------------------------------------------------------------------------------------------- benchmark: 7 tests --------------------------------------------------------------------------------------------------------------
Name (time in us)                                 Min                       Max                      Mean                 StdDev                    Median                    IQR            Outliers           OPS            Rounds  Iterations
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities                       4.8000 (1.0)            155.2130 (1.01)             8.5209 (1.0)           8.4224 (1.0)              5.7010 (1.0)           0.6000 (1.0)     1336;2053  117,358.6961 (1.0)       12269           1
test_timezonefinder_random_city               14.2010 (2.96)         1,718.6420 (11.17)          134.7227 (15.81)       201.5832 (23.93)           23.4020 (4.10)        160.9630 (268.27)    289;194    7,422.6516 (0.06)       2245           1
test_tzfpy_random                             37.7030 (7.85)           153.9130 (1.0)             42.0572 (4.94)         11.0811 (1.32)            38.9030 (6.82)          0.9000 (1.50)      366;678   23,777.1158 (0.20)       4630           1
test_timezonefinder_random                    49.3040 (10.27)        1,618.8350 (10.52)          101.6232 (11.93)       127.3918 (15.13)           52.9040 (9.28)         28.9530 (48.25)     311;695    9,840.2735 (0.08)       3715           1
test_timezonefinder_random_certain           125.4110 (26.13)        2,122.1760 (13.79)          435.9202 (51.16)       262.6790 (31.19)          390.6820 (68.53)       367.3305 (612.22)     451;31    2,293.9980 (0.02)       1424           1
test_tzfpy_iter_global                   615,899.0170 (>1000.0)    617,025.5100 (>1000.0)    616,420.7602 (>1000.0)     450.0876 (53.44)      616,474.4650 (>1000.0)     706.0835 (>1000.0)       2;0        1.6223 (0.00)          5           1
test_timezonefinder_iter_global        9,002,535.1720 (>1000.0)  9,087,542.0630 (>1000.0)  9,042,564.9744 (>1000.0)  32,747.8838 (>1000.0)  9,048,877.1380 (>1000.0)  46,377.0805 (>1000.0)       2;0        0.1106 (0.00)          5           1
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
Results (76.21s):
         7 passed
```

## Rust

```
running 4 tests
test benches_tz_crates::bench_tz_search_lookup_random_city   ... bench:         248 ns/iter (+/- 51)
test benches_tz_crates::bench_tzf_default_finder_random_city ... bench:       3,169 ns/iter (+/- 215)
test benches_tz_crates::bench_tzf_finder_random_city         ... bench:      15,500 ns/iter (+/- 1,146)
test benches_tz_crates::bench_tzf_fuzzy_finder_random_city   ... bench:         970 ns/iter (+/- 13)

test result: ok. 0 passed; 0 failed; 0 ignored; 4 measured; 0 filtered out; finished in 15.42s
```
