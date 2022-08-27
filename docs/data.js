window.BENCHMARK_DATA = {
  "lastUpdate": 1661611231276,
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
      }
    ]
  }
}