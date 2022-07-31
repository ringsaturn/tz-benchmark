window.BENCHMARK_DATA = {
  "lastUpdate": 1659283607011,
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
      }
    ]
  }
}