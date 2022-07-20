from timezonefinder import TimezoneFinder


tf = TimezoneFinder()


def _test_tz_without_numba():
    _ = tf.timezone_at(lng=13.358, lat=52.5061)
    _ = tf.timezone_at(lng=116, lat=39)
    _ = tf.timezone_at(lng=0.1276, lat=51.5073)


def test_tz_without_numba(benchmark):
    benchmark(_test_tz_without_numba)
