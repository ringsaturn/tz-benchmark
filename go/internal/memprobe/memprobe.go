// Package memprobe measures the resident memory footprint of a single
// timezone-lookup candidate inside the current process.
//
// Reported columns (MiB):
//
//   - baseline:  RSS before the candidate is constructed. Libraries that load
//     their data in package init (before main) hide that cost here, so the
//     primary comparable number is post_load, not delta.
//   - post_load: RSS after construction plus the first query, with GC run and
//     free memory returned to the OS. This is the steady-state footprint of a
//     process ready to serve queries.
//   - post_loop: RSS after a warm query loop, same treatment.
//   - peak:      ru_maxrss high-water mark.
//   - delta:     post_load - baseline.
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

// Run builds the candidate, drives it through a warm query loop, and prints
// one result line.
func Run(label string, build func() func(lng, lat float64) string) {
	debug.FreeOSMemory()
	baseline := rssMiB()

	lookup := build()
	_ = lookup(Points[0].Lng, Points[0].Lat)
	debug.FreeOSMemory()
	postLoad := rssMiB()

	for i := range LoopQueries {
		p := Points[i%len(Points)]
		_ = lookup(p.Lng, p.Lat)
	}
	debug.FreeOSMemory()
	postLoop := rssMiB()

	fmt.Printf("%-32s baseline=%7.1f  post_load=%7.1f  post_loop=%7.1f  peak=%7.1f  delta=%7.1f  (MiB)\n",
		label, baseline, postLoad, postLoop, peakMiB(), postLoad-baseline)
}
