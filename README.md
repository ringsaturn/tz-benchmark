# tz-benchmark

## Go

[Commit]

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/e6085538de7b9b7509dc541dd2910d0e7c2ecdd8

Random benchmarks:

```
goos: linux
goarch: amd64
BenchmarkTimezoneLookup_Random-2                   41406             29233 ns/op             12900 ns/p50            79500 ns/p90           205800 ns/p99              8 B/op           0 allocs/op
BenchmarkTimezoneLookup_Random_WorldCities-2       13711             85766 ns/op             70700 ns/p50           184000 ns/p90           364700 ns/p99              8 B/op           0 allocs/op
BenchmarkTZF_Lite_Random-2                        398482              2930 ns/op              1300 ns/p50             7000 ns/p90            20400 ns/p99              8 B/op           0 allocs/op
BenchmarkTZF_Lite_Random_WorldCities-2            374239              3194 ns/op              1400 ns/p50            11500 ns/p90            22200 ns/p99              8 B/op           0 allocs/op
BenchmarkTZF_Full_Random-2                         95128             12577 ns/op             12800 ns/p50            18200 ns/p90            30500 ns/p99              8 B/op           0 allocs/op
BenchmarkTZF_Full_Random_WorldCities-2            100290             12022 ns/op             10900 ns/p50            19300 ns/p90            35600 ns/p99              8 B/op           0 allocs/op
BenchmarkLatlong_Random-2                        2151417               552.8 ns/op             500.0 ns/p50            900.0 ns/p90           1100 ns/p99              8 B/op           0 allocs/op
BenchmarkLatlong_Random_WorldCities-2            2365732               499.4 ns/op             400.0 ns/p50            800.0 ns/p90           1200 ns/p99              8 B/op           0 allocs/op
BenchmarkLocaltimezone_Random-2                    39234             30317 ns/op             30200 ns/p50            45100 ns/p90           104300 ns/p99             37 B/op           2 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-2        46753             25358 ns/op             16400 ns/p50            61400 ns/p90           103800 ns/p99             24 B/op           1 allocs/op
BenchmarkTimezoneMapper_Random-2                 4582147               257.7 ns/op             200.0 ns/p50            400.0 ns/p90            500.0 ns/p99            8 B/op           0 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-2     3533343               344.0 ns/op             300.0 ns/p50            500.0 ns/p90            700.0 ns/p99  
```

Concurrency benchmark with [lotsa]:

[lotsa]: https://github.com/tidwall/lotsa

```
tz_test.go:276: TestTZFDefaultFinder_IterAllCities	140,705 ops over 2 threads in 241ms, 583,522/sec, 1713 ns/op
tz_test.go:287: TestTZFFullFinder_IterAllCities	    140,705 ops over 2 threads in 709ms, 198,370/sec, 5041 ns/op
tz_test.go:298: TestTimezonecache_IterAllCities	    140,705 ops over 2 threads in 7939ms, 17,722/sec, 56424 ns/op
tz_test.go:312: TestLocaltimezone_IterAllCities	    140,705 ops over 2 threads in 1486ms, 94,662/sec, 10563 ns/op
tz_test.go:323: TestBradtitzLatlong_IterAllCities	140,705 ops over 2 threads in 23ms, 6,034,563/sec, 165 ns/op
tz_test.go:334: TestTimezonemapper_IterAllCities	140,705 ops over 2 threads in 5ms, 27,077,899/sec, 36 ns/op
```


## Python

TODO

## Rust

TODO
