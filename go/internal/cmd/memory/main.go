// Memory evaluation: measures the steady-state resident memory footprint of
// each timezone-lookup library.
//
// Every candidate lives in its own main package under ./candidates so the
// child process links (and package-inits) only the library under test; a
// shared-binary design would hide init-time data loading of one library in
// every other library's baseline. Column semantics are documented in
// internal/memprobe.
//
// Usage: go run ./internal/cmd/memory
package main

import (
	"fmt"
	"os"
	"os/exec"
)

var candidates = []string{
	"noop",
	"defaultfinder",
	"finder",
	"fullfinder",
	"fuzzyfinder",
	"latlong",
	"timezonemapper",
	"localtimezone",
	"gotz",
}

func main() {
	fmt.Println("memory footprint per candidate (isolated child process, RSS in MiB)")
	for _, key := range candidates {
		cmd := exec.Command("go", "run", "./internal/cmd/memory/candidates/"+key)
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		if err := cmd.Run(); err != nil {
			panic(fmt.Sprintf("candidate %s failed: %v", key, err))
		}
	}
}
