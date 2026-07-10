package main

import (
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
	"github.com/zsefvlol/timezonemapper"
)

func main() {
	memprobe.Run("zsefvlol/timezonemapper", func() func(lng, lat float64) string {
		return func(lng, lat float64) string { return timezonemapper.LatLngToTimezoneString(lat, lng) }
	})
}
