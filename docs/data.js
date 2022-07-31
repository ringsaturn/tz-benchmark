window.BENCHMARK_DATA = {
  "lastUpdate": 1659285739387,
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
            "email": "ringsaturn.me@gmail.com",
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "distinct": true,
          "id": "9084dc0b900c0d3b3f66753b0bdb562ba0b9c921",
          "message": "split to languages",
          "timestamp": "2022-08-01T00:06:11+08:00",
          "tree_id": "fe8a5bf15c1a1528138f068867575a982fd7d3bd",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9084dc0b900c0d3b3f66753b0bdb562ba0b9c921"
        },
        "date": 1659283595302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_tz_without_numba",
            "value": 51.21468715951603,
            "unit": "iter/sec",
            "range": "stddev: 0.00020337612365388093",
            "extra": "mean: 19.525648899999055 msec\nrounds: 50"
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
          "id": "9084dc0b900c0d3b3f66753b0bdb562ba0b9c921",
          "message": "split to languages",
          "timestamp": "2022-08-01T00:06:11+08:00",
          "tree_id": "fe8a5bf15c1a1528138f068867575a982fd7d3bd",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9084dc0b900c0d3b3f66753b0bdb562ba0b9c921"
        },
        "date": 1659283606784,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_tz_with_numba",
            "value": 5454.997219783731,
            "unit": "iter/sec",
            "range": "stddev: 0.0005943332309316878",
            "extra": "mean: 183.31815025923075 usec\nrounds: 772"
          },
          {
            "name": "tz_test.py::test_tzfpy",
            "value": 19592.16940295166,
            "unit": "iter/sec",
            "range": "stddev: 0.000004303930785855829",
            "extra": "mean: 51.040799996826536 usec\nrounds: 5"
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
          "id": "fb82e019e7cc854d496296adca51995d901b3389",
          "message": "python global benchmarl",
          "timestamp": "2022-08-01T00:13:15+08:00",
          "tree_id": "f34fff6a6f43f9bcf7e76c90a5870daf16f88dc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/fb82e019e7cc854d496296adca51995d901b3389"
        },
        "date": 1659284022616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_tz_without_numba",
            "value": 48.47690816314772,
            "unit": "iter/sec",
            "range": "stddev: 0.0003861595957676058",
            "extra": "mean: 20.628378291670895 msec\nrounds: 48"
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
          "id": "fb82e019e7cc854d496296adca51995d901b3389",
          "message": "python global benchmarl",
          "timestamp": "2022-08-01T00:13:15+08:00",
          "tree_id": "f34fff6a6f43f9bcf7e76c90a5870daf16f88dc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/fb82e019e7cc854d496296adca51995d901b3389"
        },
        "date": 1659284123320,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_tz_with_numba",
            "value": 7662.787318723433,
            "unit": "iter/sec",
            "range": "stddev: 0.00000683355212464246",
            "extra": "mean: 130.50081627041595 usec\nrounds: 1094"
          },
          {
            "name": "tz_test.py::test_tzfpy",
            "value": 19531.173706055815,
            "unit": "iter/sec",
            "range": "stddev: 0.000004028541945557098",
            "extra": "mean: 51.200200000778295 usec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tz_global",
            "value": 0.10046619412653077,
            "unit": "iter/sec",
            "range": "stddev: 0.002838056362450804",
            "extra": "mean: 9.953596915799993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_global",
            "value": 0.3042806926615483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006606720338909683",
            "extra": "mean: 3.2864392125999955 sec\nrounds: 5"
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
          "id": "5ef57d7ab62bb46376e47ebf0bde84ae32a949a8",
          "message": "trigger ci",
          "timestamp": "2022-08-01T00:41:16+08:00",
          "tree_id": "f34fff6a6f43f9bcf7e76c90a5870daf16f88dc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ef57d7ab62bb46376e47ebf0bde84ae32a949a8"
        },
        "date": 1659285705028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_tz_without_numba",
            "value": 46.10516052295494,
            "unit": "iter/sec",
            "range": "stddev: 0.00014779854003220378",
            "extra": "mean: 21.689545999999666 msec\nrounds: 46"
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
          "id": "9084dc0b900c0d3b3f66753b0bdb562ba0b9c921",
          "message": "split to languages",
          "timestamp": "2022-08-01T00:06:11+08:00",
          "tree_id": "fe8a5bf15c1a1528138f068867575a982fd7d3bd",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9084dc0b900c0d3b3f66753b0bdb562ba0b9c921"
        },
        "date": 1659283621212,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 388884,
            "unit": "ns/op",
            "extra": "3027 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4530351780,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 22426,
            "unit": "ns/op",
            "extra": "53335 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1852609486,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 23007,
            "unit": "ns/op",
            "extra": "52131 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1694808123,
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
          "id": "fb82e019e7cc854d496296adca51995d901b3389",
          "message": "python global benchmarl",
          "timestamp": "2022-08-01T00:13:15+08:00",
          "tree_id": "f34fff6a6f43f9bcf7e76c90a5870daf16f88dc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/fb82e019e7cc854d496296adca51995d901b3389"
        },
        "date": 1659284044393,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 377342,
            "unit": "ns/op",
            "extra": "2988 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4546839856,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 20993,
            "unit": "ns/op",
            "extra": "57205 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1758220765,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 21754,
            "unit": "ns/op",
            "extra": "54685 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1622254231,
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
          "id": "5ef57d7ab62bb46376e47ebf0bde84ae32a949a8",
          "message": "trigger ci",
          "timestamp": "2022-08-01T00:41:16+08:00",
          "tree_id": "f34fff6a6f43f9bcf7e76c90a5870daf16f88dc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ef57d7ab62bb46376e47ebf0bde84ae32a949a8"
        },
        "date": 1659285739008,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 465081,
            "unit": "ns/op",
            "extra": "2372 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5407060240,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 26982,
            "unit": "ns/op",
            "extra": "44356 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 2217445168,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 27528,
            "unit": "ns/op",
            "extra": "43743 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 2036090630,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}