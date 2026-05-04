#!/usr/bin/env python3
"""Generate Markdown README files for benchmark snapshots."""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


GO_META_PREFIXES = ("goos:", "goarch:", "pkg:", "cpu:")
RUST_BENCH_RE = re.compile(
    r"^test\s+(.+?)\s+\.\.\.\s+bench:\s+([0-9,.]+)\s+ns/iter\s+\(\+/-\s+([0-9,.]+)\)"
)


def md_escape(value: object) -> str:
    return str(value).replace("|", r"\|")


def markdown_table(headers: list[str], rows: list[dict[str, str]]) -> str:
    if not rows:
        return "_No benchmark rows found._\n"

    output = [
        "| " + " | ".join(headers) + " |",
        "| " + " | ".join(["---"] * len(headers)) + " |",
    ]
    for row in rows:
        output.append("| " + " | ".join(md_escape(row.get(header, "")) for header in headers) + " |")
    return "\n".join(output) + "\n"


def strip_pytest_ratio(value: str) -> str:
    return re.sub(r"\s+\([^)]*\)", "", value).strip()


def clean_go_benchmark_name(name: str) -> str:
    return re.sub(r"-\d+$", "", name).removeprefix("Benchmark")


def clean_rust_benchmark_name(name: str) -> str:
    return name.removeprefix("benches_tz_crates::bench_")


def parse_go(path: Path) -> tuple[list[str], list[str], list[dict[str, str]]]:
    meta: list[str] = []
    rows: list[dict[str, str]] = []

    for line in path.read_text().splitlines():
        if line.startswith(GO_META_PREFIXES):
            meta.append(line)
            continue
        if not line.startswith("Benchmark"):
            continue

        parts = line.split()
        if len(parts) < 3:
            continue

        row = {
            "Benchmark": clean_go_benchmark_name(parts[0]),
            "Iterations": parts[1],
            "ns/op": parts[2],
        }
        index = 3
        while index + 1 < len(parts):
            value = parts[index]
            unit = parts[index + 1]
            if unit.startswith("ns/p"):
                row[unit.removeprefix("ns/")] = value
                index += 2
            elif unit == "B/op":
                row["B/op"] = value
                index += 2
            elif unit == "allocs/op":
                row["allocs/op"] = value
                index += 2
            else:
                index += 1
        rows.append(row)

    percentile_headers = [header for header in ("p50", "p90", "p99") if any(header in row for row in rows)]
    headers = ["Benchmark", "Iterations", "ns/op", *percentile_headers, "B/op", "allocs/op"]
    return meta, headers, rows


def parse_python(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    rows: list[dict[str, str]] = []
    unit = "ns"

    for line in path.read_text().splitlines():
        if line.startswith("Name (time in "):
            unit_match = re.search(r"Name \(time in ([^)]+)\)", line)
            if unit_match:
                unit = unit_match.group(1)
            continue
        if not line.startswith("test_"):
            continue

        columns = re.split(r"\s{2,}", line.strip())
        if len(columns) < 10:
            continue

        rows.append(
            {
                "Benchmark": columns[0],
                f"Min {unit}": strip_pytest_ratio(columns[1]),
                f"Max {unit}": strip_pytest_ratio(columns[2]),
                f"Mean {unit}": strip_pytest_ratio(columns[3]),
                f"StdDev {unit}": strip_pytest_ratio(columns[4]),
                f"Median {unit}": strip_pytest_ratio(columns[5]),
                f"IQR {unit}": strip_pytest_ratio(columns[6]),
                "Outliers": columns[7],
                "OPS Kops/s": strip_pytest_ratio(columns[8]),
                "Rounds": columns[9],
                "Iterations": columns[10] if len(columns) > 10 else "",
            }
        )

    headers = [
        "Benchmark",
        f"Min {unit}",
        f"Max {unit}",
        f"Mean {unit}",
        f"StdDev {unit}",
        f"Median {unit}",
        f"IQR {unit}",
        "Outliers",
        "OPS Kops/s",
        "Rounds",
        "Iterations",
    ]
    return headers, rows


def parse_rust(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    rows: list[dict[str, str]] = []
    for line in path.read_text().splitlines():
        match = RUST_BENCH_RE.match(line)
        if not match:
            continue
        rows.append(
            {
                "Benchmark": clean_rust_benchmark_name(match.group(1)),
                "ns/iter": match.group(2),
                "stddev ns": match.group(3),
            }
        )

    return ["Benchmark", "ns/iter", "stddev ns"], rows


def has_snapshot_inputs(snapshot_dir: Path) -> bool:
    return all(
        (snapshot_dir / filename).is_file()
        for filename in (
            "benchmark_result_go.txt",
            "benchmark_result_python.txt",
            "benchmark_result_rust.txt",
        )
    )


def build_readme(snapshot_dir: Path) -> str:
    go_meta, go_headers, go_rows = parse_go(snapshot_dir / "benchmark_result_go.txt")
    python_headers, python_rows = parse_python(snapshot_dir / "benchmark_result_python.txt")
    rust_headers, rust_rows = parse_rust(snapshot_dir / "benchmark_result_rust.txt")

    lines = [
        f"# Benchmark Snapshot {snapshot_dir.name}",
        "",
        "This file summarizes the raw benchmark outputs in this directory as Markdown tables.",
        "",
        "Raw sources:",
        "",
        "- `benchmark_result_go.txt`",
        "- `benchmark_result_python.txt`",
        "- `benchmark_result_rust.txt`",
        "",
        "## Go",
        "",
    ]
    if go_meta:
        lines.extend(f"- `{item}`" for item in go_meta)
        lines.append("")
    lines.append(markdown_table(go_headers, go_rows))
    lines.extend(["", "## Python", "", markdown_table(python_headers, python_rows), "", "## Rust", "", markdown_table(rust_headers, rust_rows)])
    return "\n".join(lines).rstrip() + "\n"


def iter_snapshot_dirs(snapshot_root: Path) -> list[Path]:
    if not snapshot_root.is_dir():
        raise FileNotFoundError(f"snapshot root does not exist: {snapshot_root}")
    return sorted(path for path in snapshot_root.iterdir() if path.is_dir() and has_snapshot_inputs(path))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--snapshot-root",
        type=Path,
        default=Path("snapshot"),
        help="Directory containing benchmark snapshot subdirectories.",
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Exit with a non-zero status if any generated README would change.",
    )
    args = parser.parse_args()

    changed: list[Path] = []
    for snapshot_dir in iter_snapshot_dirs(args.snapshot_root):
        readme_path = snapshot_dir / "README.md"
        content = build_readme(snapshot_dir)
        existing = readme_path.read_text() if readme_path.exists() else None
        if existing == content:
            continue
        changed.append(readme_path)
        if not args.check:
            readme_path.write_text(content)

    if args.check and changed:
        for path in changed:
            print(f"README out of date: {path}", file=sys.stderr)
        return 1

    for path in changed:
        print(f"generated {path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
