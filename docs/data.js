window.BENCHMARK_DATA = {
  "lastUpdate": 1659344401104,
  "repoUrl": "https://github.com/ringsaturn/tz-benchmark",
  "entries": {
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
          "id": "0bcabf2c4b271fd6e6226bcf6acef978b21ecc91",
          "message": "fix python benchmark",
          "timestamp": "2022-08-01T16:57:55+08:00",
          "tree_id": "81ea5815c8e72fce8b7fe8a0f535b3842332f32c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/0bcabf2c4b271fd6e6226bcf6acef978b21ecc91"
        },
        "date": 1659344341238,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 390079,
            "unit": "ns/op",
            "extra": "2905 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4485572597,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 22537,
            "unit": "ns/op",
            "extra": "53188 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1847391328,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 22858,
            "unit": "ns/op",
            "extra": "51992 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1693355215,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
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
          "id": "a8918d651d76af6e448b779d530bdafdcab05755",
          "message": "del",
          "timestamp": "2022-08-01T16:58:43+08:00",
          "tree_id": "494dd9e2d7aa95bf7d9d73823e1632eb8a1754fb",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/a8918d651d76af6e448b779d530bdafdcab05755"
        },
        "date": 1659344382690,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 418523,
            "unit": "ns/op",
            "extra": "2979 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4658486773,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 26021,
            "unit": "ns/op",
            "extra": "45450 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 2172449518,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 26638,
            "unit": "ns/op",
            "extra": "44820 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1949078577,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
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
          "id": "0bcabf2c4b271fd6e6226bcf6acef978b21ecc91",
          "message": "fix python benchmark",
          "timestamp": "2022-08-01T16:57:55+08:00",
          "tree_id": "81ea5815c8e72fce8b7fe8a0f535b3842332f32c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/0bcabf2c4b271fd6e6226bcf6acef978b21ecc91"
        },
        "date": 1659344400180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1652684579250644,
            "unit": "iter/sec",
            "range": "stddev: 0.024332908690178446",
            "extra": "mean: 6.050761364599998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2415080068770528,
            "unit": "iter/sec",
            "range": "stddev: 0.04737850524265642",
            "extra": "mean: 4.14064946719999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11217.944364427496,
            "unit": "iter/sec",
            "range": "stddev: 0.00007551209497276666",
            "extra": "mean: 89.14289173790483 usec\nrounds: 3510"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 13943.858491057903,
            "unit": "iter/sec",
            "range": "stddev: 0.000060695582112808735",
            "extra": "mean: 71.71616096371696 usec\nrounds: 4939"
          }
        ]
      }
    ]
  }
}