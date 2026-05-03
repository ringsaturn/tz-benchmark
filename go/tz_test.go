package main_test

import (
	"encoding/json"
	"os"
	"slices"
	"testing"
	"time"

	"github.com/albertyw/localtimezone/v3"
	"github.com/bradfitz/latlong"
	gocitiesjson "github.com/ringsaturn/go-cities.json"
	"github.com/ringsaturn/tzf"
	gotz "github.com/ugjka/go-tz/v2"
	"github.com/zsefvlol/timezonemapper"
)

// Benchmark helpers use time.Now() per-call timing (nanosecond precision) and
// report p50/p90/p99 via b.ReportMetric.

const benchPoolSize = 10_000

const edgeCasePoolSize = 4_000

func benchEdge(b *testing.B, f tzf.F) {
	b.Helper()
	pool := makeEdgePool(edgeCasePoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%edgeCasePoolSize]
		start := time.Now()
		_ = f.GetTimezoneName(p.Lng, p.Lat)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func benchRandom(b *testing.B, f tzf.F) {
	b.Helper()
	pool := makePool(benchPoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%benchPoolSize]
		start := time.Now()
		_ = f.GetTimezoneName(p.Lng, p.Lat)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func benchRandomNames(b *testing.B, f tzf.F) {
	b.Helper()
	pool := makePool(benchPoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%benchPoolSize]
		start := time.Now()
		_, _ = f.GetTimezoneNames(p.Lng, p.Lat)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func makePool(n int) []*gocitiesjson.City {
	pool := make([]*gocitiesjson.City, n)
	for i := range pool {
		pool[i] = gocitiesjson.Random()
	}
	return pool
}

func makeEdgePool(n int) []*gocitiesjson.City {
	data, err := os.ReadFile("../data/edges.json")
	if err != nil {
		panic(err)
	}
	var all []*gocitiesjson.City
	if err := json.Unmarshal(data, &all); err != nil {
		panic(err)
	}
	if len(all) > n {
		return all[:n]
	}
	return all
}

func reportPercentiles(b *testing.B, ns []int64) {
	b.Helper()
	slices.Sort(ns)
	n := len(ns)
	b.ReportMetric(float64(ns[n/2]), "ns/p50")
	b.ReportMetric(float64(ns[n*9/10]), "ns/p90")
	b.ReportMetric(float64(ns[min(n*99/100, n-1)]), "ns/p99")
}

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
	b.ReportAllocs()
	benchRandom(b, finder)
}

func BenchmarkTZF_Default_Random_EdgeCities(b *testing.B) {
	b.ReportAllocs()
	benchEdge(b, finder)
}

func BenchmarkLatlong_Random_WorldCities(b *testing.B) {
	b.ReportAllocs()
	pool := makePool(benchPoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%benchPoolSize]
		start := time.Now()
		_ = latlong.LookupZoneName(p.Lat, p.Lng)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func BenchmarkLatlong_Random_EdgeCities(b *testing.B) {
	b.ReportAllocs()
	pool := makeEdgePool(edgeCasePoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%edgeCasePoolSize]
		start := time.Now()
		_ = latlong.LookupZoneName(p.Lat, p.Lng)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func BenchmarkLocaltimezone_Random_WorldCities(b *testing.B) {
	b.ReportAllocs()
	pool := makePool(benchPoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%benchPoolSize]
		start := time.Now()
		_, _ = z.GetZone(localtimezone.Point{Lon: p.Lng, Lat: p.Lat})
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func BenchmarkLocaltimezone_Random_EdgeCities(b *testing.B) {
	b.ReportAllocs()
	pool := makeEdgePool(edgeCasePoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%edgeCasePoolSize]
		start := time.Now()
		_, _ = z.GetZone(localtimezone.Point{Lon: p.Lng, Lat: p.Lat})
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func BenchmarkTimezoneMapper_Random_WorldCities(b *testing.B) {
	b.ReportAllocs()
	pool := makePool(benchPoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%benchPoolSize]
		start := time.Now()
		_ = timezonemapper.LatLngToTimezoneString(p.Lat, p.Lng)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func BenchmarkTimezoneMapper_Random_EdgeCities(b *testing.B) {
	b.ReportAllocs()
	pool := makeEdgePool(edgeCasePoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%edgeCasePoolSize]
		start := time.Now()
		_ = timezonemapper.LatLngToTimezoneString(p.Lat, p.Lng)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func BenchmarkGoTZ_Random_WorldCities(b *testing.B) {
	b.ReportAllocs()
	pool := makePool(benchPoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%benchPoolSize]
		start := time.Now()
		_, err := gotz.GetZone(gotz.Point{Lon: p.Lng, Lat: p.Lat})
		ns[i] = time.Since(start).Nanoseconds()
		if err != nil {
			b.Fatal(err)
		}
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func BenchmarkGoTZ_Random_EdgeCities(b *testing.B) {
	b.ReportAllocs()
	pool := makeEdgePool(edgeCasePoolSize)
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := pool[i%edgeCasePoolSize]
		start := time.Now()
		_, err := gotz.GetZone(gotz.Point{Lon: p.Lng, Lat: p.Lat})
		ns[i] = time.Since(start).Nanoseconds()
		if err != nil {
			b.Fatal(err)
		}
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}
