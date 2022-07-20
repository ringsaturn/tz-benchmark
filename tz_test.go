package tzbenchmark

import (
	"os"
	"testing"

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

var TestSets = []Point{
	{
		Lng: 116,
		Lat: 39,
	},
	{
		Lng: -122.4194,
		Lat: 37.7749,
	},
	{
		Lng: 0.1276,
		Lat: 51.5073,
	},
}

var (
	finder     *tzf.Finder
	fullFinder *tzf.Finder
	tzc        timezone.Timezonecache
)

func init() {
	initLite()
	initFull()
	inittzlookup()
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

func BenchmarkTimezoneLookup(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		for _, tt := range TestSets {
			tzc.Search(tt.Lat, tt.Lng)
		}
	}
}

func BenchmarkTZF_Lite(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		for _, tt := range TestSets {
			_ = finder.GetTimezoneName(tt.Lng, tt.Lat)
		}
	}
}

func BenchmarkTZF_Full(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		for _, tt := range TestSets {
			_ = fullFinder.GetTimezoneName(tt.Lng, tt.Lat)
		}
	}
}
