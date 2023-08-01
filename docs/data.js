window.BENCHMARK_DATA = {
  "lastUpdate": 1690903452261,
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
    ]
  }
}