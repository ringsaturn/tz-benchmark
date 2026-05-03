package main_test

import (
	"testing"

	"github.com/albertyw/localtimezone/v3"
	"github.com/bradfitz/latlong"
	"github.com/ringsaturn/tzf"
	gotz "github.com/ugjka/go-tz/v2"
	"github.com/zsefvlol/timezonemapper"
)

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

func BenchmarkTimezoneMapper_Random_WorldCities(b *testing.B) {
	benchRandomFunc(b, func(lng, lat float64) string {
		return timezonemapper.LatLngToTimezoneString(lat, lng)
	})
}

func BenchmarkTimezoneMapper_Random_EdgeCities(b *testing.B) {
	benchEdgeFunc(b, func(lng, lat float64) string {
		return timezonemapper.LatLngToTimezoneString(lat, lng)
	})
}

func BenchmarkLatlong_Random_WorldCities(b *testing.B) {
	benchRandomFunc(b, func(lng, lat float64) string {
		return latlong.LookupZoneName(lat, lng)
	})
}

func BenchmarkLatlong_Random_EdgeCities(b *testing.B) {
	benchEdgeFunc(b, func(lng, lat float64) string {
		return latlong.LookupZoneName(lat, lng)
	})
}

func BenchmarkTZF_Default_Random_WorldCities(b *testing.B) {
	benchRandomFunc(b, func(lng, lat float64) string {
		return finder.GetTimezoneName(lng, lat)
	})
}

func BenchmarkTZF_Default_Random_EdgeCities(b *testing.B) {
	benchEdgeFunc(b, func(lng, lat float64) string {
		return finder.GetTimezoneName(lng, lat)
	})
}

func BenchmarkLocaltimezone_Random_WorldCities(b *testing.B) {
	benchRandomFunc(b, func(lng, lat float64) string {
		zone, _ := z.GetZone(localtimezone.Point{Lon: lng, Lat: lat})
		return zone[0]
	})
}

func BenchmarkLocaltimezone_Random_EdgeCities(b *testing.B) {
	benchEdgeFunc(b, func(lng, lat float64) string {
		zone, _ := z.GetZone(localtimezone.Point{Lon: lng, Lat: lat})
		return zone[0]
	})
}

func BenchmarkGoTZ_Random_WorldCities(b *testing.B) {
	benchEdgeFunc(b, func(lng, lat float64) string {
		zone, err := gotz.GetZone(gotz.Point{Lon: lng, Lat: lat})
		if err != nil {
			b.Fatal(err)
		}
		return zone[0]
	})

}

func BenchmarkGoTZ_Random_EdgeCities(b *testing.B) {
	benchEdgeFunc(b, func(lng, lat float64) string {
		zone, err := gotz.GetZone(gotz.Point{Lon: lng, Lat: lat})
		if err != nil {
			b.Fatal(err)
		}
		return zone[0]
	})
}
