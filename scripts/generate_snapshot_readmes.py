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
ACCURACY_DATASET_RE = re.compile(r"^=== dataset (.+?) \(N=(\d+)\) ===$")
ACCURACY_WRONG_RE = re.compile(
    r"^(?P<candidate>.+?)\s+wrong=\s*(?P<wrong>\d+)\s+\(\s*(?P<wrong_pct>[0-9.]+)%\)"
    r"(?:\s+ambiguous=\s*(?P<ambiguous>\d+)\s+\(\s*(?P<ambiguous_pct>[0-9.]+)%\))?"
    r"\s+empty=\s*(?P<empty>\d+)\s+\(\s*(?P<empty_pct>[0-9.]+)%\)"
)
ACCURACY_DIFFER_RE = re.compile(
    r"^(?P<candidate>.+?)\s+N=(?P<n>\d+)\s+differ=(?P<wrong>\d+)\s+\((?P<wrong_pct>[0-9.]+)%\)"
    r"\s+empty=(?P<empty>\d+)\s+\((?P<empty_pct>[0-9.]+)%\)"
)
MEMORY_LINE_RE = re.compile(
    r"^(?P<candidate>.+?)\s+baseline=\s*(?P<baseline>[0-9.]+)\s+post_load=\s*(?P<post_load>[0-9.]+)"
    r"\s+post_loop=\s*(?P<post_loop>[0-9.]+)\s+peak=\s*(?P<peak>[0-9.]+)\s+delta=\s*(?P<delta>-?[0-9.]+)"
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


def parse_accuracy(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    rows: list[dict[str, str]] = []
    dataset = ""
    dataset_n = ""

    for line in path.read_text().splitlines():
        dataset_match = ACCURACY_DATASET_RE.match(line)
        if dataset_match:
            dataset = dataset_match.group(1)
            dataset_n = dataset_match.group(2)
            continue

        wrong_match = ACCURACY_WRONG_RE.match(line)
        if wrong_match and dataset:
            row = {
                "Dataset": dataset,
                "N": dataset_n,
                "Candidate": wrong_match.group("candidate").strip(),
                "Wrong": wrong_match.group("wrong"),
                "Wrong %": wrong_match.group("wrong_pct"),
                "Ambiguous": wrong_match.group("ambiguous") or "",
                "Ambiguous %": wrong_match.group("ambiguous_pct") or "",
                "Empty": wrong_match.group("empty"),
                "Empty %": wrong_match.group("empty_pct"),
            }
            rows.append(row)
            continue

        differ_match = ACCURACY_DIFFER_RE.match(line)
        if differ_match:
            row = {
                "Dataset": dataset,
                "N": differ_match.group("n"),
                "Candidate": differ_match.group("candidate").strip(),
                "Wrong": differ_match.group("wrong"),
                "Wrong %": differ_match.group("wrong_pct"),
                "Ambiguous": "",
                "Ambiguous %": "",
                "Empty": differ_match.group("empty"),
                "Empty %": differ_match.group("empty_pct"),
            }
            rows.append(row)

    headers = ["Dataset", "N", "Candidate", "Wrong", "Wrong %", "Ambiguous", "Ambiguous %", "Empty", "Empty %"]
    return headers, rows


def parse_memory(path: Path) -> tuple[list[str], list[dict[str, str]]]:
    rows: list[dict[str, str]] = []
    for line in path.read_text().splitlines():
        match = MEMORY_LINE_RE.match(line)
        if not match:
            continue
        rows.append(
            {
                "Candidate": match.group("candidate").strip(),
                "Baseline MiB": match.group("baseline"),
                "Post-load MiB": match.group("post_load"),
                "Post-loop MiB": match.group("post_loop"),
                "Peak MiB": match.group("peak"),
                "Delta MiB": match.group("delta"),
            }
        )

    headers = ["Candidate", "Baseline MiB", "Post-load MiB", "Post-loop MiB", "Peak MiB", "Delta MiB"]
    return headers, rows


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
    accuracy_inputs = [
        ("Go", snapshot_dir / "accuracy_result_go.txt"),
        ("Python", snapshot_dir / "accuracy_result_python.txt"),
        ("Rust", snapshot_dir / "accuracy_result_rust.txt"),
    ]
    accuracy_sections = [
        (label, *parse_accuracy(path))
        for label, path in accuracy_inputs
        if path.is_file()
    ]
    memory_inputs = [
        ("Go", snapshot_dir / "memory_result_go.txt"),
        ("Python", snapshot_dir / "memory_result_python.txt"),
        ("Rust", snapshot_dir / "memory_result_rust.txt"),
    ]
    memory_sections = [
        (label, *parse_memory(path))
        for label, path in memory_inputs
        if path.is_file()
    ]

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
    ]
    for _, path in accuracy_inputs:
        if path.is_file():
            lines.append(f"- `{path.name}`")
    for _, path in memory_inputs:
        if path.is_file():
            lines.append(f"- `{path.name}`")
    lines.extend(["", "## Go", ""])
    if go_meta:
        lines.extend(f"- `{item}`" for item in go_meta)
        lines.append("")
    lines.append(markdown_table(go_headers, go_rows))
    lines.extend(["", "## Python", "", markdown_table(python_headers, python_rows), "", "## Rust", "", markdown_table(rust_headers, rust_rows)])
    if accuracy_sections:
        lines.extend(["", "## Accuracy", ""])
        for label, headers, rows in accuracy_sections:
            lines.extend([f"### {label}", "", markdown_table(headers, rows), ""])
    if memory_sections:
        lines.extend(["", "## Memory", ""])
        for label, headers, rows in memory_sections:
            lines.extend([f"### {label}", "", markdown_table(headers, rows), ""])
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
