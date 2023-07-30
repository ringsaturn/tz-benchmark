# tz-benchmark

Benchmark runs under Intel i9-9880H (16) @ 2.30GHz with [Commit]

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/795cdce7ef02f320113772377f259f4dc7aa9e1c

## Go

Benchmarks:

```
go test -bench=. -benchmem ./...
goos: darwin
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark
cpu: Intel(R) Core(TM) i9-9880H CPU @ 2.30GHz
BenchmarkTimezoneLookup_Random-16                          34921             31067 ns/op             14000 ns/p50            84000 ns/p90           219000 ns/p99              8 B/op          0 allocs/op
BenchmarkTimezoneLookup_Random_WorldCities-16              14049             82561 ns/op             67000 ns/p50           180000 ns/p90           343000 ns/p99              8 B/op          0 allocs/op
BenchmarkTimezoneLookup_Gloabl-16                              1        1765216598 ns/op              80 B/op          2 allocs/op
BenchmarkTZF_Lite_Random-16                               485732              2449 ns/op              1000 ns/p50             6000 ns/p90            18000 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Lite_Gloabl-16                                    9         119102212 ns/op         119900000 ns/p50             16 B/op          0 allocs/op
BenchmarkTZF_Lite_Random_WorldCities-16                   440616              2547 ns/op              1000 ns/p50             9000 ns/p90            18000 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Full_Random-16                               120902              9592 ns/op             10000 ns/p50            13000 ns/p90            31000 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Full_Random_WorldCities-16                   132006              9561 ns/op              9000 ns/p50            15000 ns/p90            30000 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Full_Gloabl-16                                    2         554684152 ns/op              40 B/op          1 allocs/op
BenchmarkLatlong_Random-16                               2588578               458.9 ns/op               0 ns/p50             1000 ns/p90             1000 ns/p99              8 B/op          0 allocs/op
BenchmarkLatlong_Random_WorldCities-16                   2635825               466.2 ns/op               0 ns/p50             1000 ns/p90             1000 ns/p99              8 B/op          0 allocs/op
BenchmarkLatlong_Global-16                                    76          13781687 ns/op          13680000 ns/p50         14181000 ns/p90              9 B/op          0 allocs/op
BenchmarkLocaltimezone_Random-16                            6250            167436 ns/op            164000 ns/p50           201000 ns/p90           262000 ns/p99          37056 B/op        845 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-16                7060            152090 ns/op            141000 ns/p50           216000 ns/p90           241000 ns/p99          37056 B/op        845 allocs/op
BenchmarkLocaltimezone_Global-16                               1        10518504160 ns/op       2420674176 B/op 55244214 allocs/op
BenchmarkTimezoneMapper_Random-16                        4469755               274.3 ns/op               0 ns/p50             1000 ns/p90             1000 ns/p99              8 B/op          0 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-16            3318540               340.8 ns/op               0 ns/p50             1000 ns/p90             1000 ns/p99              8 B/op          0 allocs/op
BenchmarkTimezoneMapper_Global-16                            698           1703400 ns/op           1700000 ns/p50          1786000 ns/p90          2248000 ns/p99              8 B/op          0 allocs/op
PASS
ok      github.com/ringsaturn/tz-benchmark      52.850s
```

Concurrency benchmark with [lotsa]:

[lotsa]: https://github.com/tidwall/lotsa

```
tz_test.go:276: TestTZFDefaultFinder_IterAllCities  140,705 ops over 16 threads in 44ms, 3,164,940/sec, 315 ns/op
tz_test.go:287: TestTZFFullFinder_IterAllCities     140,705 ops over 16 threads in 163ms, 862,501/sec, 1159 ns/op
tz_test.go:298: TestTimezonecache_IterAllCities     140,705 ops over 16 threads in 2104ms, 66,881/sec, 14951 ns/op
tz_test.go:312: TestLocaltimezone_IterAllCities     140,705 ops over 16 threads in 6652ms, 21,150/sec, 47279 ns/op
tz_test.go:323: TestBradtitzLatlong_IterAllCities   140,705 ops over 16 threads in 12ms, 11,472,372/sec, 87 ns/op
tz_test.go:334: TestTimezonemapper_IterAllCities    140,705 ops over 16 threads in 2ms, 83,395,863/sec, 11 ns/op
```


## Python

```
platform darwin -- Python 3.9.13, pytest-7.2.0, pluggy-1.0.0
benchmark: 4.0.0 (defaults: timer=time.perf_counter disable_gc=False min_rounds=5 min_time=0.000005 max_time=1.0 calibration_precision=10 warmup=False warmup_iterations=100000)
rootdir: /Users/ringsaturn/go/src/github.com/ringsaturn/tz-benchmark
plugins: benchmark-4.0.0
collected 7 items                                                                                                                                                                                         

tz_test.py .......                                                                                                                                                                                  [100%]


----------------------------------------------------------------------------------------------------------------- benchmark: 7 tests ----------------------------------------------------------------------------------------------------------------
Name (time in us)                                 Min                       Max                      Mean                  StdDev                    Median                     IQR              Outliers           OPS            Rounds  Iterations
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
test_tzfpy_random_cities                       1.3370 (1.0)            182.1550 (1.0)              3.9050 (1.0)            6.2396 (1.0)              1.9405 (1.0)            0.3980 (1.0)      9828;15067  256,078.8050 (1.0)       97638           1
test_timezonefinder_random_city                5.6320 (4.21)           732.6130 (4.02)            56.5222 (14.47)         76.5955 (12.28)           13.3020 (6.85)          65.9140 (165.61)    4233;2668   17,692.1693 (0.07)      31562           1
test_tzfpy_random                             18.6440 (13.94)          220.5240 (1.21)            23.4121 (6.00)          10.9208 (1.75)            20.0450 (10.33)          1.3328 (3.35)      1342;3084   42,712.9600 (0.17)      16903           1
test_timezonefinder_random                    25.5300 (19.09)          681.0150 (3.74)            52.0832 (13.34)         52.1714 (8.36)            30.5760 (15.76)         19.9755 (50.19)     1755;2895   19,200.0332 (0.07)      18601           1
test_timezonefinder_random_certain            66.0730 (49.42)          842.3890 (4.62)           202.9903 (51.98)        120.4955 (19.31)          167.1750 (86.15)        163.6025 (411.06)         64;3    4,926.3436 (0.02)        233           1
test_tzfpy_iter_global                   323,409.5730 (>1000.0)    334,515.8410 (>1000.0)    329,384.1058 (>1000.0)    4,987.2047 (799.29)     328,634.7640 (>1000.0)    9,107.7512 (>1000.0)         3;0        3.0360 (0.00)          5           1
test_timezonefinder_iter_global        3,803,106.3200 (>1000.0)  4,591,043.4570 (>1000.0)  4,135,805.8456 (>1000.0)  323,996.8135 (>1000.0)  3,973,038.5630 (>1000.0)  486,804.8987 (>1000.0)         2;0        0.2418 (0.00)          5           1
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Legend:
  Outliers: 1 Standard Deviation from Mean; 1.5 IQR (InterQuartile Range) from 1st Quartile and 3rd Quartile.
  OPS: Operations Per Second, computed as 1 / Mean
```

## Rust

```
test benches_tzf_default::bench_default_finder_random_city ... bench:       2,748 ns/iter (+/- 209)
```
