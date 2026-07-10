// Accuracy evaluation for tzf: measures disagreement of various
// finders/libraries against a full-precision ground truth (tzf Finder on the
// unsimplified combined-with-oceans dataset).
//
// Usage: go run ./internal/cmd/accuracy
package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"math"
	"math/rand"
	"os"
	"strings"
	"time"
	_ "time/tzdata"

	"github.com/albertyw/localtimezone/v3"
	"github.com/bradfitz/latlong"
	gocitiesjson "github.com/ringsaturn/go-cities.json"
	"github.com/ringsaturn/tzf"
	tzfdist "github.com/ringsaturn/tzf-dist"
	pb "github.com/ringsaturn/tzf/gen/go/tzf/v1"
	gotz "github.com/ugjka/go-tz/v2"
	"github.com/zsefvlol/timezonemapper"
	"google.golang.org/protobuf/proto"
)

type point struct{ Lng, Lat float64 }

// alias maps renamed/merged tzdb identifiers to their current canonical name,
// so that libraries shipping older boundary data are not penalized for pure
// renames (they are still penalized for genuine boundary disagreements).
var alias = map[string]string{
	"Europe/Kiev":          "Europe/Kyiv",
	"Europe/Uzhgorod":      "Europe/Kyiv",
	"Europe/Zaporozhye":    "Europe/Kyiv",
	"Asia/Calcutta":        "Asia/Kolkata",
	"Asia/Rangoon":         "Asia/Yangon",
	"Asia/Saigon":          "Asia/Ho_Chi_Minh",
	"Asia/Katmandu":        "Asia/Kathmandu",
	"Asia/Dacca":           "Asia/Dhaka",
	"Asia/Macao":           "Asia/Macau",
	"Asia/Chongqing":       "Asia/Shanghai",
	"Asia/Harbin":          "Asia/Shanghai",
	"Asia/Kashgar":         "Asia/Urumqi",
	"Asia/Ulan_Bator":      "Asia/Ulaanbaatar",
	"America/Godthab":      "America/Nuuk",
	"America/Nipigon":      "America/Toronto",
	"America/Thunder_Bay":  "America/Toronto",
	"America/Montreal":     "America/Toronto",
	"America/Rainy_River":  "America/Winnipeg",
	"America/Pangnirtung":  "America/Iqaluit",
	"America/Yellowknife":  "America/Edmonton",
	"America/Santa_Isabel": "America/Tijuana",
	"America/Buenos_Aires": "America/Argentina/Buenos_Aires",
	"America/Atka":         "America/Adak",
	"Australia/Currie":     "Australia/Hobart",
	"Pacific/Enderbury":    "Pacific/Kanton",
	"Europe/Nicosia":       "Asia/Nicosia",
}

func norm(name string) string {
	if c, ok := alias[name]; ok {
		return c
	}
	return name
}

func containsName(names []string, name string) bool {
	for _, n := range names {
		if n == name {
			return true
		}
	}
	return false
}

func normalizedNameSet(primary string, names []string) []string {
	out := []string{primary}
	for _, name := range names {
		name = norm(name)
		if !containsName(out, name) {
			out = append(out, name)
		}
	}
	return out
}

type candidate struct {
	name string
	fn   func(lng, lat float64) string
}

// offsetSignature returns the UTC offsets of a zone at two probe instants
// (northern winter and summer), or nil for names the tz database does not
// know. Two zone names with equal signatures produce the same clock time
// year-round, which separates offset-band answers from answers that put the
// clock at a genuinely different time.
var offsetCache = map[string]*[2]int{}

func offsetSignature(name string) *[2]int {
	if sig, ok := offsetCache[name]; ok {
		return sig
	}
	var sig *[2]int
	if loc, err := time.LoadLocation(name); err == nil {
		_, jan := time.Date(2026, 1, 15, 12, 0, 0, 0, time.UTC).In(loc).Zone()
		_, jul := time.Date(2026, 7, 15, 12, 0, 0, 0, time.UTC).In(loc).Zone()
		sig = &[2]int{jan, jul}
	}
	offsetCache[name] = sig
	return sig
}

