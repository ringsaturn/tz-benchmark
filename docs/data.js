window.BENCHMARK_DATA = {
  "lastUpdate": 1660478362777,
  "repoUrl": "https://github.com/ringsaturn/tz-benchmark",
  "entries": {
    "Python Library Benchmark": [
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "id": "abf3059d12dbb67505add88e54fcc2e1fb662f5f",
          "message": "add latlong",
          "timestamp": "2022-07-20T04:47:43Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/pull/6/commits/abf3059d12dbb67505add88e54fcc2e1fb662f5f"
        },
        "date": 1660478341995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 298.66760793660205,
            "unit": "iter/sec",
            "range": "stddev: 0.012142346149100399",
            "extra": "mean: 3.3482037336043127 msec\nrounds: 3690"
          }
        ]
      }
    ],
    "Go Library Benchmark": [
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "id": "abf3059d12dbb67505add88e54fcc2e1fb662f5f",
          "message": "add latlong",
          "timestamp": "2022-07-20T04:47:43Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/pull/6/commits/abf3059d12dbb67505add88e54fcc2e1fb662f5f"
        },
        "date": 1660478362551,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40253,
            "unit": "ns/op",
            "extra": "31218 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4902876261,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12475,
            "unit": "ns/op",
            "extra": "93649 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1426148504,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14156,
            "unit": "ns/op",
            "extra": "80979 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1526194408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 472.6,
            "unit": "ns/op",
            "extra": "2545246 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23188105,
            "unit": "ns/op",
            "extra": "50 times\n2 procs"
          }
        ]
      }
    ]
  }
}