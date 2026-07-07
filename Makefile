.PHONY: trigger all accuracy figures new-snapshot clean

trigger:
	git commit --allow-empty -m "trigger ci"
	git push

all:
	cd go;go test -bench=. -benchmem ./... | tee ../benchmark_result_go.txt
	cd rust; cargo bench | tee ../benchmark_result_rust.txt
	# 	--benchmark-json output.json
	cd python; uv sync; uv run pytest tz_test.py | tee ../benchmark_result_python.txt

accuracy:
	cd go; go run ./accuracy | tee ../accuracy_result_go.txt
	cd python; uv sync; uv run python accuracy.py | tee ../accuracy_result_python.txt
	cd rust; cargo run --example accuracy | tee ../accuracy_result_rust.txt

figures:
	cd python; uv sync; uv run python ../scripts/generate_figure_data.py

new-snapshot: clean all accuracy
	@set -e; \
	snapshot_dir="snapshot/$$(date +%F)-$$(git rev-parse HEAD)"; \
	mkdir -p "$$snapshot_dir"; \
	results=$$(ls benchmark_result_*.txt 2>/dev/null || true); \
	if [ -z "$$results" ]; then \
		echo "No benchmark_result_*.txt found in repository root."; \
		exit 1; \
	fi; \
	cp benchmark_result_*.txt "$$snapshot_dir"/; \
	cp accuracy_result_*.txt "$$snapshot_dir"/; \
	python3 scripts/generate_snapshot_readmes.py --snapshot-root snapshot; \
	echo "Created $$snapshot_dir"; \
	git add -f "$$snapshot_dir"; \
	git commit -m "Add new benchmark snapshot: $$(date +%F) - $$(git rev-parse HEAD)"

clean:
	rm -f benchmark_result_*.txt accuracy_result_*.txt
