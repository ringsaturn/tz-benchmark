package main

import (
	"github.com/albertyw/localtimezone/v4"
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
)

func main() {
	memprobe.Run("albertyw/localtimezone", func() func(lng, lat float64) string {
		ltz := localtimezone.NewLocalTimeZone()
		return func(lng, lat float64) string {
			zones, err := ltz.GetZone(localtimezone.Point{Lon: lng, Lat: lat})
			if err != nil || len(zones) == 0 {
				return ""
			}
			return zones[0]
		}
	})
}
