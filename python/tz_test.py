import json
import os
import random

import citiespy
from timezonefinder import TimezoneFinder
from tzfpy import get_tz

tf = TimezoneFinder(in_memory=True)

_ = get_tz(116, 39)
_ = citiespy.random_city()

_edges_path = os.path.join(os.path.dirname(__file__), "../data/edges.json")
with open(_edges_path) as f:
    _edge_cities = json.load(f)


def random_city():
    city = citiespy.random_city()
    return city.lng, city.lat


def random_edge_city():
    city = random.choice(_edge_cities)
    return city["lng"], city["lat"]


def _test_timezonefinder_random_city():
    lng, lat = random_city()
    _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_random_city(benchmark):
    benchmark(_test_timezonefinder_random_city)


def _test_timezonefinder_random_edge_city():
    lng, lat = random_edge_city()
    _ = tf.timezone_at(lng=lng, lat=lat)


def test_timezonefinder_random_edge_city(benchmark):
    benchmark(_test_timezonefinder_random_edge_city)


def _test_tzfpy_random_city():
    lng, lat = random_city()
    _ = get_tz(lng, lat)


def test_tzfpy_random_cities(benchmark):
    benchmark(_test_tzfpy_random_city)


def _test_tzfpy_random_edge_city():
    lng, lat = random_edge_city()
    _ = get_tz(lng, lat)


def test_tzfpy_random_edge_cities(benchmark):
    benchmark(_test_tzfpy_random_edge_city)
