setup:
	git clone https://github.com/evanoberholster/timezoneLookup
	cd timezoneLookup;go build -o timezone cmd/main.go
	./timezoneLookup/timezone -build

bench:
	go test -bench=. ./...

trigger:
	git commit --allow-empty -m "trigger ci"
	git push

setup-py:
	pip install -r requirements.txt

bench-py:
	pytest tz_test.py --benchmark-json output.json
