import numpy as np
from timezonefinder import TimezoneFinder
from tzfpy import get_tz

tf = TimezoneFinder()


def _test_tz_with_numba():
    _ = tf.timezone_at(lng=13.358, lat=52.5061)
    _ = tf.timezone_at(lng=116, lat=39)
    _ = tf.timezone_at(lng=0.1276, lat=51.5073)


def test_tz_with_numba(benchmark):
    benchmark(_test_tz_with_numba)


def _test_tzfpy():
    _ = get_tz(lng=13.358, lat=52.5061)
    _ = get_tz(lng=116, lat=39)
    _ = get_tz(lng=0.1276, lat=51.5073)


def test_tzfpy(benchmark):
    benchmark(_test_tzfpy)


lat_ranges = np.arange(-60, 60, 0.5)
lng_ranges = np.arange(-180, 180, 0.5)


def _test_tz_global():
    for lat in lat_ranges:
        for lng in lng_ranges:
            _ = tf.timezone_at(lng=lng, lat=lat)


def test_tz_global(benchmark):
    benchmark(_test_tz_global)


def _test_tzfpy_global():
    for lat in lat_ranges:
        for lng in lng_ranges:
            _ = get_tz(lng, lat)


def test_tzfpy_global(benchmark):
    benchmark(_test_tzfpy_global)
