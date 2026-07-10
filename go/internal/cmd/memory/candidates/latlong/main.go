package main

import (
	"github.com/bradfitz/latlong"
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
)

func main() {
	memprobe.Run("bradfitz/latlong", func() func(lng, lat float64) string {
		return func(lng, lat float64) string { return latlong.LookupZoneName(lat, lng) }
	})
}
