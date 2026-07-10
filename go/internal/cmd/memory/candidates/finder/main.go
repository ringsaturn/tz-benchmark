package main

import (
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
	"github.com/ringsaturn/tzf"
	tzfdist "github.com/ringsaturn/tzf-dist"
	pb "github.com/ringsaturn/tzf/gen/go/tzf/v1"
	"google.golang.org/protobuf/proto"
)

func main() {
	memprobe.Run("Finder (lite)", func() func(lng, lat float64) string {
		topo := &pb.CompressedTopoTimezones{}
		if err := proto.Unmarshal(tzfdist.TopologyCompressTopoData, topo); err != nil {
			panic(err)
		}
		f, err := tzf.NewFinderFromCompressedTopo(topo, tzf.SetDropPBTZ)
		if err != nil {
			panic(err)
		}
		return f.GetTimezoneName
	})
}
