window.BENCHMARK_DATA = {
  "lastUpdate": 1690901741249,
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
    ]
  }
}