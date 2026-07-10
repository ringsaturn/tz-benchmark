package main

import (
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
	"github.com/ringsaturn/tzf"
)

func main() {
	memprobe.Run("FullFinder (full+preindex)", func() func(lng, lat float64) string {
		f, err := tzf.NewFullFinder()
		if err != nil {
			panic(err)
		}
		return f.GetTimezoneName
	})
}
