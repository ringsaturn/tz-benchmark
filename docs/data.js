window.BENCHMARK_DATA = {
  "lastUpdate": 1658292328797,
  "repoUrl": "https://github.com/ringsaturn/tz-benchmark",
  "entries": {
    "Go Benchmark": [
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
          "id": "22482292d03ef7dfdc6d6d29b78ca015b53ae242",
          "message": "add cb",
          "timestamp": "2022-07-20T12:43:05+08:00",
          "tree_id": "77bfbc2052b79452364b00918187f86e1ba9a8f2",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/22482292d03ef7dfdc6d6d29b78ca015b53ae242"
        },
        "date": 1658292328582,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 87445,
            "unit": "ns/op",
            "extra": "11565 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 7809,
            "unit": "ns/op",
            "extra": "132979 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 2771236753,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}