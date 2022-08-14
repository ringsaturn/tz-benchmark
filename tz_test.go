package tzbenchmark

import (
	"math/rand"
	"os"
	"testing"

	"github.com/bradfitz/latlong"
	timezone "github.com/evanoberholster/timezoneLookup/v2"
	"github.com/ringsaturn/tzf"
	tzfrel "github.com/ringsaturn/tzf-rel"
	"github.com/ringsaturn/tzf/pb"
	"google.golang.org/protobuf/proto"
)

type Point struct {
	Lng float64
	Lat float64
}

var GlobalIterTestSets []Point

var (
	finder     *tzf.Finder
	fullFinder *tzf.Finder
	tzc        timezone.Timezonecache
)

func init() {
	initLite()
	initFull()
	inittzlookup()
	initGlobalTestSets()
}

func initLite() {
	input := &pb.Timezones{}
	if err := proto.Unmarshal(tzfrel.LiteData, input); err != nil {
		panic(err)
	}
	_finder, _ := tzf.NewFinderFromPB(input)
	finder = _finder
}

func initFull() {
	input := &pb.Timezones{}
	if err := proto.Unmarshal(tzfrel.FullData, input); err != nil {
		panic(err)
	}
	_finder, _ := tzf.NewFinderFromPB(input)
	fullFinder = _finder
}

func inittzlookup() {
	f, err := os.Open("timezone.data")
	if err != nil {
		panic(err)
	}
	defer f.Close()
	if err = tzc.Load(f); err != nil {
		panic(err)
	}
	// defer tzc.Close()
}

func initGlobalTestSets() {
	for lng := -180; lng <= 180; lng++ {
		for lat := -90; lat <= 90; lat++ {
			GlobalIterTestSets = append(GlobalIterTestSets, Point{
				Lng: float64(lng),
				Lat: float64(lat),
			})
		}
	}
}

func BenchmarkTimezoneLookup_Random(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		p := GlobalIterTestSets[rand.Intn(len(GlobalIterTestSets))]
		_, _ = tzc.Search(p.Lat, p.Lng)
	}
}

func BenchmarkTimezoneLookup_Gloabl(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		for _, p := range GlobalIterTestSets {
			_, _ = tzc.Search(p.Lat, p.Lng)
		}
	}
}

func BenchmarkTZF_Lite_Random(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		p := GlobalIterTestSets[rand.Intn(len(GlobalIterTestSets))]
		_ = finder.GetTimezoneName(p.Lng, p.Lat)
	}
}

func BenchmarkTZF_Lite_Gloabl(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		for _, p := range GlobalIterTestSets {
			_ = finder.GetTimezoneName(p.Lng, p.Lat)
		}
	}
}

func BenchmarkTZF_Full_Random(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		p := GlobalIterTestSets[rand.Intn(len(GlobalIterTestSets))]
		_ = fullFinder.GetTimezoneName(p.Lng, p.Lat)
	}
}

func BenchmarkTZF_Full_Gloabl(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		for _, p := range GlobalIterTestSets {
			_ = fullFinder.GetTimezoneName(p.Lng, p.Lat)
		}
	}
}

func BenchmarkLatlong_Random(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		p := GlobalIterTestSets[rand.Intn(len(GlobalIterTestSets))]
		_ = latlong.LookupZoneName(p.Lat, p.Lng)
	}
}

func BenchmarkLatlong_Global(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		for _, p := range GlobalIterTestSets {
			_ = latlong.LookupZoneName(p.Lat, p.Lng)
		}
	}
}
