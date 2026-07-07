# gridindexeval

`gridindexeval` evaluates GridIndex cell-size trade-offs against the embedded `tzf-dist` data.

Default run:

```bash
go run ./go/internal/cmd/gridindexeval -sizes 0.5,1,2 -uniform 100000
```

Wider parameter sweep:

```bash
go run ./go/internal/cmd/gridindexeval -sizes 0.25,0.5,1,2,4 -uniform 100000
```

CSV output:

```bash
go run ./go/internal/cmd/gridindexeval -sizes 0.25,0.5,1,2,4 -uniform 100000 -format csv
```

The 2026-07-07 sweep used:

- `tzf-dist v0.0.2026-b-fix1`
- `cities`: 154,694 points from `go-cities.json`
- `edge_cities`: 23,474 current `FuzzyFinder` misses
- `uniform_glob`: 100,000 spherical-uniform points, seed 42

Key result:

- 1 deg lite index: 65,341 cells, 153,502 refs, 871,789 proto bytes, city mean 3.28 candidates, edge-city mean 4.10 candidates, uniform mean 2.43 candidates.
- 0.5 deg lite index: 3,576,808 proto bytes, city mean 3.07 candidates, edge-city mean 3.81 candidates, uniform mean 2.33 candidates.
- 2 deg lite index: 214,936 proto bytes, city mean 3.83 candidates, edge-city mean 4.86 candidates, uniform mean 2.67 candidates.

Conclusion: 1 deg remains the best current default. It saves about 2.7 MB versus 0.5 deg while giving up only about 0.2 city candidates and 0.3 edge-city candidates on average. It costs about 657 KB more than 2 deg, but preserves materially better fallback candidate reduction.
