window.BENCHMARK_DATA = {
  "lastUpdate": 1659580877100,
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
          "id": "4c1a6ae1179301d9a347365f1e6b766d1ae8b7fa",
          "message": "toggle without numba benchmark",
          "timestamp": "2022-08-01T17:08:06+08:00",
          "tree_id": "a7567f48c30562d4ff7e54480be90bd08445c6cb",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4c1a6ae1179301d9a347365f1e6b766d1ae8b7fa"
        },
        "date": 1659344944183,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 382909,
            "unit": "ns/op",
            "extra": "3096 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4346175582,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 21043,
            "unit": "ns/op",
            "extra": "57402 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1764596512,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 21902,
            "unit": "ns/op",
            "extra": "54934 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1622097643,
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
          "id": "b9c1b22d045e9e1a76b39522af960959727f83e8",
          "message": "toggle without numba benchmark",
          "timestamp": "2022-08-01T17:12:04+08:00",
          "tree_id": "5e6659b496b359a2360361fa30d02b50de4e019f",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/b9c1b22d045e9e1a76b39522af960959727f83e8"
        },
        "date": 1659345218049,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 379994,
            "unit": "ns/op",
            "extra": "3118 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4322627965,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 20814,
            "unit": "ns/op",
            "extra": "57592 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1759694086,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 21752,
            "unit": "ns/op",
            "extra": "54902 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1622295283,
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
          "id": "37f176c61fdc4de06ff9f3d612f8eb5b1b6c1de7",
          "message": "timezonefinder without numba only benchmark random",
          "timestamp": "2022-08-01T17:21:16+08:00",
          "tree_id": "ef885d0b9d29e2bed1c1dcc5f28c9e345d1433b7",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/37f176c61fdc4de06ff9f3d612f8eb5b1b6c1de7"
        },
        "date": 1659345735998,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 387943,
            "unit": "ns/op",
            "extra": "3030 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4497250109,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 22449,
            "unit": "ns/op",
            "extra": "51570 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1850740153,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 22860,
            "unit": "ns/op",
            "extra": "51907 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1696350322,
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
          "id": "c5be3e358bb86595c3c3b4b56ef059a64917a681",
          "message": "profile mem",
          "timestamp": "2022-08-01T19:10:00+08:00",
          "tree_id": "82374e6b3051540bd76be1b0407d612b55e341e4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c5be3e358bb86595c3c3b4b56ef059a64917a681"
        },
        "date": 1659352264206,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 447704,
            "unit": "ns/op",
            "extra": "2415 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5230914529,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 25343,
            "unit": "ns/op",
            "extra": "45211 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 2150031745,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 26558,
            "unit": "ns/op",
            "extra": "43789 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1977692501,
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
          "id": "4881ad0ab30cd5d3643a286da171b895d6f13c8c",
          "message": "add multi round for timezonefinder",
          "timestamp": "2022-08-04T10:39:22+08:00",
          "tree_id": "209aef5e40ef9e80f606776b77f3ddb0c862f574",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4881ad0ab30cd5d3643a286da171b895d6f13c8c"
        },
        "date": 1659580807947,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 388173,
            "unit": "ns/op",
            "extra": "2882 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4481187492,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 22380,
            "unit": "ns/op",
            "extra": "53468 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1849521753,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 22930,
            "unit": "ns/op",
            "extra": "52238 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1696554529,
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
        "date": 1659344421166,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.23330011248760413,
            "unit": "iter/sec",
            "range": "stddev: 0.03377912429915667",
            "extra": "mean: 4.286324551400003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.297875954139992,
            "unit": "iter/sec",
            "range": "stddev: 0.013230719319315186",
            "extra": "mean: 3.3571021296000025 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 18267.418127964484,
            "unit": "iter/sec",
            "range": "stddev: 0.00006247127460406943",
            "extra": "mean: 54.74227353832562 usec\nrounds: 4259"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 21431.951591125504,
            "unit": "iter/sec",
            "range": "stddev: 0.000011944846851892379",
            "extra": "mean: 46.65930658475721 usec\nrounds: 5695"
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
          "id": "4c1a6ae1179301d9a347365f1e6b766d1ae8b7fa",
          "message": "toggle without numba benchmark",
          "timestamp": "2022-08-01T17:08:06+08:00",
          "tree_id": "a7567f48c30562d4ff7e54480be90bd08445c6cb",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4c1a6ae1179301d9a347365f1e6b766d1ae8b7fa"
        },
        "date": 1659344987233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.21260229775406547,
            "unit": "iter/sec",
            "range": "stddev: 0.08476799035335028",
            "extra": "mean: 4.703618025599996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2717966993539267,
            "unit": "iter/sec",
            "range": "stddev: 0.07130078452131818",
            "extra": "mean: 3.6792205438000023 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 16753.94628888545,
            "unit": "iter/sec",
            "range": "stddev: 0.00005845155025167321",
            "extra": "mean: 59.68743021835989 usec\nrounds: 4163"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19278.524061042197,
            "unit": "iter/sec",
            "range": "stddev: 0.000008261474001574281",
            "extra": "mean: 51.8711908045278 usec\nrounds: 6090"
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
          "id": "b9c1b22d045e9e1a76b39522af960959727f83e8",
          "message": "toggle without numba benchmark",
          "timestamp": "2022-08-01T17:12:04+08:00",
          "tree_id": "5e6659b496b359a2360361fa30d02b50de4e019f",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/b9c1b22d045e9e1a76b39522af960959727f83e8"
        },
        "date": 1659345264076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.23164144259497613,
            "unit": "iter/sec",
            "range": "stddev: 0.03439246847798063",
            "extra": "mean: 4.3170168032 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.30547730972852766,
            "unit": "iter/sec",
            "range": "stddev: 0.008811891062955629",
            "extra": "mean: 3.2735655584000085 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 18104.007182585865,
            "unit": "iter/sec",
            "range": "stddev: 0.00005242803607812245",
            "extra": "mean: 55.23638992818639 usec\nrounds: 3475"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 21094.66093981396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067276178240712025",
            "extra": "mean: 47.40536019294839 usec\nrounds: 6627"
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
          "id": "37f176c61fdc4de06ff9f3d612f8eb5b1b6c1de7",
          "message": "timezonefinder without numba only benchmark random",
          "timestamp": "2022-08-01T17:21:16+08:00",
          "tree_id": "ef885d0b9d29e2bed1c1dcc5f28c9e345d1433b7",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/37f176c61fdc4de06ff9f3d612f8eb5b1b6c1de7"
        },
        "date": 1659345731898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 234.09543993510272,
            "unit": "iter/sec",
            "range": "stddev: 0.015355352735451255",
            "extra": "mean: 4.271761979973748 msec\nrounds: 3046"
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
          "id": "37f176c61fdc4de06ff9f3d612f8eb5b1b6c1de7",
          "message": "timezonefinder without numba only benchmark random",
          "timestamp": "2022-08-01T17:21:16+08:00",
          "tree_id": "ef885d0b9d29e2bed1c1dcc5f28c9e345d1433b7",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/37f176c61fdc4de06ff9f3d612f8eb5b1b6c1de7"
        },
        "date": 1659345810018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14923030253770164,
            "unit": "iter/sec",
            "range": "stddev: 0.056587073639469986",
            "extra": "mean: 6.701051884199989 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2277736261797813,
            "unit": "iter/sec",
            "range": "stddev: 0.03630393780456711",
            "extra": "mean: 4.3903239228000075 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10131.172308478066,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336042570891356",
            "extra": "mean: 98.70526031456107 usec\nrounds: 1721"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12164.401564169375,
            "unit": "iter/sec",
            "range": "stddev: 0.00004015084162023454",
            "extra": "mean: 82.20708554587111 usec\nrounds: 3916"
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
          "id": "c5be3e358bb86595c3c3b4b56ef059a64917a681",
          "message": "profile mem",
          "timestamp": "2022-08-01T19:10:00+08:00",
          "tree_id": "82374e6b3051540bd76be1b0407d612b55e341e4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c5be3e358bb86595c3c3b4b56ef059a64917a681"
        },
        "date": 1659352243458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 267.949263607477,
            "unit": "iter/sec",
            "range": "stddev: 0.012708528633652624",
            "extra": "mean: 3.7320498162104125 msec\nrounds: 3689"
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
          "id": "c5be3e358bb86595c3c3b4b56ef059a64917a681",
          "message": "profile mem",
          "timestamp": "2022-08-01T19:10:00+08:00",
          "tree_id": "82374e6b3051540bd76be1b0407d612b55e341e4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c5be3e358bb86595c3c3b4b56ef059a64917a681"
        },
        "date": 1659352309811,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.17398653614153908,
            "unit": "iter/sec",
            "range": "stddev: 0.007602330560787683",
            "extra": "mean: 5.747571175199982 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2935100178890972,
            "unit": "iter/sec",
            "range": "stddev: 0.001823131606568368",
            "extra": "mean: 3.407038734800017 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14936.162462051838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000779240837392239",
            "extra": "mean: 66.95160169425648 usec\nrounds: 4956"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19231.852657154155,
            "unit": "iter/sec",
            "range": "stddev: 0.000007316307139357775",
            "extra": "mean: 51.99707058009332 usec\nrounds: 5129"
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
          "id": "4881ad0ab30cd5d3643a286da171b895d6f13c8c",
          "message": "add multi round for timezonefinder",
          "timestamp": "2022-08-04T10:39:22+08:00",
          "tree_id": "209aef5e40ef9e80f606776b77f3ddb0c862f574",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4881ad0ab30cd5d3643a286da171b895d6f13c8c"
        },
        "date": 1659580805176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 293.6893244983471,
            "unit": "iter/sec",
            "range": "stddev: 0.012395495370170838",
            "extra": "mean: 3.404958630035693 msec\nrounds: 3922"
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
          "id": "4881ad0ab30cd5d3643a286da171b895d6f13c8c",
          "message": "add multi round for timezonefinder",
          "timestamp": "2022-08-04T10:39:22+08:00",
          "tree_id": "209aef5e40ef9e80f606776b77f3ddb0c862f574",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4881ad0ab30cd5d3643a286da171b895d6f13c8c"
        },
        "date": 1659580876656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.16646853917954854,
            "unit": "iter/sec",
            "range": "stddev: 0.0055484733316571964",
            "extra": "mean: 6.007141078600003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2934302671535339,
            "unit": "iter/sec",
            "range": "stddev: 0.0037602182820497465",
            "extra": "mean: 3.4079647260000003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14107.354933498327,
            "unit": "iter/sec",
            "range": "stddev: 0.00008055675206664642",
            "extra": "mean: 70.88501031653146 usec\nrounds: 4265"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13757.259742961263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008239294957013569",
            "extra": "mean: 72.68889434988229 usec\nrounds: 7752"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13928.834208042368,
            "unit": "iter/sec",
            "range": "stddev: 0.00008009944520083423",
            "extra": "mean: 71.79351732269238 usec\nrounds: 5513"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13639.30237707685,
            "unit": "iter/sec",
            "range": "stddev: 0.00008319730327477882",
            "extra": "mean: 73.31753284395754 usec\nrounds: 7764"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14095.454706404491,
            "unit": "iter/sec",
            "range": "stddev: 0.00007679335595946796",
            "extra": "mean: 70.94485568781504 usec\nrounds: 1178"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 18296.375493810843,
            "unit": "iter/sec",
            "range": "stddev: 0.000008978733509068647",
            "extra": "mean: 54.65563386247032 usec\nrounds: 3780"
          }
        ]
      }
    ]
  }
}