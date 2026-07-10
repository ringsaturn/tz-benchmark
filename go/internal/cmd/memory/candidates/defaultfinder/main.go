package main

import (
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
	"github.com/ringsaturn/tzf"
)

func main() {
	memprobe.Run("DefaultFinder (lite+preindex)", func() func(lng, lat float64) string {
		f, err := tzf.NewDefaultFinder()
		if err != nil {
			panic(err)
		}
		return f.GetTimezoneName
	})
}
