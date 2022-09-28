window.BENCHMARK_DATA = {
  "lastUpdate": 1664328967487,
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
      }
    ]
  }
}