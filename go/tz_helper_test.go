package main_test

import (
	"encoding/json"
	"os"
	"slices"
	"testing"
	"time"

	gocitiesjson "github.com/ringsaturn/go-cities.json"
)

// Benchmark helpers use time.Now() per-call timing (nanosecond precision) and
// report p50/p90/p99 via b.ReportMetric.

const benchPoolSize = 100_000

const edgeCasePoolSize = 4_000

var (
	benchPool    = makePool(benchPoolSize)
	edgeCasePool = makeEdgePool(edgeCasePoolSize)
)

func benchRandomFunc(b *testing.B, fn func(lng, lat float64) string) {
	b.Helper()
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := benchPool[i%benchPoolSize]
		start := time.Now()
		_ = fn(p.Lng, p.Lat)
		ns[i] = time.Since(start).Nanoseconds()
	}
	b.StopTimer()
	reportPercentiles(b, ns)
}

func benchEdgeFunc(b *testing.B, fn func(lng, lat float64) string) {
	b.Helper()
	ns := make([]int64, b.N)
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		p := edgeCasePool[i%edgeCasePoolSize]
		start := time.Now()
		_ = fn(p.Lng, p.Lat)
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
	b.ReportMetric(float64(ns[min(n*99/100, n-1)]), "ns/p99")
}
