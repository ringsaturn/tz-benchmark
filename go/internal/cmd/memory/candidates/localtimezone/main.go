package main

import (
	"github.com/albertyw/localtimezone/v3"
	"github.com/ringsaturn/tz-benchmark/go/internal/memprobe"
)

func main() {
	memprobe.Run("albertyw/localtimezone", func() func(lng, lat float64) string {
		ltz, err := localtimezone.NewLocalTimeZone()
		if err != nil {
			panic(err)
		}
		return func(lng, lat float64) string {
			zones, err := ltz.GetZone(localtimezone.Point{Lon: lng, Lat: lat})
			if err != nil || len(zones) == 0 {
				return ""
			}
			return zones[0]
		}
	})
}
