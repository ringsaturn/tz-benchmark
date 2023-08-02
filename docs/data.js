window.BENCHMARK_DATA = {
  "lastUpdate": 1690982680143,
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
      },
      {
        "commit": {
          "author": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "distinct": true,
          "id": "4383926a490d2d63333d7f92bba43511bb9284f1",
          "message": "Update README",
          "timestamp": "2023-08-01T23:27:06+08:00",
          "tree_id": "ad768a61987ef712755eff70321c4aac76618dab",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4383926a490d2d63333d7f92bba43511bb9284f1"
        },
        "date": 1690903680690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_random_city",
            "value": 14673.783710321753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000924446504904594",
            "extra": "mean: 68.14874879862005 usec\nrounds: 832"
          },
          {
            "name": "tz_test.py::test_tzfpy_random_cities",
            "value": 201812.00859624258,
            "unit": "iter/sec",
            "range": "stddev: 0.000007734266105231137",
            "extra": "mean: 4.955106521934782 usec\nrounds: 50506"
          }
        ]
      },
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
          "id": "9d6899dc1973e129818fc336d73e23170283ee4e",
          "message": "Create CODE_OF_CONDUCT.md",
          "timestamp": "2023-08-01T23:36:13+08:00",
          "tree_id": "62ae5c979ccfd85eda0b2708466ff47f1d9c6e8a",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9d6899dc1973e129818fc336d73e23170283ee4e"
        },
        "date": 1690904213679,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_random_city",
            "value": 11546.636840672472,
            "unit": "iter/sec",
            "range": "stddev: 0.0001451543764202319",
            "extra": "mean: 86.6053045400673 usec\nrounds: 2489"
          },
          {
            "name": "tz_test.py::test_tzfpy_random_cities",
            "value": 211497.44026553506,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067135430831080245",
            "extra": "mean: 4.728189611867169 usec\nrounds: 49749"
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
      },
      {
        "commit": {
          "author": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "distinct": true,
          "id": "4383926a490d2d63333d7f92bba43511bb9284f1",
          "message": "Update README",
          "timestamp": "2023-08-01T23:27:06+08:00",
          "tree_id": "ad768a61987ef712755eff70321c4aac76618dab",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4383926a490d2d63333d7f92bba43511bb9284f1"
        },
        "date": 1690903664049,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/op",
            "value": 2792,
            "unit": "ns/op",
            "extra": "424810 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p50",
            "value": 1400,
            "unit": "ns/p50",
            "extra": "424810 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p90",
            "value": 10000,
            "unit": "ns/p90",
            "extra": "424810 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p99",
            "value": 16400,
            "unit": "ns/p99",
            "extra": "424810 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "424810 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "424810 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/op",
            "value": 511.9,
            "unit": "ns/op",
            "extra": "2362910 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p50",
            "value": 500,
            "unit": "ns/p50",
            "extra": "2362910 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p90",
            "value": 800,
            "unit": "ns/p90",
            "extra": "2362910 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p99",
            "value": 1200,
            "unit": "ns/p99",
            "extra": "2362910 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2362910 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2362910 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/op",
            "value": 97144,
            "unit": "ns/op",
            "extra": "12348 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p50",
            "value": 68700,
            "unit": "ns/p50",
            "extra": "12348 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p90",
            "value": 217899,
            "unit": "ns/p90",
            "extra": "12348 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p99",
            "value": 365498,
            "unit": "ns/p99",
            "extra": "12348 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "12348 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12348 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/op",
            "value": 355.7,
            "unit": "ns/op",
            "extra": "3363418 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p50",
            "value": 300,
            "unit": "ns/p50",
            "extra": "3363418 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p90",
            "value": 500,
            "unit": "ns/p90",
            "extra": "3363418 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p99",
            "value": 700,
            "unit": "ns/p99",
            "extra": "3363418 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "3363418 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3363418 times\n2 procs"
          }
        ]
      },
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
          "id": "9d6899dc1973e129818fc336d73e23170283ee4e",
          "message": "Create CODE_OF_CONDUCT.md",
          "timestamp": "2023-08-01T23:36:13+08:00",
          "tree_id": "62ae5c979ccfd85eda0b2708466ff47f1d9c6e8a",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9d6899dc1973e129818fc336d73e23170283ee4e"
        },
        "date": 1690904207996,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/op",
            "value": 2823,
            "unit": "ns/op",
            "extra": "418683 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p50",
            "value": 1300,
            "unit": "ns/p50",
            "extra": "418683 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p90",
            "value": 10401,
            "unit": "ns/p90",
            "extra": "418683 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p99",
            "value": 16701,
            "unit": "ns/p99",
            "extra": "418683 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "418683 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "418683 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/op",
            "value": 509.3,
            "unit": "ns/op",
            "extra": "2357985 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p50",
            "value": 500,
            "unit": "ns/p50",
            "extra": "2357985 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p90",
            "value": 800,
            "unit": "ns/p90",
            "extra": "2357985 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p99",
            "value": 1100,
            "unit": "ns/p99",
            "extra": "2357985 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2357985 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2357985 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/op",
            "value": 95859,
            "unit": "ns/op",
            "extra": "12666 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p50",
            "value": 69501,
            "unit": "ns/p50",
            "extra": "12666 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p90",
            "value": 205904,
            "unit": "ns/p90",
            "extra": "12666 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p99",
            "value": 344706,
            "unit": "ns/p99",
            "extra": "12666 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "12666 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12666 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/op",
            "value": 372.9,
            "unit": "ns/op",
            "extra": "3074078 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p50",
            "value": 400,
            "unit": "ns/p50",
            "extra": "3074078 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p90",
            "value": 500,
            "unit": "ns/p90",
            "extra": "3074078 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p99",
            "value": 700,
            "unit": "ns/p99",
            "extra": "3074078 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "3074078 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3074078 times\n2 procs"
          }
        ]
      },
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
          "id": "b388dd62a3306bdd1e7bf3c6c992ccc1f4c0038b",
          "message": "Pin Rust Toolchain (#117)",
          "timestamp": "2023-08-02T21:23:56+08:00",
          "tree_id": "5f3d6e65f225353bbadb47d0509e9b28244540cc",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/b388dd62a3306bdd1e7bf3c6c992ccc1f4c0038b"
        },
        "date": 1690982676800,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/op",
            "value": 3496,
            "unit": "ns/op",
            "extra": "291034 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p50",
            "value": 1300,
            "unit": "ns/p50",
            "extra": "291034 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p90",
            "value": 12400,
            "unit": "ns/p90",
            "extra": "291034 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - ns/p99",
            "value": 26700,
            "unit": "ns/p99",
            "extra": "291034 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "291034 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Default_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "291034 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/op",
            "value": 654.9,
            "unit": "ns/op",
            "extra": "2025036 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p50",
            "value": 500,
            "unit": "ns/p50",
            "extra": "2025036 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p90",
            "value": 900,
            "unit": "ns/p90",
            "extra": "2025036 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p99",
            "value": 1300,
            "unit": "ns/p99",
            "extra": "2025036 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2025036 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2025036 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/op",
            "value": 117942,
            "unit": "ns/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p50",
            "value": 82201,
            "unit": "ns/p50",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p90",
            "value": 244502,
            "unit": "ns/p90",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p99",
            "value": 431903,
            "unit": "ns/p99",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/op",
            "value": 484.2,
            "unit": "ns/op",
            "extra": "2549881 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p50",
            "value": 400,
            "unit": "ns/p50",
            "extra": "2549881 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p90",
            "value": 600,
            "unit": "ns/p90",
            "extra": "2549881 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p99",
            "value": 800,
            "unit": "ns/p99",
            "extra": "2549881 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2549881 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2549881 times\n2 procs"
          }
        ]
      }
    ],
    "Rust Library Benchmark": [
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
        "date": 1690903498603,
        "tool": "cargo",
        "benches": [
          {
            "name": "benches_tz_crates::bench_tz_search_lookup_random_city",
            "value": 276,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_default_finder_random_city",
            "value": 3251,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_finder_random_city",
            "value": 15453,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_fuzzy_finder_random_city",
            "value": 967,
            "range": "± 15",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "distinct": true,
          "id": "4383926a490d2d63333d7f92bba43511bb9284f1",
          "message": "Update README",
          "timestamp": "2023-08-01T23:27:06+08:00",
          "tree_id": "ad768a61987ef712755eff70321c4aac76618dab",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4383926a490d2d63333d7f92bba43511bb9284f1"
        },
        "date": 1690903693664,
        "tool": "cargo",
        "benches": [
          {
            "name": "benches_tz_crates::bench_tz_search_lookup_random_city",
            "value": 283,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_default_finder_random_city",
            "value": 3244,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_finder_random_city",
            "value": 13821,
            "range": "± 2229",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_fuzzy_finder_random_city",
            "value": 1004,
            "range": "± 299",
            "unit": "ns/iter"
          }
        ]
      },
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
          "id": "9d6899dc1973e129818fc336d73e23170283ee4e",
          "message": "Create CODE_OF_CONDUCT.md",
          "timestamp": "2023-08-01T23:36:13+08:00",
          "tree_id": "62ae5c979ccfd85eda0b2708466ff47f1d9c6e8a",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9d6899dc1973e129818fc336d73e23170283ee4e"
        },
        "date": 1690904234595,
        "tool": "cargo",
        "benches": [
          {
            "name": "benches_tz_crates::bench_tz_search_lookup_random_city",
            "value": 275,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_default_finder_random_city",
            "value": 3005,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_finder_random_city",
            "value": 11710,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_fuzzy_finder_random_city",
            "value": 1132,
            "range": "± 15",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}