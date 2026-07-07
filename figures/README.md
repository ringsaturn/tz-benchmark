# Figure Data

This directory contains generated data files for benchmark figures.

Regenerate from the repository root with:

```sh
cd python
uv run python ../scripts/generate_figure_data.py
```

Files:

- `rust_log_bars.tsv`: Rust cross-library log-scale bar chart data.
- `go_log_bars.tsv`: Go cross-library log-scale bar chart data.
- `python_latency_cdf_tzfpy_random.tsv`: tzfpy random-city CDF points.
- `python_latency_cdf_timezonefinder_random.tsv`: timezonefinder random-city CDF points.
- `python_latency_cdf_tzfpy_edge.tsv`: tzfpy edge-city CDF points.
- `python_latency_cdf_timezonefinder_edge.tsv`: timezonefinder edge-city CDF points.
- `python_latency_cdf_summary.tsv`: summary statistics for the CDF sampling run.

Parameters:

- Go snapshot: `snapshot/2026-05-04-0b7659e1957245fcddd79b4dd9224fee82b3b0ea`
- Rust snapshot: `snapshot/2026-05-04-0b7659e1957245fcddd79b4dd9224fee82b3b0ea`
- Python samples per series: `20000`
- Python warmup queries per series: `1000`
- Python random seed: `20260707`

The Python CDF sampler measures coordinate selection plus lookup time.
