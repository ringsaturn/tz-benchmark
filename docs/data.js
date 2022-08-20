window.BENCHMARK_DATA = {
  "lastUpdate": 1660964937787,
  "repoUrl": "https://github.com/ringsaturn/tz-benchmark",
  "entries": {
    "Python Library Benchmark": [
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "id": "abf3059d12dbb67505add88e54fcc2e1fb662f5f",
          "message": "add latlong",
          "timestamp": "2022-07-20T04:47:43Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/pull/6/commits/abf3059d12dbb67505add88e54fcc2e1fb662f5f"
        },
        "date": 1660478341995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 298.66760793660205,
            "unit": "iter/sec",
            "range": "stddev: 0.012142346149100399",
            "extra": "mean: 3.3482037336043127 msec\nrounds: 3690"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "id": "abf3059d12dbb67505add88e54fcc2e1fb662f5f",
          "message": "add latlong",
          "timestamp": "2022-07-20T04:47:43Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/pull/6/commits/abf3059d12dbb67505add88e54fcc2e1fb662f5f"
        },
        "date": 1660478391366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.19235784038879566,
            "unit": "iter/sec",
            "range": "stddev: 0.01710958860950683",
            "extra": "mean: 5.198644349400001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.39001340687466746,
            "unit": "iter/sec",
            "range": "stddev: 0.0007532949358655221",
            "extra": "mean: 2.564014421999997 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 4003.7110315859613,
            "unit": "iter/sec",
            "range": "stddev: 0.00015120298980464663",
            "extra": "mean: 249.76827551010274 usec\nrounds: 1274"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 16482.752158803338,
            "unit": "iter/sec",
            "range": "stddev: 0.00006782778881402842",
            "extra": "mean: 60.66947985175559 usec\nrounds: 6477"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 15811.842791221869,
            "unit": "iter/sec",
            "range": "stddev: 0.00006807085188752138",
            "extra": "mean: 63.243735294102585 usec\nrounds: 7446"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 15814.516997448953,
            "unit": "iter/sec",
            "range": "stddev: 0.00007209939190781256",
            "extra": "mean: 63.23304089282716 usec\nrounds: 6676"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 15774.797220668574,
            "unit": "iter/sec",
            "range": "stddev: 0.00007272579898041082",
            "extra": "mean: 63.392257029445204 usec\nrounds: 6046"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 16192.690736754332,
            "unit": "iter/sec",
            "range": "stddev: 0.00006814122090646488",
            "extra": "mean: 61.75625881189652 usec\nrounds: 6043"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 22679.096604865354,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068063370784184025",
            "extra": "mean: 44.093467099808095 usec\nrounds: 4924"
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
          "id": "865956e281f3aeb0522d14fec56317b87fec2fae",
          "message": "Bump timezonefinder[numba] from 6.0.2 to 6.1.0 (#8)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-16T09:25:13+08:00",
          "tree_id": "ebd1507f59b2f73c26498495ad441246f8858416",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/865956e281f3aeb0522d14fec56317b87fec2fae"
        },
        "date": 1660613151161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 306.1665773233242,
            "unit": "iter/sec",
            "range": "stddev: 0.01191648140760472",
            "extra": "mean: 3.266195836078998 msec\nrounds: 3642"
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
          "id": "adfb760885a3995f81a0ea889815fec0c1d884ea",
          "message": "Bump timezonefinder from 6.0.2 to 6.1.0 (#7)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-16T09:25:24+08:00",
          "tree_id": "2007183af856e60a25f5e917639f081d36766e42",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/adfb760885a3995f81a0ea889815fec0c1d884ea"
        },
        "date": 1660613175124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 272.71312831191585,
            "unit": "iter/sec",
            "range": "stddev: 0.012972073324463994",
            "extra": "mean: 3.6668568403360813 msec\nrounds: 3689"
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
          "id": "865956e281f3aeb0522d14fec56317b87fec2fae",
          "message": "Bump timezonefinder[numba] from 6.0.2 to 6.1.0 (#8)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-16T09:25:13+08:00",
          "tree_id": "ebd1507f59b2f73c26498495ad441246f8858416",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/865956e281f3aeb0522d14fec56317b87fec2fae"
        },
        "date": 1660613238176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12718398132447506,
            "unit": "iter/sec",
            "range": "stddev: 0.01742440716902994",
            "extra": "mean: 7.862625384000003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.35345542678822445,
            "unit": "iter/sec",
            "range": "stddev: 0.0013491949771830146",
            "extra": "mean: 2.8292110523999896 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2687.892939566138,
            "unit": "iter/sec",
            "range": "stddev: 0.00023482706278456393",
            "extra": "mean: 372.038627461633 usec\nrounds: 1828"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12190.224278485957,
            "unit": "iter/sec",
            "range": "stddev: 0.00010814224456399125",
            "extra": "mean: 82.03294518254765 usec\nrounds: 1204"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11703.221706985338,
            "unit": "iter/sec",
            "range": "stddev: 0.00010386781599930865",
            "extra": "mean: 85.4465569427884 usec\nrounds: 5286"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12263.983309064517,
            "unit": "iter/sec",
            "range": "stddev: 0.0001016952652204015",
            "extra": "mean: 81.53957607402182 usec\nrounds: 5166"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11933.861920632853,
            "unit": "iter/sec",
            "range": "stddev: 0.00010386927104866943",
            "extra": "mean: 83.79517097236281 usec\nrounds: 5071"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11689.486699822748,
            "unit": "iter/sec",
            "range": "stddev: 0.00010630564716900334",
            "extra": "mean: 85.54695562596117 usec\nrounds: 2524"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20329.20751453665,
            "unit": "iter/sec",
            "range": "stddev: 0.000007512031025469406",
            "extra": "mean: 49.190309031227 usec\nrounds: 3964"
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
          "id": "adfb760885a3995f81a0ea889815fec0c1d884ea",
          "message": "Bump timezonefinder from 6.0.2 to 6.1.0 (#7)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-16T09:25:24+08:00",
          "tree_id": "2007183af856e60a25f5e917639f081d36766e42",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/adfb760885a3995f81a0ea889815fec0c1d884ea"
        },
        "date": 1660613250247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12507934810890084,
            "unit": "iter/sec",
            "range": "stddev: 0.014542733099161967",
            "extra": "mean: 7.994924942600005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.35130448990926366,
            "unit": "iter/sec",
            "range": "stddev: 0.0017809297744076258",
            "extra": "mean: 2.8465335021999976 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2682.0124656753733,
            "unit": "iter/sec",
            "range": "stddev: 0.00022280083641512563",
            "extra": "mean: 372.8543445633032 usec\nrounds: 1306"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12126.531685456735,
            "unit": "iter/sec",
            "range": "stddev: 0.00010430647984030925",
            "extra": "mean: 82.46380959852627 usec\nrounds: 5084"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11757.612926870139,
            "unit": "iter/sec",
            "range": "stddev: 0.00010913213164443056",
            "extra": "mean: 85.05127751864158 usec\nrounds: 5996"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11785.308039407962,
            "unit": "iter/sec",
            "range": "stddev: 0.00010524689500344993",
            "extra": "mean: 84.85140962426938 usec\nrounds: 5195"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12137.367927959647,
            "unit": "iter/sec",
            "range": "stddev: 0.00010071415668194064",
            "extra": "mean: 82.39018590648467 usec\nrounds: 1334"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12357.478528628822,
            "unit": "iter/sec",
            "range": "stddev: 0.00009859233656012189",
            "extra": "mean: 80.92265729479355 usec\nrounds: 5264"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20120.83279714929,
            "unit": "iter/sec",
            "range": "stddev: 0.00000814816785780608",
            "extra": "mean: 49.6997321175334 usec\nrounds: 4278"
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
          "id": "3b5ae7e444fa0d1f72d7235ef9e507aa0d74e888",
          "message": "Bump timezonefinder[numba] from 6.1.0 to 6.1.1 (#11)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:08:05+08:00",
          "tree_id": "b874d4d9f6d5e804062007c87bfefc8fc9aa4dd5",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3b5ae7e444fa0d1f72d7235ef9e507aa0d74e888"
        },
        "date": 1660964930023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 221.0312358498689,
            "unit": "iter/sec",
            "range": "stddev: 0.015778542383751423",
            "extra": "mean: 4.5242474266362525 msec\nrounds: 3469"
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
          "id": "51d66889e84ca2fb040834304bd56d839f84e317",
          "message": "Bump github.com/ringsaturn/tzf-rel from 0.0.2021-c2 to 0.0.2021-c3 (#10)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:08:25+08:00",
          "tree_id": "f7d66f56f54c92773102e80e9aeb12bf3e03e38f",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/51d66889e84ca2fb040834304bd56d839f84e317"
        },
        "date": 1660964937563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15377.870750840768,
            "unit": "iter/sec",
            "range": "stddev: 0.00031985626354434784",
            "extra": "mean: 65.0285085758915 usec\nrounds: 3848"
          }
        ]
      }
    ],
    "Go Library Benchmark": [
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn"
          },
          "id": "abf3059d12dbb67505add88e54fcc2e1fb662f5f",
          "message": "add latlong",
          "timestamp": "2022-07-20T04:47:43Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/pull/6/commits/abf3059d12dbb67505add88e54fcc2e1fb662f5f"
        },
        "date": 1660478362551,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40253,
            "unit": "ns/op",
            "extra": "31218 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4902876261,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12475,
            "unit": "ns/op",
            "extra": "93649 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1426148504,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14156,
            "unit": "ns/op",
            "extra": "80979 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1526194408,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 472.6,
            "unit": "ns/op",
            "extra": "2545246 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23188105,
            "unit": "ns/op",
            "extra": "50 times\n2 procs"
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
          "id": "865956e281f3aeb0522d14fec56317b87fec2fae",
          "message": "Bump timezonefinder[numba] from 6.0.2 to 6.1.0 (#8)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-16T09:25:13+08:00",
          "tree_id": "ebd1507f59b2f73c26498495ad441246f8858416",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/865956e281f3aeb0522d14fec56317b87fec2fae"
        },
        "date": 1660613168953,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 488216,
            "unit": "ns/op",
            "extra": "2280 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5591928112,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 22402,
            "unit": "ns/op",
            "extra": "53904 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1598310061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 24350,
            "unit": "ns/op",
            "extra": "50935 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1686741306,
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
          "id": "adfb760885a3995f81a0ea889815fec0c1d884ea",
          "message": "Bump timezonefinder from 6.0.2 to 6.1.0 (#7)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-16T09:25:24+08:00",
          "tree_id": "2007183af856e60a25f5e917639f081d36766e42",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/adfb760885a3995f81a0ea889815fec0c1d884ea"
        },
        "date": 1660613170540,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 374845,
            "unit": "ns/op",
            "extra": "3009 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4433464543,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 16355,
            "unit": "ns/op",
            "extra": "72483 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1187746554,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 17614,
            "unit": "ns/op",
            "extra": "68226 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1268883814,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      }
    ]
  }
}