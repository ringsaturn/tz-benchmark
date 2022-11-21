import json
import random

import numpy as np
from timezonefinder import TimezoneFinder
from tzfpy import get_tz
from tzfrspy import get_tz as rs_get_tz

# Rust use lazy init
_ = rs_get_tz(116.3883, 39.9289)

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
    index = random.randint(0, len(cities)-1)
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


def _test_tzfrspy_random():
    lng, lat = random_point()
    _ = rs_get_tz(lng, lat)


def test_tzfrspy_random(benchmark):
    benchmark(_test_tzfrspy_random)


def _test_tzfrspy_random_city():
    lng, lat = random_city()
    _ = rs_get_tz(lng, lat)


def test_tzfrspy_random_cities(benchmark):
    benchmark(_test_tzfrspy_random_city)
