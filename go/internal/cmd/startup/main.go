// Startup evaluation: measures how long each tzf finder takes to become
// ready -- construct the finder and answer one query -- which bounds cold
// starts in serverless, CLI, and test-suite settings.
//
// Every mechanism is built repeatedly in one process; the reported numbers are
// the best and median wall-clock time over ROUNDS builds. Two configurations
// are measured:
//
//   - all cores:  the process's default GOMAXPROCS. Expanded finders rebuild
//     their YStripes tables in parallel, so this is what a server sees.
//   - one core:   GOMAXPROCS=1, which is what a single-vCPU function or a
//     constrained container sees.
//
// The allocation columns come from runtime.MemStats deltas around one build
// and quantify the transient cost of decoding: bytes allocated in total and
// the number of allocations, not the retained size (see ./memory for that).
//
// Third-party libraries are not listed because they load their data in
// package init (latlong, timezonemapper, go-tz) or expose no separable
// construction step; their init cost is visible as the baseline of ./memory.
//
// Usage: go run ./internal/cmd/startup
package main

import (
	"fmt"
	"runtime"
	"slices"
	"time"

	tzfdist "github.com/ringsaturn/tzf-dist"
	"github.com/ringsaturn/tzf/v2"
)

const rounds = 7

type candidate struct {
	label string
	build func() (tzf.F, error)
}

var candidates = []candidate{
	{"DefaultFinder (lite .tzm, aliased)", tzf.NewDefaultFinder},
	{"expanded (lite .tzb)", func() (tzf.F, error) { return tzf.NewFinderFromTZB(tzfdist.LiteTZB) }},
	{"EmbeddedFinder (lite .tzb, in place)", tzf.NewEmbeddedFinder},
	{"FullFinder (full .tzb, expanded)", tzf.NewFullFinder},
}

// Beijing: a tile pre-index hit, so the first query exercises the fast path
// that every real process warms up with.
const queryLng, queryLat = 116.3883, 39.9289

func timeBuild(c candidate) time.Duration {
	start := time.Now()
	f, err := c.build()
	if err != nil {
		panic(fmt.Sprintf("%s: %v", c.label, err))
	}
	_ = f.GetTimezoneName(queryLng, queryLat)
	return time.Since(start)
}

func measure(c candidate) (best, median time.Duration) {
	samples := make([]time.Duration, 0, rounds)
	for i := 0; i < rounds; i++ {
		samples = append(samples, timeBuild(c))
		runtime.GC()
	}
	slices.Sort(samples)
	return samples[0], samples[len(samples)/2]
}

func allocations(c candidate) (bytes, count uint64) {
	var before, after runtime.MemStats
	runtime.GC()
	runtime.ReadMemStats(&before)
	f, err := c.build()
	if err != nil {
		panic(fmt.Sprintf("%s: %v", c.label, err))
	}
	_ = f.GetTimezoneName(queryLng, queryLat)
	runtime.ReadMemStats(&after)
	runtime.KeepAlive(f)
	return after.TotalAlloc - before.TotalAlloc, after.Mallocs - before.Mallocs
}

func main() {
	allCores := runtime.GOMAXPROCS(0)
	fmt.Printf("startup cost per finder (best/median of %d builds, ms; %d cores vs 1 core)\n", rounds, allCores)

	type result struct {
		best, median, oneCoreBest, oneCoreMedian time.Duration
		bytes, count                             uint64
	}
	results := make([]result, len(candidates))

	for i, c := range candidates {
		results[i].best, results[i].median = measure(c)
		results[i].bytes, results[i].count = allocations(c)
	}
	runtime.GOMAXPROCS(1)
	for i, c := range candidates {
		results[i].oneCoreBest, results[i].oneCoreMedian = measure(c)
	}
	runtime.GOMAXPROCS(allCores)

	ms := func(d time.Duration) float64 { return float64(d.Nanoseconds()) / 1e6 }
	for i, c := range candidates {
		r := results[i]
		fmt.Printf("%-38s open_best=%8.2f  open_median=%8.2f  one_core_best=%8.2f  one_core_median=%8.2f  alloc_mib=%7.1f  allocs=%8d  (ms)\n",
			c.label, ms(r.best), ms(r.median), ms(r.oneCoreBest), ms(r.oneCoreMedian),
			float64(r.bytes)/(1024*1024), r.count)
	}
}
