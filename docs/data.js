window.BENCHMARK_DATA = {
  "lastUpdate": 1690903486253,
  "repoUrl": "https://github.com/ringsaturn/tz-benchmark",
  "entries": {
    "Python Library Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f09e51acc184385df56e08aa2a219daf1aa643b",
          "message": "Clean projects (#116)",
          "timestamp": "2023-08-01T23:23:31+08:00",
          "tree_id": "fd8a37ecef5f49462d8ad9926d65e8824e1f755c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1f09e51acc184385df56e08aa2a219daf1aa643b"
        },
        "date": 1690903449720,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_random_city",
            "value": 11769.547491757716,
            "unit": "iter/sec",
            "range": "stddev: 0.00014358486416608105",
            "extra": "mean: 84.9650337619442 usec\nrounds: 1244"
          },
          {
            "name": "tz_test.py::test_tzfpy_random_cities",
            "value": 213155.95988827344,
            "unit": "iter/sec",
            "range": "stddev: 0.000006490521160731923",
            "extra": "mean: 4.691400608850693 usec\nrounds: 71943"
          }
        ]
      }
    ],
    "Go Library Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f09e51acc184385df56e08aa2a219daf1aa643b",
          "message": "Clean projects (#116)",
          "timestamp": "2023-08-01T23:23:31+08:00",
          "tree_id": "fd8a37ecef5f49462d8ad9926d65e8824e1f755c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1f09e51acc184385df56e08aa2a219daf1aa643b"
        },
        "date": 1690903483612,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/op",
            "value": 2974,
            "unit": "ns/op",
            "extra": "395805 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p50",
            "value": 1500,
            "unit": "ns/p50",
            "extra": "395805 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p90",
            "value": 10500,
            "unit": "ns/p90",
            "extra": "395805 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p99",
            "value": 17200,
            "unit": "ns/p99",
            "extra": "395805 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "395805 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "395805 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/op",
            "value": 569,
            "unit": "ns/op",
            "extra": "2101012 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p50",
            "value": 500,
            "unit": "ns/p50",
            "extra": "2101012 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p90",
            "value": 900,
            "unit": "ns/p90",
            "extra": "2101012 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p99",
            "value": 1300,
            "unit": "ns/p99",
            "extra": "2101012 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2101012 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2101012 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/op",
            "value": 96403,
            "unit": "ns/op",
            "extra": "12228 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p50",
            "value": 68500,
            "unit": "ns/p50",
            "extra": "12228 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p90",
            "value": 217001,
            "unit": "ns/p90",
            "extra": "12228 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p99",
            "value": 360401,
            "unit": "ns/p99",
            "extra": "12228 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "12228 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12228 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/op",
            "value": 418.8,
            "unit": "ns/op",
            "extra": "2811265 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p50",
            "value": 400,
            "unit": "ns/p50",
            "extra": "2811265 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p90",
            "value": 600,
            "unit": "ns/p90",
            "extra": "2811265 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p99",
            "value": 800,
            "unit": "ns/p99",
            "extra": "2811265 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2811265 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2811265 times\n2 procs"
          }
        ]
      }
    ]
  }
}