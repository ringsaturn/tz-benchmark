trigger:
	git commit --allow-empty -m "trigger ci"
	git push

all:
	cd go;go test -bench=. -benchmem ./... | tee ../benchmark_result_go.txt
	cd rust; cargo bench | tee ../benchmark_result_rust.txt
	# 	--benchmark-json output.json
	cd python; uv sync; uv run pytest tz_test.py | tee ../benchmark_result_python.txt
