import numpy as np
from timezonefinder import TimezoneFinder

tf = TimezoneFinder(in_memory=True)

lng_ranges = np.arange(-180, 180, 0.5)
lat_ranges = np.arange(-60, 60, 0.5)


def random_point():
    return np.random.choice(lng_ranges), np.random.choice(lat_ranges)


def _test_timezonefinder_without_numbarandom():
    lng, lat = random_point()
    _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_without_numbarandom(benchmark):
    benchmark(_test_timezonefinder_without_numbarandom)
