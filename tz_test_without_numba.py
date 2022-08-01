import numpy as np
from timezonefinder import TimezoneFinder
from tzfpy import get_tz

tf = TimezoneFinder(in_memory=True)

lng_ranges = np.arange(-180, 180, 0.5)
lat_ranges = np.arange(-60, 60, 0.5)


def _test_timezonefinder_without_numbaiter_global():
    for lat in lat_ranges:
        for lng in lng_ranges:
            _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_without_numbaiter_global(benchmark):
    benchmark(_test_timezonefinder_without_numbaiter_global)


def _test_tzfpy_iter_global():
    for lat in lat_ranges:
        for lng in lng_ranges:
            _ = get_tz(lng, lat)


def test_tzfpy_iter_global(benchmark):
    benchmark(_test_tzfpy_iter_global)


def random_point():
    return np.random.choice(lng_ranges), np.random.choice(lat_ranges)


def _test_timezonefinder_without_numbarandom():
    lng, lat = random_point()
    _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_without_numbarandom(benchmark):
    benchmark(_test_timezonefinder_without_numbarandom)


def _test_tzfpy_random():
    lng, lat = random_point()
    _ = get_tz(lng, lat)


def test_tzfpy_random(benchmark):
    benchmark(_test_tzfpy_random)
