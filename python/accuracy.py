# Accuracy comparison of timezonefinder and tzfpy against the tzf
# full-precision ground truth (gt_*.csv produced by go/internal/cmd/accuracy).
#
# Usage: uv run python accuracy.py
import csv
from datetime import datetime
from zoneinfo import ZoneInfo

import timezonefinder
import tzfpy

ALIAS = {
    "Europe/Kiev": "Europe/Kyiv",
    "Europe/Uzhgorod": "Europe/Kyiv",
    "Europe/Zaporozhye": "Europe/Kyiv",
    "Asia/Calcutta": "Asia/Kolkata",
    "Asia/Rangoon": "Asia/Yangon",
    "Asia/Saigon": "Asia/Ho_Chi_Minh",
    "Asia/Katmandu": "Asia/Kathmandu",
    "Asia/Dacca": "Asia/Dhaka",
    "Asia/Macao": "Asia/Macau",
    "Asia/Chongqing": "Asia/Shanghai",
    "Asia/Harbin": "Asia/Shanghai",
    "Asia/Kashgar": "Asia/Urumqi",
    "Asia/Ulan_Bator": "Asia/Ulaanbaatar",
    "America/Godthab": "America/Nuuk",
    "America/Nipigon": "America/Toronto",
    "America/Thunder_Bay": "America/Toronto",
    "America/Montreal": "America/Toronto",
    "America/Rainy_River": "America/Winnipeg",
    "America/Pangnirtung": "America/Iqaluit",
    "America/Yellowknife": "America/Edmonton",
    "America/Santa_Isabel": "America/Tijuana",
    "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
    "America/Atka": "America/Adak",
    "Australia/Currie": "Australia/Hobart",
    "Pacific/Enderbury": "Pacific/Kanton",
    "Europe/Nicosia": "Asia/Nicosia",
}


def norm(name):
    return ALIAS.get(name, name)


# UTC offsets at two probe instants (northern winter and summer). Two zone
# names with equal signatures produce the same clock time year-round, which
# separates offset-band answers from answers that put the clock at a
# genuinely different time.
_PROBE_INSTANTS = (datetime(2026, 1, 15, 12), datetime(2026, 7, 15, 12))
_offset_cache = {}


def offset_signature(name):
    if name not in _offset_cache:
        try:
            tz = ZoneInfo(name)
            _offset_cache[name] = tuple(
                t.replace(tzinfo=tz).utcoffset() for t in _PROBE_INSTANTS
            )
        except (ValueError, KeyError, ModuleNotFoundError):
            _offset_cache[name] = None
    return _offset_cache[name]


def same_clock(got, expected):
    got_sig, expected_sig = offset_signature(got), offset_signature(expected)
    return got_sig is not None and got_sig == expected_sig


def load(path):
    rows = []
    with open(path) as f:
        for row in csv.reader(f):
            lng, lat, name = row[:3]
            if len(row) >= 4 and row[3]:
                names = {norm(item) for item in row[3].split(";") if item}
            else:
                names = {norm(name)}
            rows.append((float(lng), float(lat), norm(name), names))
    return rows


def evaluate(label, rows, fn):
    wrong = ambiguous = offset_eq = empty = 0
    for lng, lat, gt_name, gt_names in rows:
        got = fn(lng, lat)
        got = norm(got) if got else ""
        if not got:
            empty += 1
        elif got != gt_name:
            if got in gt_names:
                ambiguous += 1
            elif same_clock(got, gt_name):
                offset_eq += 1
            else:
                wrong += 1
    n = len(rows)
    print(
        f"{label:<24} N={n}  wrong={wrong} ({100 * wrong / n:.4f}%)  "
        f"ambiguous={ambiguous} ({100 * ambiguous / n:.4f}%)  "
        f"offset_eq={offset_eq} ({100 * offset_eq / n:.4f}%)  "
        f"empty={empty} ({100 * empty / n:.4f}%)"
    )


def main():
    tf = timezonefinder.TimezoneFinder(in_memory=True)
    print("tzfpy data version:", tzfpy.data_version())

    for name in ("cities", "edges"):
        rows = load(f"../data/gt_{name}.csv")
        print(f"\n=== dataset {name} (N={len(rows)}) ===")
        evaluate("timezonefinder", rows, lambda lng, lat: tf.timezone_at(lng=lng, lat=lat))
        evaluate("tzfpy (DefaultFinder)", rows, tzfpy.get_tz)


if __name__ == "__main__":
    main()
