# tz-benchmark

## Go

[Commit]

[Commit]: https://github.com/ringsaturn/tz-benchmark/commit/96a4be6e71a51fa8d12c44bc1129f538c8250430

```
goos: linux
goarch: amd64
pkg: github.com/ringsaturn/tz-benchmark
cpu: Intel(R) Xeon(R) Platinum 8370C CPU @ 2.80GHz
BenchmarkTimezoneLookup_Random-2                   39345             32350 ns/op             14000 ns/p50            85599 ns/p90           243597 ns/p99              8 B/op          0 allocs/op
BenchmarkTimezoneLookup_Random_WorldCities-2       13202             87304 ns/op             74899 ns/p50           188298 ns/p90           371296 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Lite_Random-2                        369580              3244 ns/op              1500 ns/p50             7700 ns/p90            22199 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Lite_Random_WorldCities-2            370281              3208 ns/op              1400 ns/p50            11500 ns/p90            22200 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Full_Random-2                         95330             12680 ns/op             12799 ns/p50            18600 ns/p90            31999 ns/p99              8 B/op          0 allocs/op
BenchmarkTZF_Full_Random_WorldCities-2             93736             12597 ns/op             11300 ns/p50            20500 ns/p90            37700 ns/p99              8 B/op          0 allocs/op
BenchmarkLatlong_Random-2                        2134056               562.0 ns/op             500.0 ns/p50            900.0 ns/p90           1200 ns/p99              8 B/op          0 allocs/op
BenchmarkLatlong_Random_WorldCities-2            2279594               524.5 ns/op             500.0 ns/p50            800.0 ns/p90           1200 ns/p99              8 B/op          0 allocs/op
BenchmarkLocaltimezone_Random-2                    40608             29488 ns/op             28800 ns/p50            44300 ns/p90           103899 ns/p99             37 B/op          2 allocs/op
BenchmarkLocaltimezone_Random_WorldCities-2        47038             25657 ns/op             16500 ns/p50            61899 ns/p90           104799 ns/p99             24 B/op          1 allocs/op
BenchmarkTimezoneMapper_Random-2                 4209424               280.8 ns/op             300.0 ns/p50            400.0 ns/p90            600.0 ns/p99            8 B/op          0 allocs/op
BenchmarkTimezoneMapper_Random_WorldCities-2     2866185               415.6 ns/op             400.0 ns/p50            600.0 ns/p90            800.0 ns/p99            8 B/op          0 allocs/op
```

## Python

TODO
