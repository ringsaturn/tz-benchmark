package main

import (
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
	"github.com/ringsaturn/tzf"
	tzfdist "github.com/ringsaturn/tzf-dist"
	pb "github.com/ringsaturn/tzf/gen/go/tzf/v1"
	"google.golang.org/protobuf/proto"
)

func main() {
	memprobe.Run("FuzzyFinder (preindex only)", func() func(lng, lat float64) string {
		preindex := &pb.PreindexTimezones{}
		if err := proto.Unmarshal(tzfdist.PreindexData, preindex); err != nil {
			panic(err)
		}
		f, err := tzf.NewFuzzyFinderFromPB(preindex)
		if err != nil {
			panic(err)
		}
		return f.GetTimezoneName
	})
}
