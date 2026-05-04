Benchmark runs on my local, not in GitHub Actions.

Each snapshot directory stores the raw benchmark outputs:

- `benchmark_result_go.txt`
- `benchmark_result_python.txt`
- `benchmark_result_rust.txt`

Run this command from the repository root to regenerate Markdown tables for every snapshot:

```sh
python3 scripts/generate_snapshot_readmes.py --snapshot-root snapshot
```

Run this command to check whether generated snapshot README files are up to date:

```sh
python3 scripts/generate_snapshot_readmes.py --snapshot-root snapshot --check
```
