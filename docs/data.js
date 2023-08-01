window.BENCHMARK_DATA = {
  "lastUpdate": 1690901749561,
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
    ]
  }
}