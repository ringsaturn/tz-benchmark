// Runtime floor: a candidate that does nothing, so the Go runtime's own RSS
// can be read off the same table as the real candidates.
package main

import "github.com/ringsaturn/tz-benchmark/go/internal/memprobe"

func main() {
	memprobe.Run("(go runtime floor)", func() func(lng, lat float64) string {
		return func(lng, lat float64) string { return "" }
	})
}
