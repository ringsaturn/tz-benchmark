window.BENCHMARK_DATA = {
  "lastUpdate": 1658293857777,
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
          "id": "f2a5ecb8f4d697f3bf7fdea6439ad8999668358d",
          "message": "trigger ci",
          "timestamp": "2022-07-20T13:10:21+08:00",
          "tree_id": "b3780d2b03e6debe9edaa44b275515077fdd5341",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/f2a5ecb8f4d697f3bf7fdea6439ad8999668358d"
        },
        "date": 1658293857577,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 443116,
            "unit": "ns/op",
            "extra": "2664 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 20916,
            "unit": "ns/op",
            "extra": "56764 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 21990,
            "unit": "ns/op",
            "extra": "54776 times\n2 procs"
          }
        ]
      }
    ]
  }
}