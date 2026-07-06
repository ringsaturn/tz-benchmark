# Accuracy comparison of timezonefinder and tzfpy against the tzf
# full-precision ground truth (gt_*.csv produced by go/accuracy).
#
# Usage: uv run python accuracy.py
import csv

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


def load(path):
    rows = []
    with open(path) as f:
        for lng, lat, name in csv.reader(f):
            rows.append((float(lng), float(lat), name))
    return rows


def evaluate(label, rows, fn):
    wrong = empty = 0
    for lng, lat, gt_name in rows:
        got = fn(lng, lat)
        got = norm(got) if got else ""
        if not got:
            empty += 1
        elif got != gt_name:
            wrong += 1
    n = len(rows)
    print(
        f"{label:<24} N={n}  differ={wrong} ({100 * wrong / n:.4f}%)  "
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
