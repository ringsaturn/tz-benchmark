window.BENCHMARK_DATA = {
  "lastUpdate": 1668262817324,
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
          "id": "857ff5a2c9e9e0503ad9faaff3981e5ef3c7b7ff",
          "message": "Bump timezonefinder from 6.1.0 to 6.1.1 (#9)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:08:14+08:00",
          "tree_id": "b85dcc1194c518fe0a2f77e945d4cb0090f86bd1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/857ff5a2c9e9e0503ad9faaff3981e5ef3c7b7ff"
        },
        "date": 1660964945139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12180.944520125422,
            "unit": "iter/sec",
            "range": "stddev: 0.00009242016550616507",
            "extra": "mean: 82.09544000038704 usec\nrounds: 50"
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
          "id": "857ff5a2c9e9e0503ad9faaff3981e5ef3c7b7ff",
          "message": "Bump timezonefinder from 6.1.0 to 6.1.1 (#9)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:08:14+08:00",
          "tree_id": "b85dcc1194c518fe0a2f77e945d4cb0090f86bd1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/857ff5a2c9e9e0503ad9faaff3981e5ef3c7b7ff"
        },
        "date": 1660965009425,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14416458565791274,
            "unit": "iter/sec",
            "range": "stddev: 0.005928787878728102",
            "extra": "mean: 6.9365163118 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3532926488726059,
            "unit": "iter/sec",
            "range": "stddev: 0.001682460947023561",
            "extra": "mean: 2.830514598000002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3186.772732094735,
            "unit": "iter/sec",
            "range": "stddev: 0.00018827683417481418",
            "extra": "mean: 313.79708691767246 usec\nrounds: 2209"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13028.736012425674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000933155979496225",
            "extra": "mean: 76.75341637487222 usec\nrounds: 6278"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12973.316421346106,
            "unit": "iter/sec",
            "range": "stddev: 0.00009377814206332388",
            "extra": "mean: 77.08129267198129 usec\nrounds: 8788"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13048.544513235745,
            "unit": "iter/sec",
            "range": "stddev: 0.00009090567958597386",
            "extra": "mean: 76.63689992287289 usec\nrounds: 9083"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13262.048911141397,
            "unit": "iter/sec",
            "range": "stddev: 0.00009148740882935095",
            "extra": "mean: 75.40313014227415 usec\nrounds: 9067"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13023.684854649797,
            "unit": "iter/sec",
            "range": "stddev: 0.00009229394556362626",
            "extra": "mean: 76.78318472540234 usec\nrounds: 9506"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20893.427217658384,
            "unit": "iter/sec",
            "range": "stddev: 0.000006301797678850857",
            "extra": "mean: 47.86194191993717 usec\nrounds: 4907"
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
        "date": 1660965022185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1440645082369238,
            "unit": "iter/sec",
            "range": "stddev: 0.020693672074588415",
            "extra": "mean: 6.941334907800001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.348583667830828,
            "unit": "iter/sec",
            "range": "stddev: 0.011527727654416413",
            "extra": "mean: 2.868751729600001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3242.6004661790994,
            "unit": "iter/sec",
            "range": "stddev: 0.00018776595859631827",
            "extra": "mean: 308.3944539051845 usec\nrounds: 1421"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13018.756001019976,
            "unit": "iter/sec",
            "range": "stddev: 0.00009133335606971127",
            "extra": "mean: 76.81225455962561 usec\nrounds: 6415"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12792.716054522733,
            "unit": "iter/sec",
            "range": "stddev: 0.00009769058797389218",
            "extra": "mean: 78.16948298844328 usec\nrounds: 4350"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12919.343922409578,
            "unit": "iter/sec",
            "range": "stddev: 0.00009378765960177403",
            "extra": "mean: 77.40331134504628 usec\nrounds: 7413"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12922.677877549098,
            "unit": "iter/sec",
            "range": "stddev: 0.00009592690589995331",
            "extra": "mean: 77.3833418642529 usec\nrounds: 2071"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12816.402407997739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000930165722685298",
            "extra": "mean: 78.02501577010226 usec\nrounds: 6785"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20765.1504075416,
            "unit": "iter/sec",
            "range": "stddev: 0.000005969687167958708",
            "extra": "mean: 48.15760928159781 usec\nrounds: 4676"
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
          "id": "04c514c6ef3500055daec6012cb4844dae13e4e8",
          "message": "Bump github.com/ringsaturn/tzf from 0.7.0 to 0.8.1 (#12)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:13:38+08:00",
          "tree_id": "8177bc88d4547b378d0d970022b8d0dfbd9efbce",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/04c514c6ef3500055daec6012cb4844dae13e4e8"
        },
        "date": 1660965247914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15230.225585514992,
            "unit": "iter/sec",
            "range": "stddev: 0.00033469078252313414",
            "extra": "mean: 65.65890927781594 usec\nrounds: 3406"
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
          "id": "04c514c6ef3500055daec6012cb4844dae13e4e8",
          "message": "Bump github.com/ringsaturn/tzf from 0.7.0 to 0.8.1 (#12)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:13:38+08:00",
          "tree_id": "8177bc88d4547b378d0d970022b8d0dfbd9efbce",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/04c514c6ef3500055daec6012cb4844dae13e4e8"
        },
        "date": 1660965328636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14433875966716292,
            "unit": "iter/sec",
            "range": "stddev: 0.01439370733639113",
            "extra": "mean: 6.928145997000001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3428555031771474,
            "unit": "iter/sec",
            "range": "stddev: 0.0007584059436514372",
            "extra": "mean: 2.916680615400003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3183.61578465698,
            "unit": "iter/sec",
            "range": "stddev: 0.00018568989482705656",
            "extra": "mean: 314.108255405495 usec\nrounds: 1480"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13305.67818772515,
            "unit": "iter/sec",
            "range": "stddev: 0.00009177936098160293",
            "extra": "mean: 75.15588351764941 usec\nrounds: 5606"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13422.042462494685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000877701076450376",
            "extra": "mean: 74.5043090717607 usec\nrounds: 6636"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12998.15761530078,
            "unit": "iter/sec",
            "range": "stddev: 0.00009449150096526561",
            "extra": "mean: 76.93398015291413 usec\nrounds: 6147"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12838.889307425563,
            "unit": "iter/sec",
            "range": "stddev: 0.00009439243600680449",
            "extra": "mean: 77.88835747821543 usec\nrounds: 5964"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12859.579544804417,
            "unit": "iter/sec",
            "range": "stddev: 0.00009355024112533043",
            "extra": "mean: 77.76304011463766 usec\nrounds: 6282"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20672.84990321752,
            "unit": "iter/sec",
            "range": "stddev: 0.000006681072624633042",
            "extra": "mean: 48.3726242236374 usec\nrounds: 4186"
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
          "id": "d369c34b92ea8e8584015b85e3f7e76d90e933c2",
          "message": "Update dependabot.yml",
          "timestamp": "2022-08-27T22:30:19+08:00",
          "tree_id": "d8cd8d56c6e39c2c99602507f36e6a42f4558784",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/d369c34b92ea8e8584015b85e3f7e76d90e933c2"
        },
        "date": 1661610661759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 7236.846050199381,
            "unit": "iter/sec",
            "range": "stddev: 0.00017852012098472283",
            "extra": "mean: 138.18174285639932 usec\nrounds: 35"
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
          "id": "747e372b23f01505ac39cf367f3be39c71d78005",
          "message": "Update ci.yml",
          "timestamp": "2022-08-27T22:31:28+08:00",
          "tree_id": "efab4553e78e8195536f58f35c342bd0a6359fde",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/747e372b23f01505ac39cf367f3be39c71d78005"
        },
        "date": 1661610716901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 17653.666493014232,
            "unit": "iter/sec",
            "range": "stddev: 0.00026891063401301795",
            "extra": "mean: 56.64545664753054 usec\nrounds: 4152"
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
          "id": "d369c34b92ea8e8584015b85e3f7e76d90e933c2",
          "message": "Update dependabot.yml",
          "timestamp": "2022-08-27T22:30:19+08:00",
          "tree_id": "d8cd8d56c6e39c2c99602507f36e6a42f4558784",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/d369c34b92ea8e8584015b85e3f7e76d90e933c2"
        },
        "date": 1661610773933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10736294572218195,
            "unit": "iter/sec",
            "range": "stddev: 0.0784257857748112",
            "extra": "mean: 9.31420047459999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.23243503964596968,
            "unit": "iter/sec",
            "range": "stddev: 0.07785281538107863",
            "extra": "mean: 4.302277322399999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2267.061050706996,
            "unit": "iter/sec",
            "range": "stddev: 0.0002612720878340592",
            "extra": "mean: 441.09972234234465 usec\nrounds: 922"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8347.4868899719,
            "unit": "iter/sec",
            "range": "stddev: 0.00012030893114674628",
            "extra": "mean: 119.79653435590674 usec\nrounds: 4628"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8372.318114216769,
            "unit": "iter/sec",
            "range": "stddev: 0.00012502354199715588",
            "extra": "mean: 119.44123316360036 usec\nrounds: 5108"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8063.840014949105,
            "unit": "iter/sec",
            "range": "stddev: 0.00015231101608010234",
            "extra": "mean: 124.01039680179113 usec\nrounds: 4753"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8191.990071344756,
            "unit": "iter/sec",
            "range": "stddev: 0.0001266933228188331",
            "extra": "mean: 122.07046044867154 usec\nrounds: 5082"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 7971.768320162637,
            "unit": "iter/sec",
            "range": "stddev: 0.0001283966955793834",
            "extra": "mean: 125.44268220524482 usec\nrounds: 4698"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11860.961970231754,
            "unit": "iter/sec",
            "range": "stddev: 0.0000256262608510485",
            "extra": "mean: 84.3101936006343 usec\nrounds: 3094"
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
          "id": "747e372b23f01505ac39cf367f3be39c71d78005",
          "message": "Update ci.yml",
          "timestamp": "2022-08-27T22:31:28+08:00",
          "tree_id": "efab4553e78e8195536f58f35c342bd0a6359fde",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/747e372b23f01505ac39cf367f3be39c71d78005"
        },
        "date": 1661610812263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1271393295720708,
            "unit": "iter/sec",
            "range": "stddev: 0.008629601642520258",
            "extra": "mean: 7.865386764000005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34917966425347213,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116672165292819",
            "extra": "mean: 2.8638552080000066 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2679.9640189198562,
            "unit": "iter/sec",
            "range": "stddev: 0.00021936898438172138",
            "extra": "mean: 373.1393380434429 usec\nrounds: 1769"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11721.688483450964,
            "unit": "iter/sec",
            "range": "stddev: 0.00010670894462874297",
            "extra": "mean: 85.31194131390119 usec\nrounds: 4720"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11774.835464796299,
            "unit": "iter/sec",
            "range": "stddev: 0.00010841063776647772",
            "extra": "mean: 84.9268767270456 usec\nrounds: 4778"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11883.293763815453,
            "unit": "iter/sec",
            "range": "stddev: 0.00010631767887149779",
            "extra": "mean: 84.15175286207204 usec\nrounds: 5155"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11558.056748824863,
            "unit": "iter/sec",
            "range": "stddev: 0.000111770580921134",
            "extra": "mean: 86.51973439234693 usec\nrounds: 5286"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11639.636579816752,
            "unit": "iter/sec",
            "range": "stddev: 0.00010490149728649161",
            "extra": "mean: 85.91333527835485 usec\nrounds: 4799"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19884.47927393381,
            "unit": "iter/sec",
            "range": "stddev: 0.000007747048518217434",
            "extra": "mean: 50.29047963608889 usec\nrounds: 3192"
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
          "id": "ba431ff87ba746dc3319a2adf1506bcaff66304b",
          "message": "add latlong (#6)",
          "timestamp": "2022-08-27T22:39:31+08:00",
          "tree_id": "25c936bb75b6cb1601a767d2231e521c34ecd39e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ba431ff87ba746dc3319a2adf1506bcaff66304b"
        },
        "date": 1661611200084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15514.389105125267,
            "unit": "iter/sec",
            "range": "stddev: 0.0003271877100631463",
            "extra": "mean: 64.45629236343211 usec\nrounds: 3588"
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
          "id": "3e17b98f3501997b4a909f2a392f50f079760146",
          "message": "Bump actions/setup-go from 2 to 3 (#15)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:23+08:00",
          "tree_id": "82ea43cb6906aed1f4e5a885f3211f9db47d2db7",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e17b98f3501997b4a909f2a392f50f079760146"
        },
        "date": 1661611249804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14133.776107898122,
            "unit": "iter/sec",
            "range": "stddev: 0.0003533055497640741",
            "extra": "mean: 70.75250041927494 usec\nrounds: 3577"
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
          "id": "1734e21cfee22c66d5a98e92867e6e0550f1b234",
          "message": "Bump actions/checkout from 2 to 3 (#14)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:36+08:00",
          "tree_id": "7bde2c0a15ae36ea180291f08f076b76573ee2a1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1734e21cfee22c66d5a98e92867e6e0550f1b234"
        },
        "date": 1661611261403,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14059.51364600324,
            "unit": "iter/sec",
            "range": "stddev: 0.00009994022755993399",
            "extra": "mean: 71.12621568415878 usec\nrounds: 51"
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
          "id": "acc9c91aaec7a82f1f6503136784da8b49f9ad07",
          "message": "Bump actions/cache from 2 to 3 (#13)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:54+08:00",
          "tree_id": "9f7278bcd716f8d713c26aad2c41da04aa831aea",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/acc9c91aaec7a82f1f6503136784da8b49f9ad07"
        },
        "date": 1661611283891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 10556.530167970906,
            "unit": "iter/sec",
            "range": "stddev: 0.00040695444973594657",
            "extra": "mean: 94.72809569891203 usec\nrounds: 2790"
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
          "id": "ba431ff87ba746dc3319a2adf1506bcaff66304b",
          "message": "add latlong (#6)",
          "timestamp": "2022-08-27T22:39:31+08:00",
          "tree_id": "25c936bb75b6cb1601a767d2231e521c34ecd39e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ba431ff87ba746dc3319a2adf1506bcaff66304b"
        },
        "date": 1661611286544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12695623759252417,
            "unit": "iter/sec",
            "range": "stddev: 0.00845353527263386",
            "extra": "mean: 7.876729957999993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3501007896690937,
            "unit": "iter/sec",
            "range": "stddev: 0.0011835276855324149",
            "extra": "mean: 2.856320321200002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2744.858295517926,
            "unit": "iter/sec",
            "range": "stddev: 0.0002166327071344961",
            "extra": "mean: 364.31753203176214 usec\nrounds: 1998"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11651.214027842016,
            "unit": "iter/sec",
            "range": "stddev: 0.00011374920771201413",
            "extra": "mean: 85.82796587637789 usec\nrounds: 2403"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11781.906990249936,
            "unit": "iter/sec",
            "range": "stddev: 0.00010513039608808371",
            "extra": "mean: 84.87590343630666 usec\nrounds: 6897"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11656.28908823389,
            "unit": "iter/sec",
            "range": "stddev: 0.00011036469784510184",
            "extra": "mean: 85.79059702709515 usec\nrounds: 3633"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11747.358452906426,
            "unit": "iter/sec",
            "range": "stddev: 0.00010714377989968411",
            "extra": "mean: 85.12552026133066 usec\nrounds: 6120"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11353.775810119805,
            "unit": "iter/sec",
            "range": "stddev: 0.00010344027009446037",
            "extra": "mean: 88.07642644385172 usec\nrounds: 1074"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19454.740416297474,
            "unit": "iter/sec",
            "range": "stddev: 0.000008287800878608852",
            "extra": "mean: 51.40135404542781 usec\nrounds: 3251"
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
          "id": "1734e21cfee22c66d5a98e92867e6e0550f1b234",
          "message": "Bump actions/checkout from 2 to 3 (#14)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:36+08:00",
          "tree_id": "7bde2c0a15ae36ea180291f08f076b76573ee2a1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1734e21cfee22c66d5a98e92867e6e0550f1b234"
        },
        "date": 1661611352926,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1270913386423215,
            "unit": "iter/sec",
            "range": "stddev: 0.014517812588392793",
            "extra": "mean: 7.8683568108000035 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.350907719343779,
            "unit": "iter/sec",
            "range": "stddev: 0.0005606501520260596",
            "extra": "mean: 2.8497520711999926 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2711.2276227885095,
            "unit": "iter/sec",
            "range": "stddev: 0.00022402008737882354",
            "extra": "mean: 368.8366080349593 usec\nrounds: 921"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11641.755731949,
            "unit": "iter/sec",
            "range": "stddev: 0.00010678993413695285",
            "extra": "mean: 85.89769644931258 usec\nrounds: 5126"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11892.820676685244,
            "unit": "iter/sec",
            "range": "stddev: 0.00010675701810899641",
            "extra": "mean: 84.0843419055671 usec\nrounds: 4744"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11558.331709499682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001121265121435131",
            "extra": "mean: 86.51767617796516 usec\nrounds: 6028"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11683.267445289963,
            "unit": "iter/sec",
            "range": "stddev: 0.00011051268464689044",
            "extra": "mean: 85.5924941102965 usec\nrounds: 6707"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11814.07595672756,
            "unit": "iter/sec",
            "range": "stddev: 0.00010422376879921869",
            "extra": "mean: 84.64479182822141 usec\nrounds: 2839"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19863.80277498656,
            "unit": "iter/sec",
            "range": "stddev: 0.000007494521897806017",
            "extra": "mean: 50.342827671408784 usec\nrounds: 3650"
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
          "id": "acc9c91aaec7a82f1f6503136784da8b49f9ad07",
          "message": "Bump actions/cache from 2 to 3 (#13)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:54+08:00",
          "tree_id": "9f7278bcd716f8d713c26aad2c41da04aa831aea",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/acc9c91aaec7a82f1f6503136784da8b49f9ad07"
        },
        "date": 1661611369824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1255856873580453,
            "unit": "iter/sec",
            "range": "stddev: 0.01699157787619388",
            "extra": "mean: 7.962690821199999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3493869117234495,
            "unit": "iter/sec",
            "range": "stddev: 0.0012626823025246711",
            "extra": "mean: 2.8621564415999954 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2634.615819788987,
            "unit": "iter/sec",
            "range": "stddev: 0.000224213312363948",
            "extra": "mean: 379.5619811013252 usec\nrounds: 1799"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11732.604070197136,
            "unit": "iter/sec",
            "range": "stddev: 0.00011288708705194401",
            "extra": "mean: 85.23257019643019 usec\nrounds: 3825"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11790.379226112338,
            "unit": "iter/sec",
            "range": "stddev: 0.00010794276807232535",
            "extra": "mean: 84.8149139923578 usec\nrounds: 5453"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11851.734829190988,
            "unit": "iter/sec",
            "range": "stddev: 0.0001034328644750047",
            "extra": "mean: 84.37583310900494 usec\nrounds: 5201"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11553.91582049965,
            "unit": "iter/sec",
            "range": "stddev: 0.00011245357125368303",
            "extra": "mean: 86.5507431018097 usec\nrounds: 3262"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11749.709551368653,
            "unit": "iter/sec",
            "range": "stddev: 0.0001085194259634407",
            "extra": "mean: 85.10848677817027 usec\nrounds: 4538"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19741.45696419267,
            "unit": "iter/sec",
            "range": "stddev: 0.000007196489753358527",
            "extra": "mean: 50.654822580411064 usec\nrounds: 4092"
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
          "id": "3e17b98f3501997b4a909f2a392f50f079760146",
          "message": "Bump actions/setup-go from 2 to 3 (#15)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:23+08:00",
          "tree_id": "82ea43cb6906aed1f4e5a885f3211f9db47d2db7",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e17b98f3501997b4a909f2a392f50f079760146"
        },
        "date": 1661611387201,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10238360500857084,
            "unit": "iter/sec",
            "range": "stddev: 0.05258428733764049",
            "extra": "mean: 9.7671887986 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.16179829066810192,
            "unit": "iter/sec",
            "range": "stddev: 0.04442130834779078",
            "extra": "mean: 6.180535009799996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2161.088035692472,
            "unit": "iter/sec",
            "range": "stddev: 0.00039316070750717566",
            "extra": "mean: 462.7298765640394 usec\nrounds: 1758"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7611.122941321811,
            "unit": "iter/sec",
            "range": "stddev: 0.00017813836412862194",
            "extra": "mean: 131.38665709508714 usec\nrounds: 4179"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 7779.1524009973755,
            "unit": "iter/sec",
            "range": "stddev: 0.00013490220665964697",
            "extra": "mean: 128.54870922335814 usec\nrounds: 4402"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 7778.833295285957,
            "unit": "iter/sec",
            "range": "stddev: 0.0001336208816380706",
            "extra": "mean: 128.55398258836692 usec\nrounds: 3848"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 7850.578881718584,
            "unit": "iter/sec",
            "range": "stddev: 0.00014215937879670523",
            "extra": "mean: 127.37914172528998 usec\nrounds: 4671"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8380.389727994236,
            "unit": "iter/sec",
            "range": "stddev: 0.00012931216091543888",
            "extra": "mean: 119.32619274967064 usec\nrounds: 1131"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 9472.184895873626,
            "unit": "iter/sec",
            "range": "stddev: 0.00004161489331678156",
            "extra": "mean: 105.57226352661577 usec\nrounds: 4140"
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
          "id": "664abe425a847ce8db74240fd02467f25c35f990",
          "message": "Bump actions/setup-python from 2 to 4 (#16)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:45:25+08:00",
          "tree_id": "02720dca2d461b25cb14650b5eb1819aa4c6edb4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/664abe425a847ce8db74240fd02467f25c35f990"
        },
        "date": 1661611559252,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9085.554281624945,
            "unit": "iter/sec",
            "range": "stddev: 0.00042538032110961014",
            "extra": "mean: 110.06483137990242 usec\nrounds: 3072"
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
          "id": "664abe425a847ce8db74240fd02467f25c35f990",
          "message": "Bump actions/setup-python from 2 to 4 (#16)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:45:25+08:00",
          "tree_id": "02720dca2d461b25cb14650b5eb1819aa4c6edb4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/664abe425a847ce8db74240fd02467f25c35f990"
        },
        "date": 1661611639165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14147173912967867,
            "unit": "iter/sec",
            "range": "stddev: 0.01924343429081679",
            "extra": "mean: 7.068549564399996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3439804160556532,
            "unit": "iter/sec",
            "range": "stddev: 0.003646375380196188",
            "extra": "mean: 2.9071422479999796 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3144.396906338322,
            "unit": "iter/sec",
            "range": "stddev: 0.0001950831912274535",
            "extra": "mean: 318.02600937058827 usec\nrounds: 1494"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12692.199888003586,
            "unit": "iter/sec",
            "range": "stddev: 0.00009975326256879549",
            "extra": "mean: 78.78854799199783 usec\nrounds: 5553"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12640.067889553591,
            "unit": "iter/sec",
            "range": "stddev: 0.00010097772536634455",
            "extra": "mean: 79.11349913131812 usec\nrounds: 5754"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12973.025542016214,
            "unit": "iter/sec",
            "range": "stddev: 0.00009435223382163842",
            "extra": "mean: 77.08302097774056 usec\nrounds: 5768"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13020.196435926593,
            "unit": "iter/sec",
            "range": "stddev: 0.00009431387311777775",
            "extra": "mean: 76.80375675751733 usec\nrounds: 5735"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12593.215390048425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001002836140298977",
            "extra": "mean: 79.40783739712997 usec\nrounds: 5578"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20379.282810134177,
            "unit": "iter/sec",
            "range": "stddev: 0.000008514707993055904",
            "extra": "mean: 49.06944024069 usec\nrounds: 3991"
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
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T13:06:49+08:00",
          "tree_id": "9b15f4bccce9f2b1ce92af3a47e22725559fe52c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1662959239581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15582.191150592367,
            "unit": "iter/sec",
            "range": "stddev: 0.0003178343757030218",
            "extra": "mean: 64.17582677144762 usec\nrounds: 3810"
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
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T13:06:49+08:00",
          "tree_id": "9b15f4bccce9f2b1ce92af3a47e22725559fe52c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1662959338486,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1259509424625887,
            "unit": "iter/sec",
            "range": "stddev: 0.009320939382668288",
            "extra": "mean: 7.9395991839999995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3491532165595728,
            "unit": "iter/sec",
            "range": "stddev: 0.0016743161750683434",
            "extra": "mean: 2.864072139600006 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2689.7469344601463,
            "unit": "iter/sec",
            "range": "stddev: 0.00022757183068111095",
            "extra": "mean: 371.78218782902263 usec\nrounds: 1709"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11627.10491841238,
            "unit": "iter/sec",
            "range": "stddev: 0.0001043170851253454",
            "extra": "mean: 86.00593243262354 usec\nrounds: 2590"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11378.842536032229,
            "unit": "iter/sec",
            "range": "stddev: 0.00010988316584870729",
            "extra": "mean: 87.88240076557885 usec\nrounds: 5225"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11546.779297944933,
            "unit": "iter/sec",
            "range": "stddev: 0.00010822414069107634",
            "extra": "mean: 86.60423605550143 usec\nrounds: 5253"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11585.922106103122,
            "unit": "iter/sec",
            "range": "stddev: 0.00010930442839786405",
            "extra": "mean: 86.31164536081505 usec\nrounds: 4850"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11521.072628560014,
            "unit": "iter/sec",
            "range": "stddev: 0.00011055250387938783",
            "extra": "mean: 86.79747383251997 usec\nrounds: 4968"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19533.119358056796,
            "unit": "iter/sec",
            "range": "stddev: 0.000008241911798651201",
            "extra": "mean: 51.1951000589945 usec\nrounds: 3398"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T05:06:49Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1663032890765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14762.975630569385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003468658015426363",
            "extra": "mean: 67.7370216563469 usec\nrounds: 3417"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T05:06:49Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1663033017646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10233450797926687,
            "unit": "iter/sec",
            "range": "stddev: 0.3086889126627327",
            "extra": "mean: 9.771874802999998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2059178677108929,
            "unit": "iter/sec",
            "range": "stddev: 0.030537623645310267",
            "extra": "mean: 4.856305142999986 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2295.6439882629443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002613209525932112",
            "extra": "mean: 435.60761386031584 usec\nrounds: 808"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7796.021294875371,
            "unit": "iter/sec",
            "range": "stddev: 0.00018222147929737652",
            "extra": "mean: 128.27055778533327 usec\nrounds: 3288"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8556.813604268475,
            "unit": "iter/sec",
            "range": "stddev: 0.00013181888010462342",
            "extra": "mean: 116.86593237243834 usec\nrounds: 5412"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8461.011640647223,
            "unit": "iter/sec",
            "range": "stddev: 0.00012712206273476627",
            "extra": "mean: 118.18917671687605 usec\nrounds: 3814"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8434.284473503572,
            "unit": "iter/sec",
            "range": "stddev: 0.00012777526772055235",
            "extra": "mean: 118.56370307896472 usec\nrounds: 4385"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8643.4098233318,
            "unit": "iter/sec",
            "range": "stddev: 0.00012928189871300042",
            "extra": "mean: 115.69508104320421 usec\nrounds: 5676"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11880.057422310898,
            "unit": "iter/sec",
            "range": "stddev: 0.00009529033867285962",
            "extra": "mean: 84.17467731443682 usec\nrounds: 3412"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T05:06:49Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1663119314169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9126.409549935888,
            "unit": "iter/sec",
            "range": "stddev: 0.00044070115847504737",
            "extra": "mean: 109.57211535691216 usec\nrounds: 2748"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T05:06:49Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1663119396481,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1279448280513161,
            "unit": "iter/sec",
            "range": "stddev: 0.020285078276256273",
            "extra": "mean: 7.8158688806000045 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3520812581596487,
            "unit": "iter/sec",
            "range": "stddev: 0.0007059117212492592",
            "extra": "mean: 2.8402534268000066 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2715.9088161149984,
            "unit": "iter/sec",
            "range": "stddev: 0.0002246561573225822",
            "extra": "mean: 368.20087407443265 usec\nrounds: 1485"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12137.93816776226,
            "unit": "iter/sec",
            "range": "stddev: 0.00010052768677507683",
            "extra": "mean: 82.38631521916537 usec\nrounds: 5447"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12033.014839726015,
            "unit": "iter/sec",
            "range": "stddev: 0.0001047583250792824",
            "extra": "mean: 83.10469265761908 usec\nrounds: 9452"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11544.424120832706,
            "unit": "iter/sec",
            "range": "stddev: 0.00010811102683798688",
            "extra": "mean: 86.62190417930258 usec\nrounds: 2943"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12166.476108779883,
            "unit": "iter/sec",
            "range": "stddev: 0.00010352513176018823",
            "extra": "mean: 82.19306815375691 usec\nrounds: 9728"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11783.99158638467,
            "unit": "iter/sec",
            "range": "stddev: 0.00011064912572462607",
            "extra": "mean: 84.86088883120121 usec\nrounds: 9634"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19972.475450640708,
            "unit": "iter/sec",
            "range": "stddev: 0.000007201157408894454",
            "extra": "mean: 50.0689062040089 usec\nrounds: 6109"
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
          "id": "fcda50cc139fdeec91cdd96f89c6ea05ac050fe9",
          "message": "Bump timezonefinder[numba] from 6.1.1 to 6.1.2 (#18)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T12:20:13+08:00",
          "tree_id": "d65b2ca3cf0937c750fc1939870c611286f72430",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/fcda50cc139fdeec91cdd96f89c6ea05ac050fe9"
        },
        "date": 1663129240510,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16758.699890714728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002777993722735972",
            "extra": "mean: 59.670499890869024 usec\nrounds: 4573"
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
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T12:20:25+08:00",
          "tree_id": "c45e5562a8eac07d158a1ad7683e7e2491aabf81",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663129276099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 8398.023922445844,
            "unit": "iter/sec",
            "range": "stddev: 0.0005509212356619703",
            "extra": "mean: 119.07563127169081 usec\nrounds: 2571"
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
          "id": "fcda50cc139fdeec91cdd96f89c6ea05ac050fe9",
          "message": "Bump timezonefinder[numba] from 6.1.1 to 6.1.2 (#18)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T12:20:13+08:00",
          "tree_id": "d65b2ca3cf0937c750fc1939870c611286f72430",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/fcda50cc139fdeec91cdd96f89c6ea05ac050fe9"
        },
        "date": 1663129337912,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1270112553689657,
            "unit": "iter/sec",
            "range": "stddev: 0.012573378338416132",
            "extra": "mean: 7.873317975600003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3535725877788548,
            "unit": "iter/sec",
            "range": "stddev: 0.007772403076850275",
            "extra": "mean: 2.8282735556000147 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2691.4903210972934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002148461496793421",
            "extra": "mean: 371.54136953846086 usec\nrounds: 1648"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12354.01777617517,
            "unit": "iter/sec",
            "range": "stddev: 0.00009863999911214998",
            "extra": "mean: 80.94532629931201 usec\nrounds: 5023"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12166.362408273193,
            "unit": "iter/sec",
            "range": "stddev: 0.00010331368002185491",
            "extra": "mean: 82.1938362874999 usec\nrounds: 5021"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11703.205952593207,
            "unit": "iter/sec",
            "range": "stddev: 0.00010740119115353655",
            "extra": "mean: 85.44667196755765 usec\nrounds: 4905"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12370.570086727073,
            "unit": "iter/sec",
            "range": "stddev: 0.00009110289983293306",
            "extra": "mean: 80.83701826102129 usec\nrounds: 1369"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12260.708796412038,
            "unit": "iter/sec",
            "range": "stddev: 0.0001017249795390877",
            "extra": "mean: 81.56135314890106 usec\nrounds: 5097"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19940.482625478286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000095623473347828",
            "extra": "mean: 50.149237547655105 usec\nrounds: 3393"
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
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T12:20:25+08:00",
          "tree_id": "c45e5562a8eac07d158a1ad7683e7e2491aabf81",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663129341026,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14132647450295216,
            "unit": "iter/sec",
            "range": "stddev: 0.014030826187805403",
            "extra": "mean: 7.075815083600003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3455894285686749,
            "unit": "iter/sec",
            "range": "stddev: 0.0017694821371953614",
            "extra": "mean: 2.8936070299999983 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3094.0166482876784,
            "unit": "iter/sec",
            "range": "stddev: 0.0001956847047368152",
            "extra": "mean: 323.2044664508932 usec\nrounds: 1550"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12364.46869515271,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882067407714056",
            "extra": "mean: 80.87690823237992 usec\nrounds: 1482"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12782.660753480966,
            "unit": "iter/sec",
            "range": "stddev: 0.00009555953124857621",
            "extra": "mean: 78.23097391735759 usec\nrounds: 5866"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12706.460801541381,
            "unit": "iter/sec",
            "range": "stddev: 0.00009804283766842026",
            "extra": "mean: 78.70012079828658 usec\nrounds: 5712"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12403.653510346743,
            "unit": "iter/sec",
            "range": "stddev: 0.00010167367735065488",
            "extra": "mean: 80.62140716570573 usec\nrounds: 5666"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12714.0769298255,
            "unit": "iter/sec",
            "range": "stddev: 0.00009747596534494321",
            "extra": "mean: 78.65297697343136 usec\nrounds: 5689"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20170.01792525511,
            "unit": "iter/sec",
            "range": "stddev: 0.000008614609619726367",
            "extra": "mean: 49.578537991673706 usec\nrounds: 3764"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663205781091,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15696.760518205376,
            "unit": "iter/sec",
            "range": "stddev: 0.00031027898256126124",
            "extra": "mean: 63.707412675385 usec\nrounds: 4134"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663205854109,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1280431704994281,
            "unit": "iter/sec",
            "range": "stddev: 0.011169035544333716",
            "extra": "mean: 7.809865970199999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3519465246053537,
            "unit": "iter/sec",
            "range": "stddev: 0.0002514495869580153",
            "extra": "mean: 2.841340743799998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2665.598788877192,
            "unit": "iter/sec",
            "range": "stddev: 0.00021765107000319413",
            "extra": "mean: 375.15023047456503 usec\nrounds: 1306"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11736.632650408494,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086676516944926",
            "extra": "mean: 85.2033142542972 usec\nrounds: 7268"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11962.300517603835,
            "unit": "iter/sec",
            "range": "stddev: 0.00010272526070382186",
            "extra": "mean: 83.59596036969565 usec\nrounds: 8327"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11444.22459676801,
            "unit": "iter/sec",
            "range": "stddev: 0.00010858302550074115",
            "extra": "mean: 87.38031935186 usec\nrounds: 3147"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11852.056411146441,
            "unit": "iter/sec",
            "range": "stddev: 0.0001030991071701108",
            "extra": "mean: 84.37354373875029 usec\nrounds: 2755"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11752.433265557645,
            "unit": "iter/sec",
            "range": "stddev: 0.0001063139968984882",
            "extra": "mean: 85.08876225067853 usec\nrounds: 9775"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19740.98915731099,
            "unit": "iter/sec",
            "range": "stddev: 0.000007156823838627929",
            "extra": "mean: 50.65602295970333 usec\nrounds: 5575"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663292135468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14739.840689307122,
            "unit": "iter/sec",
            "range": "stddev: 0.0003430866912110224",
            "extra": "mean: 67.84333841039683 usec\nrounds: 3611"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663292245245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10744845628913732,
            "unit": "iter/sec",
            "range": "stddev: 0.0053677361750444665",
            "extra": "mean: 9.306787966400003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.29742634275465535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006629034515949579",
            "extra": "mean: 3.362176970400003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2144.840762891215,
            "unit": "iter/sec",
            "range": "stddev: 0.00027926565134438734",
            "extra": "mean: 466.23507782088876 usec\nrounds: 771"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 9787.940975274378,
            "unit": "iter/sec",
            "range": "stddev: 0.00013127327884728579",
            "extra": "mean: 102.16653354634352 usec\nrounds: 5008"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10457.841907246613,
            "unit": "iter/sec",
            "range": "stddev: 0.00012202593784463517",
            "extra": "mean: 95.62202305879802 usec\nrounds: 5074"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10177.201683107098,
            "unit": "iter/sec",
            "range": "stddev: 0.0001247803332463173",
            "extra": "mean: 98.2588368726029 usec\nrounds: 2072"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 9890.458388893872,
            "unit": "iter/sec",
            "range": "stddev: 0.00013240183510005606",
            "extra": "mean: 101.10754837439217 usec\nrounds: 5168"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10127.192738489332,
            "unit": "iter/sec",
            "range": "stddev: 0.00012384662818787294",
            "extra": "mean: 98.74404741991407 usec\nrounds: 4787"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 16959.83665473402,
            "unit": "iter/sec",
            "range": "stddev: 0.000010661404971060995",
            "extra": "mean: 58.96283203416754 usec\nrounds: 3852"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663378388349,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 7936.507396616275,
            "unit": "iter/sec",
            "range": "stddev: 0.0005016855243651018",
            "extra": "mean: 126.0000085713206 usec\nrounds: 3150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663378468354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14411068569983507,
            "unit": "iter/sec",
            "range": "stddev: 0.009401615557019022",
            "extra": "mean: 6.939110692200006 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3447125565539325,
            "unit": "iter/sec",
            "range": "stddev: 0.002561074372965186",
            "extra": "mean: 2.9009677221999994 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3099.1945128454145,
            "unit": "iter/sec",
            "range": "stddev: 0.00018924113382874682",
            "extra": "mean: 322.6644845475949 usec\nrounds: 1715"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12872.747602302712,
            "unit": "iter/sec",
            "range": "stddev: 0.00009761210254334854",
            "extra": "mean: 77.68349313561599 usec\nrounds: 7284"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12968.550944916971,
            "unit": "iter/sec",
            "range": "stddev: 0.00009423464055266005",
            "extra": "mean: 77.10961727701354 usec\nrounds: 7154"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13385.938400059933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000899646939541606",
            "extra": "mean: 74.70525936347673 usec\nrounds: 2136"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13135.861620126878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000932898395365613",
            "extra": "mean: 76.12747674410573 usec\nrounds: 8858"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12821.654452645449,
            "unit": "iter/sec",
            "range": "stddev: 0.00009393057983689614",
            "extra": "mean: 77.99305492854499 usec\nrounds: 6645"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20510.31238026337,
            "unit": "iter/sec",
            "range": "stddev: 0.000006922481188355737",
            "extra": "mean: 48.755961462697094 usec\nrounds: 4567"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663464901529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 8795.87004984188,
            "unit": "iter/sec",
            "range": "stddev: 0.0004897084551808236",
            "extra": "mean: 113.68971964495731 usec\nrounds: 2479"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663465034366,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.09857908438403092,
            "unit": "iter/sec",
            "range": "stddev: 0.07269410354011267",
            "extra": "mean: 10.144139664600015 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.21639328095177043,
            "unit": "iter/sec",
            "range": "stddev: 0.02168733698219179",
            "extra": "mean: 4.621215573799998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2067.745461274939,
            "unit": "iter/sec",
            "range": "stddev: 0.0002867972342880905",
            "extra": "mean: 483.6185201361371 usec\nrounds: 1167"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7910.78430298543,
            "unit": "iter/sec",
            "range": "stddev: 0.00015210457101500619",
            "extra": "mean: 126.40971636941391 usec\nrounds: 3427"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 7901.524802610089,
            "unit": "iter/sec",
            "range": "stddev: 0.00015787661873000025",
            "extra": "mean: 126.55785117192478 usec\nrounds: 3924"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8032.057156420536,
            "unit": "iter/sec",
            "range": "stddev: 0.00013415933508798805",
            "extra": "mean: 124.50110607101894 usec\nrounds: 4497"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8067.326515180475,
            "unit": "iter/sec",
            "range": "stddev: 0.00012992699362637808",
            "extra": "mean: 123.95680255637066 usec\nrounds: 3520"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8073.636322468014,
            "unit": "iter/sec",
            "range": "stddev: 0.00013576392196944324",
            "extra": "mean: 123.85992631561982 usec\nrounds: 3895"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11747.805709676577,
            "unit": "iter/sec",
            "range": "stddev: 0.000028896877395810244",
            "extra": "mean: 85.12227940374497 usec\nrounds: 3554"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663551409273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 10238.4837563996,
            "unit": "iter/sec",
            "range": "stddev: 0.00040439419494373583",
            "extra": "mean: 97.67071216721388 usec\nrounds: 2967"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663551507906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11317576798729964,
            "unit": "iter/sec",
            "range": "stddev: 0.09245262038882121",
            "extra": "mean: 8.835813688600002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.22930528873713849,
            "unit": "iter/sec",
            "range": "stddev: 0.048248570058670184",
            "extra": "mean: 4.3609984117999945 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2357.0496195761934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002627753305233958",
            "extra": "mean: 424.259205955878 usec\nrounds: 806"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8894.179291065893,
            "unit": "iter/sec",
            "range": "stddev: 0.00012252830431831716",
            "extra": "mean: 112.43308317435078 usec\nrounds: 4713"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 9666.688895834253,
            "unit": "iter/sec",
            "range": "stddev: 0.00011085237103848797",
            "extra": "mean: 103.44803797616144 usec\nrounds: 7294"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 9873.359208928021,
            "unit": "iter/sec",
            "range": "stddev: 0.00010669519600522146",
            "extra": "mean: 101.28265151092107 usec\nrounds: 7148"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8690.024700452248,
            "unit": "iter/sec",
            "range": "stddev: 0.00014155802450864936",
            "extra": "mean: 115.07447153147422 usec\nrounds: 4988"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 9807.940627118001,
            "unit": "iter/sec",
            "range": "stddev: 0.00010726009320028324",
            "extra": "mean: 101.95820284995378 usec\nrounds: 4491"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 13726.806227349409,
            "unit": "iter/sec",
            "range": "stddev: 0.000031341071150120325",
            "extra": "mean: 72.85015781803573 usec\nrounds: 4106"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663637626295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16235.377660491964,
            "unit": "iter/sec",
            "range": "stddev: 0.00027724281410647014",
            "extra": "mean: 61.59388595150783 usec\nrounds: 4577"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663637715661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12476919339936006,
            "unit": "iter/sec",
            "range": "stddev: 0.008638591586692248",
            "extra": "mean: 8.014798948000003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34995747426309404,
            "unit": "iter/sec",
            "range": "stddev: 0.007349971682743748",
            "extra": "mean: 2.8574900482000034 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2565.8896420396536,
            "unit": "iter/sec",
            "range": "stddev: 0.00023549976093142593",
            "extra": "mean: 389.7283747578049 usec\nrounds: 1030"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11617.285334878054,
            "unit": "iter/sec",
            "range": "stddev: 0.00010728529694188292",
            "extra": "mean: 86.07862948822863 usec\nrounds: 5236"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11503.789617331455,
            "unit": "iter/sec",
            "range": "stddev: 0.00010884311743571197",
            "extra": "mean: 86.927876227275 usec\nrounds: 5195"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11700.988002746615,
            "unit": "iter/sec",
            "range": "stddev: 0.00011091295370758682",
            "extra": "mean: 85.46286858556442 usec\nrounds: 2397"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11721.667882607147,
            "unit": "iter/sec",
            "range": "stddev: 0.0001099310433521354",
            "extra": "mean: 85.31209124972911 usec\nrounds: 5337"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11454.252156746632,
            "unit": "iter/sec",
            "range": "stddev: 0.00011135147049295251",
            "extra": "mean: 87.30382274769403 usec\nrounds: 5495"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19512.525025423434,
            "unit": "iter/sec",
            "range": "stddev: 0.000008603766193687025",
            "extra": "mean: 51.24913350256161 usec\nrounds: 3528"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663724088266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16903.701208794508,
            "unit": "iter/sec",
            "range": "stddev: 0.00005987565852289118",
            "extra": "mean: 59.15864150980904 usec\nrounds: 53"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663724173561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14221844553946988,
            "unit": "iter/sec",
            "range": "stddev: 0.0070765659387497515",
            "extra": "mean: 7.031436718400005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34849821302275275,
            "unit": "iter/sec",
            "range": "stddev: 0.002837462617139382",
            "extra": "mean: 2.8694551726000155 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3164.0840087080774,
            "unit": "iter/sec",
            "range": "stddev: 0.00018799775892716178",
            "extra": "mean: 316.04723428576364 usec\nrounds: 1750"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12994.234364660719,
            "unit": "iter/sec",
            "range": "stddev: 0.00009247542003229052",
            "extra": "mean: 76.95720824611355 usec\nrounds: 6185"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12683.911535407382,
            "unit": "iter/sec",
            "range": "stddev: 0.00010226707895536699",
            "extra": "mean: 78.84003268301588 usec\nrounds: 2509"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13020.554343373258,
            "unit": "iter/sec",
            "range": "stddev: 0.00009620145506426483",
            "extra": "mean: 76.80164558500113 usec\nrounds: 3273"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13242.8943982379,
            "unit": "iter/sec",
            "range": "stddev: 0.00008935416529537134",
            "extra": "mean: 75.51219317531219 usec\nrounds: 6916"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13183.955020582765,
            "unit": "iter/sec",
            "range": "stddev: 0.00009078796192064578",
            "extra": "mean: 75.84977333727261 usec\nrounds: 6481"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20717.44935723624,
            "unit": "iter/sec",
            "range": "stddev: 0.000006115351670523542",
            "extra": "mean: 48.26849013875918 usec\nrounds: 4817"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663810504839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9621.798407886155,
            "unit": "iter/sec",
            "range": "stddev: 0.0004080269365884594",
            "extra": "mean: 103.93067466268951 usec\nrounds: 3335"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663810568299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14335471149652143,
            "unit": "iter/sec",
            "range": "stddev: 0.010012252689215354",
            "extra": "mean: 6.975703760000002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3500593963315732,
            "unit": "iter/sec",
            "range": "stddev: 0.001107192586044767",
            "extra": "mean: 2.8566580713999996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3218.7162390434637,
            "unit": "iter/sec",
            "range": "stddev: 0.00018272272221682586",
            "extra": "mean: 310.6828703536723 usec\nrounds: 1157"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13192.942990497282,
            "unit": "iter/sec",
            "range": "stddev: 0.00009430735924692837",
            "extra": "mean: 75.79809908375165 usec\nrounds: 7640"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12678.462384945766,
            "unit": "iter/sec",
            "range": "stddev: 0.00009874759069515957",
            "extra": "mean: 78.8739178015298 usec\nrounds: 4185"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12964.662615902678,
            "unit": "iter/sec",
            "range": "stddev: 0.00009653280635540502",
            "extra": "mean: 77.13274379954807 usec\nrounds: 4153"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13241.567429966557,
            "unit": "iter/sec",
            "range": "stddev: 0.00009257536132425176",
            "extra": "mean: 75.51976042782766 usec\nrounds: 3740"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13471.993562751606,
            "unit": "iter/sec",
            "range": "stddev: 0.00008854353981621523",
            "extra": "mean: 74.22806397153248 usec\nrounds: 6456"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20842.758148889116,
            "unit": "iter/sec",
            "range": "stddev: 0.000006153048846815994",
            "extra": "mean: 47.978295044089364 usec\nrounds: 4762"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663896908928,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16328.086355088752,
            "unit": "iter/sec",
            "range": "stddev: 0.00029391497337231677",
            "extra": "mean: 61.244164089586874 usec\nrounds: 4333"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663897032540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10204597454436934,
            "unit": "iter/sec",
            "range": "stddev: 0.23478779941162553",
            "extra": "mean: 9.799504629799998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2531858970462314,
            "unit": "iter/sec",
            "range": "stddev: 0.09185237573966873",
            "extra": "mean: 3.9496670694000047 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2233.229860982326,
            "unit": "iter/sec",
            "range": "stddev: 0.00028115403370911323",
            "extra": "mean: 447.7819401716813 usec\nrounds: 702"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8668.016632643143,
            "unit": "iter/sec",
            "range": "stddev: 0.00013531813822018825",
            "extra": "mean: 115.36664526393157 usec\nrounds: 5669"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8263.67151583347,
            "unit": "iter/sec",
            "range": "stddev: 0.00012789264825267742",
            "extra": "mean: 121.0115864460448 usec\nrounds: 4471"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8458.089488492966,
            "unit": "iter/sec",
            "range": "stddev: 0.00012640776268553068",
            "extra": "mean: 118.23000943185538 usec\nrounds: 4983"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8327.835574145864,
            "unit": "iter/sec",
            "range": "stddev: 0.0001549825367890093",
            "extra": "mean: 120.079219996195 usec\nrounds: 5041"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8608.832010211005,
            "unit": "iter/sec",
            "range": "stddev: 0.00012806891641288607",
            "extra": "mean: 116.15977624071326 usec\nrounds: 3325"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12466.005703134826,
            "unit": "iter/sec",
            "range": "stddev: 0.00008350777690285054",
            "extra": "mean: 80.21815678686318 usec\nrounds: 3087"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663983239944,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15096.345150206524,
            "unit": "iter/sec",
            "range": "stddev: 0.00035615930585433474",
            "extra": "mean: 66.24119878355587 usec\nrounds: 3124"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663983340726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1263156575182321,
            "unit": "iter/sec",
            "range": "stddev: 0.00799237643314577",
            "extra": "mean: 7.916674936799995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34959477236913783,
            "unit": "iter/sec",
            "range": "stddev: 0.0009868002361748116",
            "extra": "mean: 2.8604546722000124 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2656.840679318556,
            "unit": "iter/sec",
            "range": "stddev: 0.00023283556244860934",
            "extra": "mean: 376.38688980646236 usec\nrounds: 1697"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11625.544368296538,
            "unit": "iter/sec",
            "range": "stddev: 0.00011099321803057913",
            "extra": "mean: 86.0174774032132 usec\nrounds: 5023"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12201.296738991061,
            "unit": "iter/sec",
            "range": "stddev: 0.00009876088596034688",
            "extra": "mean: 81.95850173894641 usec\nrounds: 5176"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11875.51606811031,
            "unit": "iter/sec",
            "range": "stddev: 0.00010542845735344905",
            "extra": "mean: 84.20686682285167 usec\nrounds: 5121"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11689.34471763462,
            "unit": "iter/sec",
            "range": "stddev: 0.00011051229814642651",
            "extra": "mean: 85.54799470421928 usec\nrounds: 4910"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12472.807048694818,
            "unit": "iter/sec",
            "range": "stddev: 0.00009734752561897565",
            "extra": "mean: 80.17441431555234 usec\nrounds: 4820"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20164.231936365475,
            "unit": "iter/sec",
            "range": "stddev: 0.00000812821611041623",
            "extra": "mean: 49.59276421516138 usec\nrounds: 3236"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664069606397,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 10898.794025709494,
            "unit": "iter/sec",
            "range": "stddev: 0.00010957963199486329",
            "extra": "mean: 91.75327083355 usec\nrounds: 48"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664069707122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1139162683582502,
            "unit": "iter/sec",
            "range": "stddev: 0.1813679727371675",
            "extra": "mean: 8.7783774382 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2260130012581311,
            "unit": "iter/sec",
            "range": "stddev: 0.22812762601440542",
            "extra": "mean: 4.4245242283999975 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2536.9086513764237,
            "unit": "iter/sec",
            "range": "stddev: 0.0002301816286425093",
            "extra": "mean: 394.180531276694 usec\nrounds: 1167"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8446.513519000922,
            "unit": "iter/sec",
            "range": "stddev: 0.00014533427622482974",
            "extra": "mean: 118.3920439777243 usec\nrounds: 4525"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 7672.0511234413825,
            "unit": "iter/sec",
            "range": "stddev: 0.0001482167527017425",
            "extra": "mean: 130.343239885951 usec\nrounds: 3164"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8546.427996567021,
            "unit": "iter/sec",
            "range": "stddev: 0.0001466375619996122",
            "extra": "mean: 117.00794769483646 usec\nrounds: 2581"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8937.397927074653,
            "unit": "iter/sec",
            "range": "stddev: 0.0001237459771375234",
            "extra": "mean: 111.8893897485121 usec\nrounds: 4331"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 9271.54893696447,
            "unit": "iter/sec",
            "range": "stddev: 0.00012178222253875514",
            "extra": "mean: 107.8568432091351 usec\nrounds: 3291"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12037.434189484524,
            "unit": "iter/sec",
            "range": "stddev: 0.000026609179157476237",
            "extra": "mean: 83.07418211046708 usec\nrounds: 3108"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664156147968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13220.810793523422,
            "unit": "iter/sec",
            "range": "stddev: 0.00038538471260278576",
            "extra": "mean: 75.63832624318907 usec\nrounds: 3761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664156231805,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14313990063982163,
            "unit": "iter/sec",
            "range": "stddev: 0.01510587491772026",
            "extra": "mean: 6.986172237999997 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3466711769511247,
            "unit": "iter/sec",
            "range": "stddev: 0.0023238250798694876",
            "extra": "mean: 2.8845778549999976 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3104.356719062039,
            "unit": "iter/sec",
            "range": "stddev: 0.00019230848359804217",
            "extra": "mean: 322.1279287459411 usec\nrounds: 2456"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12824.000416923192,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049352354428985",
            "extra": "mean: 77.97878723400149 usec\nrounds: 4794"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12644.319578507833,
            "unit": "iter/sec",
            "range": "stddev: 0.00009988142266606384",
            "extra": "mean: 79.08689698888573 usec\nrounds: 6310"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12945.935369074408,
            "unit": "iter/sec",
            "range": "stddev: 0.00009255523915542277",
            "extra": "mean: 77.24432198146349 usec\nrounds: 6460"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12686.49000241381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000965959266942349",
            "extra": "mean: 78.82400883220922 usec\nrounds: 2491"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12796.135375850625,
            "unit": "iter/sec",
            "range": "stddev: 0.00009688926666955101",
            "extra": "mean: 78.14859491774679 usec\nrounds: 7359"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20530.276562868694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067584938911788905",
            "extra": "mean: 48.70854987938215 usec\nrounds: 4150"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664242489770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9681.946244502864,
            "unit": "iter/sec",
            "range": "stddev: 0.00039870132362081575",
            "extra": "mean: 103.28501881197406 usec\nrounds: 3030"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664242592420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1083024123420877,
            "unit": "iter/sec",
            "range": "stddev: 0.06843588479031551",
            "extra": "mean: 9.233404670999994 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.30057142093911476,
            "unit": "iter/sec",
            "range": "stddev: 0.027211060366790885",
            "extra": "mean: 3.3269962821999797 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2360.304957125599,
            "unit": "iter/sec",
            "range": "stddev: 0.0002606246589416307",
            "extra": "mean: 423.6740667688167 usec\nrounds: 1318"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10107.026354934156,
            "unit": "iter/sec",
            "range": "stddev: 0.0001227408459779025",
            "extra": "mean: 98.94106979465917 usec\nrounds: 5115"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10027.049225517914,
            "unit": "iter/sec",
            "range": "stddev: 0.00012396184499176657",
            "extra": "mean: 99.73023743167555 usec\nrounds: 2009"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10593.370671383758,
            "unit": "iter/sec",
            "range": "stddev: 0.00011970628174197028",
            "extra": "mean: 94.39866035286907 usec\nrounds: 5385"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 10568.20637563919,
            "unit": "iter/sec",
            "range": "stddev: 0.00011925832268561761",
            "extra": "mean: 94.62343603594867 usec\nrounds: 4995"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10578.75131042899,
            "unit": "iter/sec",
            "range": "stddev: 0.00012150662395422977",
            "extra": "mean: 94.52911507751928 usec\nrounds: 5266"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 17726.15848401927,
            "unit": "iter/sec",
            "range": "stddev: 0.00000993901907477325",
            "extra": "mean: 56.413802285561964 usec\nrounds: 3237"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664328887842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13480.927411728331,
            "unit": "iter/sec",
            "range": "stddev: 0.0003813099005250659",
            "extra": "mean: 74.17887282220698 usec\nrounds: 3444"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664328966957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13001225190217663,
            "unit": "iter/sec",
            "range": "stddev: 0.02735722062287241",
            "extra": "mean: 7.6915827960000005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.38386410672106597,
            "unit": "iter/sec",
            "range": "stddev: 0.0010773359806040982",
            "extra": "mean: 2.6050885782000135 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2592.77290280832,
            "unit": "iter/sec",
            "range": "stddev: 0.00022591536388825813",
            "extra": "mean: 385.6874618354991 usec\nrounds: 1035"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11561.199642533726,
            "unit": "iter/sec",
            "range": "stddev: 0.00011118448328690409",
            "extra": "mean: 86.49621414035562 usec\nrounds: 4427"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11624.18387385356,
            "unit": "iter/sec",
            "range": "stddev: 0.00011080623407141067",
            "extra": "mean: 86.0275448884901 usec\nrounds: 2250"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12233.582918267582,
            "unit": "iter/sec",
            "range": "stddev: 0.0001013885574396124",
            "extra": "mean: 81.74220150228987 usec\nrounds: 4392"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11853.671277990748,
            "unit": "iter/sec",
            "range": "stddev: 0.0001055930625134654",
            "extra": "mean: 84.36204923758478 usec\nrounds: 4326"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11637.386885884956,
            "unit": "iter/sec",
            "range": "stddev: 0.00010990742216718481",
            "extra": "mean: 85.92994370694205 usec\nrounds: 2185"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20812.02415728071,
            "unit": "iter/sec",
            "range": "stddev: 0.00001292767452205546",
            "extra": "mean: 48.04914661076675 usec\nrounds: 4263"
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
          "id": "f6d68daa6bc741e161b32c52d03f14699730e587",
          "message": "Bump timezonefinder from 6.1.2 to 6.1.3 (#20)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T13:12:54+08:00",
          "tree_id": "ce8c9da562f04db283d81592d0d1236c7cd967a5",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/f6d68daa6bc741e161b32c52d03f14699730e587"
        },
        "date": 1664342027795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 10350.196465378947,
            "unit": "iter/sec",
            "range": "stddev: 0.00039956673489309534",
            "extra": "mean: 96.61652349740082 usec\nrounds: 2745"
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
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T13:13:07+08:00",
          "tree_id": "78d239d52bd72fa988e6de48e6d0fac432326bce",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664342031730,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14918.576339704785,
            "unit": "iter/sec",
            "range": "stddev: 0.00034276773557162174",
            "extra": "mean: 67.03052471156832 usec\nrounds: 3379"
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
          "id": "f6d68daa6bc741e161b32c52d03f14699730e587",
          "message": "Bump timezonefinder from 6.1.2 to 6.1.3 (#20)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T13:12:54+08:00",
          "tree_id": "ce8c9da562f04db283d81592d0d1236c7cd967a5",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/f6d68daa6bc741e161b32c52d03f14699730e587"
        },
        "date": 1664342102388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12487177262003574,
            "unit": "iter/sec",
            "range": "stddev: 0.004155915034454483",
            "extra": "mean: 8.008214979399991 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.35138596807921685,
            "unit": "iter/sec",
            "range": "stddev: 0.005916340543846673",
            "extra": "mean: 2.8458734577999962 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2696.1507907559367,
            "unit": "iter/sec",
            "range": "stddev: 0.00022514497363218525",
            "extra": "mean: 370.8991364387389 usec\nrounds: 2426"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11598.385570841567,
            "unit": "iter/sec",
            "range": "stddev: 0.00010675995385343904",
            "extra": "mean: 86.21889606032825 usec\nrounds: 5686"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11827.632756695668,
            "unit": "iter/sec",
            "range": "stddev: 0.00010234359345425676",
            "extra": "mean: 84.54777220182933 usec\nrounds: 5360"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11727.577627407078,
            "unit": "iter/sec",
            "range": "stddev: 0.00010568333401037038",
            "extra": "mean: 85.26910089795724 usec\nrounds: 5679"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11473.033775040576,
            "unit": "iter/sec",
            "range": "stddev: 0.00010867749677345361",
            "extra": "mean: 87.16090439614028 usec\nrounds: 5209"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11741.029125022384,
            "unit": "iter/sec",
            "range": "stddev: 0.00010406335153287952",
            "extra": "mean: 85.17140953758546 usec\nrounds: 2852"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19711.196063994863,
            "unit": "iter/sec",
            "range": "stddev: 0.00000799736979014546",
            "extra": "mean: 50.732588563036714 usec\nrounds: 3777"
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
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T13:13:07+08:00",
          "tree_id": "78d239d52bd72fa988e6de48e6d0fac432326bce",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664342163339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.09987102388919827,
            "unit": "iter/sec",
            "range": "stddev: 0.06000283079259976",
            "extra": "mean: 10.012914267400003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2302215681246018,
            "unit": "iter/sec",
            "range": "stddev: 0.04057097296263117",
            "extra": "mean: 4.343641684600004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2208.6572934558008,
            "unit": "iter/sec",
            "range": "stddev: 0.00028281958496086427",
            "extra": "mean: 452.7637687218277 usec\nrounds: 908"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7958.459298774482,
            "unit": "iter/sec",
            "range": "stddev: 0.00015275099435637838",
            "extra": "mean: 125.65246141976115 usec\nrounds: 4523"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 7956.9857789691105,
            "unit": "iter/sec",
            "range": "stddev: 0.0001280741182498257",
            "extra": "mean: 125.67573045600665 usec\nrounds: 2827"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 7513.367206344388,
            "unit": "iter/sec",
            "range": "stddev: 0.00021392736928164832",
            "extra": "mean: 133.0961168989034 usec\nrounds: 4799"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8048.350789481429,
            "unit": "iter/sec",
            "range": "stddev: 0.00012906378833359768",
            "extra": "mean: 124.24905749721079 usec\nrounds: 5322"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8048.971082671633,
            "unit": "iter/sec",
            "range": "stddev: 0.00015497288233467618",
            "extra": "mean: 124.23948225542361 usec\nrounds: 5692"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12150.966330165103,
            "unit": "iter/sec",
            "range": "stddev: 0.00003155532984533352",
            "extra": "mean: 82.29798131507228 usec\nrounds: 3318"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664415360576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9723.61455680676,
            "unit": "iter/sec",
            "range": "stddev: 0.00009613391226605421",
            "extra": "mean: 102.84241463478992 usec\nrounds: 41"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664415438572,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12385953569512125,
            "unit": "iter/sec",
            "range": "stddev: 0.011008348514575331",
            "extra": "mean: 8.0736617846 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.35223102721939253,
            "unit": "iter/sec",
            "range": "stddev: 0.0018668416230926712",
            "extra": "mean: 2.839045747600011 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2622.190371111398,
            "unit": "iter/sec",
            "range": "stddev: 0.00023691337670564733",
            "extra": "mean: 381.36056444145845 usec\nrounds: 1513"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11202.628595564067,
            "unit": "iter/sec",
            "range": "stddev: 0.00011086420648102042",
            "extra": "mean: 89.26476419971402 usec\nrounds: 4067"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11455.708812128281,
            "unit": "iter/sec",
            "range": "stddev: 0.00010746089781851602",
            "extra": "mean: 87.29272159408323 usec\nrounds: 7252"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11636.993503709708,
            "unit": "iter/sec",
            "range": "stddev: 0.00010885193452914867",
            "extra": "mean: 85.93284852150293 usec\nrounds: 4971"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11673.446645657381,
            "unit": "iter/sec",
            "range": "stddev: 0.00010539514769894532",
            "extra": "mean: 85.6645025547796 usec\nrounds: 6654"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11517.439905537347,
            "unit": "iter/sec",
            "range": "stddev: 0.00010869556882357825",
            "extra": "mean: 86.82485067877113 usec\nrounds: 2431"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 18933.21721782272,
            "unit": "iter/sec",
            "range": "stddev: 0.000007750441967623686",
            "extra": "mean: 52.817225329177205 usec\nrounds: 3111"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664501840524,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 21756.1837848764,
            "unit": "iter/sec",
            "range": "stddev: 0.000029973046387835118",
            "extra": "mean: 45.96394339595257 usec\nrounds: 53"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664501919001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14410180142036902,
            "unit": "iter/sec",
            "range": "stddev: 0.004319644017579859",
            "extra": "mean: 6.939538507800004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34938805077365964,
            "unit": "iter/sec",
            "range": "stddev: 0.0018662000454577048",
            "extra": "mean: 2.8621471106000116 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3248.1792649706376,
            "unit": "iter/sec",
            "range": "stddev: 0.00018801030479806863",
            "extra": "mean: 307.8647815975882 usec\nrounds: 989"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13201.370833529332,
            "unit": "iter/sec",
            "range": "stddev: 0.00009282853981880749",
            "extra": "mean: 75.74970907264894 usec\nrounds: 8961"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13109.567737464678,
            "unit": "iter/sec",
            "range": "stddev: 0.00009377245740803904",
            "extra": "mean: 76.28016575574708 usec\nrounds: 9882"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13157.876481979943,
            "unit": "iter/sec",
            "range": "stddev: 0.00009375358042095832",
            "extra": "mean: 76.00010544023013 usec\nrounds: 9209"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13050.46903507998,
            "unit": "iter/sec",
            "range": "stddev: 0.00009329539162829757",
            "extra": "mean: 76.6255984602527 usec\nrounds: 9872"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12976.198189414796,
            "unit": "iter/sec",
            "range": "stddev: 0.00009333887355712898",
            "extra": "mean: 77.06417437549159 usec\nrounds: 4605"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20696.741152518163,
            "unit": "iter/sec",
            "range": "stddev: 0.000007090651107831651",
            "extra": "mean: 48.316785363976514 usec\nrounds: 5097"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664588111124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16255.63804443793,
            "unit": "iter/sec",
            "range": "stddev: 0.0002934677026167335",
            "extra": "mean: 61.51711776961978 usec\nrounds: 4322"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664588192473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14348975736724726,
            "unit": "iter/sec",
            "range": "stddev: 0.006850995593880599",
            "extra": "mean: 6.969138552799995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34651756715070836,
            "unit": "iter/sec",
            "range": "stddev: 0.0012589447235462365",
            "extra": "mean: 2.8858565763999993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3072.625119817794,
            "unit": "iter/sec",
            "range": "stddev: 0.0001919101777096504",
            "extra": "mean: 325.45460673031926 usec\nrounds: 1040"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13324.918184028551,
            "unit": "iter/sec",
            "range": "stddev: 0.00008790125610540618",
            "extra": "mean: 75.047365108674 usec\nrounds: 8644"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12962.43265500063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000922496401333314",
            "extra": "mean: 77.14601314547399 usec\nrounds: 6390"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13108.816882248448,
            "unit": "iter/sec",
            "range": "stddev: 0.00009410126668510557",
            "extra": "mean: 76.2845349799774 usec\nrounds: 7247"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12858.174493035953,
            "unit": "iter/sec",
            "range": "stddev: 0.00009398896222896049",
            "extra": "mean: 77.77153751814494 usec\nrounds: 8969"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13126.828997273215,
            "unit": "iter/sec",
            "range": "stddev: 0.00009095865956359643",
            "extra": "mean: 76.17986036138096 usec\nrounds: 7856"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20526.216587163988,
            "unit": "iter/sec",
            "range": "stddev: 0.000006522066622075147",
            "extra": "mean: 48.718184169670465 usec\nrounds: 4523"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664674481370,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15691.83585799441,
            "unit": "iter/sec",
            "range": "stddev: 0.0003050561796661607",
            "extra": "mean: 63.72740634363294 usec\nrounds: 4004"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664674573775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12692315672278992,
            "unit": "iter/sec",
            "range": "stddev: 0.012705712918687998",
            "extra": "mean: 7.878782925199994 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3505477815101814,
            "unit": "iter/sec",
            "range": "stddev: 0.0013762011980822078",
            "extra": "mean: 2.8526781590000043 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2774.4646805224197,
            "unit": "iter/sec",
            "range": "stddev: 0.00022422908724062496",
            "extra": "mean: 360.4298901407187 usec\nrounds: 1420"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11609.532209967794,
            "unit": "iter/sec",
            "range": "stddev: 0.00010901413141017625",
            "extra": "mean: 86.13611486786806 usec\nrounds: 6181"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11978.518847331667,
            "unit": "iter/sec",
            "range": "stddev: 0.00010361631969033496",
            "extra": "mean: 83.48277552051103 usec\nrounds: 5956"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11863.32151098613,
            "unit": "iter/sec",
            "range": "stddev: 0.00010711099722040659",
            "extra": "mean: 84.29342482827776 usec\nrounds: 6984"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12050.072094458948,
            "unit": "iter/sec",
            "range": "stddev: 0.00010341309028522424",
            "extra": "mean: 82.9870553604269 usec\nrounds: 6250"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11926.15498658025,
            "unit": "iter/sec",
            "range": "stddev: 0.00010364515979230096",
            "extra": "mean: 83.84932118735979 usec\nrounds: 6532"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20059.168088415932,
            "unit": "iter/sec",
            "range": "stddev: 0.000006742432441890658",
            "extra": "mean: 49.85251609599378 usec\nrounds: 3945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664760759065,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15340.142402676038,
            "unit": "iter/sec",
            "range": "stddev: 0.00033634787794501294",
            "extra": "mean: 65.18844308939096 usec\nrounds: 3444"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664760844303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12706375982218185,
            "unit": "iter/sec",
            "range": "stddev: 0.00726228412186006",
            "extra": "mean: 7.870064614800006 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.35249234262942286,
            "unit": "iter/sec",
            "range": "stddev: 0.0035955406379030354",
            "extra": "mean: 2.8369410595999964 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2689.8333173740557,
            "unit": "iter/sec",
            "range": "stddev: 0.00022271901360006286",
            "extra": "mean: 371.77024819376095 usec\nrounds: 1938"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11553.423775696034,
            "unit": "iter/sec",
            "range": "stddev: 0.00011278572895620396",
            "extra": "mean: 86.55442918173019 usec\nrounds: 7491"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11729.749857828334,
            "unit": "iter/sec",
            "range": "stddev: 0.0001102321126295751",
            "extra": "mean: 85.25330992737315 usec\nrounds: 3717"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11357.444890129067,
            "unit": "iter/sec",
            "range": "stddev: 0.00011151583347928133",
            "extra": "mean: 88.04797290886401 usec\nrounds: 2104"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11715.900635080758,
            "unit": "iter/sec",
            "range": "stddev: 0.00011123496972954867",
            "extra": "mean: 85.35408682160669 usec\nrounds: 6139"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11573.471347458197,
            "unit": "iter/sec",
            "range": "stddev: 0.00010897617388916661",
            "extra": "mean: 86.40449956439588 usec\nrounds: 5741"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19737.360335784775,
            "unit": "iter/sec",
            "range": "stddev: 0.000007771882086517199",
            "extra": "mean: 50.66533634626675 usec\nrounds: 3651"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664847242172,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14653.009680291681,
            "unit": "iter/sec",
            "range": "stddev: 0.0003350690949774349",
            "extra": "mean: 68.24536541083444 usec\nrounds: 3689"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664847378906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.09303893554545944,
            "unit": "iter/sec",
            "range": "stddev: 0.26104488765574646",
            "extra": "mean: 10.7481883164 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.20806152516386678,
            "unit": "iter/sec",
            "range": "stddev: 0.05136159033384361",
            "extra": "mean: 4.806270641399999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2081.8682391060825,
            "unit": "iter/sec",
            "range": "stddev: 0.0003331135051641654",
            "extra": "mean: 480.3377952628656 usec\nrounds: 1182"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7445.574931505434,
            "unit": "iter/sec",
            "range": "stddev: 0.000174957549213577",
            "extra": "mean: 134.30796267573234 usec\nrounds: 3751"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 7927.490667126221,
            "unit": "iter/sec",
            "range": "stddev: 0.00012921739221571544",
            "extra": "mean: 126.14332100658379 usec\nrounds: 2623"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 7776.994763193222,
            "unit": "iter/sec",
            "range": "stddev: 0.00015859644626334634",
            "extra": "mean: 128.58437358512526 usec\nrounds: 3975"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 7422.485319101756,
            "unit": "iter/sec",
            "range": "stddev: 0.00015035005016374194",
            "extra": "mean: 134.72576327318578 usec\nrounds: 3654"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 7521.1123883273185,
            "unit": "iter/sec",
            "range": "stddev: 0.00015536301185813475",
            "extra": "mean: 132.95905557161845 usec\nrounds: 3491"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11183.4335462337,
            "unit": "iter/sec",
            "range": "stddev: 0.000041324733927526696",
            "extra": "mean: 89.41797667647204 usec\nrounds: 2401"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664933572276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15169.758604842027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003474360878897526",
            "extra": "mean: 65.92062708768552 usec\nrounds: 3293"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664933712718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.09611432032071143,
            "unit": "iter/sec",
            "range": "stddev: 0.033150353338565225",
            "extra": "mean: 10.404276872199995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.19265037792560982,
            "unit": "iter/sec",
            "range": "stddev: 0.030660263618396223",
            "extra": "mean: 5.190750263600006 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2092.7832509944888,
            "unit": "iter/sec",
            "range": "stddev: 0.00048377946575661783",
            "extra": "mean: 477.8325703461172 usec\nrounds: 1848"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7816.719230130923,
            "unit": "iter/sec",
            "range": "stddev: 0.00015396628662153438",
            "extra": "mean: 127.93090944667983 usec\nrounds: 3832"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 7459.1869395425265,
            "unit": "iter/sec",
            "range": "stddev: 0.0002214478135220329",
            "extra": "mean: 134.0628687959026 usec\nrounds: 2035"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 7637.856956218896,
            "unit": "iter/sec",
            "range": "stddev: 0.000204525594891546",
            "extra": "mean: 130.9267777247098 usec\nrounds: 4211"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 7749.74340823159,
            "unit": "iter/sec",
            "range": "stddev: 0.00018888883543892443",
            "extra": "mean: 129.03653028535425 usec\nrounds: 4309"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 7378.456551155338,
            "unit": "iter/sec",
            "range": "stddev: 0.00020088413656600752",
            "extra": "mean: 135.52969961494418 usec\nrounds: 4158"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 9362.307782585644,
            "unit": "iter/sec",
            "range": "stddev: 0.00014078700105864023",
            "extra": "mean: 106.81127166744609 usec\nrounds: 3173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665019947821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15523.205364784204,
            "unit": "iter/sec",
            "range": "stddev: 0.00032197863996054956",
            "extra": "mean: 64.41968501354691 usec\nrounds: 3670"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665020043937,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12406055089526097,
            "unit": "iter/sec",
            "range": "stddev: 0.023010260324482508",
            "extra": "mean: 8.060580037600005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3434013564651513,
            "unit": "iter/sec",
            "range": "stddev: 0.03266541090891081",
            "extra": "mean: 2.912044408600002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2735.6062789463363,
            "unit": "iter/sec",
            "range": "stddev: 0.00022639163820614683",
            "extra": "mean: 365.54968004575807 usec\nrounds: 1769"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11395.1872151162,
            "unit": "iter/sec",
            "range": "stddev: 0.0001133701326773211",
            "extra": "mean: 87.75634670340979 usec\nrounds: 3989"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11804.410316281643,
            "unit": "iter/sec",
            "range": "stddev: 0.0001068508667571768",
            "extra": "mean: 84.71410034101537 usec\nrounds: 4983"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11400.823753393523,
            "unit": "iter/sec",
            "range": "stddev: 0.00011286196164339386",
            "extra": "mean: 87.71296018871831 usec\nrounds: 4898"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11691.92952965654,
            "unit": "iter/sec",
            "range": "stddev: 0.00011047058773693026",
            "extra": "mean: 85.52908204445667 usec\nrounds: 4912"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11617.90399511887,
            "unit": "iter/sec",
            "range": "stddev: 0.0001072282718826213",
            "extra": "mean: 86.07404575043302 usec\nrounds: 5071"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19299.999715529626,
            "unit": "iter/sec",
            "range": "stddev: 0.000008571825828460938",
            "extra": "mean: 51.81347226629004 usec\nrounds: 3191"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665106420229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14890.304102205384,
            "unit": "iter/sec",
            "range": "stddev: 0.0003777339180334333",
            "extra": "mean: 67.15779564581837 usec\nrounds: 3445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665106492275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14375421384265238,
            "unit": "iter/sec",
            "range": "stddev: 0.00911862207136516",
            "extra": "mean: 6.956317823800004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3476678528564201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008834344087922775",
            "extra": "mean: 2.8763084989999923 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3138.248193617993,
            "unit": "iter/sec",
            "range": "stddev: 0.00018770300774837055",
            "extra": "mean: 318.6491119579455 usec\nrounds: 2099"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13069.403912655907,
            "unit": "iter/sec",
            "range": "stddev: 0.00009423406916089348",
            "extra": "mean: 76.5145837318287 usec\nrounds: 9417"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13162.824086560826,
            "unit": "iter/sec",
            "range": "stddev: 0.00009411605782394833",
            "extra": "mean: 75.97153873848355 usec\nrounds: 9719"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12825.709261707769,
            "unit": "iter/sec",
            "range": "stddev: 0.00009785444786985556",
            "extra": "mean: 77.96839766090628 usec\nrounds: 6840"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13055.393217153663,
            "unit": "iter/sec",
            "range": "stddev: 0.00009359076381444894",
            "extra": "mean: 76.5966971171796 usec\nrounds: 9644"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13149.678157227685,
            "unit": "iter/sec",
            "range": "stddev: 0.000093974853614297",
            "extra": "mean: 76.04748861859807 usec\nrounds: 9533"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20801.681379691498,
            "unit": "iter/sec",
            "range": "stddev: 0.000006332468182235776",
            "extra": "mean: 48.073037065950416 usec\nrounds: 5072"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665192760863,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15493.717461055781,
            "unit": "iter/sec",
            "range": "stddev: 0.000328261753053209",
            "extra": "mean: 64.5422896418209 usec\nrounds: 3601"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665192881552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10946775207901797,
            "unit": "iter/sec",
            "range": "stddev: 0.10316296836912724",
            "extra": "mean: 9.135110395599995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2414449821744192,
            "unit": "iter/sec",
            "range": "stddev: 0.03220338596437666",
            "extra": "mean: 4.141730306400001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2394.0420862280703,
            "unit": "iter/sec",
            "range": "stddev: 0.0002454171847582959",
            "extra": "mean: 417.7036008483663 usec\nrounds: 1651"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8734.978893266936,
            "unit": "iter/sec",
            "range": "stddev: 0.000124342857835507",
            "extra": "mean: 114.48224571793942 usec\nrounds: 6247"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8627.95449877528,
            "unit": "iter/sec",
            "range": "stddev: 0.00012471798404109881",
            "extra": "mean: 115.90232657600917 usec\nrounds: 4489"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8584.067803340164,
            "unit": "iter/sec",
            "range": "stddev: 0.00012415954806749437",
            "extra": "mean: 116.49488598061725 usec\nrounds: 5578"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8512.767672801474,
            "unit": "iter/sec",
            "range": "stddev: 0.00013209354351224648",
            "extra": "mean: 117.47060867114082 usec\nrounds: 5305"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8632.135959299148,
            "unit": "iter/sec",
            "range": "stddev: 0.0001200081901812955",
            "extra": "mean: 115.84618276577643 usec\nrounds: 4700"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11921.230473360227,
            "unit": "iter/sec",
            "range": "stddev: 0.00006782216202997588",
            "extra": "mean: 83.88395830737856 usec\nrounds: 3214"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665279229614,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12840.036882248312,
            "unit": "iter/sec",
            "range": "stddev: 0.00011797853395460103",
            "extra": "mean: 77.88139622733688 usec\nrounds: 53"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665279344245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11092996732826642,
            "unit": "iter/sec",
            "range": "stddev: 0.09133824300322992",
            "extra": "mean: 9.0146966062 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3039424032540258,
            "unit": "iter/sec",
            "range": "stddev: 0.006010249245925909",
            "extra": "mean: 3.290097035800005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2414.3100094158717,
            "unit": "iter/sec",
            "range": "stddev: 0.00025115557464838175",
            "extra": "mean: 414.1970153377048 usec\nrounds: 1956"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10632.360921596011,
            "unit": "iter/sec",
            "range": "stddev: 0.00011671987151024868",
            "extra": "mean: 94.05248818903819 usec\nrounds: 7874"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10467.015359509882,
            "unit": "iter/sec",
            "range": "stddev: 0.00011912048964464888",
            "extra": "mean: 95.53821845608002 usec\nrounds: 7553"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10251.109405302774,
            "unit": "iter/sec",
            "range": "stddev: 0.00012149350387162327",
            "extra": "mean: 97.55041727315019 usec\nrounds: 8244"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 9976.162121489206,
            "unit": "iter/sec",
            "range": "stddev: 0.00013420625592181016",
            "extra": "mean: 100.2389483873708 usec\nrounds: 1395"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 9984.234530981264,
            "unit": "iter/sec",
            "range": "stddev: 0.00013103831566038765",
            "extra": "mean: 100.15790363267023 usec\nrounds: 6579"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 16996.421716296165,
            "unit": "iter/sec",
            "range": "stddev: 0.000009539245301211384",
            "extra": "mean: 58.835913622995136 usec\nrounds: 3751"
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
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T23:51:30+08:00",
          "tree_id": "3842c08d8c0be31a270b9c886cc66943edbc266d",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665330730578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16623.296464943873,
            "unit": "iter/sec",
            "range": "stddev: 0.00028496233808769406",
            "extra": "mean: 60.156540076684266 usec\nrounds: 4429"
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
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T23:51:30+08:00",
          "tree_id": "3842c08d8c0be31a270b9c886cc66943edbc266d",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665330838100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.107520899826384,
            "unit": "iter/sec",
            "range": "stddev: 0.04109812215662623",
            "extra": "mean: 9.3005174028 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.30243643721087193,
            "unit": "iter/sec",
            "range": "stddev: 0.022113703946004582",
            "extra": "mean: 3.3064798978 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2340.7595968485393,
            "unit": "iter/sec",
            "range": "stddev: 0.0002574431861434922",
            "extra": "mean: 427.2117484197612 usec\nrounds: 1582"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10516.089439596872,
            "unit": "iter/sec",
            "range": "stddev: 0.00011819984539543752",
            "extra": "mean: 95.09238255759209 usec\nrounds: 4598"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10162.851302518657,
            "unit": "iter/sec",
            "range": "stddev: 0.00011770965015091819",
            "extra": "mean: 98.39758255167723 usec\nrounds: 1066"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10461.301921384189,
            "unit": "iter/sec",
            "range": "stddev: 0.0001204986459349729",
            "extra": "mean: 95.59039663656746 usec\nrounds: 4876"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 10344.026920066986,
            "unit": "iter/sec",
            "range": "stddev: 0.00012423298317909106",
            "extra": "mean: 96.67414902604722 usec\nrounds: 4724"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10358.705733896808,
            "unit": "iter/sec",
            "range": "stddev: 0.00012118473108676481",
            "extra": "mean: 96.53715683106032 usec\nrounds: 4948"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 17192.017266266943,
            "unit": "iter/sec",
            "range": "stddev: 0.000009179184446249367",
            "extra": "mean: 58.16653069341286 usec\nrounds: 4268"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665365721427,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13574.357259453667,
            "unit": "iter/sec",
            "range": "stddev: 0.00041640751597855994",
            "extra": "mean: 73.66831304690794 usec\nrounds: 2514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665365816903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12646428779675076,
            "unit": "iter/sec",
            "range": "stddev: 0.020915150553650615",
            "extra": "mean: 7.907370668999988 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3438442763755745,
            "unit": "iter/sec",
            "range": "stddev: 0.007128257686594076",
            "extra": "mean: 2.908293284800004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2730.5066094076287,
            "unit": "iter/sec",
            "range": "stddev: 0.0002237253558362133",
            "extra": "mean: 366.23240410941384 usec\nrounds: 1606"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11710.179514839367,
            "unit": "iter/sec",
            "range": "stddev: 0.00011144945891766773",
            "extra": "mean: 85.3957873773652 usec\nrounds: 5625"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11511.32965502838,
            "unit": "iter/sec",
            "range": "stddev: 0.00010990160093434896",
            "extra": "mean: 86.87093758653502 usec\nrounds: 2147"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12250.510545528374,
            "unit": "iter/sec",
            "range": "stddev: 0.00009635910380875213",
            "extra": "mean: 81.62925098374905 usec\nrounds: 2032"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12032.874133716714,
            "unit": "iter/sec",
            "range": "stddev: 0.00010313771070669938",
            "extra": "mean: 83.10566443954981 usec\nrounds: 5388"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11810.629067515396,
            "unit": "iter/sec",
            "range": "stddev: 0.00010622308865969976",
            "extra": "mean: 84.6694951033942 usec\nrounds: 5718"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20029.036148539148,
            "unit": "iter/sec",
            "range": "stddev: 0.000007161603166297365",
            "extra": "mean: 49.92751486311221 usec\nrounds: 3465"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665452036897,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15361.525137939263,
            "unit": "iter/sec",
            "range": "stddev: 0.0003228608754178444",
            "extra": "mean: 65.0977029312175 usec\nrounds: 3787"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665452125344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1267530296532914,
            "unit": "iter/sec",
            "range": "stddev: 0.019024743819781927",
            "extra": "mean: 7.889357774999999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3445102919666429,
            "unit": "iter/sec",
            "range": "stddev: 0.0034062833173871977",
            "extra": "mean: 2.902670902199998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2769.526461079767,
            "unit": "iter/sec",
            "range": "stddev: 0.0002216332053621601",
            "extra": "mean: 361.07255664570386 usec\nrounds: 2242"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11960.888448045635,
            "unit": "iter/sec",
            "range": "stddev: 0.00010618033541545678",
            "extra": "mean: 83.6058294786117 usec\nrounds: 5102"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11901.926359269335,
            "unit": "iter/sec",
            "range": "stddev: 0.000101821471045699",
            "extra": "mean: 84.02001237565972 usec\nrounds: 9050"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11648.03417499297,
            "unit": "iter/sec",
            "range": "stddev: 0.00010921799181124264",
            "extra": "mean: 85.85139646541289 usec\nrounds: 6394"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11831.06514448829,
            "unit": "iter/sec",
            "range": "stddev: 0.00010207785793278518",
            "extra": "mean: 84.52324349391886 usec\nrounds: 3343"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12016.524606458333,
            "unit": "iter/sec",
            "range": "stddev: 0.00010899289472707429",
            "extra": "mean: 83.21873692686034 usec\nrounds: 5584"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19342.50047989252,
            "unit": "iter/sec",
            "range": "stddev: 0.00000738436747670576",
            "extra": "mean: 51.69962389503618 usec\nrounds: 3733"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665538474661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14748.930157629446,
            "unit": "iter/sec",
            "range": "stddev: 0.00035083447049330643",
            "extra": "mean: 67.80152792863501 usec\nrounds: 3133"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665538613764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.09527943882504096,
            "unit": "iter/sec",
            "range": "stddev: 0.1719358265665581",
            "extra": "mean: 10.495443847399992 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.19666986265223627,
            "unit": "iter/sec",
            "range": "stddev: 0.04202609303847519",
            "extra": "mean: 5.084663133000004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2008.916411162326,
            "unit": "iter/sec",
            "range": "stddev: 0.00033322455580475613",
            "extra": "mean: 497.7807908998147 usec\nrounds: 1033"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7937.013624169364,
            "unit": "iter/sec",
            "range": "stddev: 0.0001653331636864681",
            "extra": "mean: 125.99197221419074 usec\nrounds: 3455"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 7767.310954690682,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517059608368766",
            "extra": "mean: 128.74468472207872 usec\nrounds: 4523"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 7384.805651095435,
            "unit": "iter/sec",
            "range": "stddev: 0.00016280109880721934",
            "extra": "mean: 135.41317771195017 usec\nrounds: 1705"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 7885.0469601922605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001440194376427624",
            "extra": "mean: 126.82232649323589 usec\nrounds: 4386"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 7791.7160670943595,
            "unit": "iter/sec",
            "range": "stddev: 0.0001460389944623363",
            "extra": "mean: 128.34143228385298 usec\nrounds: 3271"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11111.363291184727,
            "unit": "iter/sec",
            "range": "stddev: 0.00005263925970648181",
            "extra": "mean: 89.99795738776325 usec\nrounds: 2112"
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
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T13:38:04+08:00",
          "tree_id": "45b654613aab864c50785a4d5c457b736922a910",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665553124551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16337.207044803927,
            "unit": "iter/sec",
            "range": "stddev: 0.00028276322264953515",
            "extra": "mean: 61.20997287097806 usec\nrounds: 4497"
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
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T13:38:04+08:00",
          "tree_id": "45b654613aab864c50785a4d5c457b736922a910",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665553245246,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10660629729784706,
            "unit": "iter/sec",
            "range": "stddev: 0.016113186645074714",
            "extra": "mean: 9.380308906200003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.29862922218206805,
            "unit": "iter/sec",
            "range": "stddev: 0.03785945260877021",
            "extra": "mean: 3.3486341112000106 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2523.015993187054,
            "unit": "iter/sec",
            "range": "stddev: 0.00024274139438681998",
            "extra": "mean: 396.3510349123106 usec\nrounds: 1604"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10243.292224927749,
            "unit": "iter/sec",
            "range": "stddev: 0.0001271590741203232",
            "extra": "mean: 97.62486298754925 usec\nrounds: 4693"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10789.247925025506,
            "unit": "iter/sec",
            "range": "stddev: 0.00011553649299480928",
            "extra": "mean: 92.68486616944952 usec\nrounds: 4827"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10101.168637055263,
            "unit": "iter/sec",
            "range": "stddev: 0.00012384794330661772",
            "extra": "mean: 98.99844621260817 usec\nrounds: 4211"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 10203.841542817356,
            "unit": "iter/sec",
            "range": "stddev: 0.00012815471350075504",
            "extra": "mean: 98.00230587703663 usec\nrounds: 4577"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10111.823893664041,
            "unit": "iter/sec",
            "range": "stddev: 0.00012428540745667484",
            "extra": "mean: 98.89412736178971 usec\nrounds: 2858"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 17044.584400714913,
            "unit": "iter/sec",
            "range": "stddev: 0.000010207687374301522",
            "extra": "mean: 58.6696616643851 usec\nrounds: 5264"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665624796404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 17258.512032994735,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116098414453743",
            "extra": "mean: 57.94242273541341 usec\nrounds: 3378"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665624917544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1098453291819935,
            "unit": "iter/sec",
            "range": "stddev: 0.06605324033635096",
            "extra": "mean: 9.103709802200001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.24983781403545058,
            "unit": "iter/sec",
            "range": "stddev: 0.04760083240868877",
            "extra": "mean: 4.002596660000018 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2386.063739316749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002435148136441311",
            "extra": "mean: 419.10028786001783 usec\nrounds: 865"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8736.47925545605,
            "unit": "iter/sec",
            "range": "stddev: 0.00013943920908729375",
            "extra": "mean: 114.46258507115282 usec\nrounds: 6712"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8854.941253768784,
            "unit": "iter/sec",
            "range": "stddev: 0.00011986560184658066",
            "extra": "mean: 112.93129692694305 usec\nrounds: 8039"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8849.495777446338,
            "unit": "iter/sec",
            "range": "stddev: 0.00012146161433235981",
            "extra": "mean: 113.00078842328864 usec\nrounds: 5010"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8794.096818223305,
            "unit": "iter/sec",
            "range": "stddev: 0.00012310528798352237",
            "extra": "mean: 113.71264390992147 usec\nrounds: 8071"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8759.763509621882,
            "unit": "iter/sec",
            "range": "stddev: 0.00011940359374508859",
            "extra": "mean: 114.15833303051869 usec\nrounds: 5510"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12715.07979504263,
            "unit": "iter/sec",
            "range": "stddev: 0.000040742391811025977",
            "extra": "mean: 78.6467734469021 usec\nrounds: 2591"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665711267037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14725.734679597615,
            "unit": "iter/sec",
            "range": "stddev: 0.0003189763298048932",
            "extra": "mean: 67.90832659680414 usec\nrounds: 3711"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665711408116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.09827480132915488,
            "unit": "iter/sec",
            "range": "stddev: 0.10742445900948702",
            "extra": "mean: 10.175548426200004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.204774021755048,
            "unit": "iter/sec",
            "range": "stddev: 0.015831764712224847",
            "extra": "mean: 4.883431948199984 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2035.90742027835,
            "unit": "iter/sec",
            "range": "stddev: 0.00028174397432771735",
            "extra": "mean: 491.1814702572672 usec\nrounds: 1597"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7727.554350602541,
            "unit": "iter/sec",
            "range": "stddev: 0.00014365818318871996",
            "extra": "mean: 129.40704841785126 usec\nrounds: 3697"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8068.33409946826,
            "unit": "iter/sec",
            "range": "stddev: 0.00015367224432171896",
            "extra": "mean: 123.94132266608848 usec\nrounds: 3781"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 7992.853518167917,
            "unit": "iter/sec",
            "range": "stddev: 0.00014968404379284188",
            "extra": "mean: 125.11176361820966 usec\nrounds: 4002"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 7618.448430906896,
            "unit": "iter/sec",
            "range": "stddev: 0.00019204573942753226",
            "extra": "mean: 131.2603227637731 usec\nrounds: 3879"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8098.105644573761,
            "unit": "iter/sec",
            "range": "stddev: 0.00013323128006535853",
            "extra": "mean: 123.4856698455228 usec\nrounds: 1154"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11831.854902974526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000243186256463054",
            "extra": "mean: 84.5176016947774 usec\nrounds: 2714"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665797626992,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14475.674969734671,
            "unit": "iter/sec",
            "range": "stddev: 0.00009393774254629257",
            "extra": "mean: 69.08140740178068 usec\nrounds: 54"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665797736509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11959131905462578,
            "unit": "iter/sec",
            "range": "stddev: 0.04364511070754334",
            "extra": "mean: 8.361810939999998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.24498059791881485,
            "unit": "iter/sec",
            "range": "stddev: 0.07844191769362263",
            "extra": "mean: 4.081955911999995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2636.0818241600723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002573064522188316",
            "extra": "mean: 379.3508952699628 usec\nrounds: 888"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 9152.701909274343,
            "unit": "iter/sec",
            "range": "stddev: 0.0001450573326346512",
            "extra": "mean: 109.25735481308637 usec\nrounds: 5152"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 9409.524549194675,
            "unit": "iter/sec",
            "range": "stddev: 0.000122857065284274",
            "extra": "mean: 106.27529528955702 usec\nrounds: 2611"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 9286.000474691074,
            "unit": "iter/sec",
            "range": "stddev: 0.00012363164442446515",
            "extra": "mean: 107.68898867984043 usec\nrounds: 5477"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8929.163957366747,
            "unit": "iter/sec",
            "range": "stddev: 0.00011927684602134059",
            "extra": "mean: 111.9925678120155 usec\nrounds: 6083"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8753.559723896944,
            "unit": "iter/sec",
            "range": "stddev: 0.00012102238308723974",
            "extra": "mean: 114.23923884017508 usec\nrounds: 3002"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12906.342246507738,
            "unit": "iter/sec",
            "range": "stddev: 0.000033963817321537",
            "extra": "mean: 77.48128640169797 usec\nrounds: 1662"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665883969409,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13794.99945580424,
            "unit": "iter/sec",
            "range": "stddev: 0.00039401839845160536",
            "extra": "mean: 72.4900354801573 usec\nrounds: 3354"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665884048893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14408972976835632,
            "unit": "iter/sec",
            "range": "stddev: 0.008393201973657312",
            "extra": "mean: 6.9401198934 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34387810595749196,
            "unit": "iter/sec",
            "range": "stddev: 0.002353029258079413",
            "extra": "mean: 2.9080071765999946 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3096.7126989556677,
            "unit": "iter/sec",
            "range": "stddev: 0.0001921441587029675",
            "extra": "mean: 322.9230791533354 usec\nrounds: 2173"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13255.51515825942,
            "unit": "iter/sec",
            "range": "stddev: 0.00009403108461816154",
            "extra": "mean: 75.44029696778 usec\nrounds: 9597"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13035.767560373622,
            "unit": "iter/sec",
            "range": "stddev: 0.00008995234915240265",
            "extra": "mean: 76.71201525868099 usec\nrounds: 2687"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13226.20354732318,
            "unit": "iter/sec",
            "range": "stddev: 0.0000923128007497933",
            "extra": "mean: 75.60748603497694 usec\nrounds: 9882"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13151.597816482928,
            "unit": "iter/sec",
            "range": "stddev: 0.00008940667921364864",
            "extra": "mean: 76.0363884262563 usec\nrounds: 7327"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12962.187617716836,
            "unit": "iter/sec",
            "range": "stddev: 0.00009441222749733243",
            "extra": "mean: 77.1474715142366 usec\nrounds: 6354"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20559.553867723564,
            "unit": "iter/sec",
            "range": "stddev: 0.000006243177999399088",
            "extra": "mean: 48.63918771943294 usec\nrounds: 4267"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665970533680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 8527.58402837588,
            "unit": "iter/sec",
            "range": "stddev: 0.0005153809802304751",
            "extra": "mean: 117.2665079197648 usec\nrounds: 2841"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665970608239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12666121528634677,
            "unit": "iter/sec",
            "range": "stddev: 0.013851972124217458",
            "extra": "mean: 7.895076624199999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34548102374961087,
            "unit": "iter/sec",
            "range": "stddev: 0.001098556100736883",
            "extra": "mean: 2.8945149841999864 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2723.5999514962186,
            "unit": "iter/sec",
            "range": "stddev: 0.00022509912433203255",
            "extra": "mean: 367.1611168338606 usec\nrounds: 1592"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11948.254386263732,
            "unit": "iter/sec",
            "range": "stddev: 0.00010316966543272029",
            "extra": "mean: 83.69423412591938 usec\nrounds: 7402"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11699.998762445348,
            "unit": "iter/sec",
            "range": "stddev: 0.00010803087826558303",
            "extra": "mean: 85.47009451059085 usec\nrounds: 8052"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12011.18927242315,
            "unit": "iter/sec",
            "range": "stddev: 0.00010318007115615197",
            "extra": "mean: 83.25570243871938 usec\nrounds: 8489"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12165.667453279482,
            "unit": "iter/sec",
            "range": "stddev: 0.00010092978618146443",
            "extra": "mean: 82.1985315512164 usec\nrounds: 5911"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11573.103349780575,
            "unit": "iter/sec",
            "range": "stddev: 0.00011245111451000162",
            "extra": "mean: 86.40724702583427 usec\nrounds: 4287"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19728.177879679686,
            "unit": "iter/sec",
            "range": "stddev: 0.000007196593957195982",
            "extra": "mean: 50.688918464690786 usec\nrounds: 3986"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666056903865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16182.15993969383,
            "unit": "iter/sec",
            "range": "stddev: 0.00030681048811852094",
            "extra": "mean: 61.79644767612649 usec\nrounds: 4023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666056990490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1265272057017082,
            "unit": "iter/sec",
            "range": "stddev: 0.028511699019686938",
            "extra": "mean: 7.903438588200004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3457697638633545,
            "unit": "iter/sec",
            "range": "stddev: 0.0015496671176152257",
            "extra": "mean: 2.8920978770000034 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2692.097804851396,
            "unit": "iter/sec",
            "range": "stddev: 0.00021976151949372943",
            "extra": "mean: 371.4575295882313 usec\nrounds: 659"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11519.021401077778,
            "unit": "iter/sec",
            "range": "stddev: 0.00011021999071863324",
            "extra": "mean: 86.81293012498743 usec\nrounds: 2390"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11699.344504010596,
            "unit": "iter/sec",
            "range": "stddev: 0.00010765533518940696",
            "extra": "mean: 85.47487422540594 usec\nrounds: 5971"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11973.124676166275,
            "unit": "iter/sec",
            "range": "stddev: 0.00010788806414482382",
            "extra": "mean: 83.52038645271956 usec\nrounds: 4857"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12033.246713569262,
            "unit": "iter/sec",
            "range": "stddev: 0.00010440916532430867",
            "extra": "mean: 83.10309127729862 usec\nrounds: 5171"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11921.139481628445,
            "unit": "iter/sec",
            "range": "stddev: 0.00010544825080327276",
            "extra": "mean: 83.88459857726608 usec\nrounds: 5904"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19877.562514200996,
            "unit": "iter/sec",
            "range": "stddev: 0.000007611922000633691",
            "extra": "mean: 50.307979123978434 usec\nrounds: 2922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666143181885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14531.782136568729,
            "unit": "iter/sec",
            "range": "stddev: 0.00032880128295896603",
            "extra": "mean: 68.81468429694762 usec\nrounds: 3649"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666143266406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14249000857267077,
            "unit": "iter/sec",
            "range": "stddev: 0.010969206626380618",
            "extra": "mean: 7.018035931200004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3464058102182087,
            "unit": "iter/sec",
            "range": "stddev: 0.0007736966341885749",
            "extra": "mean: 2.8867876072 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3109.722016874336,
            "unit": "iter/sec",
            "range": "stddev: 0.00019397206586774216",
            "extra": "mean: 321.57215165011 usec\nrounds: 2242"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12868.998113421167,
            "unit": "iter/sec",
            "range": "stddev: 0.0000956772910956801",
            "extra": "mean: 77.70612686290576 usec\nrounds: 2483"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12726.648589377246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000982826118513951",
            "extra": "mean: 78.57528185658288 usec\nrounds: 5666"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12558.818621987544,
            "unit": "iter/sec",
            "range": "stddev: 0.00009903032914308953",
            "extra": "mean: 79.62532385404745 usec\nrounds: 5345"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12435.323232889858,
            "unit": "iter/sec",
            "range": "stddev: 0.00010099988231937411",
            "extra": "mean: 80.4160841879145 usec\nrounds: 5559"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12452.181958221972,
            "unit": "iter/sec",
            "range": "stddev: 0.00009938306774658984",
            "extra": "mean: 80.30721068444686 usec\nrounds: 5653"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20492.49452375557,
            "unit": "iter/sec",
            "range": "stddev: 0.000007319275233798391",
            "extra": "mean: 48.79835389687514 usec\nrounds: 3939"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666229680500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9261.682896834076,
            "unit": "iter/sec",
            "range": "stddev: 0.00009713459892647715",
            "extra": "mean: 107.97173808896332 usec\nrounds: 42"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666229758002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12655536533876918,
            "unit": "iter/sec",
            "range": "stddev: 0.007136358246175594",
            "extra": "mean: 7.9016800063999995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3446430455194528,
            "unit": "iter/sec",
            "range": "stddev: 0.002580383220196699",
            "extra": "mean: 2.9015528182000025 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2666.2788421224323,
            "unit": "iter/sec",
            "range": "stddev: 0.00022660600221889495",
            "extra": "mean: 375.05454575935204 usec\nrounds: 896"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11844.464376305385,
            "unit": "iter/sec",
            "range": "stddev: 0.00010873243668889048",
            "extra": "mean: 84.42762527957618 usec\nrounds: 8497"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11821.78676128999,
            "unit": "iter/sec",
            "range": "stddev: 0.00010809039651722378",
            "extra": "mean: 84.58958194665324 usec\nrounds: 8475"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11895.903566283918,
            "unit": "iter/sec",
            "range": "stddev: 0.00010577380086667458",
            "extra": "mean: 84.06255098051231 usec\nrounds: 6169"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11552.43764474596,
            "unit": "iter/sec",
            "range": "stddev: 0.00011246752405118971",
            "extra": "mean: 86.56181757923612 usec\nrounds: 5734"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11610.172522962464,
            "unit": "iter/sec",
            "range": "stddev: 0.00010883412713727995",
            "extra": "mean: 86.13136437225302 usec\nrounds: 9515"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19775.967222073064,
            "unit": "iter/sec",
            "range": "stddev: 0.00000817737478994069",
            "extra": "mean: 50.56642685389588 usec\nrounds: 3910"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666316099797,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10182710988409814,
            "unit": "iter/sec",
            "range": "stddev: 0.2166125455680477",
            "extra": "mean: 9.820567441600002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.16524744752342943,
            "unit": "iter/sec",
            "range": "stddev: 0.06886698994792913",
            "extra": "mean: 6.051530689200002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2263.3237466903065,
            "unit": "iter/sec",
            "range": "stddev: 0.0002594752965082799",
            "extra": "mean: 441.82808644247893 usec\nrounds: 1099"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7862.986381378724,
            "unit": "iter/sec",
            "range": "stddev: 0.00017672133123777854",
            "extra": "mean: 127.17814218376613 usec\nrounds: 4881"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8328.560824445385,
            "unit": "iter/sec",
            "range": "stddev: 0.00013271852723928583",
            "extra": "mean: 120.06876350892135 usec\nrounds: 5996"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8390.971436229553,
            "unit": "iter/sec",
            "range": "stddev: 0.00012448107131250385",
            "extra": "mean: 119.17571256199459 usec\nrounds: 4227"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8710.577327159628,
            "unit": "iter/sec",
            "range": "stddev: 0.00012666494311721092",
            "extra": "mean: 114.80295305823121 usec\nrounds: 3025"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8137.484772594391,
            "unit": "iter/sec",
            "range": "stddev: 0.0001557593377453198",
            "extra": "mean: 122.88809477933809 usec\nrounds: 6436"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 10046.625695545561,
            "unit": "iter/sec",
            "range": "stddev: 0.00004385508195201013",
            "extra": "mean: 99.53590691085233 usec\nrounds: 3169"
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
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T23:03:53+08:00",
          "tree_id": "85fed4f3f253d8d02da142385f6cba57f4213734",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666364687822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16096.430790303733,
            "unit": "iter/sec",
            "range": "stddev: 0.00028765809644464913",
            "extra": "mean: 62.12557386339251 usec\nrounds: 4400"
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
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T23:03:53+08:00",
          "tree_id": "85fed4f3f253d8d02da142385f6cba57f4213734",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666364779186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12576273265305474,
            "unit": "iter/sec",
            "range": "stddev: 0.015838428797576406",
            "extra": "mean: 7.951481165399997 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.344902669353453,
            "unit": "iter/sec",
            "range": "stddev: 0.0012142969772015728",
            "extra": "mean: 2.899368688200002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2718.168814832409,
            "unit": "iter/sec",
            "range": "stddev: 0.0002328083396390939",
            "extra": "mean: 367.89473653852355 usec\nrounds: 1560"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11653.197099676969,
            "unit": "iter/sec",
            "range": "stddev: 0.00011124434519337838",
            "extra": "mean: 85.81336018316556 usec\nrounds: 5239"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11985.100377801107,
            "unit": "iter/sec",
            "range": "stddev: 0.0001051017377024261",
            "extra": "mean: 83.43693156314382 usec\nrounds: 5348"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11730.985918081185,
            "unit": "iter/sec",
            "range": "stddev: 0.00010481358182806736",
            "extra": "mean: 85.24432703125844 usec\nrounds: 5342"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11527.346285112286,
            "unit": "iter/sec",
            "range": "stddev: 0.00010885023740001522",
            "extra": "mean: 86.75023507288167 usec\nrounds: 2395"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11582.712721888316,
            "unit": "iter/sec",
            "range": "stddev: 0.00011644534153273776",
            "extra": "mean: 86.33556093558808 usec\nrounds: 599"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19580.6038253314,
            "unit": "iter/sec",
            "range": "stddev: 0.000008077271373538937",
            "extra": "mean: 51.07094801163902 usec\nrounds: 5155"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666402354558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15359.681626429485,
            "unit": "iter/sec",
            "range": "stddev: 0.00031946508898861536",
            "extra": "mean: 65.10551613773652 usec\nrounds: 3718"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666402486444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.09939994101268751,
            "unit": "iter/sec",
            "range": "stddev: 0.05498779219213978",
            "extra": "mean: 10.060368143199995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.22235391541994137,
            "unit": "iter/sec",
            "range": "stddev: 0.030752588345474334",
            "extra": "mean: 4.497334792200007 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2268.7684380706996,
            "unit": "iter/sec",
            "range": "stddev: 0.00024841660526787754",
            "extra": "mean: 440.76776775437395 usec\nrounds: 1563"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8100.944732974699,
            "unit": "iter/sec",
            "range": "stddev: 0.00012998879841423706",
            "extra": "mean: 123.44239258040167 usec\nrounds: 4259"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8183.230380862526,
            "unit": "iter/sec",
            "range": "stddev: 0.00013315024045486794",
            "extra": "mean: 122.20113004989095 usec\nrounds: 4406"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8091.021047328558,
            "unit": "iter/sec",
            "range": "stddev: 0.00015969734318876187",
            "extra": "mean: 123.59379541228283 usec\nrounds: 3793"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8041.829736071565,
            "unit": "iter/sec",
            "range": "stddev: 0.0001586174722991361",
            "extra": "mean: 124.34981003322015 usec\nrounds: 4485"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8103.596244620163,
            "unit": "iter/sec",
            "range": "stddev: 0.00014384142313055693",
            "extra": "mean: 123.40200200175111 usec\nrounds: 4497"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11654.308683746014,
            "unit": "iter/sec",
            "range": "stddev: 0.000029101768926826428",
            "extra": "mean: 85.8051753335379 usec\nrounds: 3000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666488765088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12635.82266821764,
            "unit": "iter/sec",
            "range": "stddev: 0.00043123765307228105",
            "extra": "mean: 79.14007866818663 usec\nrounds: 2733"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666488875130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10857835280544997,
            "unit": "iter/sec",
            "range": "stddev: 0.19252176018900943",
            "extra": "mean: 9.20993894419999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.24498050449873318,
            "unit": "iter/sec",
            "range": "stddev: 0.1612415451589107",
            "extra": "mean: 4.081957468600001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2447.5731145191717,
            "unit": "iter/sec",
            "range": "stddev: 0.0002286016266410779",
            "extra": "mean: 408.567978651151 usec\nrounds: 1171"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8355.652084312887,
            "unit": "iter/sec",
            "range": "stddev: 0.0001223788902640435",
            "extra": "mean: 119.67946844955706 usec\nrounds: 5721"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8707.36101105894,
            "unit": "iter/sec",
            "range": "stddev: 0.0001222335236937432",
            "extra": "mean: 114.84535885556278 usec\nrounds: 2377"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8589.986968987108,
            "unit": "iter/sec",
            "range": "stddev: 0.00012166892191044463",
            "extra": "mean: 116.41461199072289 usec\nrounds: 7072"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8861.331714252034,
            "unit": "iter/sec",
            "range": "stddev: 0.0001125211444965686",
            "extra": "mean: 112.8498551060514 usec\nrounds: 1684"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8392.16247178252,
            "unit": "iter/sec",
            "range": "stddev: 0.00012652258550632152",
            "extra": "mean: 119.1587988629106 usec\nrounds: 8795"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12190.930832614727,
            "unit": "iter/sec",
            "range": "stddev: 0.00006259664439961557",
            "extra": "mean: 82.02819076986911 usec\nrounds: 2600"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666575218127,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15531.905640465313,
            "unit": "iter/sec",
            "range": "stddev: 0.00004303130605977967",
            "extra": "mean: 64.38360000042091 usec\nrounds: 45"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666575307496,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.14288848926851033,
            "unit": "iter/sec",
            "range": "stddev: 0.013174766746187032",
            "extra": "mean: 6.998464362800002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3436719544661809,
            "unit": "iter/sec",
            "range": "stddev: 0.001962005716092459",
            "extra": "mean: 2.9097515436000037 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3095.738867228405,
            "unit": "iter/sec",
            "range": "stddev: 0.00019520332115875011",
            "extra": "mean: 323.02466160373973 usec\nrounds: 1185"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12821.88502455513,
            "unit": "iter/sec",
            "range": "stddev: 0.00009210367696709689",
            "extra": "mean: 77.99165240406576 usec\nrounds: 2267"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12805.343362156646,
            "unit": "iter/sec",
            "range": "stddev: 0.00009606404385818086",
            "extra": "mean: 78.09240031433114 usec\nrounds: 5728"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12380.01767590035,
            "unit": "iter/sec",
            "range": "stddev: 0.00010375685470678072",
            "extra": "mean: 80.77532893564903 usec\nrounds: 5609"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13136.042887363274,
            "unit": "iter/sec",
            "range": "stddev: 0.00009063230296514567",
            "extra": "mean: 76.12642624378068 usec\nrounds: 5708"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12814.928932951952,
            "unit": "iter/sec",
            "range": "stddev: 0.00009660163174584992",
            "extra": "mean: 78.03398717480421 usec\nrounds: 2729"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20397.065478687404,
            "unit": "iter/sec",
            "range": "stddev: 0.000007753407942095064",
            "extra": "mean: 49.026660283308175 usec\nrounds: 4021"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666661683844,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12663493518177635,
            "unit": "iter/sec",
            "range": "stddev: 0.018392762123223133",
            "extra": "mean: 7.8967150618 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3447360178537822,
            "unit": "iter/sec",
            "range": "stddev: 0.0011106736641183553",
            "extra": "mean: 2.900770294400002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2766.176090644144,
            "unit": "iter/sec",
            "range": "stddev: 0.00021462990434378392",
            "extra": "mean: 361.509884848703 usec\nrounds: 1320"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11968.423143279304,
            "unit": "iter/sec",
            "range": "stddev: 0.00010554305069273037",
            "extra": "mean: 83.55319560718702 usec\nrounds: 8696"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11738.855159806068,
            "unit": "iter/sec",
            "range": "stddev: 0.00010470668716826528",
            "extra": "mean: 85.18718276923697 usec\nrounds: 5641"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12074.431012511808,
            "unit": "iter/sec",
            "range": "stddev: 0.00010428271276702901",
            "extra": "mean: 82.81963754348148 usec\nrounds: 7474"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11812.531403646475,
            "unit": "iter/sec",
            "range": "stddev: 0.00010430557450991986",
            "extra": "mean: 84.65585959765613 usec\nrounds: 8497"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11811.919459642435,
            "unit": "iter/sec",
            "range": "stddev: 0.00010539242151275155",
            "extra": "mean: 84.66024539167249 usec\nrounds: 6076"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19782.136571318955,
            "unit": "iter/sec",
            "range": "stddev: 0.000007523095648077114",
            "extra": "mean: 50.55065697250547 usec\nrounds: 4195"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666748059922,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15174.980786477792,
            "unit": "iter/sec",
            "range": "stddev: 0.0003092833260964371",
            "extra": "mean: 65.89794175496324 usec\nrounds: 3966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666748156661,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12578617747715823,
            "unit": "iter/sec",
            "range": "stddev: 0.019783605714224547",
            "extra": "mean: 7.949999118000005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34463906326767385,
            "unit": "iter/sec",
            "range": "stddev: 0.0019338849854824054",
            "extra": "mean: 2.901586345199996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2659.053587990247,
            "unit": "iter/sec",
            "range": "stddev: 0.00022110864160879203",
            "extra": "mean: 376.0736543695666 usec\nrounds: 1030"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11725.996352397518,
            "unit": "iter/sec",
            "range": "stddev: 0.00010738020598509624",
            "extra": "mean: 85.2805996136557 usec\nrounds: 4658"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11420.091503168025,
            "unit": "iter/sec",
            "range": "stddev: 0.00011240133539039395",
            "extra": "mean: 87.56497263814322 usec\nrounds: 4678"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11433.336388752994,
            "unit": "iter/sec",
            "range": "stddev: 0.00011816003824590108",
            "extra": "mean: 87.46353347774347 usec\nrounds: 4615"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11480.013296843708,
            "unit": "iter/sec",
            "range": "stddev: 0.000111027968030569",
            "extra": "mean: 87.1079130435274 usec\nrounds: 4715"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11567.33425800447,
            "unit": "iter/sec",
            "range": "stddev: 0.00011070662829574735",
            "extra": "mean: 86.4503417723933 usec\nrounds: 4898"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19170.3601859794,
            "unit": "iter/sec",
            "range": "stddev: 0.000009495583119388158",
            "extra": "mean: 52.163860788143595 usec\nrounds: 3096"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666834410202,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12938.001326169859,
            "unit": "iter/sec",
            "range": "stddev: 0.00039931550686936627",
            "extra": "mean: 77.29169094899437 usec\nrounds: 3226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666834515168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11111755378836602,
            "unit": "iter/sec",
            "range": "stddev: 0.06693673569155088",
            "extra": "mean: 8.999478173399996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.30706918628940844,
            "unit": "iter/sec",
            "range": "stddev: 0.02503702738377762",
            "extra": "mean: 3.2565950757999986 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2429.3338237155535,
            "unit": "iter/sec",
            "range": "stddev: 0.0002614470314321272",
            "extra": "mean: 411.635482220614 usec\nrounds: 2306"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11282.893801731841,
            "unit": "iter/sec",
            "range": "stddev: 0.00011575515366113248",
            "extra": "mean: 88.62974495483662 usec\nrounds: 5203"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10580.652140529757,
            "unit": "iter/sec",
            "range": "stddev: 0.00012005460401063511",
            "extra": "mean: 94.51213277955205 usec\nrounds: 5174"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10656.012830423846,
            "unit": "iter/sec",
            "range": "stddev: 0.00011805933711411465",
            "extra": "mean: 93.84373085070928 usec\nrounds: 5209"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 9925.279564419612,
            "unit": "iter/sec",
            "range": "stddev: 0.00013514290765988875",
            "extra": "mean: 100.75282953085016 usec\nrounds: 2411"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10935.90699333627,
            "unit": "iter/sec",
            "range": "stddev: 0.00012154411426335457",
            "extra": "mean: 91.44188960360984 usec\nrounds: 2020"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 17656.44323320508,
            "unit": "iter/sec",
            "range": "stddev: 0.000010797301551400795",
            "extra": "mean: 56.636548300927274 usec\nrounds: 5621"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666920836998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15045.708687326534,
            "unit": "iter/sec",
            "range": "stddev: 0.0003213560694267442",
            "extra": "mean: 66.4641341116973 usec\nrounds: 3855"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666920927340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.12469525110963295,
            "unit": "iter/sec",
            "range": "stddev: 0.02171443774614342",
            "extra": "mean: 8.019551595600003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3383535898490567,
            "unit": "iter/sec",
            "range": "stddev: 0.0030283383546370157",
            "extra": "mean: 2.955488075200003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2744.2902955060817,
            "unit": "iter/sec",
            "range": "stddev: 0.00022183488178985228",
            "extra": "mean: 364.3929367230399 usec\nrounds: 1770"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11513.099782624804,
            "unit": "iter/sec",
            "range": "stddev: 0.00011014391583765401",
            "extra": "mean: 86.8575812666166 usec\nrounds: 5242"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11681.920572431152,
            "unit": "iter/sec",
            "range": "stddev: 0.00010692723362248524",
            "extra": "mean: 85.60236253959461 usec\nrounds: 1575"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11649.659225487,
            "unit": "iter/sec",
            "range": "stddev: 0.00010708782648357068",
            "extra": "mean: 85.83942076281603 usec\nrounds: 5269"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11893.686119888709,
            "unit": "iter/sec",
            "range": "stddev: 0.00010131610099241",
            "extra": "mean: 84.07822351455809 usec\nrounds: 2407"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12058.090888714514,
            "unit": "iter/sec",
            "range": "stddev: 0.00010258209254722408",
            "extra": "mean: 82.93186784119587 usec\nrounds: 2724"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19242.076610341544,
            "unit": "iter/sec",
            "range": "stddev: 0.00000905983668525545",
            "extra": "mean: 51.969442812765635 usec\nrounds: 3882"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1667007209563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16197.12458630064,
            "unit": "iter/sec",
            "range": "stddev: 0.00028600511673186255",
            "extra": "mean: 61.739353468071094 usec\nrounds: 4354"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1667007344110,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10210517437652131,
            "unit": "iter/sec",
            "range": "stddev: 0.1665678856858998",
            "extra": "mean: 9.793822948799999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.20829599500909385,
            "unit": "iter/sec",
            "range": "stddev: 0.042017296357645076",
            "extra": "mean: 4.800860429200003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2199.0397655667384,
            "unit": "iter/sec",
            "range": "stddev: 0.00035730187586094695",
            "extra": "mean: 454.7439367210711 usec\nrounds: 964"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 7781.9876733727115,
            "unit": "iter/sec",
            "range": "stddev: 0.0001544036308827861",
            "extra": "mean: 128.5018740676828 usec\nrounds: 3621"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8284.67781197626,
            "unit": "iter/sec",
            "range": "stddev: 0.00014141908238459448",
            "extra": "mean: 120.70475433026597 usec\nrounds: 4099"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8056.695392959377,
            "unit": "iter/sec",
            "range": "stddev: 0.0001324092280397912",
            "extra": "mean: 124.12036836764173 usec\nrounds: 1960"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8311.124524897707,
            "unit": "iter/sec",
            "range": "stddev: 0.000131696844395312",
            "extra": "mean: 120.32066142244548 usec\nrounds: 2924"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8106.776840232787,
            "unit": "iter/sec",
            "range": "stddev: 0.00013888035009948982",
            "extra": "mean: 123.35358672230144 usec\nrounds: 3615"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11639.643027562039,
            "unit": "iter/sec",
            "range": "stddev: 0.00005440564146528085",
            "extra": "mean: 85.91328768692087 usec\nrounds: 2680"
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
          "id": "1a6fc960ff89752bbea7a6f428fea4e4e9ca8086",
          "message": "Bump timezonefinder[numba] from 6.1.3 to 6.1.5 (#25)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-29T20:08:07+08:00",
          "tree_id": "a4cf35f4762b063155cfc89aff395627a3b8e542",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1a6fc960ff89752bbea7a6f428fea4e4e9ca8086"
        },
        "date": 1667045333736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15971.275811136058,
            "unit": "iter/sec",
            "range": "stddev: 0.0002878514847247527",
            "extra": "mean: 62.61240566033833 usec\nrounds: 4346"
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
          "id": "1a6fc960ff89752bbea7a6f428fea4e4e9ca8086",
          "message": "Bump timezonefinder[numba] from 6.1.3 to 6.1.5 (#25)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-29T20:08:07+08:00",
          "tree_id": "a4cf35f4762b063155cfc89aff395627a3b8e542",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1a6fc960ff89752bbea7a6f428fea4e4e9ca8086"
        },
        "date": 1667045418219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13724171616366304,
            "unit": "iter/sec",
            "range": "stddev: 0.036139261141169825",
            "extra": "mean: 7.286414276600004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34692753250787944,
            "unit": "iter/sec",
            "range": "stddev: 0.0015136962453651504",
            "extra": "mean: 2.8824463506 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2809.4505140434717,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241422263094196",
            "extra": "mean: 355.9414892703558 usec\nrounds: 932"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12594.922744441601,
            "unit": "iter/sec",
            "range": "stddev: 0.00009974674651720014",
            "extra": "mean: 79.39707295476033 usec\nrounds: 5195"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12214.220093276343,
            "unit": "iter/sec",
            "range": "stddev: 0.00010745095280762141",
            "extra": "mean: 81.87178488379112 usec\nrounds: 5676"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12654.141930789581,
            "unit": "iter/sec",
            "range": "stddev: 0.0001001856670610022",
            "extra": "mean: 79.0255084437482 usec\nrounds: 5507"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12680.464177995842,
            "unit": "iter/sec",
            "range": "stddev: 0.00010050041467311993",
            "extra": "mean: 78.86146642291536 usec\nrounds: 5465"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12432.782055019175,
            "unit": "iter/sec",
            "range": "stddev: 0.00010654432305264783",
            "extra": "mean: 80.43252070008698 usec\nrounds: 3599"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20511.017784070278,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063178126546278406",
            "extra": "mean: 48.7542846740956 usec\nrounds: 7693"
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
          "id": "80acc1c7b92f5a812abc0f4506648a9246ff4b56",
          "message": "Bump timezonefinder from 6.1.3 to 6.1.5 (#26)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-30T01:04:50+08:00",
          "tree_id": "8b885f5f397be43b40e470ded131c28adb0de122",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/80acc1c7b92f5a812abc0f4506648a9246ff4b56"
        },
        "date": 1667063138057,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15186.340573382542,
            "unit": "iter/sec",
            "range": "stddev: 0.00035161168894376477",
            "extra": "mean: 65.8486483407809 usec\nrounds: 3947"
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
          "id": "80acc1c7b92f5a812abc0f4506648a9246ff4b56",
          "message": "Bump timezonefinder from 6.1.3 to 6.1.5 (#26)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-30T01:04:50+08:00",
          "tree_id": "8b885f5f397be43b40e470ded131c28adb0de122",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/80acc1c7b92f5a812abc0f4506648a9246ff4b56"
        },
        "date": 1667063262800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10602447119037657,
            "unit": "iter/sec",
            "range": "stddev: 0.09011097983204652",
            "extra": "mean: 9.431784839599993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.23707395266724357,
            "unit": "iter/sec",
            "range": "stddev: 0.03280747830024115",
            "extra": "mean: 4.218093083400004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2137.0227283658064,
            "unit": "iter/sec",
            "range": "stddev: 0.0003182125823044695",
            "extra": "mean: 467.94074144672567 usec\nrounds: 1520"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8097.356738812423,
            "unit": "iter/sec",
            "range": "stddev: 0.0001686564091209728",
            "extra": "mean: 123.49709074898217 usec\nrounds: 4540"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8324.037810638822,
            "unit": "iter/sec",
            "range": "stddev: 0.00024219282022924795",
            "extra": "mean: 120.1340050043881 usec\nrounds: 2198"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8577.279190373234,
            "unit": "iter/sec",
            "range": "stddev: 0.00013303068315656088",
            "extra": "mean: 116.58708756062838 usec\nrounds: 1873"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8757.798293180545,
            "unit": "iter/sec",
            "range": "stddev: 0.00017110981051458746",
            "extra": "mean: 114.18394972383324 usec\nrounds: 4893"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8523.414588648367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001319073980757217",
            "extra": "mean: 117.32387174170988 usec\nrounds: 4834"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12340.248419735672,
            "unit": "iter/sec",
            "range": "stddev: 0.00002920649931747977",
            "extra": "mean: 81.03564579791659 usec\nrounds: 3498"
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
          "id": "286190abe42dd577254dc94cfdf8bcaf8749f5c4",
          "message": "add localtimezone (#27)",
          "timestamp": "2022-10-30T01:07:38+08:00",
          "tree_id": "bed6d7e665e71c982bef3b7bb465118b08a2bbc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/286190abe42dd577254dc94cfdf8bcaf8749f5c4"
        },
        "date": 1667063292738,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15636.40928961135,
            "unit": "iter/sec",
            "range": "stddev: 0.0003100120874089963",
            "extra": "mean: 63.95330164863287 usec\nrounds: 3882"
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
          "id": "286190abe42dd577254dc94cfdf8bcaf8749f5c4",
          "message": "add localtimezone (#27)",
          "timestamp": "2022-10-30T01:07:38+08:00",
          "tree_id": "bed6d7e665e71c982bef3b7bb465118b08a2bbc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/286190abe42dd577254dc94cfdf8bcaf8749f5c4"
        },
        "date": 1667063396767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11681436191520903,
            "unit": "iter/sec",
            "range": "stddev: 0.034543966673019434",
            "extra": "mean: 8.560591211599998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2929950335543993,
            "unit": "iter/sec",
            "range": "stddev: 0.003799287596756296",
            "extra": "mean: 3.4130271352000023 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2390.062695209648,
            "unit": "iter/sec",
            "range": "stddev: 0.0002634340405146545",
            "extra": "mean: 418.3990662689639 usec\nrounds: 1343"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 11129.569988161542,
            "unit": "iter/sec",
            "range": "stddev: 0.00011547085267265215",
            "extra": "mean: 89.8507310761956 usec\nrounds: 1004"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10842.14703592389,
            "unit": "iter/sec",
            "range": "stddev: 0.00012279895625876304",
            "extra": "mean: 92.23265435219096 usec\nrounds: 1976"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11122.564928190406,
            "unit": "iter/sec",
            "range": "stddev: 0.00011644590664595176",
            "extra": "mean: 89.9073196206278 usec\nrounds: 3476"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 10609.547580235565,
            "unit": "iter/sec",
            "range": "stddev: 0.00012364831270165943",
            "extra": "mean: 94.25472598500727 usec\nrounds: 5507"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11073.078001624208,
            "unit": "iter/sec",
            "range": "stddev: 0.00012255233489576414",
            "extra": "mean: 90.3091263200096 usec\nrounds: 5209"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 17541.413992613783,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989536468411702",
            "extra": "mean: 57.007947045835245 usec\nrounds: 4079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "286190abe42dd577254dc94cfdf8bcaf8749f5c4",
          "message": "add localtimezone (#27)",
          "timestamp": "2022-10-29T17:07:38Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/286190abe42dd577254dc94cfdf8bcaf8749f5c4"
        },
        "date": 1667093653935,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15213.576330941074,
            "unit": "iter/sec",
            "range": "stddev: 0.0003343322833196055",
            "extra": "mean: 65.73076430202802 usec\nrounds: 3496"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "286190abe42dd577254dc94cfdf8bcaf8749f5c4",
          "message": "add localtimezone (#27)",
          "timestamp": "2022-10-29T17:07:38Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/286190abe42dd577254dc94cfdf8bcaf8749f5c4"
        },
        "date": 1667093732626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.15598785886420433,
            "unit": "iter/sec",
            "range": "stddev: 0.011309684862158723",
            "extra": "mean: 6.410755345199993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34942752814589434,
            "unit": "iter/sec",
            "range": "stddev: 0.0016047181412968319",
            "extra": "mean: 2.86182375300001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3277.3750262983226,
            "unit": "iter/sec",
            "range": "stddev: 0.00018369994998815214",
            "extra": "mean: 305.12223714887585 usec\nrounds: 1206"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14347.508220778303,
            "unit": "iter/sec",
            "range": "stddev: 0.00008550177728432715",
            "extra": "mean: 69.69851381940894 usec\nrounds: 9805"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 14126.329442919969,
            "unit": "iter/sec",
            "range": "stddev: 0.00008637162581398579",
            "extra": "mean: 70.78979745167943 usec\nrounds: 10516"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 14222.534308392338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000850607187935618",
            "extra": "mean: 70.31095712737545 usec\nrounds: 9050"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13805.540956220628,
            "unit": "iter/sec",
            "range": "stddev: 0.00009339622455535563",
            "extra": "mean: 72.43468424534359 usec\nrounds: 10505"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14053.92962293987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008843191919148238",
            "extra": "mean: 71.15447613795685 usec\nrounds: 9911"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 21420.88633037612,
            "unit": "iter/sec",
            "range": "stddev: 0.000005850410470336059",
            "extra": "mean: 46.68340910721042 usec\nrounds: 5644"
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
          "id": "cdc127631bf5b305277731bd2a4ca6e1d5e87d14",
          "message": "add timezonemapper (#28)",
          "timestamp": "2022-10-30T13:48:33+08:00",
          "tree_id": "3b00fb15a778d74c66810656e4901fc19e7e0706",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/cdc127631bf5b305277731bd2a4ca6e1d5e87d14"
        },
        "date": 1667108950453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13065.319019720302,
            "unit": "iter/sec",
            "range": "stddev: 0.000384672935553069",
            "extra": "mean: 76.53850613908757 usec\nrounds: 3665"
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
          "id": "cdc127631bf5b305277731bd2a4ca6e1d5e87d14",
          "message": "add timezonemapper (#28)",
          "timestamp": "2022-10-30T13:48:33+08:00",
          "tree_id": "3b00fb15a778d74c66810656e4901fc19e7e0706",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/cdc127631bf5b305277731bd2a4ca6e1d5e87d14"
        },
        "date": 1667109025662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.15558491547325282,
            "unit": "iter/sec",
            "range": "stddev: 0.008386225186788098",
            "extra": "mean: 6.427358314000008 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34804679077487954,
            "unit": "iter/sec",
            "range": "stddev: 0.002424539552123554",
            "extra": "mean: 2.8731769017999964 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3345.7053685289566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018107942599302013",
            "extra": "mean: 298.89063436559604 usec\nrounds: 2776"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13561.767204384614,
            "unit": "iter/sec",
            "range": "stddev: 0.00010822918656599881",
            "extra": "mean: 73.73670296277413 usec\nrounds: 1350"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13898.263590322591,
            "unit": "iter/sec",
            "range": "stddev: 0.00009011025555743592",
            "extra": "mean: 71.95143432855191 usec\nrounds: 9951"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 14335.215017472241,
            "unit": "iter/sec",
            "range": "stddev: 0.00008655860508874496",
            "extra": "mean: 69.7582839728017 usec\nrounds: 6726"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 14283.811641192719,
            "unit": "iter/sec",
            "range": "stddev: 0.00008690021386356454",
            "extra": "mean: 70.00932420000034 usec\nrounds: 8905"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13732.911321801124,
            "unit": "iter/sec",
            "range": "stddev: 0.00009220192468820876",
            "extra": "mean: 72.8177715975265 usec\nrounds: 9133"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 21405.27042907969,
            "unit": "iter/sec",
            "range": "stddev: 0.000005989692449692765",
            "extra": "mean: 46.717466304068296 usec\nrounds: 8636"
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
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T14:42:28+08:00",
          "tree_id": "9321a91fe37e75cc12f374a67a51867e86d84f61",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667112189467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14964.623426999571,
            "unit": "iter/sec",
            "range": "stddev: 0.00033868554253763724",
            "extra": "mean: 66.8242675719974 usec\nrounds: 3756"
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
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T14:42:28+08:00",
          "tree_id": "9321a91fe37e75cc12f374a67a51867e86d84f61",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667112314330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1076477846490642,
            "unit": "iter/sec",
            "range": "stddev: 0.09741302718561996",
            "extra": "mean: 9.289554850200005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2288306062062011,
            "unit": "iter/sec",
            "range": "stddev: 0.05083307098509663",
            "extra": "mean: 4.370044796800005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2303.624726031428,
            "unit": "iter/sec",
            "range": "stddev: 0.0002584709437248533",
            "extra": "mean: 434.09848344645576 usec\nrounds: 2205"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8576.667884794919,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231457263664611",
            "extra": "mean: 116.59539735388873 usec\nrounds: 4082"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8868.176735923818,
            "unit": "iter/sec",
            "range": "stddev: 0.00011751598901706841",
            "extra": "mean: 112.76275042525161 usec\nrounds: 4704"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8112.120214856738,
            "unit": "iter/sec",
            "range": "stddev: 0.0001506047354713682",
            "extra": "mean: 123.27233491542385 usec\nrounds: 4425"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8256.920661141976,
            "unit": "iter/sec",
            "range": "stddev: 0.00012985303978395072",
            "extra": "mean: 121.11052546576059 usec\nrounds: 2415"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8627.179334867937,
            "unit": "iter/sec",
            "range": "stddev: 0.00012106175365590666",
            "extra": "mean: 115.91274055917232 usec\nrounds: 4475"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 12158.76219354932,
            "unit": "iter/sec",
            "range": "stddev: 0.00002352000919885197",
            "extra": "mean: 82.24521411649432 usec\nrounds: 2536"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T06:42:28Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667180027757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14682.299988166791,
            "unit": "iter/sec",
            "range": "stddev: 0.000056567114750671",
            "extra": "mean: 68.10921999999664 usec\nrounds: 50"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T06:42:28Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667180105746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.15556288797978504,
            "unit": "iter/sec",
            "range": "stddev: 0.0067527733722579945",
            "extra": "mean: 6.428268419200004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3399933532904208,
            "unit": "iter/sec",
            "range": "stddev: 0.0019949938579467436",
            "extra": "mean: 2.941233969199993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3285.94280292033,
            "unit": "iter/sec",
            "range": "stddev: 0.0001880064871061844",
            "extra": "mean: 304.32666055881003 usec\nrounds: 1037"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14067.663674045063,
            "unit": "iter/sec",
            "range": "stddev: 0.00008665577590218216",
            "extra": "mean: 71.08500907972423 usec\nrounds: 8150"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13970.729765488682,
            "unit": "iter/sec",
            "range": "stddev: 0.00009113975150168472",
            "extra": "mean: 71.57822223934635 usec\nrounds: 6448"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 14043.196830595893,
            "unit": "iter/sec",
            "range": "stddev: 0.00008660312346142415",
            "extra": "mean: 71.20885736083264 usec\nrounds: 7221"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13778.693369637698,
            "unit": "iter/sec",
            "range": "stddev: 0.00009179744373425742",
            "extra": "mean: 72.57582218961117 usec\nrounds: 3380"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14298.688177408558,
            "unit": "iter/sec",
            "range": "stddev: 0.00008539724201369147",
            "extra": "mean: 69.93648561271279 usec\nrounds: 5074"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 21120.040025591392,
            "unit": "iter/sec",
            "range": "stddev: 0.000006610895658783708",
            "extra": "mean: 47.3483951161214 usec\nrounds: 4300"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T06:42:28Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667266432817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 19590.168290445887,
            "unit": "iter/sec",
            "range": "stddev: 0.00023525406648483658",
            "extra": "mean: 51.046013754139075 usec\nrounds: 4944"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T06:42:28Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667266535670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11062922785346459,
            "unit": "iter/sec",
            "range": "stddev: 0.044022535896006264",
            "extra": "mean: 9.039202563400002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2829780265335352,
            "unit": "iter/sec",
            "range": "stddev: 0.003341311639958579",
            "extra": "mean: 3.5338432890000093 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2256.623947391491,
            "unit": "iter/sec",
            "range": "stddev: 0.00027718466277589356",
            "extra": "mean: 443.13985108415346 usec\nrounds: 2075"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 9932.198268921433,
            "unit": "iter/sec",
            "range": "stddev: 0.000136419408593991",
            "extra": "mean: 100.68264576725903 usec\nrounds: 4099"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10276.957245609547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001197473610398659",
            "extra": "mean: 97.30506570193364 usec\nrounds: 898"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10187.647672832698,
            "unit": "iter/sec",
            "range": "stddev: 0.00013263169649625235",
            "extra": "mean: 98.15808635262195 usec\nrounds: 4250"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 9716.027795552334,
            "unit": "iter/sec",
            "range": "stddev: 0.000137144566674316",
            "extra": "mean: 102.92271914431595 usec\nrounds: 1823"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10312.817618415344,
            "unit": "iter/sec",
            "range": "stddev: 0.00012239084134833792",
            "extra": "mean: 96.96671045692932 usec\nrounds: 4179"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 16451.317597612473,
            "unit": "iter/sec",
            "range": "stddev: 0.00001203960423910744",
            "extra": "mean: 60.78540482040945 usec\nrounds: 2863"
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
          "id": "ee7f70133fcb42597051947dc1c0d4c3482456b3",
          "message": "Bump timezonefinder[numba] from 6.1.5 to 6.1.6 (#30)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T09:55:21+08:00",
          "tree_id": "60d8f8d952c99c45932a2804ecdab7d90563b80e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ee7f70133fcb42597051947dc1c0d4c3482456b3"
        },
        "date": 1667267769162,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15021.126685509467,
            "unit": "iter/sec",
            "range": "stddev: 0.00033652237616472953",
            "extra": "mean: 66.57290234857528 usec\nrounds: 3492"
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
          "id": "023bf2d206ad649ad856f49495e47f1cccbf59e8",
          "message": "Bump timezonefinder from 6.1.5 to 6.1.6 (#29)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T09:55:15+08:00",
          "tree_id": "cf88c16fbb21addb64d5706b87ab747838b1795c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/023bf2d206ad649ad856f49495e47f1cccbf59e8"
        },
        "date": 1667267773757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9068.364194494363,
            "unit": "iter/sec",
            "range": "stddev: 0.0004709759054384234",
            "extra": "mean: 110.2734714389973 usec\nrounds: 2696"
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
          "id": "5561ffe838a565ed1f5331726f7d5da5bce34082",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.3 to 0.8.5 (#31)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T09:55:27+08:00",
          "tree_id": "3ddf7caea0d2221980ba44d59a90de0c7f428f82",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5561ffe838a565ed1f5331726f7d5da5bce34082"
        },
        "date": 1667267780102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12801.948203832359,
            "unit": "iter/sec",
            "range": "stddev: 0.00036050842932419414",
            "extra": "mean: 78.11311091702765 usec\nrounds: 3444"
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
          "id": "ee7f70133fcb42597051947dc1c0d4c3482456b3",
          "message": "Bump timezonefinder[numba] from 6.1.5 to 6.1.6 (#30)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T09:55:21+08:00",
          "tree_id": "60d8f8d952c99c45932a2804ecdab7d90563b80e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ee7f70133fcb42597051947dc1c0d4c3482456b3"
        },
        "date": 1667267849086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13589542450660966,
            "unit": "iter/sec",
            "range": "stddev: 0.00476451735829357",
            "extra": "mean: 7.358599479199995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3425351797217949,
            "unit": "iter/sec",
            "range": "stddev: 0.0011330554837837353",
            "extra": "mean: 2.9194081635999964 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2857.1280210381356,
            "unit": "iter/sec",
            "range": "stddev: 0.00021677659666773777",
            "extra": "mean: 350.0018174322657 usec\nrounds: 1939"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12595.421578242369,
            "unit": "iter/sec",
            "range": "stddev: 0.00010208182029850694",
            "extra": "mean: 79.39392848330093 usec\nrounds: 4852"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12518.21349904882,
            "unit": "iter/sec",
            "range": "stddev: 0.00009966846704821378",
            "extra": "mean: 79.88360320552 usec\nrounds: 6676"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12334.517357013126,
            "unit": "iter/sec",
            "range": "stddev: 0.00010448173275711378",
            "extra": "mean: 81.07329788882438 usec\nrounds: 5163"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12306.472253426376,
            "unit": "iter/sec",
            "range": "stddev: 0.00010770200967566249",
            "extra": "mean: 81.25805506298357 usec\nrounds: 5412"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12365.541820134551,
            "unit": "iter/sec",
            "range": "stddev: 0.00010329762813872442",
            "extra": "mean: 80.8698894513236 usec\nrounds: 6124"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20174.55703366972,
            "unit": "iter/sec",
            "range": "stddev: 0.000007267140835623049",
            "extra": "mean: 49.56738323082286 usec\nrounds: 6333"
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
          "id": "5561ffe838a565ed1f5331726f7d5da5bce34082",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.3 to 0.8.5 (#31)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T09:55:27+08:00",
          "tree_id": "3ddf7caea0d2221980ba44d59a90de0c7f428f82",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5561ffe838a565ed1f5331726f7d5da5bce34082"
        },
        "date": 1667267856321,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.15226304611473565,
            "unit": "iter/sec",
            "range": "stddev: 0.0133589729536816",
            "extra": "mean: 6.5675817311999936 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34481112076247794,
            "unit": "iter/sec",
            "range": "stddev: 0.0043403926321793004",
            "extra": "mean: 2.900138480999999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3137.0471397803503,
            "unit": "iter/sec",
            "range": "stddev: 0.00019702548140784718",
            "extra": "mean: 318.7711103601771 usec\nrounds: 1477"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14129.074709120183,
            "unit": "iter/sec",
            "range": "stddev: 0.00008662240275215628",
            "extra": "mean: 70.77604305924645 usec\nrounds: 1556"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13219.398612082567,
            "unit": "iter/sec",
            "range": "stddev: 0.000095723028764258",
            "extra": "mean: 75.64640641715708 usec\nrounds: 5423"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13818.56953929886,
            "unit": "iter/sec",
            "range": "stddev: 0.00009174112960691202",
            "extra": "mean: 72.36639054108194 usec\nrounds: 2051"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 14004.371518406579,
            "unit": "iter/sec",
            "range": "stddev: 0.00008756747225594634",
            "extra": "mean: 71.40627472540662 usec\nrounds: 5278"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13342.373857153283,
            "unit": "iter/sec",
            "range": "stddev: 0.00009723220590030553",
            "extra": "mean: 74.94918151044519 usec\nrounds: 5322"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20815.103956940064,
            "unit": "iter/sec",
            "range": "stddev: 0.000008049741182982482",
            "extra": "mean: 48.04203726624124 usec\nrounds: 3730"
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
          "id": "023bf2d206ad649ad856f49495e47f1cccbf59e8",
          "message": "Bump timezonefinder from 6.1.5 to 6.1.6 (#29)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T09:55:15+08:00",
          "tree_id": "cf88c16fbb21addb64d5706b87ab747838b1795c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/023bf2d206ad649ad856f49495e47f1cccbf59e8"
        },
        "date": 1667267867894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11570782452969178,
            "unit": "iter/sec",
            "range": "stddev: 0.20397333929569736",
            "extra": "mean: 8.642457881000002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2347966436891212,
            "unit": "iter/sec",
            "range": "stddev: 0.09557034617407945",
            "extra": "mean: 4.2590046615999935 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2448.4096360895965,
            "unit": "iter/sec",
            "range": "stddev: 0.000227972908416157",
            "extra": "mean: 408.4283876602936 usec\nrounds: 859"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8576.821746428508,
            "unit": "iter/sec",
            "range": "stddev: 0.00013562877748001198",
            "extra": "mean: 116.59330572148268 usec\nrounds: 3513"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8472.08022959685,
            "unit": "iter/sec",
            "range": "stddev: 0.00013201012412999107",
            "extra": "mean: 118.03476512256611 usec\nrounds: 3951"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8644.199229568223,
            "unit": "iter/sec",
            "range": "stddev: 0.00013034760551828967",
            "extra": "mean: 115.68451552798719 usec\nrounds: 1771"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8994.7346125731,
            "unit": "iter/sec",
            "range": "stddev: 0.0001166679133568485",
            "extra": "mean: 111.1761539470182 usec\nrounds: 3826"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8455.35479514623,
            "unit": "iter/sec",
            "range": "stddev: 0.00013847484150238628",
            "extra": "mean: 118.2682482554188 usec\nrounds: 4012"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11333.23845545735,
            "unit": "iter/sec",
            "range": "stddev: 0.00009420920946905287",
            "extra": "mean: 88.23603279241559 usec\nrounds: 3019"
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
          "id": "4986f558469766e661ef3d4b9c88c6d0b1278db9",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.2 to 2.1.3 (#33)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T10:38:23+08:00",
          "tree_id": "b2b2627a453d13d8e22440186caa58208d4d9013",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4986f558469766e661ef3d4b9c88c6d0b1278db9"
        },
        "date": 1667270338020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15340.919043799046,
            "unit": "iter/sec",
            "range": "stddev: 0.0003230906472287835",
            "extra": "mean: 65.18514289430463 usec\nrounds: 3842"
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
          "id": "4986f558469766e661ef3d4b9c88c6d0b1278db9",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.2 to 2.1.3 (#33)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T10:38:23+08:00",
          "tree_id": "b2b2627a453d13d8e22440186caa58208d4d9013",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4986f558469766e661ef3d4b9c88c6d0b1278db9"
        },
        "date": 1667270430288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13508792461819266,
            "unit": "iter/sec",
            "range": "stddev: 0.0074212977740692925",
            "extra": "mean: 7.402586151399999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34457589345460193,
            "unit": "iter/sec",
            "range": "stddev: 0.0005873496477122425",
            "extra": "mean: 2.9021182822000013 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2774.8700419299707,
            "unit": "iter/sec",
            "range": "stddev: 0.00022670146386452757",
            "extra": "mean: 360.3772374523466 usec\nrounds: 1036"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12559.27847830217,
            "unit": "iter/sec",
            "range": "stddev: 0.00010198022607328471",
            "extra": "mean: 79.62240838338234 usec\nrounds: 5010"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12389.891773046456,
            "unit": "iter/sec",
            "range": "stddev: 0.00010453370106721285",
            "extra": "mean: 80.71095521394676 usec\nrounds: 4421"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12557.860668843938,
            "unit": "iter/sec",
            "range": "stddev: 0.0001043781376219659",
            "extra": "mean: 79.63139792440927 usec\nrounds: 4722"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12010.175298518174,
            "unit": "iter/sec",
            "range": "stddev: 0.00010669622457788916",
            "extra": "mean: 83.26273140437684 usec\nrounds: 4907"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12712.34309299729,
            "unit": "iter/sec",
            "range": "stddev: 0.00010114418894699419",
            "extra": "mean: 78.66370445514951 usec\nrounds: 4781"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19786.32582643708,
            "unit": "iter/sec",
            "range": "stddev: 0.000008052909874181038",
            "extra": "mean: 50.53995414671031 usec\nrounds: 3991"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4986f558469766e661ef3d4b9c88c6d0b1278db9",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.2 to 2.1.3 (#33)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T02:38:23Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4986f558469766e661ef3d4b9c88c6d0b1278db9"
        },
        "date": 1667352842384,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13275.938664219204,
            "unit": "iter/sec",
            "range": "stddev: 0.00007913541735980689",
            "extra": "mean: 75.32424074051812 usec\nrounds: 54"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4986f558469766e661ef3d4b9c88c6d0b1278db9",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.2 to 2.1.3 (#33)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T02:38:23Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4986f558469766e661ef3d4b9c88c6d0b1278db9"
        },
        "date": 1667352922398,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13462222150224587,
            "unit": "iter/sec",
            "range": "stddev: 0.011485515557863934",
            "extra": "mean: 7.428194163199999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3451694860094872,
            "unit": "iter/sec",
            "range": "stddev: 0.0020447900234217583",
            "extra": "mean: 2.897127470799995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2734.274705965627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002192723137360026",
            "extra": "mean: 365.72770022639094 usec\nrounds: 884"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12603.132274064155,
            "unit": "iter/sec",
            "range": "stddev: 0.00010266105507576731",
            "extra": "mean: 79.34535465107265 usec\nrounds: 3612"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12452.635332364922,
            "unit": "iter/sec",
            "range": "stddev: 0.00010402357773971274",
            "extra": "mean: 80.30428686857617 usec\nrounds: 8788"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12550.084544705252,
            "unit": "iter/sec",
            "range": "stddev: 0.00010396690266423065",
            "extra": "mean: 79.68073812075548 usec\nrounds: 8355"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12644.3460262377,
            "unit": "iter/sec",
            "range": "stddev: 0.00010263303722482204",
            "extra": "mean: 79.0867315656299 usec\nrounds: 8788"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12643.572644553846,
            "unit": "iter/sec",
            "range": "stddev: 0.00010153486979573756",
            "extra": "mean: 79.0915691405265 usec\nrounds: 8866"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20389.46191257507,
            "unit": "iter/sec",
            "range": "stddev: 0.000006185034855463365",
            "extra": "mean: 49.04494313227837 usec\nrounds: 4361"
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
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T10:09:50+08:00",
          "tree_id": "c919b2631e5c0f8c5a070e42e00f66212c02f650",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667355033298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13974.710127168397,
            "unit": "iter/sec",
            "range": "stddev: 0.00036489323910993577",
            "extra": "mean: 71.55783489604471 usec\nrounds: 3307"
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
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T10:09:50+08:00",
          "tree_id": "c919b2631e5c0f8c5a070e42e00f66212c02f650",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667355146945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11267065923444726,
            "unit": "iter/sec",
            "range": "stddev: 0.09403751139605439",
            "extra": "mean: 8.875425126600003 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2356439766734803,
            "unit": "iter/sec",
            "range": "stddev: 0.05958800956759038",
            "extra": "mean: 4.243690053600005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2386.0593530735255,
            "unit": "iter/sec",
            "range": "stddev: 0.00024399417115383894",
            "extra": "mean: 419.10105828334997 usec\nrounds: 1853"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8700.70668460221,
            "unit": "iter/sec",
            "range": "stddev: 0.0001194369184208473",
            "extra": "mean: 114.93319292899704 usec\nrounds: 4893"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8534.65316065235,
            "unit": "iter/sec",
            "range": "stddev: 0.0001240878476719245",
            "extra": "mean: 117.16937773292766 usec\nrounds: 4437"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8402.757292761504,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268339596877724",
            "extra": "mean: 119.00855459212691 usec\nrounds: 1960"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8711.755810193214,
            "unit": "iter/sec",
            "range": "stddev: 0.00013235811216200368",
            "extra": "mean: 114.78742308524619 usec\nrounds: 4375"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8895.239772861923,
            "unit": "iter/sec",
            "range": "stddev: 0.00011599796999518749",
            "extra": "mean: 112.41967901200975 usec\nrounds: 1134"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11443.138239084894,
            "unit": "iter/sec",
            "range": "stddev: 0.00011920803953212919",
            "extra": "mean: 87.38861482809195 usec\nrounds: 3183"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T02:09:50Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667439177776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13264.516512395983,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855336998638645",
            "extra": "mean: 75.3891028795115 usec\nrounds: 3334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T02:09:50Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667439284833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11873436823631611,
            "unit": "iter/sec",
            "range": "stddev: 0.05803734779860543",
            "extra": "mean: 8.422161290399993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3007112762609141,
            "unit": "iter/sec",
            "range": "stddev: 0.025758380217336493",
            "extra": "mean: 3.3254489570000145 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2523.5889434703145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002473832342437098",
            "extra": "mean: 396.26104821368006 usec\nrounds: 560"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10747.303564920947,
            "unit": "iter/sec",
            "range": "stddev: 0.00012604696219650763",
            "extra": "mean: 93.04659480020518 usec\nrounds: 5000"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 11249.75006996088,
            "unit": "iter/sec",
            "range": "stddev: 0.00011775223132390803",
            "extra": "mean: 88.89086368862569 usec\nrounds: 5216"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 11397.937107055172,
            "unit": "iter/sec",
            "range": "stddev: 0.0001193001695766674",
            "extra": "mean: 87.73517440985117 usec\nrounds: 5252"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11415.932093522008,
            "unit": "iter/sec",
            "range": "stddev: 0.00011393001926807097",
            "extra": "mean: 87.5968770493521 usec\nrounds: 4636"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 11212.232985340846,
            "unit": "iter/sec",
            "range": "stddev: 0.00012026413859349921",
            "extra": "mean: 89.18830007434067 usec\nrounds: 5402"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 18280.21434204695,
            "unit": "iter/sec",
            "range": "stddev: 0.000009500299656434959",
            "extra": "mean: 54.70395375506432 usec\nrounds: 3914"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T02:09:50Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667525597109,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9782.601952455632,
            "unit": "iter/sec",
            "range": "stddev: 0.00016338927509526756",
            "extra": "mean: 102.22229268451218 usec\nrounds: 41"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T02:09:50Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667525679042,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13513269625658084,
            "unit": "iter/sec",
            "range": "stddev: 0.0041919766732583475",
            "extra": "mean: 7.400133555400001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34458902893322896,
            "unit": "iter/sec",
            "range": "stddev: 0.0006117571577539521",
            "extra": "mean: 2.9020076555999994 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2765.005735880616,
            "unit": "iter/sec",
            "range": "stddev: 0.00021918979487829004",
            "extra": "mean: 361.66290254783644 usec\nrounds: 1570"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12207.82374452403,
            "unit": "iter/sec",
            "range": "stddev: 0.00010757095204660453",
            "extra": "mean: 81.91468200452701 usec\nrounds: 6346"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12940.12085037293,
            "unit": "iter/sec",
            "range": "stddev: 0.00009558972148281023",
            "extra": "mean: 77.27903097374707 usec\nrounds: 1808"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12484.125962430086,
            "unit": "iter/sec",
            "range": "stddev: 0.00010384544126680153",
            "extra": "mean: 80.10172302085184 usec\nrounds: 4939"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12436.033513748298,
            "unit": "iter/sec",
            "range": "stddev: 0.00010183207765491384",
            "extra": "mean: 80.4114912439307 usec\nrounds: 4511"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13224.952141127951,
            "unit": "iter/sec",
            "range": "stddev: 0.0000879905206805958",
            "extra": "mean: 75.61464036532311 usec\nrounds: 1204"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 19937.924419759827,
            "unit": "iter/sec",
            "range": "stddev: 0.00000766902317463599",
            "extra": "mean: 50.155672122466896 usec\nrounds: 3788"
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
          "id": "5ab5e0b3f5a11147f4015ddecbbc4996e3f45198",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.5 to 0.8.6 (#35)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-04T23:23:37+08:00",
          "tree_id": "c6c6735e818424d77c54d9c78b37664e41b9e422",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ab5e0b3f5a11147f4015ddecbbc4996e3f45198"
        },
        "date": 1667575460849,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12987.265717362032,
            "unit": "iter/sec",
            "range": "stddev: 0.00038981250055315585",
            "extra": "mean: 76.9985015909199 usec\nrounds: 3457"
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
          "id": "5ab5e0b3f5a11147f4015ddecbbc4996e3f45198",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.5 to 0.8.6 (#35)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-04T23:23:37+08:00",
          "tree_id": "c6c6735e818424d77c54d9c78b37664e41b9e422",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ab5e0b3f5a11147f4015ddecbbc4996e3f45198"
        },
        "date": 1667575559506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11696912880005106,
            "unit": "iter/sec",
            "range": "stddev: 0.17762150370148494",
            "extra": "mean: 8.549264325199996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.2980382812869402,
            "unit": "iter/sec",
            "range": "stddev: 0.017578805181695422",
            "extra": "mean: 3.3552736772000005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2392.6584756004904,
            "unit": "iter/sec",
            "range": "stddev: 0.00026105315517643314",
            "extra": "mean: 417.94514770814834 usec\nrounds: 1767"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10792.11996754834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001268956833959789",
            "extra": "mean: 92.66020049878775 usec\nrounds: 4414"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10803.787494191469,
            "unit": "iter/sec",
            "range": "stddev: 0.00012318988224708054",
            "extra": "mean: 92.5601323181929 usec\nrounds: 3809"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10968.123642092572,
            "unit": "iter/sec",
            "range": "stddev: 0.00012373289000958923",
            "extra": "mean: 91.17329751483484 usec\nrounds: 5593"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11297.328829427504,
            "unit": "iter/sec",
            "range": "stddev: 0.00010847342118653558",
            "extra": "mean: 88.51649935117233 usec\nrounds: 771"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10937.498971404148,
            "unit": "iter/sec",
            "range": "stddev: 0.00011715896968114122",
            "extra": "mean: 91.4285800267939 usec\nrounds: 4536"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 17812.119220509434,
            "unit": "iter/sec",
            "range": "stddev: 0.000010118963153221802",
            "extra": "mean: 56.14155102041808 usec\nrounds: 3969"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5ab5e0b3f5a11147f4015ddecbbc4996e3f45198",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.5 to 0.8.6 (#35)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-04T15:23:37Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ab5e0b3f5a11147f4015ddecbbc4996e3f45198"
        },
        "date": 1667611977184,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 17364.997630157435,
            "unit": "iter/sec",
            "range": "stddev: 0.0002620173359193778",
            "extra": "mean: 57.58710834853905 usec\nrounds: 4384"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5ab5e0b3f5a11147f4015ddecbbc4996e3f45198",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.5 to 0.8.6 (#35)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-04T15:23:37Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ab5e0b3f5a11147f4015ddecbbc4996e3f45198"
        },
        "date": 1667612098498,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11606488990061924,
            "unit": "iter/sec",
            "range": "stddev: 0.08723472005800863",
            "extra": "mean: 8.615869974599999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.20357427305076545,
            "unit": "iter/sec",
            "range": "stddev: 0.07055800235273756",
            "extra": "mean: 4.912212063999999 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2560.174817026259,
            "unit": "iter/sec",
            "range": "stddev: 0.00021863006267758392",
            "extra": "mean: 390.5983268601705 usec\nrounds: 1236"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 9223.783566930591,
            "unit": "iter/sec",
            "range": "stddev: 0.0001143226676647693",
            "extra": "mean: 108.41537995158868 usec\nrounds: 5377"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 9275.564848942013,
            "unit": "iter/sec",
            "range": "stddev: 0.00016921253376530227",
            "extra": "mean: 107.81014593564745 usec\nrounds: 4687"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 9008.546829054032,
            "unit": "iter/sec",
            "range": "stddev: 0.00011250169384726788",
            "extra": "mean: 111.00569481138034 usec\nrounds: 7343"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8730.066834525971,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527603068460561",
            "extra": "mean: 114.54666028960573 usec\nrounds: 5593"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 9054.543675517953,
            "unit": "iter/sec",
            "range": "stddev: 0.00011929170749974327",
            "extra": "mean: 110.4417887677588 usec\nrounds: 5217"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 10985.307277941603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000287936682641144",
            "extra": "mean: 91.03068077194261 usec\nrounds: 3214"
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
          "id": "522befbbd825454768137ea88f19b7392444ce8d",
          "message": "add worldcity benchmark (#37)",
          "timestamp": "2022-11-05T14:53:27+08:00",
          "tree_id": "254105c7844b87c49fffc55eea0fa4066300c0de",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/522befbbd825454768137ea88f19b7392444ce8d"
        },
        "date": 1667631246057,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12700.467811234668,
            "unit": "iter/sec",
            "range": "stddev: 0.00040657422763107744",
            "extra": "mean: 78.7372571516943 usec\nrounds: 3286"
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
          "id": "522befbbd825454768137ea88f19b7392444ce8d",
          "message": "add worldcity benchmark (#37)",
          "timestamp": "2022-11-05T14:53:27+08:00",
          "tree_id": "254105c7844b87c49fffc55eea0fa4066300c0de",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/522befbbd825454768137ea88f19b7392444ce8d"
        },
        "date": 1667631377047,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11189554321449191,
            "unit": "iter/sec",
            "range": "stddev: 0.0355714233564126",
            "extra": "mean: 8.936906433199988 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.20401321213423196,
            "unit": "iter/sec",
            "range": "stddev: 0.014698361532587577",
            "extra": "mean: 4.901643327599993 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2345.480010865738,
            "unit": "iter/sec",
            "range": "stddev: 0.0002431976069796706",
            "extra": "mean: 426.3519600965991 usec\nrounds: 827"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8289.058182292074,
            "unit": "iter/sec",
            "range": "stddev: 0.00012790406346891662",
            "extra": "mean: 120.640967647724 usec\nrounds: 2720"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8721.928753374214,
            "unit": "iter/sec",
            "range": "stddev: 0.00012411007991006224",
            "extra": "mean: 114.6535391742491 usec\nrounds: 2374"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8658.914439549828,
            "unit": "iter/sec",
            "range": "stddev: 0.00012147580512996401",
            "extra": "mean: 115.48791791179652 usec\nrounds: 1340"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8656.721781908354,
            "unit": "iter/sec",
            "range": "stddev: 0.00011683948832083627",
            "extra": "mean: 115.51716980091653 usec\nrounds: 1861"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8506.155565218005,
            "unit": "iter/sec",
            "range": "stddev: 0.0001334413388073425",
            "extra": "mean: 117.561922343513 usec\nrounds: 3670"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 11446.97151051114,
            "unit": "iter/sec",
            "range": "stddev: 0.00011789326747457094",
            "extra": "mean: 87.35935081883915 usec\nrounds: 2993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "522befbbd825454768137ea88f19b7392444ce8d",
          "message": "add worldcity benchmark (#37)",
          "timestamp": "2022-11-05T06:53:27Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/522befbbd825454768137ea88f19b7392444ce8d"
        },
        "date": 1667698585621,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13223.642550093313,
            "unit": "iter/sec",
            "range": "stddev: 0.0003912728271486154",
            "extra": "mean: 75.6221287902964 usec\nrounds: 3463"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "522befbbd825454768137ea88f19b7392444ce8d",
          "message": "add worldcity benchmark (#37)",
          "timestamp": "2022-11-05T06:53:27Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/522befbbd825454768137ea88f19b7392444ce8d"
        },
        "date": 1667698667419,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.15374430822823695,
            "unit": "iter/sec",
            "range": "stddev: 0.008688724761826494",
            "extra": "mean: 6.5043058277999934 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3509508325892947,
            "unit": "iter/sec",
            "range": "stddev: 0.0006418664609000931",
            "extra": "mean: 2.849401987799996 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3213.5375550985973,
            "unit": "iter/sec",
            "range": "stddev: 0.00018629380877965891",
            "extra": "mean: 311.1835423903481 usec\nrounds: 1899"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13910.97012040178,
            "unit": "iter/sec",
            "range": "stddev: 0.00008837231601886474",
            "extra": "mean: 71.88571259551507 usec\nrounds: 2112"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13595.659037758986,
            "unit": "iter/sec",
            "range": "stddev: 0.00009431335260284486",
            "extra": "mean: 73.55288899366464 usec\nrounds: 6342"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13408.623973583002,
            "unit": "iter/sec",
            "range": "stddev: 0.0000954127551081094",
            "extra": "mean: 74.57886819483862 usec\nrounds: 5584"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13874.456378639352,
            "unit": "iter/sec",
            "range": "stddev: 0.00009041645056673644",
            "extra": "mean: 72.07489596057735 usec\nrounds: 6065"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 13775.297867404084,
            "unit": "iter/sec",
            "range": "stddev: 0.00009024065343256731",
            "extra": "mean: 72.5937115571387 usec\nrounds: 6334"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 21185.27358746219,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063690061304109435",
            "extra": "mean: 47.20260023414648 usec\nrounds: 4280"
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
          "id": "8ee4ecabec256b875d5b174b6edf6e339ab1d972",
          "message": "lock tzfpy version",
          "timestamp": "2022-11-06T18:36:07+08:00",
          "tree_id": "ab8b734d18e2e81e9e60936db8a2795a901d64f8",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/8ee4ecabec256b875d5b174b6edf6e339ab1d972"
        },
        "date": 1667731000713,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15022.601823476412,
            "unit": "iter/sec",
            "range": "stddev: 0.0003127780038639576",
            "extra": "mean: 66.56636525087555 usec\nrounds: 3885"
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
          "id": "8ee4ecabec256b875d5b174b6edf6e339ab1d972",
          "message": "lock tzfpy version",
          "timestamp": "2022-11-06T18:36:07+08:00",
          "tree_id": "ab8b734d18e2e81e9e60936db8a2795a901d64f8",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/8ee4ecabec256b875d5b174b6edf6e339ab1d972"
        },
        "date": 1667731101130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1359671618476146,
            "unit": "iter/sec",
            "range": "stddev: 0.022871949093743602",
            "extra": "mean: 7.354717024399991 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.34686710502762924,
            "unit": "iter/sec",
            "range": "stddev: 0.004183338132399997",
            "extra": "mean: 2.882948499600002 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2804.2941625833228,
            "unit": "iter/sec",
            "range": "stddev: 0.00021586618287012998",
            "extra": "mean: 356.5959710442065 usec\nrounds: 1934"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12667.387786691552,
            "unit": "iter/sec",
            "range": "stddev: 0.00010088304314120468",
            "extra": "mean: 78.94287416152264 usec\nrounds: 5666"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12367.308353300099,
            "unit": "iter/sec",
            "range": "stddev: 0.00010631340068213773",
            "extra": "mean: 80.85833808236532 usec\nrounds: 6247"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12745.412057484888,
            "unit": "iter/sec",
            "range": "stddev: 0.00010197482633057089",
            "extra": "mean: 78.45960534581059 usec\nrounds: 3517"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12616.868145623126,
            "unit": "iter/sec",
            "range": "stddev: 0.00010226361298274825",
            "extra": "mean: 79.25897207278864 usec\nrounds: 4834"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12833.260921460527,
            "unit": "iter/sec",
            "range": "stddev: 0.00010093496997569656",
            "extra": "mean: 77.92251759860517 usec\nrounds: 2699"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20577.86187384471,
            "unit": "iter/sec",
            "range": "stddev: 0.000006967873333341297",
            "extra": "mean: 48.59591371205772 usec\nrounds: 4879"
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
          "id": "abc156a82911ec3432abd4b7ebd719ac3914a324",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.6 to 0.9.0 (#39)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.8.6 to 0.9.0.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.8.6...v0.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-06T21:08:38+08:00",
          "tree_id": "641b2ba071ae6345d8bdfc9ccb123f9636ab3cf9",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/abc156a82911ec3432abd4b7ebd719ac3914a324"
        },
        "date": 1667740176529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 8631.386177886947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004936787520120264",
            "extra": "mean: 115.85624595988247 usec\nrounds: 3094"
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
          "id": "abc156a82911ec3432abd4b7ebd719ac3914a324",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.6 to 0.9.0 (#39)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.8.6 to 0.9.0.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.8.6...v0.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-06T21:08:38+08:00",
          "tree_id": "641b2ba071ae6345d8bdfc9ccb123f9636ab3cf9",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/abc156a82911ec3432abd4b7ebd719ac3914a324"
        },
        "date": 1667740239674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13578761642044287,
            "unit": "iter/sec",
            "range": "stddev: 0.024204494712849",
            "extra": "mean: 7.364441812600001 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.3484690925255791,
            "unit": "iter/sec",
            "range": "stddev: 0.0008376818655279232",
            "extra": "mean: 2.869694964200005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2723.188476468163,
            "unit": "iter/sec",
            "range": "stddev: 0.00022859995054107867",
            "extra": "mean: 367.2165950470491 usec\nrounds: 1494"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12017.105211702043,
            "unit": "iter/sec",
            "range": "stddev: 0.00011145491212443922",
            "extra": "mean: 83.21471622185831 usec\nrounds: 2435"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12478.079231848847,
            "unit": "iter/sec",
            "range": "stddev: 0.00010094130046407522",
            "extra": "mean: 80.14053937465121 usec\nrounds: 5054"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12737.271492587382,
            "unit": "iter/sec",
            "range": "stddev: 0.00010090414393927666",
            "extra": "mean: 78.50974995562926 usec\nrounds: 5647"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12583.466762088588,
            "unit": "iter/sec",
            "range": "stddev: 0.00010163374759058536",
            "extra": "mean: 79.46935601346327 usec\nrounds: 5438"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12883.431679551002,
            "unit": "iter/sec",
            "range": "stddev: 0.000098112831855235",
            "extra": "mean: 77.61907113515666 usec\nrounds: 6087"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20307.83411451792,
            "unit": "iter/sec",
            "range": "stddev: 0.00000770271061983191",
            "extra": "mean: 49.24208038931673 usec\nrounds: 3595"
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
          "id": "77ece407cb3389a403dbef0823a633a47c25ad3b",
          "message": "replace tzf lite with tzf's Default",
          "timestamp": "2022-11-06T21:11:09+08:00",
          "tree_id": "090c1009b340b9a778ca5af069e03e9b7fcce9ef",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/77ece407cb3389a403dbef0823a633a47c25ad3b"
        },
        "date": 1667740309884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15200.099476839663,
            "unit": "iter/sec",
            "range": "stddev: 0.00031716732943483676",
            "extra": "mean: 65.78904312591483 usec\nrounds: 3826"
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
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T21:11:53+08:00",
          "tree_id": "3d6e826480a693433800dabb20460fc6684c2cb3",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667740363229,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 13246.036641810493,
            "unit": "iter/sec",
            "range": "stddev: 0.0003859722602879728",
            "extra": "mean: 75.49428006589888 usec\nrounds: 3642"
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
          "id": "77ece407cb3389a403dbef0823a633a47c25ad3b",
          "message": "replace tzf lite with tzf's Default",
          "timestamp": "2022-11-06T21:11:09+08:00",
          "tree_id": "090c1009b340b9a778ca5af069e03e9b7fcce9ef",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/77ece407cb3389a403dbef0823a633a47c25ad3b"
        },
        "date": 1667740397024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13291660645433626,
            "unit": "iter/sec",
            "range": "stddev: 0.016623814476430406",
            "extra": "mean: 7.5235143800000035 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.348843652752873,
            "unit": "iter/sec",
            "range": "stddev: 0.001645337194790363",
            "extra": "mean: 2.866613716799995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2738.788216671781,
            "unit": "iter/sec",
            "range": "stddev: 0.00022629008508794358",
            "extra": "mean: 365.1249826155656 usec\nrounds: 1323"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12182.33301232141,
            "unit": "iter/sec",
            "range": "stddev: 0.00010866193148134305",
            "extra": "mean: 82.08608309989424 usec\nrounds: 3213"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12249.833860724682,
            "unit": "iter/sec",
            "range": "stddev: 0.00010646332518954466",
            "extra": "mean: 81.63376021010308 usec\nrounds: 7419"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13073.43249800813,
            "unit": "iter/sec",
            "range": "stddev: 0.00009524175764674538",
            "extra": "mean: 76.49100572113409 usec\nrounds: 4195"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12472.612258455145,
            "unit": "iter/sec",
            "range": "stddev: 0.00010518825136662597",
            "extra": "mean: 80.17566643443944 usec\nrounds: 4302"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12483.083886477247,
            "unit": "iter/sec",
            "range": "stddev: 0.0001041562877454359",
            "extra": "mean: 80.10840983639358 usec\nrounds: 1769"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 20189.115607355096,
            "unit": "iter/sec",
            "range": "stddev: 0.000007490205002310394",
            "extra": "mean: 49.531639693800656 usec\nrounds: 3658"
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
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T21:11:53+08:00",
          "tree_id": "3d6e826480a693433800dabb20460fc6684c2cb3",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667740423012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.15389070904658791,
            "unit": "iter/sec",
            "range": "stddev: 0.0280575702556609",
            "extra": "mean: 6.4981180878 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.7266541835887734,
            "unit": "iter/sec",
            "range": "stddev: 0.007947325324752006",
            "extra": "mean: 1.3761704296000006 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3203.4247262446074,
            "unit": "iter/sec",
            "range": "stddev: 0.000180018882275835",
            "extra": "mean: 312.16591162805486 usec\nrounds: 860"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 14379.65359524138,
            "unit": "iter/sec",
            "range": "stddev: 0.00008268472585244337",
            "extra": "mean: 69.54270444532317 usec\nrounds: 2497"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 13579.241050385383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000935405278456076",
            "extra": "mean: 73.64181814650236 usec\nrounds: 5147"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 13445.486389805175,
            "unit": "iter/sec",
            "range": "stddev: 0.00009420285548627546",
            "extra": "mean: 74.37440126808904 usec\nrounds: 1104"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 13645.654407838485,
            "unit": "iter/sec",
            "range": "stddev: 0.00009183153205191892",
            "extra": "mean: 73.28340364721308 usec\nrounds: 8993"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 14115.32956955812,
            "unit": "iter/sec",
            "range": "stddev: 0.00008665236421554089",
            "extra": "mean: 70.84496292290999 usec\nrounds: 8334"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 27508.266039524537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000062645659125841784",
            "extra": "mean: 36.35270934791659 usec\nrounds: 5873"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667784796989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 11767.608472884738,
            "unit": "iter/sec",
            "range": "stddev: 0.00035123762231396095",
            "extra": "mean: 84.97903395615418 usec\nrounds: 2945"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667784903331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10280805419948792,
            "unit": "iter/sec",
            "range": "stddev: 0.17248717764054122",
            "extra": "mean: 9.726864376400005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.5413344024087235,
            "unit": "iter/sec",
            "range": "stddev: 0.028441816502325662",
            "extra": "mean: 1.8472869922000086 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2158.508198597627,
            "unit": "iter/sec",
            "range": "stddev: 0.0002856827258284102",
            "extra": "mean: 463.282928760565 usec\nrounds: 1137"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8137.213530421411,
            "unit": "iter/sec",
            "range": "stddev: 0.00012804468929996537",
            "extra": "mean: 122.89219107516918 usec\nrounds: 4056"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8533.063996662642,
            "unit": "iter/sec",
            "range": "stddev: 0.00012030572660217524",
            "extra": "mean: 117.19119889304815 usec\nrounds: 3072"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 7899.379191424244,
            "unit": "iter/sec",
            "range": "stddev: 0.00013365745066549033",
            "extra": "mean: 126.59222652403166 usec\nrounds: 4313"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8293.898871062895,
            "unit": "iter/sec",
            "range": "stddev: 0.00012687802357514433",
            "extra": "mean: 120.57055620595554 usec\nrounds: 4439"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 8105.366551801026,
            "unit": "iter/sec",
            "range": "stddev: 0.00013294142932679593",
            "extra": "mean: 123.3750495562472 usec\nrounds: 2704"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 14834.823766252488,
            "unit": "iter/sec",
            "range": "stddev: 0.00003242690502391601",
            "extra": "mean: 67.40895717783211 usec\nrounds: 3970"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667871181839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 9518.27493176684,
            "unit": "iter/sec",
            "range": "stddev: 0.0005609896530288259",
            "extra": "mean: 105.06105435792176 usec\nrounds: 2226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667871253472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1321002554442746,
            "unit": "iter/sec",
            "range": "stddev: 0.009614187824547388",
            "extra": "mean: 7.570008071799995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.7762161911846315,
            "unit": "iter/sec",
            "range": "stddev: 0.001173739080935132",
            "extra": "mean: 1.2883008771999953 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2692.6709852885588,
            "unit": "iter/sec",
            "range": "stddev: 0.00023082870572334072",
            "extra": "mean: 371.37845858759295 usec\nrounds: 1147"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12430.556482097345,
            "unit": "iter/sec",
            "range": "stddev: 0.00010505906405195039",
            "extra": "mean: 80.4469213779941 usec\nrounds: 5342"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12474.102024995804,
            "unit": "iter/sec",
            "range": "stddev: 0.00010381894489187946",
            "extra": "mean: 80.1660911539912 usec\nrounds: 5935"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12227.368218002539,
            "unit": "iter/sec",
            "range": "stddev: 0.00010658418880497742",
            "extra": "mean: 81.78374791459088 usec\nrounds: 7073"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 12427.611674914253,
            "unit": "iter/sec",
            "range": "stddev: 0.00010368149303463963",
            "extra": "mean: 80.46598382362954 usec\nrounds: 7480"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12298.600248242717,
            "unit": "iter/sec",
            "range": "stddev: 0.00009969735544237417",
            "extra": "mean: 81.31006617138277 usec\nrounds: 7133"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 25885.455101862324,
            "unit": "iter/sec",
            "range": "stddev: 0.00000654050321132951",
            "extra": "mean: 38.6317333832796 usec\nrounds: 6680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667957600177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 10678.4700964102,
            "unit": "iter/sec",
            "range": "stddev: 0.0004258164136116513",
            "extra": "mean: 93.64637358830754 usec\nrounds: 2302"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667957699792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10857090686191598,
            "unit": "iter/sec",
            "range": "stddev: 0.4141820952962318",
            "extra": "mean: 9.210570574599995 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.6432995744645476,
            "unit": "iter/sec",
            "range": "stddev: 0.028332801558673272",
            "extra": "mean: 1.5544857166000043 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2269.6080288692397,
            "unit": "iter/sec",
            "range": "stddev: 0.0003452143687505574",
            "extra": "mean: 440.60471556325007 usec\nrounds: 1118"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8626.38488764019,
            "unit": "iter/sec",
            "range": "stddev: 0.00013025390939813808",
            "extra": "mean: 115.92341554720001 usec\nrounds: 3499"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8845.76592290388,
            "unit": "iter/sec",
            "range": "stddev: 0.0001289124154637901",
            "extra": "mean: 113.04843568274312 usec\nrounds: 4540"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8367.787631717585,
            "unit": "iter/sec",
            "range": "stddev: 0.00012957520632746533",
            "extra": "mean: 119.50590096354279 usec\nrounds: 3009"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8295.978527529669,
            "unit": "iter/sec",
            "range": "stddev: 0.00012979426229429633",
            "extra": "mean: 120.54033127997675 usec\nrounds: 2922"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 9145.623181955607,
            "unit": "iter/sec",
            "range": "stddev: 0.00011098630274841841",
            "extra": "mean: 109.34192018461997 usec\nrounds: 1303"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 15557.199993675495,
            "unit": "iter/sec",
            "range": "stddev: 0.000022780095890007942",
            "extra": "mean: 64.27891911182812 usec\nrounds: 2658"
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
          "id": "f6eb05ce072e5fbbd4a5f3acfba6f14ea647a196",
          "message": "Bump tzfpy from 0.9.0 to 0.9.1 (#40)\n\nBumps [tzfpy](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: tzfpy\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T10:25:50+08:00",
          "tree_id": "3a71eb0dda0e1c0e0b34835240c89e86b743b759",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/f6eb05ce072e5fbbd4a5f3acfba6f14ea647a196"
        },
        "date": 1667960797550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 10952.255115553497,
            "unit": "iter/sec",
            "range": "stddev: 0.00036679895583663965",
            "extra": "mean: 91.30539687483008 usec\nrounds: 3520"
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
          "id": "99b97eade30f67f51d44d02f203146ba64f18703",
          "message": "Bump github.com/ringsaturn/tzf from 0.9.0 to 0.9.1 (#41)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T10:26:10+08:00",
          "tree_id": "235456cde7802409be9dcd4c1754bf3d151bafd9",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/99b97eade30f67f51d44d02f203146ba64f18703"
        },
        "date": 1667960810083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 14826.836802698337,
            "unit": "iter/sec",
            "range": "stddev: 0.00009180900430002758",
            "extra": "mean: 67.44526923085914 usec\nrounds: 52"
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
          "id": "f6eb05ce072e5fbbd4a5f3acfba6f14ea647a196",
          "message": "Bump tzfpy from 0.9.0 to 0.9.1 (#40)\n\nBumps [tzfpy](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: tzfpy\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T10:25:50+08:00",
          "tree_id": "3a71eb0dda0e1c0e0b34835240c89e86b743b759",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/f6eb05ce072e5fbbd4a5f3acfba6f14ea647a196"
        },
        "date": 1667960896465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.11540404689610104,
            "unit": "iter/sec",
            "range": "stddev: 0.03865888835384268",
            "extra": "mean: 8.665207389999988 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.6770835725131069,
            "unit": "iter/sec",
            "range": "stddev: 0.0010827062342723577",
            "extra": "mean: 1.4769225551999967 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2331.0507193072353,
            "unit": "iter/sec",
            "range": "stddev: 0.0002687206795208122",
            "extra": "mean: 428.9910947528374 usec\nrounds: 1963"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 10391.793097492235,
            "unit": "iter/sec",
            "range": "stddev: 0.0001283500827897927",
            "extra": "mean: 96.22978350495852 usec\nrounds: 4365"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 10787.255835584778,
            "unit": "iter/sec",
            "range": "stddev: 0.0001208858392941185",
            "extra": "mean: 92.70198234301819 usec\nrounds: 4191"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 10609.061946076255,
            "unit": "iter/sec",
            "range": "stddev: 0.00012619880773172786",
            "extra": "mean: 94.25904053372489 usec\nrounds: 3972"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 10909.473551635545,
            "unit": "iter/sec",
            "range": "stddev: 0.00012032215421694076",
            "extra": "mean: 91.66345151916889 usec\nrounds: 4476"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 10103.62089134253,
            "unit": "iter/sec",
            "range": "stddev: 0.00013969509224990486",
            "extra": "mean: 98.97441825602027 usec\nrounds: 1468"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 22505.20757756683,
            "unit": "iter/sec",
            "range": "stddev: 0.000017632511081106757",
            "extra": "mean: 44.43416025172765 usec\nrounds: 4287"
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
          "id": "99b97eade30f67f51d44d02f203146ba64f18703",
          "message": "Bump github.com/ringsaturn/tzf from 0.9.0 to 0.9.1 (#41)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T10:26:10+08:00",
          "tree_id": "235456cde7802409be9dcd4c1754bf3d151bafd9",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/99b97eade30f67f51d44d02f203146ba64f18703"
        },
        "date": 1667960927358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.10234678229328514,
            "unit": "iter/sec",
            "range": "stddev: 0.06266173533174363",
            "extra": "mean: 9.770702874999998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.5714248634363096,
            "unit": "iter/sec",
            "range": "stddev: 0.03681085797495917",
            "extra": "mean: 1.7500113557999897 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2006.844046499409,
            "unit": "iter/sec",
            "range": "stddev: 0.0004047450111405138",
            "extra": "mean: 498.29482352867745 usec\nrounds: 391"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 8520.554349164237,
            "unit": "iter/sec",
            "range": "stddev: 0.00013900707543761912",
            "extra": "mean: 117.36325584239576 usec\nrounds: 1669"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 8274.558554130523,
            "unit": "iter/sec",
            "range": "stddev: 0.0001513459368142996",
            "extra": "mean: 120.85236855334313 usec\nrounds: 795"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 8296.936702036237,
            "unit": "iter/sec",
            "range": "stddev: 0.00013618106276757686",
            "extra": "mean: 120.52641063955323 usec\nrounds: 1673"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 8038.91962089808,
            "unit": "iter/sec",
            "range": "stddev: 0.0001403939347791406",
            "extra": "mean: 124.3948250708201 usec\nrounds: 3550"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 7926.848950570237,
            "unit": "iter/sec",
            "range": "stddev: 0.0001490466294971356",
            "extra": "mean: 126.15353291525285 usec\nrounds: 3190"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 15789.559897800242,
            "unit": "iter/sec",
            "range": "stddev: 0.00004186483960149905",
            "extra": "mean: 63.33298752293389 usec\nrounds: 3286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "99b97eade30f67f51d44d02f203146ba64f18703",
          "message": "Bump github.com/ringsaturn/tzf from 0.9.0 to 0.9.1 (#41)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T02:26:10Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/99b97eade30f67f51d44d02f203146ba64f18703"
        },
        "date": 1668044029565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 12986.152443114648,
            "unit": "iter/sec",
            "range": "stddev: 0.00039347692537341074",
            "extra": "mean: 77.00510250287469 usec\nrounds: 3356"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "99b97eade30f67f51d44d02f203146ba64f18703",
          "message": "Bump github.com/ringsaturn/tzf from 0.9.0 to 0.9.1 (#41)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T02:26:10Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/99b97eade30f67f51d44d02f203146ba64f18703"
        },
        "date": 1668044100289,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1348663225335402,
            "unit": "iter/sec",
            "range": "stddev: 0.00618374757399623",
            "extra": "mean: 7.4147495180000025 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.7721428139090412,
            "unit": "iter/sec",
            "range": "stddev: 0.0012925454593260468",
            "extra": "mean: 1.2950972047999927 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2788.352898942976,
            "unit": "iter/sec",
            "range": "stddev: 0.0002196154671156306",
            "extra": "mean: 358.6346621975595 usec\nrounds: 2312"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13466.242786023608,
            "unit": "iter/sec",
            "range": "stddev: 0.00009362758610735615",
            "extra": "mean: 74.25976316407154 usec\nrounds: 4463"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_2",
            "value": 12955.173243767646,
            "unit": "iter/sec",
            "range": "stddev: 0.00009785761420704912",
            "extra": "mean: 77.18924179428251 usec\nrounds: 6398"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_3",
            "value": 12409.152717620704,
            "unit": "iter/sec",
            "range": "stddev: 0.00010490910857655956",
            "extra": "mean: 80.58567919629385 usec\nrounds: 5374"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_4",
            "value": 11928.96062724939,
            "unit": "iter/sec",
            "range": "stddev: 0.00010971228696031414",
            "extra": "mean: 83.8296001845873 usec\nrounds: 5415"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_5",
            "value": 12448.631831408791,
            "unit": "iter/sec",
            "range": "stddev: 0.0001043471403829447",
            "extra": "mean: 80.33011286243747 usec\nrounds: 4758"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 26174.836063993196,
            "unit": "iter/sec",
            "range": "stddev: 0.000007682631418182275",
            "extra": "mean: 38.20463278376084 usec\nrounds: 4850"
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
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T22:39:55+08:00",
          "tree_id": "6195d76bffceb71a3e26504c96c3654fb1d601e4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668091234444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 15432.507032803893,
            "unit": "iter/sec",
            "range": "stddev: 0.0003103422114478339",
            "extra": "mean: 64.7982857143278 usec\nrounds: 3899"
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
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T22:39:55+08:00",
          "tree_id": "6195d76bffceb71a3e26504c96c3654fb1d601e4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668091304219,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.15328384683531773,
            "unit": "iter/sec",
            "range": "stddev: 0.012871920410230072",
            "extra": "mean: 6.5238446232000005 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.7322712050865245,
            "unit": "iter/sec",
            "range": "stddev: 0.0004720253098621748",
            "extra": "mean: 1.3656142602000045 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 3164.02568683363,
            "unit": "iter/sec",
            "range": "stddev: 0.0001886302362928685",
            "extra": "mean: 316.05305992339805 usec\nrounds: 1285"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 13849.81476145196,
            "unit": "iter/sec",
            "range": "stddev: 0.00009155816956119882",
            "extra": "mean: 72.20313175475019 usec\nrounds: 5996"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_city",
            "value": 13003.070706984337,
            "unit": "iter/sec",
            "range": "stddev: 0.00011021258527001027",
            "extra": "mean: 76.90491135012209 usec\nrounds: 2696"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 27299.415335605543,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060395629298801",
            "extra": "mean: 36.63082112589201 usec\nrounds: 6390"
          },
          {
            "name": "tz_test.py::test_tzfpy_random_cities",
            "value": 83884.63568555847,
            "unit": "iter/sec",
            "range": "stddev: 0.000004716688761928104",
            "extra": "mean: 11.921134208038998 usec\nrounds: 13643"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T14:39:55Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668130367664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 16181.329913204061,
            "unit": "iter/sec",
            "range": "stddev: 0.00027689041873863926",
            "extra": "mean: 61.7996175446614 usec\nrounds: 4594"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T14:39:55Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668130443071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.13540503422779723,
            "unit": "iter/sec",
            "range": "stddev: 0.013213511116557298",
            "extra": "mean: 7.385249785599998 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.7726808357610404,
            "unit": "iter/sec",
            "range": "stddev: 0.004208749564307292",
            "extra": "mean: 1.2941954216 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2758.0304925518885,
            "unit": "iter/sec",
            "range": "stddev: 0.00021828118826064074",
            "extra": "mean: 362.57757218439684 usec\nrounds: 1891"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12538.377525867072,
            "unit": "iter/sec",
            "range": "stddev: 0.00010346074921469334",
            "extra": "mean: 79.75513561758436 usec\nrounds: 5486"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_city",
            "value": 10309.658578603146,
            "unit": "iter/sec",
            "range": "stddev: 0.00014286251320221022",
            "extra": "mean: 96.99642256586637 usec\nrounds: 14225"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 26567.81933181794,
            "unit": "iter/sec",
            "range": "stddev: 0.000007050183852801206",
            "extra": "mean: 37.63952123847771 usec\nrounds: 5297"
          },
          {
            "name": "tz_test.py::test_tzfpy_random_cities",
            "value": 85728.37097580713,
            "unit": "iter/sec",
            "range": "stddev: 0.00000509229047060269",
            "extra": "mean: 11.664749821062198 usec\nrounds: 9785"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T14:39:55Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668216753371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 11185.048351361162,
            "unit": "iter/sec",
            "range": "stddev: 0.00039054591530385686",
            "extra": "mean: 89.40506724571337 usec\nrounds: 3108"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T14:39:55Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668216822879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test.py::test_timezonefinder_iter_global",
            "value": 0.1336394443414064,
            "unit": "iter/sec",
            "range": "stddev: 0.017512218278909503",
            "extra": "mean: 7.482820696600004 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_tzfpy_iter_global",
            "value": 0.7645227832387966,
            "unit": "iter/sec",
            "range": "stddev: 0.0033608493870708064",
            "extra": "mean: 1.3080054930000073 sec\nrounds: 5"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_certain",
            "value": 2814.4554654338817,
            "unit": "iter/sec",
            "range": "stddev: 0.0002332628910974675",
            "extra": "mean: 355.3085178577655 usec\nrounds: 784"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random",
            "value": 12117.572617261008,
            "unit": "iter/sec",
            "range": "stddev: 0.00010937617789735851",
            "extra": "mean: 82.524778813831 usec\nrounds: 5362"
          },
          {
            "name": "tz_test.py::test_timezonefinder_random_city",
            "value": 9950.033386877585,
            "unit": "iter/sec",
            "range": "stddev: 0.00015077420022709104",
            "extra": "mean: 100.50217533127389 usec\nrounds: 3770"
          },
          {
            "name": "tz_test.py::test_tzfpy_random",
            "value": 26164.8127210253,
            "unit": "iter/sec",
            "range": "stddev: 0.00000843334511590871",
            "extra": "mean: 38.21926839921267 usec\nrounds: 4348"
          },
          {
            "name": "tz_test.py::test_tzfpy_random_cities",
            "value": 84161.6225317114,
            "unit": "iter/sec",
            "range": "stddev: 0.000005532889264611836",
            "extra": "mean: 11.881900204849405 usec\nrounds: 8788"
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
          "id": "5b91fbe8505714452db2e40f99dba02b44ff9b76",
          "message": "Bump tzfpy from 0.9.1 to 0.9.2 (#43)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-12T22:19:43+08:00",
          "tree_id": "e99e802f042cf916cf5a88adeff417b11d36ff9c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5b91fbe8505714452db2e40f99dba02b44ff9b76"
        },
        "date": 1668262816348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tz_test_without_numba.py::test_timezonefinder_without_numbarandom",
            "value": 21606.909970784975,
            "unit": "iter/sec",
            "range": "stddev: 0.000037371727916544056",
            "extra": "mean: 46.2814905672359 usec\nrounds: 53"
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
          "id": "857ff5a2c9e9e0503ad9faaff3981e5ef3c7b7ff",
          "message": "Bump timezonefinder from 6.1.0 to 6.1.1 (#9)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:08:14+08:00",
          "tree_id": "b85dcc1194c518fe0a2f77e945d4cb0090f86bd1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/857ff5a2c9e9e0503ad9faaff3981e5ef3c7b7ff"
        },
        "date": 1660964942161,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 378318,
            "unit": "ns/op",
            "extra": "2925 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4347296246,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 16473,
            "unit": "ns/op",
            "extra": "72873 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1189488665,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 17662,
            "unit": "ns/op",
            "extra": "67636 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1268933956,
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
          "id": "3b5ae7e444fa0d1f72d7235ef9e507aa0d74e888",
          "message": "Bump timezonefinder[numba] from 6.1.0 to 6.1.1 (#11)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:08:05+08:00",
          "tree_id": "b874d4d9f6d5e804062007c87bfefc8fc9aa4dd5",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3b5ae7e444fa0d1f72d7235ef9e507aa0d74e888"
        },
        "date": 1660964946030,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 394342,
            "unit": "ns/op",
            "extra": "2948 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4483678253,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 17866,
            "unit": "ns/op",
            "extra": "67248 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1279838864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 18852,
            "unit": "ns/op",
            "extra": "63303 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1362481520,
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
          "id": "51d66889e84ca2fb040834304bd56d839f84e317",
          "message": "Bump github.com/ringsaturn/tzf-rel from 0.0.2021-c2 to 0.0.2021-c3 (#10)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:08:25+08:00",
          "tree_id": "f7d66f56f54c92773102e80e9aeb12bf3e03e38f",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/51d66889e84ca2fb040834304bd56d839f84e317"
        },
        "date": 1660964959652,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 400541,
            "unit": "ns/op",
            "extra": "2937 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4343183353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 17030,
            "unit": "ns/op",
            "extra": "71703 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1190323789,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 17888,
            "unit": "ns/op",
            "extra": "66829 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1274727114,
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
          "id": "04c514c6ef3500055daec6012cb4844dae13e4e8",
          "message": "Bump github.com/ringsaturn/tzf from 0.7.0 to 0.8.1 (#12)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-20T11:13:38+08:00",
          "tree_id": "8177bc88d4547b378d0d970022b8d0dfbd9efbce",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/04c514c6ef3500055daec6012cb4844dae13e4e8"
        },
        "date": 1660965262922,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 381225,
            "unit": "ns/op",
            "extra": "2964 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4328288271,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 16466,
            "unit": "ns/op",
            "extra": "72577 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1197131150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 17523,
            "unit": "ns/op",
            "extra": "68224 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1274632694,
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
          "id": "d369c34b92ea8e8584015b85e3f7e76d90e933c2",
          "message": "Update dependabot.yml",
          "timestamp": "2022-08-27T22:30:19+08:00",
          "tree_id": "d8cd8d56c6e39c2c99602507f36e6a42f4558784",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/d369c34b92ea8e8584015b85e3f7e76d90e933c2"
        },
        "date": 1661610672780,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 389434,
            "unit": "ns/op",
            "extra": "2902 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4472701338,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 18147,
            "unit": "ns/op",
            "extra": "66108 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1297218936,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 19198,
            "unit": "ns/op",
            "extra": "62340 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1367786537,
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
          "id": "747e372b23f01505ac39cf367f3be39c71d78005",
          "message": "Update ci.yml",
          "timestamp": "2022-08-27T22:31:28+08:00",
          "tree_id": "efab4553e78e8195536f58f35c342bd0a6359fde",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/747e372b23f01505ac39cf367f3be39c71d78005"
        },
        "date": 1661610750930,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup",
            "value": 455173,
            "unit": "ns/op",
            "extra": "2462 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5037046993,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite",
            "value": 22396,
            "unit": "ns/op",
            "extra": "51888 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1620703776,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full",
            "value": 24591,
            "unit": "ns/op",
            "extra": "49762 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1730125906,
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
          "id": "ba431ff87ba746dc3319a2adf1506bcaff66304b",
          "message": "add latlong (#6)",
          "timestamp": "2022-08-27T22:39:31+08:00",
          "tree_id": "25c936bb75b6cb1601a767d2231e521c34ecd39e",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ba431ff87ba746dc3319a2adf1506bcaff66304b"
        },
        "date": 1661611230150,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39028,
            "unit": "ns/op",
            "extra": "31047 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5022268834,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13700,
            "unit": "ns/op",
            "extra": "85682 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1528255615,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14160,
            "unit": "ns/op",
            "extra": "81895 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1640032515,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 480.2,
            "unit": "ns/op",
            "extra": "2449846 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23090516,
            "unit": "ns/op",
            "extra": "49 times\n2 procs"
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
          "id": "1734e21cfee22c66d5a98e92867e6e0550f1b234",
          "message": "Bump actions/checkout from 2 to 3 (#14)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:36+08:00",
          "tree_id": "7bde2c0a15ae36ea180291f08f076b76573ee2a1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1734e21cfee22c66d5a98e92867e6e0550f1b234"
        },
        "date": 1661611299955,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42543,
            "unit": "ns/op",
            "extra": "28628 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5699707683,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 14577,
            "unit": "ns/op",
            "extra": "84598 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1623826061,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14587,
            "unit": "ns/op",
            "extra": "75795 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1630055920,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 501,
            "unit": "ns/op",
            "extra": "2382222 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 25950878,
            "unit": "ns/op",
            "extra": "45 times\n2 procs"
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
          "id": "acc9c91aaec7a82f1f6503136784da8b49f9ad07",
          "message": "Bump actions/cache from 2 to 3 (#13)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:40:54+08:00",
          "tree_id": "9f7278bcd716f8d713c26aad2c41da04aa831aea",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/acc9c91aaec7a82f1f6503136784da8b49f9ad07"
        },
        "date": 1661611303568,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35812,
            "unit": "ns/op",
            "extra": "33848 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4472359650,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11345,
            "unit": "ns/op",
            "extra": "104751 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1288334650,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12303,
            "unit": "ns/op",
            "extra": "98197 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1355107235,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 418.4,
            "unit": "ns/op",
            "extra": "2851066 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20142605,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
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
          "id": "664abe425a847ce8db74240fd02467f25c35f990",
          "message": "Bump actions/setup-python from 2 to 4 (#16)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-08-27T22:45:25+08:00",
          "tree_id": "02720dca2d461b25cb14650b5eb1819aa4c6edb4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/664abe425a847ce8db74240fd02467f25c35f990"
        },
        "date": 1661611578381,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35473,
            "unit": "ns/op",
            "extra": "35853 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4351124607,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11520,
            "unit": "ns/op",
            "extra": "103290 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1411275286,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13361,
            "unit": "ns/op",
            "extra": "89126 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1314115578,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 424,
            "unit": "ns/op",
            "extra": "2823714 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16435214,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
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
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T13:06:49+08:00",
          "tree_id": "9b15f4bccce9f2b1ce92af3a47e22725559fe52c",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1662959282910,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 41556,
            "unit": "ns/op",
            "extra": "30798 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5187688054,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 14603,
            "unit": "ns/op",
            "extra": "80913 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1711075064,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15640,
            "unit": "ns/op",
            "extra": "79484 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1819172570,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 530.1,
            "unit": "ns/op",
            "extra": "2092759 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 25779126,
            "unit": "ns/op",
            "extra": "44 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T05:06:49Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1663032912182,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35383,
            "unit": "ns/op",
            "extra": "34324 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4472668428,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11150,
            "unit": "ns/op",
            "extra": "107151 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1279199247,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12369,
            "unit": "ns/op",
            "extra": "96283 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1356465644,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 420.6,
            "unit": "ns/op",
            "extra": "2844042 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20183519,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "643b0db4421d11a6504d3bca0a1261604d96f315",
          "message": "Update ci.yml",
          "timestamp": "2022-09-12T05:06:49Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/643b0db4421d11a6504d3bca0a1261604d96f315"
        },
        "date": 1663119337503,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34566,
            "unit": "ns/op",
            "extra": "35470 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4424317800,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11718,
            "unit": "ns/op",
            "extra": "102426 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1233812931,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12727,
            "unit": "ns/op",
            "extra": "94450 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1374787356,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 426.2,
            "unit": "ns/op",
            "extra": "2803452 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16605907,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
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
          "id": "fcda50cc139fdeec91cdd96f89c6ea05ac050fe9",
          "message": "Bump timezonefinder[numba] from 6.1.1 to 6.1.2 (#18)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T12:20:13+08:00",
          "tree_id": "d65b2ca3cf0937c750fc1939870c611286f72430",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/fcda50cc139fdeec91cdd96f89c6ea05ac050fe9"
        },
        "date": 1663129268537,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 43034,
            "unit": "ns/op",
            "extra": "28210 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5478762506,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13499,
            "unit": "ns/op",
            "extra": "91178 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1526747081,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14345,
            "unit": "ns/op",
            "extra": "80907 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1608780209,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 502.6,
            "unit": "ns/op",
            "extra": "2405014 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24142736,
            "unit": "ns/op",
            "extra": "48 times\n2 procs"
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
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T12:20:25+08:00",
          "tree_id": "c45e5562a8eac07d158a1ad7683e7e2491aabf81",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663129302853,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 45628,
            "unit": "ns/op",
            "extra": "27660 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5631868034,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 15190,
            "unit": "ns/op",
            "extra": "79112 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1791620878,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 17046,
            "unit": "ns/op",
            "extra": "67293 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1845590073,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 584.4,
            "unit": "ns/op",
            "extra": "2030294 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 25404814,
            "unit": "ns/op",
            "extra": "44 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663205785230,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34431,
            "unit": "ns/op",
            "extra": "35556 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5268516329,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12563,
            "unit": "ns/op",
            "extra": "101636 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1411923187,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12665,
            "unit": "ns/op",
            "extra": "88975 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1313884243,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 426.7,
            "unit": "ns/op",
            "extra": "2814363 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16278947,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663292150897,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35458,
            "unit": "ns/op",
            "extra": "33985 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4471716503,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11216,
            "unit": "ns/op",
            "extra": "107217 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1281048325,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12133,
            "unit": "ns/op",
            "extra": "98767 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1359253703,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 417.2,
            "unit": "ns/op",
            "extra": "2865406 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20125093,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663378401328,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 31575,
            "unit": "ns/op",
            "extra": "33922 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4479279037,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11084,
            "unit": "ns/op",
            "extra": "107144 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1140747127,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 10682,
            "unit": "ns/op",
            "extra": "111510 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1355933912,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 415.7,
            "unit": "ns/op",
            "extra": "2883658 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 17491407,
            "unit": "ns/op",
            "extra": "67 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663464937951,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42172,
            "unit": "ns/op",
            "extra": "29245 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5190387397,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 14297,
            "unit": "ns/op",
            "extra": "84639 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1644558588,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15310,
            "unit": "ns/op",
            "extra": "78164 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1732767205,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 539.9,
            "unit": "ns/op",
            "extra": "2300496 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24704433,
            "unit": "ns/op",
            "extra": "46 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663551430697,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35726,
            "unit": "ns/op",
            "extra": "34112 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4468745988,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11140,
            "unit": "ns/op",
            "extra": "107094 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1296702207,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12040,
            "unit": "ns/op",
            "extra": "98721 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1362016476,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 417.3,
            "unit": "ns/op",
            "extra": "2870928 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20132363,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663637653268,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42130,
            "unit": "ns/op",
            "extra": "35156 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4326148852,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11563,
            "unit": "ns/op",
            "extra": "102718 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1229498503,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12358,
            "unit": "ns/op",
            "extra": "97027 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1317027709,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 423.1,
            "unit": "ns/op",
            "extra": "2823200 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16422237,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663724126770,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35579,
            "unit": "ns/op",
            "extra": "33948 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4461638064,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11116,
            "unit": "ns/op",
            "extra": "106735 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1279352552,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12176,
            "unit": "ns/op",
            "extra": "98770 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1359774167,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 418.4,
            "unit": "ns/op",
            "extra": "2871896 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20128589,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663810523487,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 43863,
            "unit": "ns/op",
            "extra": "28214 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5452309407,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13607,
            "unit": "ns/op",
            "extra": "87733 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1536061389,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14902,
            "unit": "ns/op",
            "extra": "80011 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1631797778,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 512.3,
            "unit": "ns/op",
            "extra": "2339780 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24337510,
            "unit": "ns/op",
            "extra": "48 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663896937148,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36793,
            "unit": "ns/op",
            "extra": "33796 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4469039651,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11243,
            "unit": "ns/op",
            "extra": "105802 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1278979814,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12105,
            "unit": "ns/op",
            "extra": "99165 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1355552105,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 418.9,
            "unit": "ns/op",
            "extra": "2860494 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20136610,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1663983269396,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 37100,
            "unit": "ns/op",
            "extra": "32701 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4483729834,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11240,
            "unit": "ns/op",
            "extra": "104026 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1283413744,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12538,
            "unit": "ns/op",
            "extra": "96411 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1360509150,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 417.6,
            "unit": "ns/op",
            "extra": "2867815 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20136897,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664069622611,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 38501,
            "unit": "ns/op",
            "extra": "32443 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4486136333,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11311,
            "unit": "ns/op",
            "extra": "105484 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1280598465,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12345,
            "unit": "ns/op",
            "extra": "97395 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1359793227,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 418.7,
            "unit": "ns/op",
            "extra": "2860423 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20162026,
            "unit": "ns/op",
            "extra": "57 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664156178351,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40887,
            "unit": "ns/op",
            "extra": "29758 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5214793126,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12855,
            "unit": "ns/op",
            "extra": "91152 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1482583168,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13897,
            "unit": "ns/op",
            "extra": "83410 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1566823023,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 478.9,
            "unit": "ns/op",
            "extra": "2465966 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23596291,
            "unit": "ns/op",
            "extra": "49 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664242506356,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 37367,
            "unit": "ns/op",
            "extra": "32371 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4490931576,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11217,
            "unit": "ns/op",
            "extra": "105414 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1272678064,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12499,
            "unit": "ns/op",
            "extra": "95581 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1351795649,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 414.7,
            "unit": "ns/op",
            "extra": "2895606 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19244785,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9e814f4114a15667e715dd6fc4fc02f42626b3f6",
          "message": "Bump timezonefinder from 6.1.1 to 6.1.2 (#17)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-14T04:20:25Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/9e814f4114a15667e715dd6fc4fc02f42626b3f6"
        },
        "date": 1664328910172,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 43515,
            "unit": "ns/op",
            "extra": "28624 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5421667631,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13309,
            "unit": "ns/op",
            "extra": "89571 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1528222974,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14754,
            "unit": "ns/op",
            "extra": "81030 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1616785928,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 495.4,
            "unit": "ns/op",
            "extra": "2431851 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23122689,
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
          "id": "f6d68daa6bc741e161b32c52d03f14699730e587",
          "message": "Bump timezonefinder from 6.1.2 to 6.1.3 (#20)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T13:12:54+08:00",
          "tree_id": "ce8c9da562f04db283d81592d0d1236c7cd967a5",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/f6d68daa6bc741e161b32c52d03f14699730e587"
        },
        "date": 1664342030423,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34991,
            "unit": "ns/op",
            "extra": "35130 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4337500130,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11292,
            "unit": "ns/op",
            "extra": "105465 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1188669453,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13158,
            "unit": "ns/op",
            "extra": "99063 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1267686886,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 423.2,
            "unit": "ns/op",
            "extra": "2840425 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16267003,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
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
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T13:13:07+08:00",
          "tree_id": "78d239d52bd72fa988e6de48e6d0fac432326bce",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664342043007,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 37836,
            "unit": "ns/op",
            "extra": "32779 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4473241737,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11279,
            "unit": "ns/op",
            "extra": "105585 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1274985632,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12345,
            "unit": "ns/op",
            "extra": "96124 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1350202885,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 412.3,
            "unit": "ns/op",
            "extra": "2905032 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19241886,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664415377872,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39688,
            "unit": "ns/op",
            "extra": "31701 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4711521760,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12733,
            "unit": "ns/op",
            "extra": "103262 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1323897506,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12415,
            "unit": "ns/op",
            "extra": "96175 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1414346443,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 506.1,
            "unit": "ns/op",
            "extra": "2366516 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20298442,
            "unit": "ns/op",
            "extra": "58 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664501863203,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 38793,
            "unit": "ns/op",
            "extra": "31442 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4526291206,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11453,
            "unit": "ns/op",
            "extra": "104478 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1275991595,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12760,
            "unit": "ns/op",
            "extra": "94323 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1355245806,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 422.9,
            "unit": "ns/op",
            "extra": "2835927 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19294964,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664588151211,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42351,
            "unit": "ns/op",
            "extra": "29346 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5319368843,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 14582,
            "unit": "ns/op",
            "extra": "80271 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1670873349,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15727,
            "unit": "ns/op",
            "extra": "76128 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1751384583,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 527.1,
            "unit": "ns/op",
            "extra": "2074497 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 25648722,
            "unit": "ns/op",
            "extra": "46 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664674507180,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35505,
            "unit": "ns/op",
            "extra": "34095 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4523385853,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11114,
            "unit": "ns/op",
            "extra": "107206 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1276201583,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12032,
            "unit": "ns/op",
            "extra": "100519 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1348077401,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 411.5,
            "unit": "ns/op",
            "extra": "2903140 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19192589,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664760770088,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34529,
            "unit": "ns/op",
            "extra": "35269 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5249628543,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11397,
            "unit": "ns/op",
            "extra": "104908 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1190397064,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12783,
            "unit": "ns/op",
            "extra": "98076 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1271523934,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 422.7,
            "unit": "ns/op",
            "extra": "2813683 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16277378,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664847274253,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34458,
            "unit": "ns/op",
            "extra": "35532 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4335703867,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11222,
            "unit": "ns/op",
            "extra": "105801 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1188085620,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11932,
            "unit": "ns/op",
            "extra": "99172 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1375497286,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 419.2,
            "unit": "ns/op",
            "extra": "2857288 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16321478,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1664933597668,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35689,
            "unit": "ns/op",
            "extra": "34302 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4346739371,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11592,
            "unit": "ns/op",
            "extra": "103009 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1194025411,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12594,
            "unit": "ns/op",
            "extra": "95622 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1272547589,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 424.8,
            "unit": "ns/op",
            "extra": "2817500 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16320095,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665019979316,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42239,
            "unit": "ns/op",
            "extra": "28870 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5334809771,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13307,
            "unit": "ns/op",
            "extra": "90052 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1516652659,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14505,
            "unit": "ns/op",
            "extra": "82992 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1610918575,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 492.9,
            "unit": "ns/op",
            "extra": "2426910 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23040304,
            "unit": "ns/op",
            "extra": "50 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665106427556,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35082,
            "unit": "ns/op",
            "extra": "29848 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4876862774,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11372,
            "unit": "ns/op",
            "extra": "102445 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1189673017,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12287,
            "unit": "ns/op",
            "extra": "97419 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1275892650,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 421.7,
            "unit": "ns/op",
            "extra": "2850085 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16286876,
            "unit": "ns/op",
            "extra": "72 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665192785449,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 37756,
            "unit": "ns/op",
            "extra": "32824 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4484917801,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11138,
            "unit": "ns/op",
            "extra": "105855 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1274463697,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12096,
            "unit": "ns/op",
            "extra": "98442 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1351423008,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 412.2,
            "unit": "ns/op",
            "extra": "2886570 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19199459,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e75c9e9944285d15106073cacde3a8c412280bce",
          "message": "Bump timezonefinder[numba] from 6.1.2 to 6.1.3 (#19)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-09-28T05:13:07Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/e75c9e9944285d15106073cacde3a8c412280bce"
        },
        "date": 1665279259596,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40503,
            "unit": "ns/op",
            "extra": "27679 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5257272433,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13721,
            "unit": "ns/op",
            "extra": "82000 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1639552976,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 16226,
            "unit": "ns/op",
            "extra": "78930 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1804148311,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 516.5,
            "unit": "ns/op",
            "extra": "2455609 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23789242,
            "unit": "ns/op",
            "extra": "50 times\n2 procs"
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
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T23:51:30+08:00",
          "tree_id": "3842c08d8c0be31a270b9c886cc66943edbc266d",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665330761147,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39228,
            "unit": "ns/op",
            "extra": "30033 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5015869818,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12724,
            "unit": "ns/op",
            "extra": "94740 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1434673665,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13675,
            "unit": "ns/op",
            "extra": "84859 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1540725888,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 467.6,
            "unit": "ns/op",
            "extra": "2585420 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 22268945,
            "unit": "ns/op",
            "extra": "52 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665365747684,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36063,
            "unit": "ns/op",
            "extra": "33087 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4484780251,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11161,
            "unit": "ns/op",
            "extra": "106287 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1278411296,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12169,
            "unit": "ns/op",
            "extra": "98965 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1358634496,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 411.9,
            "unit": "ns/op",
            "extra": "2911551 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19324238,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665452069418,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36865,
            "unit": "ns/op",
            "extra": "31882 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4808583600,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11900,
            "unit": "ns/op",
            "extra": "90506 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1528602620,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14593,
            "unit": "ns/op",
            "extra": "83128 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1663332036,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 464.4,
            "unit": "ns/op",
            "extra": "2504995 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 21900348,
            "unit": "ns/op",
            "extra": "54 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "1eeb356a19338ae0cae72199c7661d71919a4de5",
          "message": "bump go version",
          "timestamp": "2022-10-09T15:51:30Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1eeb356a19338ae0cae72199c7661d71919a4de5"
        },
        "date": 1665538500638,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 45232,
            "unit": "ns/op",
            "extra": "27148 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5471939090,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 14948,
            "unit": "ns/op",
            "extra": "82411 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1736387588,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 16298,
            "unit": "ns/op",
            "extra": "72073 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1878596896,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 548.9,
            "unit": "ns/op",
            "extra": "2206064 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 25175016,
            "unit": "ns/op",
            "extra": "45 times\n2 procs"
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
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T13:38:04+08:00",
          "tree_id": "45b654613aab864c50785a4d5c457b736922a910",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665553161645,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 45331,
            "unit": "ns/op",
            "extra": "25982 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 6010091493,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 15149,
            "unit": "ns/op",
            "extra": "84585 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1729114353,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15499,
            "unit": "ns/op",
            "extra": "68840 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1792276724,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 514.8,
            "unit": "ns/op",
            "extra": "2220757 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24604351,
            "unit": "ns/op",
            "extra": "46 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665624830277,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35501,
            "unit": "ns/op",
            "extra": "32671 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4536790398,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12387,
            "unit": "ns/op",
            "extra": "94905 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1517236508,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14329,
            "unit": "ns/op",
            "extra": "83517 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1596014649,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 450.7,
            "unit": "ns/op",
            "extra": "2651445 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 20932412,
            "unit": "ns/op",
            "extra": "56 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665711292898,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39631,
            "unit": "ns/op",
            "extra": "29326 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5104618849,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13502,
            "unit": "ns/op",
            "extra": "87280 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1639347536,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14732,
            "unit": "ns/op",
            "extra": "76452 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1744714682,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 480,
            "unit": "ns/op",
            "extra": "2454958 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 22932092,
            "unit": "ns/op",
            "extra": "51 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665797641155,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35929,
            "unit": "ns/op",
            "extra": "33858 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4471043820,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11258,
            "unit": "ns/op",
            "extra": "105315 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1272671355,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12350,
            "unit": "ns/op",
            "extra": "95761 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1354609324,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 416.4,
            "unit": "ns/op",
            "extra": "2893348 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19339019,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665883985565,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40682,
            "unit": "ns/op",
            "extra": "31362 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4687507269,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12691,
            "unit": "ns/op",
            "extra": "90152 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1489247163,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13435,
            "unit": "ns/op",
            "extra": "90412 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1638994304,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 453.8,
            "unit": "ns/op",
            "extra": "2555656 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 22274493,
            "unit": "ns/op",
            "extra": "49 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1665970539330,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39657,
            "unit": "ns/op",
            "extra": "30685 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5010541927,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12674,
            "unit": "ns/op",
            "extra": "96181 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1410283576,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12980,
            "unit": "ns/op",
            "extra": "89061 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1481398864,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 450.7,
            "unit": "ns/op",
            "extra": "2724132 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 21524120,
            "unit": "ns/op",
            "extra": "54 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666056910895,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35671,
            "unit": "ns/op",
            "extra": "33702 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4458671448,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11068,
            "unit": "ns/op",
            "extra": "107137 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1272246056,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12044,
            "unit": "ns/op",
            "extra": "100330 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1345467275,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 410.2,
            "unit": "ns/op",
            "extra": "2924600 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19290110,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666143188414,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36078,
            "unit": "ns/op",
            "extra": "33577 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4472838865,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11257,
            "unit": "ns/op",
            "extra": "105514 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1273639402,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12295,
            "unit": "ns/op",
            "extra": "97717 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1348197327,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 365.7,
            "unit": "ns/op",
            "extra": "2869855 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19282080,
            "unit": "ns/op",
            "extra": "61 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666229673059,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 37814,
            "unit": "ns/op",
            "extra": "31740 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4484163802,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11274,
            "unit": "ns/op",
            "extra": "105926 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1273341492,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 10988,
            "unit": "ns/op",
            "extra": "110043 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1199632041,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 364.9,
            "unit": "ns/op",
            "extra": "3277122 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16993912,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.1 to 0.8.2 (#21)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-12T05:38:04Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/702bd55b7259b2d24ebf8a4dd5a02b1b5fd89c68"
        },
        "date": 1666315967967,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36971,
            "unit": "ns/op",
            "extra": "32469 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4470806795,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11276,
            "unit": "ns/op",
            "extra": "105399 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1280852124,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12407,
            "unit": "ns/op",
            "extra": "96616 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1362686419,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 419.2,
            "unit": "ns/op",
            "extra": "2846971 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19375882,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
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
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T23:03:53+08:00",
          "tree_id": "85fed4f3f253d8d02da142385f6cba57f4213734",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666364704495,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40920,
            "unit": "ns/op",
            "extra": "29690 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5152688949,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12548,
            "unit": "ns/op",
            "extra": "95601 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1439394797,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13721,
            "unit": "ns/op",
            "extra": "86612 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1543771091,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 482.5,
            "unit": "ns/op",
            "extra": "2500789 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 22178883,
            "unit": "ns/op",
            "extra": "51 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666460498964,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34056,
            "unit": "ns/op",
            "extra": "35180 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4374597741,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11072,
            "unit": "ns/op",
            "extra": "108712 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1181819737,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12397,
            "unit": "ns/op",
            "extra": "101504 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1317286955,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 423.7,
            "unit": "ns/op",
            "extra": "2836507 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16616929,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666488759470,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34345,
            "unit": "ns/op",
            "extra": "31089 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4321997677,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 10860,
            "unit": "ns/op",
            "extra": "108932 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1180426285,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11679,
            "unit": "ns/op",
            "extra": "101940 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1260219569,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 423.7,
            "unit": "ns/op",
            "extra": "2828312 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16540332,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666575226346,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 45334,
            "unit": "ns/op",
            "extra": "26274 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5801004916,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13336,
            "unit": "ns/op",
            "extra": "90012 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1699434078,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14617,
            "unit": "ns/op",
            "extra": "75571 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1602722883,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 581.2,
            "unit": "ns/op",
            "extra": "2361772 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23360754,
            "unit": "ns/op",
            "extra": "49 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666661599084,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36329,
            "unit": "ns/op",
            "extra": "33235 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4482200975,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 10863,
            "unit": "ns/op",
            "extra": "108685 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1256540798,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12045,
            "unit": "ns/op",
            "extra": "100246 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1336979971,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 415.7,
            "unit": "ns/op",
            "extra": "2899263 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19312742,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666748065375,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34400,
            "unit": "ns/op",
            "extra": "34620 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4346227917,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11125,
            "unit": "ns/op",
            "extra": "107269 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1181299579,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12285,
            "unit": "ns/op",
            "extra": "96966 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1259534269,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 425.9,
            "unit": "ns/op",
            "extra": "2829877 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16713284,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666834404586,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 25051,
            "unit": "ns/op",
            "extra": "48315 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 3430763726,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 7963,
            "unit": "ns/op",
            "extra": "150198 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 628839522,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 8705,
            "unit": "ns/op",
            "extra": "136353 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 675338230,
            "unit": "ns/op",
            "extra": "2 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 304.7,
            "unit": "ns/op",
            "extra": "3928827 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 11826890,
            "unit": "ns/op",
            "extra": "99 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1666920854239,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40478,
            "unit": "ns/op",
            "extra": "29653 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5034243197,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13363,
            "unit": "ns/op",
            "extra": "85480 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1560182701,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14489,
            "unit": "ns/op",
            "extra": "82425 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1673771317,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 491.5,
            "unit": "ns/op",
            "extra": "2509576 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23470172,
            "unit": "ns/op",
            "extra": "50 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "dd58b83e8552d6c7d40946e45b723049eaf137bd",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.2 to 0.8.3 (#22)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-21T15:03:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/dd58b83e8552d6c7d40946e45b723049eaf137bd"
        },
        "date": 1667007253835,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 45757,
            "unit": "ns/op",
            "extra": "26158 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5684877299,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 15606,
            "unit": "ns/op",
            "extra": "78981 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1794069739,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 16957,
            "unit": "ns/op",
            "extra": "71678 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1921705482,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 574.9,
            "unit": "ns/op",
            "extra": "2149047 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 26411277,
            "unit": "ns/op",
            "extra": "44 times\n2 procs"
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
          "id": "1a6fc960ff89752bbea7a6f428fea4e4e9ca8086",
          "message": "Bump timezonefinder[numba] from 6.1.3 to 6.1.5 (#25)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-29T20:08:07+08:00",
          "tree_id": "a4cf35f4762b063155cfc89aff395627a3b8e542",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/1a6fc960ff89752bbea7a6f428fea4e4e9ca8086"
        },
        "date": 1667045339191,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34577,
            "unit": "ns/op",
            "extra": "34981 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4337773312,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12189,
            "unit": "ns/op",
            "extra": "108597 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1181898861,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12190,
            "unit": "ns/op",
            "extra": "99704 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1262199801,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 429.4,
            "unit": "ns/op",
            "extra": "2778165 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16625951,
            "unit": "ns/op",
            "extra": "70 times\n2 procs"
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
          "id": "80acc1c7b92f5a812abc0f4506648a9246ff4b56",
          "message": "Bump timezonefinder from 6.1.3 to 6.1.5 (#26)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-30T01:04:50+08:00",
          "tree_id": "8b885f5f397be43b40e470ded131c28adb0de122",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/80acc1c7b92f5a812abc0f4506648a9246ff4b56"
        },
        "date": 1667063141934,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 34001,
            "unit": "ns/op",
            "extra": "35685 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4395480745,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 10864,
            "unit": "ns/op",
            "extra": "109305 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1178846666,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11625,
            "unit": "ns/op",
            "extra": "102152 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1261461898,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 421.2,
            "unit": "ns/op",
            "extra": "2861984 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16848014,
            "unit": "ns/op",
            "extra": "69 times\n2 procs"
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
          "id": "286190abe42dd577254dc94cfdf8bcaf8749f5c4",
          "message": "add localtimezone (#27)",
          "timestamp": "2022-10-30T01:07:38+08:00",
          "tree_id": "bed6d7e665e71c982bef3b7bb465118b08a2bbc1",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/286190abe42dd577254dc94cfdf8bcaf8749f5c4"
        },
        "date": 1667063334106,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39574,
            "unit": "ns/op",
            "extra": "29037 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4886181713,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12165,
            "unit": "ns/op",
            "extra": "97917 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1362706374,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13097,
            "unit": "ns/op",
            "extra": "86722 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1503663503,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 470.6,
            "unit": "ns/op",
            "extra": "2581413 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 21697630,
            "unit": "ns/op",
            "extra": "51 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 24522,
            "unit": "ns/op",
            "extra": "49660 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 2879591584,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "286190abe42dd577254dc94cfdf8bcaf8749f5c4",
          "message": "add localtimezone (#27)",
          "timestamp": "2022-10-29T17:07:38Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/286190abe42dd577254dc94cfdf8bcaf8749f5c4"
        },
        "date": 1667093686203,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 41115,
            "unit": "ns/op",
            "extra": "29510 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5223642681,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13818,
            "unit": "ns/op",
            "extra": "77179 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1645440296,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14991,
            "unit": "ns/op",
            "extra": "81609 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1707870466,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 523.9,
            "unit": "ns/op",
            "extra": "2217604 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24542660,
            "unit": "ns/op",
            "extra": "48 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 26228,
            "unit": "ns/op",
            "extra": "43903 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3310409190,
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
          "id": "cdc127631bf5b305277731bd2a4ca6e1d5e87d14",
          "message": "add timezonemapper (#28)",
          "timestamp": "2022-10-30T13:48:33+08:00",
          "tree_id": "3b00fb15a778d74c66810656e4901fc19e7e0706",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/cdc127631bf5b305277731bd2a4ca6e1d5e87d14"
        },
        "date": 1667108986696,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 40059,
            "unit": "ns/op",
            "extra": "30489 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4504642018,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11680,
            "unit": "ns/op",
            "extra": "102432 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1301546909,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12936,
            "unit": "ns/op",
            "extra": "91491 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1378658740,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 426.6,
            "unit": "ns/op",
            "extra": "2810515 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19474540,
            "unit": "ns/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 21753,
            "unit": "ns/op",
            "extra": "54603 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 2630834997,
            "unit": "ns/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 131.8,
            "unit": "ns/op",
            "extra": "8926921 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2246016,
            "unit": "ns/op",
            "extra": "529 times\n2 procs"
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
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T14:42:28+08:00",
          "tree_id": "9321a91fe37e75cc12f374a67a51867e86d84f61",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667112207534,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 41682,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29144 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5346466031,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "97735 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1189074310,
            "unit": "ns/op\t     392 B/op\t      10 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12075,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99168 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1267909579,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 418.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2863542 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16382103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 21852,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "54254 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 2576928258,
            "unit": "ns/op\t 3807032 B/op\t  273005 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 128.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9192055 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2239250,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "530 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T06:42:28Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667180070162,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42050,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30165 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4886180266,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "90360 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1481065393,
            "unit": "ns/op\t     672 B/op\t      13 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13680,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87817 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1500284830,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 458.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2628238 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 21105375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 23384,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "51346 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 2914426063,
            "unit": "ns/op\t 3807032 B/op\t  273005 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 136.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8496943 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2417260,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "474 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "id": "c6d520171967662c6750e62b90a1ff10973a9e6a",
          "message": "add benchmem",
          "timestamp": "2022-10-30T06:42:28Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/c6d520171967662c6750e62b90a1ff10973a9e6a"
        },
        "date": 1667266444734,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42964,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31207 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5348165687,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11399,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "95748 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1187647447,
            "unit": "ns/op\t     392 B/op\t      10 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12266,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "94048 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1268433001,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 422.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2853159 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16424451,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 22345,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "54864 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 2602787224,
            "unit": "ns/op\t 3806792 B/op\t  273002 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 131.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9219758 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2250825,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "530 times\n2 procs"
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
          "id": "5561ffe838a565ed1f5331726f7d5da5bce34082",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.3 to 0.8.5 (#31)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T09:55:27+08:00",
          "tree_id": "3ddf7caea0d2221980ba44d59a90de0c7f428f82",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5561ffe838a565ed1f5331726f7d5da5bce34082"
        },
        "date": 1667267789165,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35287,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34198 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4516357847,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "106897 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1274242771,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11967,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99831 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1352405919,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 412.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2901097 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19359050,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 21615,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "55455 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 2623748637,
            "unit": "ns/op\t 3806792 B/op\t  273002 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 124.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9520856 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2225232,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "534 times\n2 procs"
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
          "id": "4986f558469766e661ef3d4b9c88c6d0b1278db9",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.2 to 2.1.3 (#33)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T10:38:23+08:00",
          "tree_id": "b2b2627a453d13d8e22440186caa58208d4d9013",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4986f558469766e661ef3d4b9c88c6d0b1278db9"
        },
        "date": 1667270369292,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 43411,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33644 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4456001256,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11091,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "107061 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1272898683,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12057,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "98850 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1347865631,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 412.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2903702 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19384432,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 21596,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "55510 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 2625792021,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 125.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9496140 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2227112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "534 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "4986f558469766e661ef3d4b9c88c6d0b1278db9",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.2 to 2.1.3 (#33)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T02:38:23Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/4986f558469766e661ef3d4b9c88c6d0b1278db9"
        },
        "date": 1667352878097,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 43512,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28412 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5338143545,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 13753,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89022 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1566967700,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14518,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "80222 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1684837651,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 495.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2423211 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24249568,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 25738,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "46120 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3222514248,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 152.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7367005 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2726006,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "445 times\n2 procs"
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
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T10:09:50+08:00",
          "tree_id": "c919b2631e5c0f8c5a070e42e00f66212c02f650",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667355071402,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 41074,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29130 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5101482642,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 14171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86398 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1591741526,
            "unit": "ns/op\t     800 B/op\t      21 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15066,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86325 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1657278108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 518.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2388940 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23497913,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 37013,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "33830 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4501297567,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 153.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8186338 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2668950,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "470 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T02:09:50Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667439211331,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36486,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32901 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4480344329,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 11023,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "106993 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1241038628,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11968,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99788 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1317672330,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 419.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2856132 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19477013,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 29976,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "39712 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3628559911,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 127.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9342026 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2290294,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "517 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3e997a769863be5c7ba165d0c1ec41cd1cd0db8d",
          "message": "Bump github.com/albertyw/localtimezone/v2 from 2.1.3 to 2.1.4 (#34)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-02T02:09:50Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/3e997a769863be5c7ba165d0c1ec41cd1cd0db8d"
        },
        "date": 1667525626611,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35616,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34028 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4470518489,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 10963,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "107982 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1241699438,
            "unit": "ns/op\t     800 B/op\t      21 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11990,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100045 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1315103338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 420.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2852607 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19426409,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 30382,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "39032 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3725594672,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 126.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9478128 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2250521,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "526 times\n2 procs"
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
          "id": "5ab5e0b3f5a11147f4015ddecbbc4996e3f45198",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.5 to 0.8.6 (#35)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-04T23:23:37+08:00",
          "tree_id": "c6c6735e818424d77c54d9c78b37664e41b9e422",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ab5e0b3f5a11147f4015ddecbbc4996e3f45198"
        },
        "date": 1667575494022,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 36151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "32253 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4468025818,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 10874,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "109513 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1225620060,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11875,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100838 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1303672288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 421.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2813194 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19460741,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 30086,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "39643 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3682695139,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 127.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9295683 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2242976,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "529 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5ab5e0b3f5a11147f4015ddecbbc4996e3f45198",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.5 to 0.8.6 (#35)\n\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-04T15:23:37Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/5ab5e0b3f5a11147f4015ddecbbc4996e3f45198"
        },
        "date": 1667612020487,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42339,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28886 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5263204463,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12758,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93498 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1478292244,
            "unit": "ns/op\t     800 B/op\t      21 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13977,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "86697 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1546241699,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 491.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2431868 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23551670,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 35426,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "33828 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4378964285,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 146.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8018263 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2635189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "446 times\n2 procs"
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
          "id": "522befbbd825454768137ea88f19b7392444ce8d",
          "message": "add worldcity benchmark (#37)",
          "timestamp": "2022-11-05T14:53:27+08:00",
          "tree_id": "254105c7844b87c49fffc55eea0fa4066300c0de",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/522befbbd825454768137ea88f19b7392444ce8d"
        },
        "date": 1667631293344,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42902,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27984 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 126763,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8085 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5298727635,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 12940,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "91827 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1518646863,
            "unit": "ns/op\t     800 B/op\t      21 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 10808,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "105010 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83907 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 13619,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "87307 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1552510956,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 489.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2459620 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 445.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2794912 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23895327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 36942,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "34412 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 31134,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "42616 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4290220366,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 148.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7845091 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 249.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4373644 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2673440,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "433 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "522befbbd825454768137ea88f19b7392444ce8d",
          "message": "add worldcity benchmark (#37)",
          "timestamp": "2022-11-05T06:53:27Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/522befbbd825454768137ea88f19b7392444ce8d"
        },
        "date": 1667698642558,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 43783,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25996 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 128596,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8487 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5373523383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 14310,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84009 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1714935860,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 11386,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "105224 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "78070 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 13980,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85124 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1774849807,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 532,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2261173 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 509.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2589926 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24474189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 38729,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "30656 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 31060,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "36757 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4804345263,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 169.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6672688 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 275.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4390114 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2908884,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "394 times\n2 procs"
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
          "id": "8ee4ecabec256b875d5b174b6edf6e339ab1d972",
          "message": "lock tzfpy version",
          "timestamp": "2022-11-06T18:36:07+08:00",
          "tree_id": "ab8b734d18e2e81e9e60936db8a2795a901d64f8",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/8ee4ecabec256b875d5b174b6edf6e339ab1d972"
        },
        "date": 1667731071352,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 44870,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28176 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 135668,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9057 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5786596088,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 15826,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "78645 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1765155776,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 12894,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "102584 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 17177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64520 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 15646,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81502 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1925205628,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 561.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1954602 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 468.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2477565 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24900774,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 41277,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "28910 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 32971,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "37508 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 5127452254,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 186.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5678058 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 270.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3892368 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2984282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "402 times\n2 procs"
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
          "id": "abc156a82911ec3432abd4b7ebd719ac3914a324",
          "message": "Bump github.com/ringsaturn/tzf from 0.8.6 to 0.9.0 (#39)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.8.6 to 0.9.0.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.8.6...v0.9.0)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-minor\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-06T21:08:38+08:00",
          "tree_id": "641b2ba071ae6345d8bdfc9ccb123f9636ab3cf9",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/abc156a82911ec3432abd4b7ebd719ac3914a324"
        },
        "date": 1667740199352,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 29223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38120 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 86909,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13243 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 3705604482,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 10803,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "109776 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 1156739900,
            "unit": "ns/op\t     520 B/op\t      18 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 9519,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "129564 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11614,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "101474 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 11240,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "104718 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1242553063,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 421.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2829354 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 340.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3503535 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16569810,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 29953,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "39652 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 25418,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "47871 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3538376619,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 127.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9340772 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 178.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6483514 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2178953,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "544 times\n2 procs"
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
          "id": "77ece407cb3389a403dbef0823a633a47c25ad3b",
          "message": "replace tzf lite with tzf's Default",
          "timestamp": "2022-11-06T21:11:09+08:00",
          "tree_id": "090c1009b340b9a778ca5af069e03e9b7fcce9ef",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/77ece407cb3389a403dbef0823a633a47c25ad3b"
        },
        "date": 1667740360610,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42831,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28723 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 126236,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8763 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5319031315,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2962,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "398532 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 198674479,
            "unit": "ns/op\t     240 B/op\t      10 allocs/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2610,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "440254 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83050 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 13632,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "88524 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1592338456,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 497.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2386706 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 438.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2671989 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23270614,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 35565,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "33884 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 28264,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "42608 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4413532603,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 150.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7917147 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 252.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4918512 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2642367,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "451 times\n2 procs"
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
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T21:11:53+08:00",
          "tree_id": "3d6e826480a693433800dabb20460fc6684c2cb3",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667740410635,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 44610,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29079 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 127972,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9052 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5355352185,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 3279,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "356894 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 210003345,
            "unit": "ns/op\t     206 B/op\t      10 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2795,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "424560 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15696,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "76447 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 14124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81800 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1749930968,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 516.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2279380 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 454.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2618328 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 25038345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 39036,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "31754 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 30593,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "40308 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4806257771,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 156.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7285916 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 264.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4476708 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2823926,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "422 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667784857216,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 41131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30812 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 122590,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9204 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5205902118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2792,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "389749 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 178362270,
            "unit": "ns/op\t     240 B/op\t      10 allocs/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2579,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "421603 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14052,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "84231 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 13200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "89287 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1528478535,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 477.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2524153 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 416,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2781854 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 22108344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 34537,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "35582 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 27614,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "45100 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4182488843,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 148.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7933965 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 243,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4786922 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2602577,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "442 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667871215712,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 29534,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41625 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 87734,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13280 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 3655381133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2576,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "450709 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 148358929,
            "unit": "ns/op\t     224 B/op\t       9 allocs/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2350,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "494532 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11996,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "93090 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 11997,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99627 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1280065966,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 427,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2809106 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 369,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3118596 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 16665889,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 30090,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "39650 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 25285,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "47431 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3526155650,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 127.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9349768 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 191.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5825013 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2176599,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "546 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ff3deaf974a39038d8b8d4702aadd3a96aad5f98",
          "message": "Update requirements.txt",
          "timestamp": "2022-11-06T13:11:53Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/ff3deaf974a39038d8b8d4702aadd3a96aad5f98"
        },
        "date": 1667957661591,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39028,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30702 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 119577,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9045 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4855035417,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2661,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "444435 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 160833303,
            "unit": "ns/op\t     224 B/op\t       9 allocs/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "488089 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12806,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "94645 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 12624,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "96310 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1460426129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 459.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2649871 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 390.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3135573 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 21662563,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "54 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 33792,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "36595 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 26372,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "45085 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4217510502,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 137.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8678373 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 209.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5734898 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2402951,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "478 times\n2 procs"
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
          "id": "f6eb05ce072e5fbbd4a5f3acfba6f14ea647a196",
          "message": "Bump tzfpy from 0.9.0 to 0.9.1 (#40)\n\nBumps [tzfpy](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: tzfpy\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T10:25:50+08:00",
          "tree_id": "3a71eb0dda0e1c0e0b34835240c89e86b743b759",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/f6eb05ce072e5fbbd4a5f3acfba6f14ea647a196"
        },
        "date": 1667960842639,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35569,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "34338 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 103609,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4451704905,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2366,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "466921 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 150647345,
            "unit": "ns/op\t     184 B/op\t       9 allocs/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "516837 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 11811,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99414 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 11168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100600 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1342379752,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 413.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2901313 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 341.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3468570 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19277623,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 29579,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "40034 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 23678,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "50256 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3639166021,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 126.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9379934 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 188.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6282663 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2224874,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "534 times\n2 procs"
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
          "id": "99b97eade30f67f51d44d02f203146ba64f18703",
          "message": "Bump github.com/ringsaturn/tzf from 0.9.0 to 0.9.1 (#41)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T10:26:10+08:00",
          "tree_id": "235456cde7802409be9dcd4c1754bf3d151bafd9",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/99b97eade30f67f51d44d02f203146ba64f18703"
        },
        "date": 1667960868299,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42473,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27975 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 127617,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8859 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5338428546,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2938,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "391328 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 188472755,
            "unit": "ns/op\t     240 B/op\t      10 allocs/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2646,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "422673 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 14669,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81841 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 13764,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85258 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1596008029,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 497.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2405997 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 445.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2659095 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23185024,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 35866,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "33283 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 28019,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "42740 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4421657065,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 149.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8050843 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 257.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4494271 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2665485,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "453 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "99b97eade30f67f51d44d02f203146ba64f18703",
          "message": "Bump github.com/ringsaturn/tzf from 0.9.0 to 0.9.1 (#41)\n\nBumps [github.com/ringsaturn/tzf](https://github.com/ringsaturn/tzf) from 0.9.0 to 0.9.1.\r\n- [Release notes](https://github.com/ringsaturn/tzf/releases)\r\n- [Commits](https://github.com/ringsaturn/tzf/compare/v0.9.0...v0.9.1)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: github.com/ringsaturn/tzf\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-09T02:26:10Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/99b97eade30f67f51d44d02f203146ba64f18703"
        },
        "date": 1668044086129,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 42283,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28743 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 126021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8696 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5306116181,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 3691,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "321094 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 253851228,
            "unit": "ns/op\t     226 B/op\t      10 allocs/op",
            "extra": "4 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 3052,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "380721 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15415,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77043 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 14550,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81507 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1748784883,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 522.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2260177 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 470.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2504958 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 24693773,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "46 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 38042,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "31402 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 30775,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "39954 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4738580314,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 161.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6984504 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 280.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4077986 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2868272,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "406 times\n2 procs"
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
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T22:39:55+08:00",
          "tree_id": "6195d76bffceb71a3e26504c96c3654fb1d601e4",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668091295359,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 41655,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29382 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 123715,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8389 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5198858091,
            "unit": "ns/op\t       8 B/op\t       1 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 3255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "368098 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 218789386,
            "unit": "ns/op\t     262 B/op\t      10 allocs/op",
            "extra": "5 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2854,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "412461 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 15657,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "76576 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 14144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "85310 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1714245671,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 513,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2221869 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 454.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2524398 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 23901688,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 36717,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "32566 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 29426,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "41580 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4547442586,
            "unit": "ns/op\t 3807000 B/op\t  272999 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 152.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7686160 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 253.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4451805 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2692067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "451 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T14:39:55Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668130407503,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 35730,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "33458 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 104645,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10000 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 4457972349,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2421,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "462330 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 150979584,
            "unit": "ns/op\t     184 B/op\t       9 allocs/op",
            "extra": "7 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "527008 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 12058,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "99278 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 11506,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "104245 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1332866915,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 415,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2887074 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 365.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3227065 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 19322675,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 29822,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "40388 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 23794,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "51831 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 3697880772,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 126.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9337320 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 211.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5819410 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2224397,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "534 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "ringsaturn",
            "username": "ringsaturn",
            "email": "ringsaturn.me@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7868f01ba6733c021881c0e96ba1ea544dff887b",
          "message": "random city test (#42)",
          "timestamp": "2022-11-10T14:39:55Z",
          "url": "https://github.com/ringsaturn/tz-benchmark/commit/7868f01ba6733c021881c0e96ba1ea544dff887b"
        },
        "date": 1668216800732,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkTimezoneLookup_Random",
            "value": 39676,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30579 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Random_WorldCities",
            "value": 122155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8948 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneLookup_Gloabl",
            "value": 5103592019,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random",
            "value": 2673,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "407022 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Gloabl",
            "value": 174007337,
            "unit": "ns/op\t     240 B/op\t      10 allocs/op",
            "extra": "6 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Lite_Random_WorldCities",
            "value": 2587,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "426655 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random",
            "value": 13748,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "83170 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Random_WorldCities",
            "value": 12783,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "92269 times\n2 procs"
          },
          {
            "name": "BenchmarkTZF_Full_Gloabl",
            "value": 1509728577,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random",
            "value": 461,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2522193 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Random_WorldCities",
            "value": 422.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2813614 times\n2 procs"
          },
          {
            "name": "BenchmarkLatlong_Global",
            "value": 21798455,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "51 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random",
            "value": 33856,
            "unit": "ns/op\t      29 B/op\t       2 allocs/op",
            "extra": "36730 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Random_WorldCities",
            "value": 26629,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "44608 times\n2 procs"
          },
          {
            "name": "BenchmarkLocaltimezone_Global",
            "value": 4148206890,
            "unit": "ns/op\t 3806760 B/op\t  272996 allocs/op",
            "extra": "1 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random",
            "value": 139.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8284554 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Random_WorldCities",
            "value": 263.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4876734 times\n2 procs"
          },
          {
            "name": "BenchmarkTimezoneMapper_Global",
            "value": 2530245,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "469 times\n2 procs"
          }
        ]
      }
    ]
  }
}