window.BENCHMARK_DATA = {
  "lastUpdate": 1690901755024,
  "repoUrl": "https://github.com/ringsaturn/tz-benchmark",
  "entries": {
    "Rust Library Benchmark": [
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
          "id": "3531efe387835606cb6558b044510a8cd734e184",
          "message": "trigger ci",
          "timestamp": "2023-08-01T22:53:45+08:00",
          "tree_id": "2e3651217c5b5e80808d395b3be67ad16b1e8178",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3531efe387835606cb6558b044510a8cd734e184"
        },
        "date": 1690901737304,
        "tool": "cargo",
        "benches": [
          {
            "name": "benches_tz_crates::bench_tz_search_lookup_random_city",
            "value": 271,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_default_finder_random_city",
            "value": 3314,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_finder_random_city",
            "value": 16183,
            "range": "± 2950",
            "unit": "ns/iter"
          },
          {
            "name": "benches_tz_crates::bench_tzf_fuzzy_finder_random_city",
            "value": 979,
            "range": "± 223",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "Python Library Benchmark": [
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
          "id": "3531efe387835606cb6558b044510a8cd734e184",
          "message": "trigger ci",
          "timestamp": "2023-08-01T22:53:45+08:00",
          "tree_id": "2e3651217c5b5e80808d395b3be67ad16b1e8178",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3531efe387835606cb6558b044510a8cd734e184"
        },
        "date": 1690901747465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11617822696646761,
            "unit": "iter/sec",
            "range": "stddev: 0.17567924747295022",
            "extra": "mean: 8.607464807400003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 1.660478089733378,
            "unit": "iter/sec",
            "range": "stddev: 0.021184788207866536",
            "extra": "mean: 602.2361910000086 msec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2280.9373150724155,
            "unit": "iter/sec",
            "range": "stddev: 0.00022433670003328639",
            "extra": "mean: 438.4162569449006 usec\nrounds: 1152"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7576.585988428917,
            "unit": "iter/sec",
            "range": "stddev: 0.00012469477837562387",
            "extra": "mean: 131.9855673158354 usec\nrounds: 2362"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_city",
            "value": 9673.214259081866,
            "unit": "iter/sec",
            "range": "stddev: 0.00012848953147424173",
            "extra": "mean: 103.37825393055184 usec\nrounds: 3371"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 16188.20434021684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000575158088737378",
            "extra": "mean: 61.773373932256966 usec\nrounds: 4097"
          },
          {
            "name": "tz_test.py::test_tzfpy_random_cities",
            "value": 101982.21678660989,
            "unit": "iter/sec",
            "range": "stddev: 0.000015036822040091486",
            "extra": "mean: 9.805631133636021 usec\nrounds: 11351"
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
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "distinct": true,
          "id": "3531efe387835606cb6558b044510a8cd734e184",
          "message": "trigger ci",
          "timestamp": "2023-08-01T22:53:45+08:00",
          "tree_id": "2e3651217c5b5e80808d395b3be67ad16b1e8178",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3531efe387835606cb6558b044510a8cd734e184"
        },
        "date": 1690901752333,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTZF_Lite_Random - ns/op",
            "value": 2709,
            "unit": "ns/op",
            "extra": "385812 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random - ns/p50",
            "value": 1200,
            "unit": "ns/p50",
            "extra": "385812 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random - ns/p90",
            "value": 6700,
            "unit": "ns/p90",
            "extra": "385812 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random - ns/p99",
            "value": 17401,
            "unit": "ns/p99",
            "extra": "385812 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "385812 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "385812 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl - ns/op",
            "value": 143543777,
            "unit": "ns/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl - ns/p50",
            "value": 142436585,
            "unit": "ns/p50",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl - B/op",
            "value": 16,
            "unit": "B/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "8 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities - ns/op",
            "value": 2843,
            "unit": "ns/op",
            "extra": "392702 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities - ns/p50",
            "value": 1300,
            "unit": "ns/p50",
            "extra": "392702 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities - ns/p90",
            "value": 10500,
            "unit": "ns/p90",
            "extra": "392702 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities - ns/p99",
            "value": 16701,
            "unit": "ns/p99",
            "extra": "392702 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "392702 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "392702 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random - ns/op",
            "value": 11795,
            "unit": "ns/op",
            "extra": "100129 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random - ns/p50",
            "value": 13300,
            "unit": "ns/p50",
            "extra": "100129 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random - ns/p90",
            "value": 15301,
            "unit": "ns/p90",
            "extra": "100129 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random - ns/p99",
            "value": 22900,
            "unit": "ns/p99",
            "extra": "100129 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "100129 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "100129 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities - ns/op",
            "value": 9769,
            "unit": "ns/op",
            "extra": "119110 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities - ns/p50",
            "value": 9900,
            "unit": "ns/p50",
            "extra": "119110 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities - ns/p90",
            "value": 14201,
            "unit": "ns/p90",
            "extra": "119110 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities - ns/p99",
            "value": 23601,
            "unit": "ns/p99",
            "extra": "119110 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "119110 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "119110 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl - ns/op",
            "value": 636926460,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl - B/op",
            "value": 40,
            "unit": "B/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random - ns/op",
            "value": 540,
            "unit": "ns/op",
            "extra": "2202682 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random - ns/p50",
            "value": 500,
            "unit": "ns/p50",
            "extra": "2202682 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random - ns/p90",
            "value": 900,
            "unit": "ns/p90",
            "extra": "2202682 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random - ns/p99",
            "value": 1000,
            "unit": "ns/p99",
            "extra": "2202682 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2202682 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2202682 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/op",
            "value": 486.4,
            "unit": "ns/op",
            "extra": "2364412 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p50",
            "value": 400,
            "unit": "ns/p50",
            "extra": "2364412 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p90",
            "value": 800,
            "unit": "ns/p90",
            "extra": "2364412 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - ns/p99",
            "value": 1100,
            "unit": "ns/p99",
            "extra": "2364412 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "2364412 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "2364412 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global - ns/op",
            "value": 19202516,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global - ns/p50",
            "value": 19186583,
            "unit": "ns/p50",
            "extra": "61 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global - ns/p90",
            "value": 19221783,
            "unit": "ns/p90",
            "extra": "61 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global - B/op",
            "value": 9,
            "unit": "B/op",
            "extra": "61 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "61 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random - ns/op",
            "value": 68754,
            "unit": "ns/op",
            "extra": "17371 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random - ns/p50",
            "value": 41201,
            "unit": "ns/p50",
            "extra": "17371 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random - ns/p90",
            "value": 157402,
            "unit": "ns/p90",
            "extra": "17371 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random - ns/p99",
            "value": 330706,
            "unit": "ns/p99",
            "extra": "17371 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random - B/op",
            "value": 37,
            "unit": "B/op",
            "extra": "17371 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random - allocs/op",
            "value": 2,
            "unit": "allocs/op",
            "extra": "17371 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/op",
            "value": 95551,
            "unit": "ns/op",
            "extra": "12620 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p50",
            "value": 69302,
            "unit": "ns/p50",
            "extra": "12620 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p90",
            "value": 206403,
            "unit": "ns/p90",
            "extra": "12620 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - ns/p99",
            "value": 336005,
            "unit": "ns/p99",
            "extra": "12620 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - B/op",
            "value": 24,
            "unit": "B/op",
            "extra": "12620 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities - allocs/op",
            "value": 1,
            "unit": "allocs/op",
            "extra": "12620 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global - ns/op",
            "value": 4098350198,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global - B/op",
            "value": 1915896,
            "unit": "B/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global - allocs/op",
            "value": 136576,
            "unit": "allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random - ns/op",
            "value": 264.2,
            "unit": "ns/op",
            "extra": "4477056 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random - ns/p50",
            "value": 200,
            "unit": "ns/p50",
            "extra": "4477056 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random - ns/p90",
            "value": 400,
            "unit": "ns/p90",
            "extra": "4477056 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random - ns/p99",
            "value": 600,
            "unit": "ns/p99",
            "extra": "4477056 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "4477056 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "4477056 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/op",
            "value": 363.8,
            "unit": "ns/op",
            "extra": "3280794 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p50",
            "value": 300,
            "unit": "ns/p50",
            "extra": "3280794 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p90",
            "value": 500,
            "unit": "ns/p90",
            "extra": "3280794 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - ns/p99",
            "value": 900,
            "unit": "ns/p99",
            "extra": "3280794 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - B/op",
            "value": 8,
            "unit": "B/op",
            "extra": "3280794 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "3280794 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global - ns/op",
            "value": 2246642,
            "unit": "ns/op",
            "extra": "530 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global - ns/p50",
            "value": 2246434,
            "unit": "ns/p50",
            "extra": "530 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global - ns/p90",
            "value": 2259135,
            "unit": "ns/p90",
            "extra": "530 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global - ns/p99",
            "value": 2278835,
            "unit": "ns/p99",
            "extra": "530 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global - B/op",
            "value": 9,
            "unit": "B/op",
            "extra": "530 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global - allocs/op",
            "value": 0,
            "unit": "allocs/op",
            "extra": "530 times\n2 procs"
          }
        ]
      }
    ]
  }
}