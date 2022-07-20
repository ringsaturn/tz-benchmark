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

	lat := 37.7749
	lng := -122.4194

	for i := 0; i <= b.N; i++ {
		_, _ = tzc.Search(lat, lng)
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

	lat := 37.7749
	lng := -122.4194

	for i := 0; i <= b.N; i++ {
		_ = finder.GetTimezoneName(lng, lat)
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

	lat := 37.7749
	lng := -122.4194

	for i := 0; i <= b.N; i++ {
		_ = finder.GetTimezoneName(lng, lat)
	}
}
