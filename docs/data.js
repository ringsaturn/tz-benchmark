window.BENCHMARK_DATA = {
  "lastUpdate": 1663129338155,
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
      }
    ]
  }
}