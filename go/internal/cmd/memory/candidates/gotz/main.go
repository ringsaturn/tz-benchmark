package main

import (
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
	gotz "github.com/ugjka/go-tz/v2"
)

func main() {
	memprobe.Run("ugjka/go-tz", func() func(lng, lat float64) string {
		return func(lng, lat float64) string {
			zones, err := gotz.GetZone(gotz.Point{Lon: lng, Lat: lat})
			if err != nil || len(zones) == 0 {
				return ""
			}
			return zones[0]
		}
	})
}
