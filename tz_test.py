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
