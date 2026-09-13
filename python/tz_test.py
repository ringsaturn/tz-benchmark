import json
import os
import random

import citiespy
import pytest
from timezonefinder import TimezoneFinder
from tzfpy import get_tz

import tzfpy_variant

tf = TimezoneFinder(in_memory=True)

_ = get_tz(116, 39)
_ = citiespy.random_city()

_edges_path = os.path.join(os.path.dirname(__file__), "../data/edges.json")
with open(_edges_path) as f:
    _edge_cities = json.load(f)

# The two tzfpy variants cannot share a venv (see tzfpy_variant.py), so each
# gets its own test names and only the installed one runs. The lite names are
# the historical ones and feed the continuous-benchmark series on gh-pages.
lite_only = pytest.mark.skipif(tzfpy_variant.FULL, reason="tzfpy +full build installed")
full_only = pytest.mark.skipif(not tzfpy_variant.FULL, reason="tzfpy lite build installed")


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


@lite_only
def test_tzfpy_random_cities(benchmark):
    benchmark(_test_tzfpy_random_city)


def _test_tzfpy_random_edge_city():
    lng, lat = random_edge_city()
    _ = get_tz(lng, lat)


@lite_only
def test_tzfpy_random_edge_cities(benchmark):
    benchmark(_test_tzfpy_random_edge_city)


@full_only
def test_tzfpy_full_random_cities(benchmark):
    benchmark(_test_tzfpy_random_city)


@full_only
def test_tzfpy_full_random_edge_cities(benchmark):
    benchmark(_test_tzfpy_random_edge_city)
