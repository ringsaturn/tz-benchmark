// Concurrency evaluation: measures how query throughput scales when one
// shared finder is queried from N goroutines at once.
//
// Every finder in this harness is immutable after construction and is meant
// to be shared across goroutines; this program checks whether sharing is
// free. For each thread count, N goroutines each draw random world cities
// (own PRNG, no shared counter) and query the shared candidate until a fixed
// wall-clock budget expires. The reported number is wall-clock nanoseconds
// per query across all goroutines (budget / total queries), so a candidate
// that scales perfectly halves it every time the thread count doubles.
// "scaling" is the throughput ratio relative to one goroutine.
//
// A candidate whose per-query cost stays flat as threads grow serializes its
// queries on some shared state (a mutex, a shared scratch buffer, a lock in
// the allocator); one that scales sub-linearly past the performance-core
// count is limited by the machine, not the library.
//
// Usage: go run ./internal/cmd/concurrency
package main

import (
	"fmt"
	"math/rand"
	"runtime"
	"sync"
	"time"

	"github.com/albertyw/localtimezone/v3"
	"github.com/bradfitz/latlong"
	gocitiesjson "github.com/ringsaturn/go-cities.json"
	"github.com/ringsaturn/tzf/v2"
	gotz "github.com/ugjka/go-tz/v2"
	"github.com/zsefvlol/timezonemapper"
)

const budget = 1 * time.Second

type lookup func(lng, lat float64) string

type candidate struct {
	label string
	fn    lookup
}

func mustFinder(f tzf.F, err error) tzf.F {
	if err != nil {
		panic(err)
	}
	return f
}

func threadCounts() []int {
	max := runtime.NumCPU()
	var out []int
	for _, n := range []int{1, 2, 4, 8, 12, 16, 24, 32, 48, 64} {
		if n < max {
			out = append(out, n)
		}
	}
	return append(out, max)
}

func run(fn lookup, threads int, cities []*gocitiesjson.City) (nsPerOp float64) {
	var wg sync.WaitGroup
	counts := make([]uint64, threads)
	deadline := time.Now().Add(budget)
	start := time.Now()
	for t := 0; t < threads; t++ {
		wg.Add(1)
		go func(t int) {
			defer wg.Done()
			r := rand.New(rand.NewSource(int64(t) + 1))
			n := len(cities)
			var ops uint64
			// Check the clock every 256 queries so the loop body stays cheap.
			for time.Now().Before(deadline) {
				for i := 0; i < 256; i++ {
					c := cities[r.Intn(n)]
					_ = fn(c.Lng, c.Lat)
				}
				ops += 256
			}
			counts[t] = ops
		}(t)
	}
	wg.Wait()
	elapsed := time.Since(start)
	var total uint64
	for _, c := range counts {
		total += c
	}
	return float64(elapsed.Nanoseconds()) / float64(total)
}

func main() {
	finder := mustFinder(tzf.NewDefaultFinder())
	embedded := mustFinder(tzf.NewEmbeddedFinder())
	full := mustFinder(tzf.NewFullFinder())
	ltz, err := localtimezone.NewLocalTimeZone()
	if err != nil {
		panic(err)
	}

	candidates := []candidate{
		{"tzf DefaultFinder", finder.GetTimezoneName},
		{"tzf EmbeddedFinder", embedded.GetTimezoneName},
		{"tzf FullFinder", full.GetTimezoneName},
		{"latlong", func(lng, lat float64) string { return latlong.LookupZoneName(lat, lng) }},
		{"timezonemapper", func(lng, lat float64) string { return timezonemapper.LatLngToTimezoneString(lat, lng) }},
		{"localtimezone", func(lng, lat float64) string {
			zone, _ := ltz.GetZone(localtimezone.Point{Lon: lng, Lat: lat})
			if len(zone) == 0 {
				return ""
			}
			return zone[0]
		}},
		{"go-tz", func(lng, lat float64) string {
			zone, err := gotz.GetZone(gotz.Point{Lon: lng, Lat: lat})
			if err != nil || len(zone) == 0 {
				return ""
			}
			return zone[0]
		}},
	}

	cities := gocitiesjson.Cities
	counts := threadCounts()
	fmt.Printf("throughput scaling per candidate (shared instance, random world cities, %s budget per row, wall ns per query; NumCPU=%d)\n",
		budget, runtime.NumCPU())
	for _, c := range candidates {
		var base float64
		for _, n := range counts {
			ns := run(c.fn, n, cities)
			if n == 1 {
				base = ns
			}
			fmt.Printf("%-20s threads=%2d  ns_per_op=%10.1f  ops_per_s=%12.0f  scaling=%6.2fx\n",
				c.label, n, ns, 1e9/ns, base/ns)
		}
	}
}
