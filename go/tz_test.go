package main_test

import (
	"math/rand"
	"testing"

	"github.com/albertyw/localtimezone/v3"
	"github.com/bradfitz/latlong"
	"github.com/loov/hrtime/hrtesting"
	gocitiesjson "github.com/ringsaturn/go-cities.json"
	"github.com/ringsaturn/tzf"
	gotz "github.com/ugjka/go-tz/v2"
	"github.com/zsefvlol/timezonemapper"
)

type Point struct {
	Lng float64
	Lat float64
}

var (
	finder tzf.F
	z      localtimezone.LocalTimeZone
)

func init() {
	_finder, _ := tzf.NewDefaultFinder()
	finder = _finder
}

func init() {
	var err error
	z, err = localtimezone.NewLocalTimeZone()
	if err != nil {
		panic(err)
	}
}

func BenchmarkTZF_Default_Random_WorldCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := gocitiesjson.Cities[rand.Intn(len(gocitiesjson.Cities))]
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

func BenchmarkTimezoneMapper_Random_WorldCities(b *testing.B) {
	bench := hrtesting.NewBenchmark(b)
	defer bench.Report()
	for bench.Next() {
		p := gocitiesjson.Cities[rand.Intn(len(gocitiesjson.Cities))]
		_ = timezonemapper.LatLngToTimezoneString(p.Lat, p.Lng)
	}
}

func BenchmarkGoTZ(b *testing.B) {
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
