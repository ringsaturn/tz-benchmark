import json
import random

import numpy as np
from timezonefinder import TimezoneFinder
from tzfpy import get_tz

tf = TimezoneFinder(in_memory=True)

lng_ranges = np.arange(-180, 180, 0.5)
lat_ranges = np.arange(-60, 60, 0.5)


cities = []
with open("cities.json") as f:
    raw_cities = json.loads(f.read())
for rawcity in raw_cities:
    cities.append([float(rawcity["lng"]), float(rawcity["lat"])])


def _test_timezonefinder_iter_global():
    for lat in lat_ranges:
        for lng in lng_ranges:
            _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_iter_global(benchmark):
    benchmark(_test_timezonefinder_iter_global)


def _test_tzfpy_iter_global():
    for lat in lat_ranges:
        for lng in lng_ranges:
            _ = get_tz(lng, lat)


def test_tzfpy_iter_global(benchmark):
    benchmark(_test_tzfpy_iter_global)


def random_point():
    return np.random.choice(lng_ranges), np.random.choice(lat_ranges)


def random_city():
    index = random.randint(0, len(cities))
    return cities[index]


def _test_timezonefinder_random_certain():
    lng, lat = random_point()
    _ = tf.certain_timezone_at(lng=lng, lat=lat)


def test_timezonefinder_random_certain(benchmark):
    benchmark(_test_timezonefinder_random_certain)


def _test_timezonefinder_random():
    lng, lat = random_point()
    _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_random(benchmark):
    benchmark(_test_timezonefinder_random)


def _test_timezonefinder_random_city():
    lng, lat = random_city()
    _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_random_city(benchmark):
    benchmark(_test_timezonefinder_random_city)


def _test_tzfpy_random():
    lng, lat = random_point()
    _ = get_tz(lng, lat)


def test_tzfpy_random(benchmark):
    benchmark(_test_tzfpy_random)


def _test_tzfpy_random_city():
    lng, lat = random_city()
    _ = get_tz(lng, lat)


def test_tzfpy_random_cities(benchmark):
    benchmark(_test_tzfpy_random_city)
