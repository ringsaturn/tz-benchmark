package main_test

import (
	"encoding/json"
	"math/rand"
	"os"
	"testing"

	"github.com/albertyw/localtimezone/v3"
	"github.com/bradfitz/latlong"
	"github.com/loov/hrtime/hrtesting"
	gocitiesjson "github.com/ringsaturn/go-cities.json"
	"github.com/ringsaturn/tzf"
	gotz "github.com/ugjka/go-tz/v2"
	"github.com/zsefvlol/timezonemapper"
)

var edgeCities = func() []*gocitiesjson.City {
	data, err := os.ReadFile("../data/edges.json")
	if err != nil {
		panic(err)
	}
	var cities []*gocitiesjson.City
	if err := json.Unmarshal(data, &cities); err != nil {
		panic(err)
	}
	return cities
}()

var finder = func() tzf.F {
	_f, err := tzf.NewDefaultFinder()
	if err != nil {
		panic(err)
	}

	return _f
}()

var z = func() localtimezone.LocalTimeZone {
	_z, err := localtimezone.NewLocalTimeZone()
	if err != nil {
		panic(err)
	}

	return _z
}()

func BenchmarkTZF_Default_Random_WorldCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := gocitiesjson.Cities[rand.Intn(len(gocitiesjson.Cities))]
		_ = finder.GetTimezoneName(p.Lng, p.Lat)
	}
}

func BenchmarkTZF_Default_Random_EdgeCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := edgeCities[rand.Intn(len(edgeCities))]
		_ = finder.GetTimezoneName(p.Lng, p.Lat)
	}
}

func BenchmarkLatlong_Random_WorldCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := gocitiesjson.Cities[rand.Intn(len(gocitiesjson.Cities))]
		_ = latlong.LookupZoneName(p.Lat, p.Lng)
	}
}

func BenchmarkLatlong_Random_EdgeCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := edgeCities[rand.Intn(len(edgeCities))]
		_ = latlong.LookupZoneName(p.Lat, p.Lng)
	}
}

func BenchmarkLocaltimezone_Random_WorldCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := gocitiesjson.Cities[rand.Intn(len(gocitiesjson.Cities))]
		input := localtimezone.Point{
			Lon: p.Lng, Lat: p.Lat,
		}
		_, _ = z.GetZone(input)
	}
}

func BenchmarkLocaltimezone_Random_EdgeCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := edgeCities[rand.Intn(len(edgeCities))]
		input := localtimezone.Point{
			Lon: p.Lng, Lat: p.Lat,
		}
		_, _ = z.GetZone(input)
	}
}

func BenchmarkTimezoneMapper_Random_WorldCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := gocitiesjson.Cities[rand.Intn(len(gocitiesjson.Cities))]
		_ = timezonemapper.LatLngToTimezoneString(p.Lat, p.Lng)
	}
}

func BenchmarkTimezoneMapper_Random_EdgeCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := edgeCities[rand.Intn(len(edgeCities))]
		_ = timezonemapper.LatLngToTimezoneString(p.Lat, p.Lng)
	}
}

func BenchmarkGoTZ_Random_WorldCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := gocitiesjson.Cities[rand.Intn(len(gocitiesjson.Cities))]
		_, err := gotz.GetZone(gotz.Point{
			Lon: p.Lng, Lat: p.Lat,
		})
		if err != nil {
			b.Fatal(err)
		}
	}
}

func BenchmarkGoTZ_Random_EdgeCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := edgeCities[rand.Intn(len(edgeCities))]
		_, err := gotz.GetZone(gotz.Point{
			Lon: p.Lng, Lat: p.Lat,
		})
		if err != nil {
			b.Fatal(err)
		}
	}
}
