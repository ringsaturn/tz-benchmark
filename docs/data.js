window.BENCHMARK_DATA = {
  "lastUpdate": 1660404752363,
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
          "id": "956d6d7741d0f30cb27fc54e8c146bfbea7cd205",
          "message": "add certain_timezone_at",
          "timestamp": "2022-08-04T10:49:38+08:00",
          "tree_id": "6dcccbeb3951ed72ebd4f24a213e2cc98cf17c07",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/956d6d7741d0f30cb27fc54e8c146bfbea7cd205"
        },
        "date": 1659581423387,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 388174,
            "unit": "ns/op",
            "extra": "3033 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4481338931,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 22445,
            "unit": "ns/op",
            "extra": "53498 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1853194648,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 22975,
            "unit": "ns/op",
            "extra": "52113 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1695742099,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92278a9518bbaeb4741e0fc55786eba4bfb9a643",
          "message": "Create dependabot.yml",
          "timestamp": "2022-08-12T22:05:54+08:00",
          "tree_id": "9d6d71ff9d6c00b0fad5fd87a322e91f99504af6",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/92278a9518bbaeb4741e0fc55786eba4bfb9a643"
        },
        "date": 1660313239695,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 477706,
            "unit": "ns/op",
            "extra": "2408 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5641913403,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 31948,
            "unit": "ns/op",
            "extra": "38612 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 2598218419,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 33166,
            "unit": "ns/op",
            "extra": "35922 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 2414234102,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "988a0a8bcaf0107f86ab9a42b71855a1fc3fdf5e",
          "message": "Bump github.com/ringsaturn/tzf-rel from 0.0.2021-c to 0.0.2021-c1 (#3)",
          "timestamp": "2022-08-12T22:07:24+08:00",
          "tree_id": "062900965b7ed8d60fa2638f2d6d4550d6042d9c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/988a0a8bcaf0107f86ab9a42b71855a1fc3fdf5e"
        },
        "date": 1660313341364,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 341485,
            "unit": "ns/op",
            "extra": "3150 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 3791213446,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 42832,
            "unit": "ns/op",
            "extra": "28141 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1597125309,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 18742,
            "unit": "ns/op",
            "extra": "63973 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1407868391,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc217da39c7c6d17bb3bc15c553ec9337d8b7b6",
          "message": "Bump github.com/ringsaturn/tzf from 0.5.0 to 0.6.2 (#1)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-12T22:08:27+08:00",
          "tree_id": "33e43406a9972178acb8df3478b129ec8731f91e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ddc217da39c7c6d17bb3bc15c553ec9337d8b7b6"
        },
        "date": 1660313368296,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 490123,
            "unit": "ns/op",
            "extra": "2373 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5483319985,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 26380,
            "unit": "ns/op",
            "extra": "45370 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1950815496,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 27408,
            "unit": "ns/op",
            "extra": "42590 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 2034756698,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d705abd05dec6a4eb52a72c795210b1c2e9b2db2",
          "message": "Bump google.golang.org/protobuf from 1.28.0 to 1.28.1 (#2)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-12T22:08:53+08:00",
          "tree_id": "6e6b2f6016ad9f557eb919618d21708ae5ef0cdc",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/d705abd05dec6a4eb52a72c795210b1c2e9b2db2"
        },
        "date": 1660313387860,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 395105,
            "unit": "ns/op",
            "extra": "3061 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4470487708,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 21473,
            "unit": "ns/op",
            "extra": "55999 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1592690993,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 22443,
            "unit": "ns/op",
            "extra": "53437 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1664649869,
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
          "id": "a0dfd10b1f8a1fd763180b776af5fed0dc91d1bd",
          "message": "trigger ci",
          "timestamp": "2022-08-12T22:38:56+08:00",
          "tree_id": "6e6b2f6016ad9f557eb919618d21708ae5ef0cdc",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/a0dfd10b1f8a1fd763180b776af5fed0dc91d1bd"
        },
        "date": 1660315200721,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 502516,
            "unit": "ns/op",
            "extra": "2370 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5378939268,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 25708,
            "unit": "ns/op",
            "extra": "46156 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1896098235,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 26927,
            "unit": "ns/op",
            "extra": "44382 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1998680362,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b1133dbaa88c658f0aba27d1d8232b98071839c",
          "message": "Bump github.com/ringsaturn/tzf-rel from 0.0.2021-c1 to 0.0.2021-c2 (#4)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-13T23:30:49+08:00",
          "tree_id": "44944eaad5c73b18f7027d8e1b983c7d30cfb545",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/2b1133dbaa88c658f0aba27d1d8232b98071839c"
        },
        "date": 1660404698946,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 398860,
            "unit": "ns/op",
            "extra": "2948 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4518083409,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 15951,
            "unit": "ns/op",
            "extra": "74652 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1157256248,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 17268,
            "unit": "ns/op",
            "extra": "69420 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1238153221,
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
          "id": "956d6d7741d0f30cb27fc54e8c146bfbea7cd205",
          "message": "add certain_timezone_at",
          "timestamp": "2022-08-04T10:49:38+08:00",
          "tree_id": "6dcccbeb3951ed72ebd4f24a213e2cc98cf17c07",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/956d6d7741d0f30cb27fc54e8c146bfbea7cd205"
        },
        "date": 1659581427109,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 184.18762601708568,
            "unit": "iter/sec",
            "range": "stddev: 0.019338040171329347",
            "extra": "mean: 5.429246370259627 msec\nrounds: 3349"
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
          "id": "956d6d7741d0f30cb27fc54e8c146bfbea7cd205",
          "message": "add certain_timezone_at",
          "timestamp": "2022-08-04T10:49:38+08:00",
          "tree_id": "6dcccbeb3951ed72ebd4f24a213e2cc98cf17c07",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/956d6d7741d0f30cb27fc54e8c146bfbea7cd205"
        },
        "date": 1659581494802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.17198265480918667,
            "unit": "iter/sec",
            "range": "stddev: 0.014233849449085699",
            "extra": "mean: 5.814539850600002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2966131184794777,
            "unit": "iter/sec",
            "range": "stddev: 0.0026784312198829814",
            "extra": "mean: 3.371395051999997 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3504.5429126175873,
            "unit": "iter/sec",
            "range": "stddev: 0.00018248571653636618",
            "extra": "mean: 285.3439164347648 usec\nrounds: 1436"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14315.260057143852,
            "unit": "iter/sec",
            "range": "stddev: 0.00008051919081080851",
            "extra": "mean: 69.85552452475095 usec\nrounds: 5525"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 14315.94453363217,
            "unit": "iter/sec",
            "range": "stddev: 0.0000818568270637837",
            "extra": "mean: 69.8521845799779 usec\nrounds: 5201"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 14186.279088169413,
            "unit": "iter/sec",
            "range": "stddev: 0.00007971076683833237",
            "extra": "mean: 70.49064760286196 usec\nrounds: 5403"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 14976.137005924276,
            "unit": "iter/sec",
            "range": "stddev: 0.000071449207308412",
            "extra": "mean: 66.7728934106585 usec\nrounds: 5160"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14577.659234182607,
            "unit": "iter/sec",
            "range": "stddev: 0.00007822662958071035",
            "extra": "mean: 68.598118801895 usec\nrounds: 6776"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 18948.727217645086,
            "unit": "iter/sec",
            "range": "stddev: 0.000009960524484413434",
            "extra": "mean: 52.77399312967038 usec\nrounds: 3930"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92278a9518bbaeb4741e0fc55786eba4bfb9a643",
          "message": "Create dependabot.yml",
          "timestamp": "2022-08-12T22:05:54+08:00",
          "tree_id": "9d6d71ff9d6c00b0fad5fd87a322e91f99504af6",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/92278a9518bbaeb4741e0fc55786eba4bfb9a643"
        },
        "date": 1660313205160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 221.82906041410698,
            "unit": "iter/sec",
            "range": "stddev: 0.01655411406347059",
            "extra": "mean: 4.507975637336315 msec\nrounds: 4580"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92278a9518bbaeb4741e0fc55786eba4bfb9a643",
          "message": "Create dependabot.yml",
          "timestamp": "2022-08-12T22:05:54+08:00",
          "tree_id": "9d6d71ff9d6c00b0fad5fd87a322e91f99504af6",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/92278a9518bbaeb4741e0fc55786eba4bfb9a643"
        },
        "date": 1660313261598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.173810983615365,
            "unit": "iter/sec",
            "range": "stddev: 0.0054868285348706235",
            "extra": "mean: 5.753376335599998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3084124232756748,
            "unit": "iter/sec",
            "range": "stddev: 0.0014730993791551798",
            "extra": "mean: 3.242411539 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3760.590110647729,
            "unit": "iter/sec",
            "range": "stddev: 0.00016909671157519916",
            "extra": "mean: 265.91571284746016 usec\nrounds: 2086"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14855.659988882127,
            "unit": "iter/sec",
            "range": "stddev: 0.00007587404023345891",
            "extra": "mean: 67.31441085407131 usec\nrounds: 5362"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 14910.349424861699,
            "unit": "iter/sec",
            "range": "stddev: 0.00007893488201654873",
            "extra": "mean: 67.0675093859697 usec\nrounds: 6286"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 14542.973848488527,
            "unit": "iter/sec",
            "range": "stddev: 0.00008018938678947632",
            "extra": "mean: 68.76172716929773 usec\nrounds: 6154"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 14988.860435505054,
            "unit": "iter/sec",
            "range": "stddev: 0.00007457809286777216",
            "extra": "mean: 66.71621263690183 usec\nrounds: 5935"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14805.214844659833,
            "unit": "iter/sec",
            "range": "stddev: 0.00007751901235542974",
            "extra": "mean: 67.54376822574073 usec\nrounds: 6200"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19802.290642979533,
            "unit": "iter/sec",
            "range": "stddev: 0.000007402540148374262",
            "extra": "mean: 50.4992083001533 usec\nrounds: 5036"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "988a0a8bcaf0107f86ab9a42b71855a1fc3fdf5e",
          "message": "Bump github.com/ringsaturn/tzf-rel from 0.0.2021-c to 0.0.2021-c1 (#3)",
          "timestamp": "2022-08-12T22:07:24+08:00",
          "tree_id": "062900965b7ed8d60fa2638f2d6d4550d6042d9c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/988a0a8bcaf0107f86ab9a42b71855a1fc3fdf5e"
        },
        "date": 1660313291569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 272.29022327769974,
            "unit": "iter/sec",
            "range": "stddev: 0.012783605491699409",
            "extra": "mean: 3.6725519850197976 msec\nrounds: 3538"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc217da39c7c6d17bb3bc15c553ec9337d8b7b6",
          "message": "Bump github.com/ringsaturn/tzf from 0.5.0 to 0.6.2 (#1)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-12T22:08:27+08:00",
          "tree_id": "33e43406a9972178acb8df3478b129ec8731f91e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ddc217da39c7c6d17bb3bc15c553ec9337d8b7b6"
        },
        "date": 1660313352037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 263.51080123617174,
            "unit": "iter/sec",
            "range": "stddev: 0.012150210529652553",
            "extra": "mean: 3.794910854920703 msec\nrounds: 3343"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d705abd05dec6a4eb52a72c795210b1c2e9b2db2",
          "message": "Bump google.golang.org/protobuf from 1.28.0 to 1.28.1 (#2)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-12T22:08:53+08:00",
          "tree_id": "6e6b2f6016ad9f557eb919618d21708ae5ef0cdc",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/d705abd05dec6a4eb52a72c795210b1c2e9b2db2"
        },
        "date": 1660313382177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 243.03069994711421,
            "unit": "iter/sec",
            "range": "stddev: 0.014604799057692032",
            "extra": "mean: 4.1147064968236915 msec\nrounds: 4565"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "988a0a8bcaf0107f86ab9a42b71855a1fc3fdf5e",
          "message": "Bump github.com/ringsaturn/tzf-rel from 0.0.2021-c to 0.0.2021-c1 (#3)",
          "timestamp": "2022-08-12T22:07:24+08:00",
          "tree_id": "062900965b7ed8d60fa2638f2d6d4550d6042d9c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/988a0a8bcaf0107f86ab9a42b71855a1fc3fdf5e"
        },
        "date": 1660313385345,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11528321536329278,
            "unit": "iter/sec",
            "range": "stddev: 0.22677242828574867",
            "extra": "mean: 8.674289633999999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.21643515846596423,
            "unit": "iter/sec",
            "range": "stddev: 0.10037962597963901",
            "extra": "mean: 4.620321426000001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2441.09205952327,
            "unit": "iter/sec",
            "range": "stddev: 0.000260619725171461",
            "extra": "mean: 409.65271919949373 usec\nrounds: 1250"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8559.49394848804,
            "unit": "iter/sec",
            "range": "stddev: 0.00014644868997101883",
            "extra": "mean: 116.82933664280952 usec\nrounds: 4331"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 9146.971012606706,
            "unit": "iter/sec",
            "range": "stddev: 0.00011879203882400649",
            "extra": "mean: 109.3258083601404 usec\nrounds: 4665"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 9006.58875520763,
            "unit": "iter/sec",
            "range": "stddev: 0.0001936526729782366",
            "extra": "mean: 111.02982796031381 usec\nrounds: 7103"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 9219.856822514015,
            "unit": "iter/sec",
            "range": "stddev: 0.0001149545369346444",
            "extra": "mean: 108.46155414887733 usec\nrounds: 5845"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 9412.887421019655,
            "unit": "iter/sec",
            "range": "stddev: 0.00011573139231367321",
            "extra": "mean: 106.23732711037508 usec\nrounds: 6374"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12440.511197358532,
            "unit": "iter/sec",
            "range": "stddev: 0.000029978809310309185",
            "extra": "mean: 80.38254892711547 usec\nrounds: 5079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc217da39c7c6d17bb3bc15c553ec9337d8b7b6",
          "message": "Bump github.com/ringsaturn/tzf from 0.5.0 to 0.6.2 (#1)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-12T22:08:27+08:00",
          "tree_id": "33e43406a9972178acb8df3478b129ec8731f91e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ddc217da39c7c6d17bb3bc15c553ec9337d8b7b6"
        },
        "date": 1660313412472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.18393874907698365,
            "unit": "iter/sec",
            "range": "stddev: 0.009393777933194104",
            "extra": "mean: 5.436592371199998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3436720881908421,
            "unit": "iter/sec",
            "range": "stddev: 0.0015574856026337035",
            "extra": "mean: 2.9097504114 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3851.173006800641,
            "unit": "iter/sec",
            "range": "stddev: 0.00015779043811473578",
            "extra": "mean: 259.66114693734556 usec\nrounds: 2661"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 15031.40549090047,
            "unit": "iter/sec",
            "range": "stddev: 0.00007697466054666344",
            "extra": "mean: 66.52737833500453 usec\nrounds: 4985"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 15082.768646582028,
            "unit": "iter/sec",
            "range": "stddev: 0.00007601132285901647",
            "extra": "mean: 66.30082469816405 usec\nrounds: 5134"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 15523.691384183981,
            "unit": "iter/sec",
            "range": "stddev: 0.00007069669118732976",
            "extra": "mean: 64.4176681468192 usec\nrounds: 3378"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 14668.154556897569,
            "unit": "iter/sec",
            "range": "stddev: 0.00008194029743142922",
            "extra": "mean: 68.17490203835894 usec\nrounds: 4808"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 15436.555469218507,
            "unit": "iter/sec",
            "range": "stddev: 0.00007285154733904245",
            "extra": "mean: 64.7812915254355 usec\nrounds: 5015"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 21036.77126231134,
            "unit": "iter/sec",
            "range": "stddev: 0.000009249527969232136",
            "extra": "mean: 47.535811818782335 usec\nrounds: 3486"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d705abd05dec6a4eb52a72c795210b1c2e9b2db2",
          "message": "Bump google.golang.org/protobuf from 1.28.0 to 1.28.1 (#2)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-12T22:08:53+08:00",
          "tree_id": "6e6b2f6016ad9f557eb919618d21708ae5ef0cdc",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/d705abd05dec6a4eb52a72c795210b1c2e9b2db2"
        },
        "date": 1660313447054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.16251766463937795,
            "unit": "iter/sec",
            "range": "stddev: 0.012732083746392866",
            "extra": "mean: 6.153177269800002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.30377255658076285,
            "unit": "iter/sec",
            "range": "stddev: 0.01021042905798866",
            "extra": "mean: 3.291936609599998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3271.832018804576,
            "unit": "iter/sec",
            "range": "stddev: 0.0001912282977283421",
            "extra": "mean: 305.63916309045976 usec\nrounds: 2097"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13324.736918350101,
            "unit": "iter/sec",
            "range": "stddev: 0.00008332688505292821",
            "extra": "mean: 75.04838603026035 usec\nrounds: 4567"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13156.712878894989,
            "unit": "iter/sec",
            "range": "stddev: 0.00008454376805590515",
            "extra": "mean: 76.00682702471414 usec\nrounds: 4729"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13054.08382346262,
            "unit": "iter/sec",
            "range": "stddev: 0.00008402186590609894",
            "extra": "mean: 76.60438017125801 usec\nrounds: 2804"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13297.379026374938,
            "unit": "iter/sec",
            "range": "stddev: 0.00008312150617055994",
            "extra": "mean: 75.202789814183 usec\nrounds: 4634"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12320.990926712546,
            "unit": "iter/sec",
            "range": "stddev: 0.00010002950013569439",
            "extra": "mean: 81.16230309300433 usec\nrounds: 1940"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 18129.088891009134,
            "unit": "iter/sec",
            "range": "stddev: 0.000013169628559312523",
            "extra": "mean: 55.15997003555627 usec\nrounds: 3404"
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
          "id": "a0dfd10b1f8a1fd763180b776af5fed0dc91d1bd",
          "message": "trigger ci",
          "timestamp": "2022-08-12T22:38:56+08:00",
          "tree_id": "6e6b2f6016ad9f557eb919618d21708ae5ef0cdc",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/a0dfd10b1f8a1fd763180b776af5fed0dc91d1bd"
        },
        "date": 1660315175751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 301.3218223799978,
            "unit": "iter/sec",
            "range": "stddev: 0.011436196048403392",
            "extra": "mean: 3.318710845771061 msec\nrounds: 1206"
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
          "id": "a0dfd10b1f8a1fd763180b776af5fed0dc91d1bd",
          "message": "trigger ci",
          "timestamp": "2022-08-12T22:38:56+08:00",
          "tree_id": "6e6b2f6016ad9f557eb919618d21708ae5ef0cdc",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/a0dfd10b1f8a1fd763180b776af5fed0dc91d1bd"
        },
        "date": 1660315245904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.16905799954827577,
            "unit": "iter/sec",
            "range": "stddev: 0.01126959795344566",
            "extra": "mean: 5.915129734600003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.30577823604177684,
            "unit": "iter/sec",
            "range": "stddev: 0.001790372766775739",
            "extra": "mean: 3.270343935999995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3563.264174559626,
            "unit": "iter/sec",
            "range": "stddev: 0.00016935491306165618",
            "extra": "mean: 280.641555329977 usec\nrounds: 2955"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14205.634855895856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000771397311697021",
            "extra": "mean: 70.39460116666054 usec\nrounds: 1715"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 14299.475299499805,
            "unit": "iter/sec",
            "range": "stddev: 0.00007561241587351692",
            "extra": "mean: 69.93263592231108 usec\nrounds: 7210"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13906.24894685205,
            "unit": "iter/sec",
            "range": "stddev: 0.00008175693514730816",
            "extra": "mean: 71.91011780544669 usec\nrounds: 5942"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13911.268097205755,
            "unit": "iter/sec",
            "range": "stddev: 0.00008150108674484948",
            "extra": "mean: 71.88417281677305 usec\nrounds: 8726"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14005.981900111457,
            "unit": "iter/sec",
            "range": "stddev: 0.00008147565767757511",
            "extra": "mean: 71.39806456497293 usec\nrounds: 5297"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19086.104410380074,
            "unit": "iter/sec",
            "range": "stddev: 0.000006954656418651276",
            "extra": "mean: 52.39413860987499 usec\nrounds: 7770"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2b1133dbaa88c658f0aba27d1d8232b98071839c",
          "message": "Bump github.com/ringsaturn/tzf-rel from 0.0.2021-c1 to 0.0.2021-c2 (#4)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-13T23:30:49+08:00",
          "tree_id": "44944eaad5c73b18f7027d8e1b983c7d30cfb545",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/2b1133dbaa88c658f0aba27d1d8232b98071839c"
        },
        "date": 1660404752068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.17569206468969412,
            "unit": "iter/sec",
            "range": "stddev: 0.009712319250997914",
            "extra": "mean: 5.69177669899999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.29265167007770904,
            "unit": "iter/sec",
            "range": "stddev: 0.004914478876341786",
            "extra": "mean: 3.4170315847999975 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3733.8259466967284,
            "unit": "iter/sec",
            "range": "stddev: 0.0001709388627027054",
            "extra": "mean: 267.8218037679791 usec\nrounds: 2548"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14599.984206576255,
            "unit": "iter/sec",
            "range": "stddev: 0.0000785134971088487",
            "extra": "mean: 68.4932247768851 usec\nrounds: 2914"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 14604.355288363464,
            "unit": "iter/sec",
            "range": "stddev: 0.00007798810849086729",
            "extra": "mean: 68.47272476291955 usec\nrounds: 3804"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 14527.4625476136,
            "unit": "iter/sec",
            "range": "stddev: 0.00007840573014900615",
            "extra": "mean: 68.83514562316101 usec\nrounds: 4855"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 14897.588834995244,
            "unit": "iter/sec",
            "range": "stddev: 0.00007524600203138312",
            "extra": "mean: 67.12495633192304 usec\nrounds: 5038"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14874.489804104815,
            "unit": "iter/sec",
            "range": "stddev: 0.00007648224295864606",
            "extra": "mean: 67.22919664270007 usec\nrounds: 8757"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19377.00902579908,
            "unit": "iter/sec",
            "range": "stddev: 0.00000660772469179451",
            "extra": "mean: 51.60755195337797 usec\nrounds: 4350"
          }
        ]
      }
    ]
  }
}