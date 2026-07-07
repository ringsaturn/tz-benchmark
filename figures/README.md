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
- `python_latency_violin_tzfpy_random.tsv`: tzfpy random-city violin density polygon.
- `python_latency_violin_timezonefinder_random.tsv`: timezonefinder random-city violin density polygon.
- `python_latency_violin_tzfpy_edge.tsv`: tzfpy edge-city violin density polygon.
- `python_latency_violin_timezonefinder_edge.tsv`: timezonefinder edge-city violin density polygon.
- `python_latency_cdf_summary.tsv`: summary statistics for the CDF sampling run.

Parameters:

- Go snapshot: `snapshot/2026-07-07-35d67fc6b44d2db8c35475a8757481ec6f2d76c7`
- Rust snapshot: `snapshot/2026-07-07-35d67fc6b44d2db8c35475a8757481ec6f2d76c7`
- Python samples per series: `20000`
- Python warmup queries per series: `1000`
- Python random seed: `20260707`

The Python CDF sampler measures coordinate selection plus lookup time.
