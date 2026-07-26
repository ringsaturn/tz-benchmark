// Package memprobe measures the memory footprint of a single timezone-lookup
// candidate inside the current process.
//
// # Initialization cost and runtime cost are not the same number
//
// Building a finder allocates far more memory than the finder ends up holding:
// the serialized dataset is decoded into an intermediate representation, the
// query structures are built from it, and the intermediate is then garbage.
// Three different quantities are worth reporting, and they can differ by 4x:
//
//	live  <=  rss_load  <=  init_peak
//
//   - live is what the finder's data structures actually occupy once it is
//     ready to serve queries. This is the number that matters when sizing a
//     long-lived process, and the only one that is directly comparable to a
//     library's own memory accounting.
//   - init_peak is the high-water mark reached while loading. This is what a
//     container memory limit has to accommodate, or the process is killed
//     during startup even though its steady state would have fit.
//   - rss_load sits in between, and is usually much closer to init_peak than
//     to live. Go's scavenger releases freed spans with MADV_FREE semantics
//     (MADV_FREE_REUSABLE on Darwin, MADV_FREE by default on Linux), which
//     lets the kernel reclaim those pages lazily, only under memory pressure.
//     Until then they keep counting toward RSS. MemStats confirms this
//     directly: after loading tzf's lite Finder, HeapAlloc is ~30 MiB while
//     HeapReleased is ~65 MiB -- already handed back, still resident.
//     debug.FreeOSMemory() is called before every RSS reading here, so this is
//     not the scavenger lagging behind; it is the kernel declining to reclaim
//     pages it does not yet need.
//
// Reporting only RSS makes a library look 4x heavier than it is; reporting
// only live heap hides a startup spike that can OOM a container. Hence both.
//
// Reported columns (MiB):
//
//   - baseline:   RSS before the candidate is constructed. Libraries that load
//     their data in package init (before main) hide that cost here, so the
//     primary comparable number is rss_load, not delta.
//   - init_peak:  ru_maxrss high-water mark right after construction and the
//     first query, before any memory is returned. The transient cost of
//     initialization.
//   - live:       HeapAlloc after a forced GC, with the candidate still
//     reachable. The steady-state size of the data actually retained.
//     Reported as an absolute value, not a delta, so that candidates loading
//     their data in package init are still accounted for.
//   - rss_load:   RSS after construction, with GC run and free memory returned
//     to the OS. What the OS reports for a process ready to serve queries.
//   - rss_loop:   RSS after a warm query loop, same treatment. Compare against
//     rss_load to see whether querying itself allocates.
//   - peak:       ru_maxrss high-water mark at the end of the run. Above
//     init_peak only when the warm loop allocated more than loading did.
//   - delta:      rss_load - baseline.
package memprobe

import (
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"runtime/debug"
	"strconv"
	"strings"
	"syscall"
)

type Point struct{ Lng, Lat float64 }

var Points = []Point{
	{116.3833, 39.9167},  // Beijing
	{-73.9857, 40.7484},  // New York
	{2.3522, 48.8566},    // Paris
	{151.2093, -33.8688}, // Sydney
	{139.6917, 35.6895},  // Tokyo
	{-0.1276, 51.5072},   // London
	{37.6173, 55.7558},   // Moscow
	{-58.3816, -34.6037}, // Buenos Aires
}

const LoopQueries = 80_000

func rssMiB() float64 {
	out, err := exec.Command("ps", "-o", "rss=", "-p", strconv.Itoa(os.Getpid())).Output()
	if err != nil {
		panic(err)
	}
	kib, err := strconv.Atoi(strings.TrimSpace(string(out)))
	if err != nil {
		panic(err)
	}
	return float64(kib) / 1024
}

func peakMiB() float64 {
	var usage syscall.Rusage
	if err := syscall.Getrusage(syscall.RUSAGE_SELF, &usage); err != nil {
		panic(err)
	}
	// ru_maxrss is bytes on macOS, KiB on Linux.
	if runtime.GOOS == "darwin" {
		return float64(usage.Maxrss) / (1024 * 1024)
	}
	return float64(usage.Maxrss) / 1024
}

// liveHeapMiB returns the bytes held by reachable heap objects, after a forced
// collection. Unlike RSS this excludes freed-but-still-resident pages, so it
// reflects the data the candidate actually retains.
func liveHeapMiB() float64 {
	runtime.GC()
	var ms runtime.MemStats
	runtime.ReadMemStats(&ms)
	return float64(ms.HeapAlloc) / (1024 * 1024)
}

// Run builds the candidate, drives it through a warm query loop, and prints
// one result line.
func Run(label string, build func() func(lng, lat float64) string) {
	debug.FreeOSMemory()
	baseline := rssMiB()

	lookup := build()
	_ = lookup(Points[0].Lng, Points[0].Lat)
	// Read the high-water mark before releasing anything: this is the peak the
	// process actually demanded from the OS in order to initialize.
	initPeak := peakMiB()

	debug.FreeOSMemory()
	rssLoad := rssMiB()
	// lookup stays reachable across this reading, so the retained data is live.
	live := liveHeapMiB()

	for i := range LoopQueries {
		p := Points[i%len(Points)]
		_ = lookup(p.Lng, p.Lat)
	}
	debug.FreeOSMemory()
	rssLoop := rssMiB()

	fmt.Printf("%-32s baseline=%7.1f  init_peak=%7.1f  live=%7.1f  rss_load=%7.1f  rss_loop=%7.1f  peak=%7.1f  delta=%7.1f  (MiB)\n",
		label, baseline, initPeak, live, rssLoad, rssLoop, peakMiB(), rssLoad-baseline)

	runtime.KeepAlive(lookup)
}
