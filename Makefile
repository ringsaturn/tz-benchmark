setup:
	git clone https://github.com/evanoberholster/timezoneLookup
	cd timezoneLookup;go build -o timezone cmd/main.go
	./timezoneLookup/timezone -build

bench:
	go test -bench=. -benchmem ./...

trigger:
	git commit --allow-empty -m "trigger ci"
	git push
