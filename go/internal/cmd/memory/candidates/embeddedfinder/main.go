package main

import (
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
	"github.com/ringsaturn/tzf/v2"
)

func main() {
	memprobe.Run("EmbeddedFinder (lite .tzb in place)", func() func(lng, lat float64) string {
		f, err := tzf.NewEmbeddedFinder()
		if err != nil {
			panic(err)
		}
		return f.GetTimezoneName
	})
}
