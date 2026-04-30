trigger:
	git commit --allow-empty -m "trigger ci"
	git push

all:
	cd go;go test -bench=. -benchmem ./... | tee ../benchmark_result_go.txt
	cd rust; cargo bench | tee ../benchmark_result_rust.txt
	# 	--benchmark-json output.json
	cd python; uv sync; uv run pytest tz_test.py | tee ../benchmark_result_python.txt

new-snapshot: clean all
	@set -e; \
	snapshot_dir="snapshot/$$(date +%F)-$$(git rev-parse HEAD)"; \
	mkdir -p "$$snapshot_dir"; \
	results=$$(ls benchmark_result_*.txt 2>/dev/null || true); \
	if [ -z "$$results" ]; then \
		echo "No benchmark_result_*.txt found in repository root."; \
		exit 1; \
	fi; \
	cp benchmark_result_*.txt "$$snapshot_dir"/; \
	echo "Created $$snapshot_dir"; \
	git add -f "$$snapshot_dir"; \
	git commit -m "Add new benchmark snapshot: $$(date +%F) - $$(git rev-parse HEAD)"

clean:
	rm -f benchmark_result_*.txt
