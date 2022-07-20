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

func BenchmarkTimezoneLookup(b *testing.B) {
	var tzc timezone.Timezonecache
	f, err := os.Open("timezone.data")
	if err != nil {
		panic(err)
	}
	defer f.Close()
	if err = tzc.Load(f); err != nil {
		panic(err)
	}
	defer tzc.Close()

	for i := 0; i <= b.N; i++ {
		for _, tt := range TestSets {
			tzc.Search(tt.Lat, tt.Lng)
		}
	}
}

func BenchmarkTZF_Lite(b *testing.B) {
	input := &pb.Timezones{}

	// Lite data, about 16.7MB
	dataFile := tzfrel.LiteData

	if err := proto.Unmarshal(dataFile, input); err != nil {
		panic(err)
	}
	finder, _ := tzf.NewFinderFromPB(input)

	for i := 0; i <= b.N; i++ {
		for _, tt := range TestSets {
			_ = finder.GetTimezoneName(tt.Lng, tt.Lat)
		}
	}
}

func BenchmarkTZF_Full(b *testing.B) {
	input := &pb.Timezones{}

	// Full data, about 83.5MB
	dataFile := tzfrel.FullData

	if err := proto.Unmarshal(dataFile, input); err != nil {
		panic(err)
	}
	finder, _ := tzf.NewFinderFromPB(input)

	for i := 0; i <= b.N; i++ {
		for _, tt := range TestSets {
			_ = finder.GetTimezoneName(tt.Lng, tt.Lat)
		}
	}
}