func sameClock(got, expected string) bool {
	gotSig, expectedSig := offsetSignature(got), offsetSignature(expected)
	return gotSig != nil && expectedSig != nil && *gotSig == *expectedSig
}

func main() {
	// ---- Ground truth: full-precision Finder (no preindex) ----
	fullTopo := &pb.CompressedTopoTimezones{}
	if err := proto.Unmarshal(tzfdist.CompressTopoData, fullTopo); err != nil {
		panic(err)
	}
	gtF, err := tzf.NewFinderFromCompressedTopo(fullTopo, tzf.SetDropPBTZ)
	if err != nil {
		panic(err)
	}
	gt := func(lng, lat float64) string { return gtF.GetTimezoneName(lng, lat) }

	// ---- tzf-family candidates ----
	liteTopo := &pb.CompressedTopoTimezones{}
	if err := proto.Unmarshal(tzfdist.TopologyCompressTopoData, liteTopo); err != nil {
		panic(err)
	}
	liteF, err := tzf.NewFinderFromCompressedTopo(liteTopo, tzf.SetDropPBTZ)
	if err != nil {
		panic(err)
	}
	preindex := &pb.PreindexTimezones{}
	if err := proto.Unmarshal(tzfdist.PreindexData, preindex); err != nil {
		panic(err)
	}
	fuzzyF, err := tzf.NewFuzzyFinderFromPB(preindex)
	if err != nil {
		panic(err)
	}
	defF, err := tzf.NewDefaultFinder()
	if err != nil {
		panic(err)
	}
	fullDefF, err := tzf.NewFullFinder()
	if err != nil {
		panic(err)
	}

	ltz, err := localtimezone.NewLocalTimeZone()
	if err != nil {
		panic(err)
	}

	fmt.Printf("ground truth data version: %s\n", gtF.DataVersion())

	tzfFamily := []candidate{
		{"DefaultFinder (lite+preindex)", func(lng, lat float64) string { return defF.GetTimezoneName(lng, lat) }},
		{"Finder (lite)", func(lng, lat float64) string { return liteF.GetTimezoneName(lng, lat) }},
		{"FullFinder (full+preindex)", func(lng, lat float64) string { return fullDefF.GetTimezoneName(lng, lat) }},
		{"FuzzyFinder (preindex only)", func(lng, lat float64) string { return fuzzyF.GetTimezoneName(lng, lat) }},
	}
	thirdParty := []candidate{
		{"bradfitz/latlong", func(lng, lat float64) string { return latlong.LookupZoneName(lat, lng) }},
		{"zsefvlol/timezonemapper", func(lng, lat float64) string { return timezonemapper.LatLngToTimezoneString(lat, lng) }},
		{"albertyw/localtimezone", func(lng, lat float64) string {
			zones, err := ltz.GetZone(localtimezone.Point{Lon: lng, Lat: lat})
			if err != nil || len(zones) == 0 {
				return ""
			}
			return zones[0]
		}},
		{"ugjka/go-tz", func(lng, lat float64) string {
			zones, err := gotz.GetZone(gotz.Point{Lon: lng, Lat: lat})
			if err != nil || len(zones) == 0 {
				return ""
			}
			return zones[0]
		}},
	}

	// ---- Datasets ----
	var cities []point
	for c := range gocitiesjson.All(false) {
		cities = append(cities, point{c.Lng, c.Lat})
	}

	raw, err := os.ReadFile("../data/edges.json")
	if err != nil {
		panic(err)
	}
	var edgeCities []*gocitiesjson.City
	if err := json.Unmarshal(raw, &edgeCities); err != nil {
		panic(err)
	}
	var edges []point
	for _, c := range edgeCities {
		edges = append(edges, point{c.Lng, c.Lat})
	}

	rng := rand.New(rand.NewSource(42))
	uniform := make([]point, 1_000_000)
	for i := range uniform {
		lng := rng.Float64()*360 - 180
		lat := math.Asin(2*rng.Float64()-1) * 180 / math.Pi
		uniform[i] = point{lng, lat}
	}

	datasets := []struct {
		name string
		pts  []point
	}{
		{"cities", cities},
		{"edges", edges},
		{"uniform", uniform},
	}

	// ---- Evaluation ----
	deltas := []float64{0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1}
	dirs := [][2]float64{{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {1, -1}, {-1, 1}, {-1, -1}}

	for _, ds := range datasets {
		fmt.Printf("\n=== dataset %s (N=%d) ===\n", ds.name, len(ds.pts))
		gtNames := make([]string, len(ds.pts))
		gtNameSets := make([][]string, len(ds.pts))
		for i, p := range ds.pts {
			primary := norm(gt(p.Lng, p.Lat))
			names, err := gtF.GetTimezoneNames(p.Lng, p.Lat)
			if err != nil {
				names = nil
			}
			gtNameSets[i] = normalizedNameSet(primary, names)
			gtNames[i] = gtNameSets[i][0]
		}

		// Dump ground truth for the Python-side comparison. Column 4 records all
		// zones that cover the point, preserving overlap ambiguity in the data.
		if ds.name != "uniform" {
			f, err := os.Create(fmt.Sprintf("../data/gt_%s.csv", ds.name))
			if err != nil {
				panic(err)
			}
			w := csv.NewWriter(f)
			for i, p := range ds.pts {
				if err := w.Write([]string{
					fmt.Sprintf("%.6f", p.Lng),
					fmt.Sprintf("%.6f", p.Lat),
					gtNames[i],
					strings.Join(gtNameSets[i], ";"),
				}); err != nil {
					panic(err)
				}
			}
			w.Flush()
			if err := w.Error(); err != nil {
				panic(err)
			}
			if err := f.Close(); err != nil {
				panic(err)
			}
		}

		cands := tzfFamily
		if ds.name != "uniform" {
			cands = append(append([]candidate{}, tzfFamily...), thirdParty...)
		}
		for _, c := range cands {
			var wrong, ambiguous, offsetEq, empty int
			var wrongIdx []int
			for i, p := range ds.pts {
				got := norm(c.fn(p.Lng, p.Lat))
				switch {
				case got == "":
					empty++
				case got != gtNames[i]:
					if len(gtNameSets[i]) > 1 && containsName(gtNameSets[i], got) {
						ambiguous++
					} else if sameClock(got, gtNames[i]) {
						offsetEq++
					} else {
						wrong++
						wrongIdx = append(wrongIdx, i)
					}
				}
			}
			n := len(ds.pts)
			fmt.Printf("%-32s wrong=%6d (%8.4f%%)  ambiguous=%4d (%7.4f%%)  offset_eq=%6d (%8.4f%%)  empty=%6d (%8.4f%%)\n",
				c.name, wrong, 100*float64(wrong)/float64(n),
				ambiguous, 100*float64(ambiguous)/float64(n),
				offsetEq, 100*float64(offsetEq)/float64(n),
				empty, 100*float64(empty)/float64(n))

			// Perturbation certification for genuinely wrong answers of the
			// tzf-family finders: find the smallest delta such that the
			// candidate's answer is the ground truth somewhere within delta,
			// i.e. the answer's true region is at most ~delta away.
			if (c.name == "DefaultFinder (lite+preindex)" || c.name == "Finder (lite)" || c.name == "FullFinder (full+preindex)") && len(wrongIdx) > 0 {
				hist := make(map[float64]int)
				uncertified := 0
				for _, i := range wrongIdx {
					p := ds.pts[i]
					got := norm(c.fn(p.Lng, p.Lat))
					found := false
					for _, d := range deltas {
						for _, dir := range dirs {
							if norm(gt(p.Lng+dir[0]*d, p.Lat+dir[1]*d)) == got {
								hist[d]++
								found = true
								break
							}
						}
						if found {
							break
						}
					}
					if !found {
						uncertified++
						fmt.Printf("    uncertified: lng=%.5f lat=%.5f got=%s gt=%s\n", p.Lng, p.Lat, got, gtNames[i])
					}
				}
				cum := 0
				fmt.Printf("    wrong-answer distance certification (deg -> cumulative %%):\n    ")
				for _, d := range deltas {
					cum += hist[d]
					fmt.Printf("<=%.3f: %.1f%%  ", d, 100*float64(cum)/float64(len(wrongIdx)))
				}
				fmt.Printf(">0.1: %.1f%%\n", 100*float64(uncertified)/float64(len(wrongIdx)))
			}
		}
	}
}
