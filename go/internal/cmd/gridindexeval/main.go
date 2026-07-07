// CLI tool to evaluate GridIndex cell-size trade-offs.
//
// Usage:
//
//	gridindexeval [-sizes 0.5,1,2] [-uniform 100000] [-format markdown|csv]
package main

import (
	"encoding/csv"
	"errors"
	"flag"
	"fmt"
	"math"
	"math/rand"
	"os"
	"slices"
	"strconv"
	"strings"

	gocitiesjson "github.com/ringsaturn/go-cities.json"
	"github.com/ringsaturn/tzf"
	tzfdist "github.com/ringsaturn/tzf-dist"
	pb "github.com/ringsaturn/tzf/gen/go/tzf/v1"
	"google.golang.org/protobuf/proto"
)

var (
	errEmpty                = errors.New("polyline: empty")
	errInvalidByte          = errors.New("polyline: invalid byte")
	errOverflow             = errors.New("polyline: overflow")
	errUnterminatedSequence = errors.New("polyline: unterminated sequence")
)

const polylineScale = 1e5

type bbox [4]float64

type cellKey struct {
	lng int32
	lat int32
}

type samplePoint struct {
	lng float64
	lat float64
}

type distStats struct {
	n         int
	mean      float64
	p50       int
	p75       int
	p90       int
	p95       int
	p99       int
	max       int
	zeroPct   float64
	singlePct float64
	le3Pct    float64
}

type indexStats struct {
	dataset    string
	gridDeg    float64
	cells      int
	refs       int
	protoBytes int
	cellDist   distStats
	samples    map[string]distStats
}

func main() {
	sizesFlag := flag.String("sizes", "0.5,1,2", "comma-separated grid sizes in degrees")
	uniformN := flag.Int("uniform", 100000, "number of deterministic uniform global sample points")
	format := flag.String("format", "markdown", "output format: markdown or csv")
	flag.Parse()

	sizes, err := parseSizes(*sizesFlag)
	if err != nil {
		fatal(err)
	}

	preindex := &pb.PreindexTimezones{}
	if err := proto.Unmarshal(tzfdist.PreindexData, preindex); err != nil {
		fatal(fmt.Errorf("unmarshal preindex: %w", err))
	}
	fuzzy, err := tzf.NewFuzzyFinderFromPB(preindex)
	if err != nil {
		fatal(fmt.Errorf("build fuzzy finder: %w", err))
	}

	cities := citySamples()
	edges := edgeCitySamples(fuzzy)
	uniform := uniformSamples(*uniformN)
	samples := map[string][]samplePoint{
		"cities":       cities,
		"edge_cities":  edges,
		"uniform_glob": uniform,
	}

	datasets := []struct {
		name string
		raw  []byte
	}{
		{name: "lite", raw: tzfdist.TopologyCompressTopoData},
		{name: "full", raw: tzfdist.CompressTopoData},
	}

	var results []indexStats
	for _, dataset := range datasets {
		input := &pb.CompressedTopoTimezones{}
		if err := proto.Unmarshal(dataset.raw, input); err != nil {
			fatal(fmt.Errorf("unmarshal %s compressed topo: %w", dataset.name, err))
		}
		boxes := bboxesFromCompressedTopo(input)
		for _, size := range sizes {
			idx := buildIndex(boxes, size)
			results = append(results, summarize(dataset.name, input.Version, size, idx, samples))
		}
	}

	switch *format {
	case "markdown":
		writeMarkdown(os.Stdout, results, len(cities), len(edges), *uniformN)
	case "csv":
		if err := writeCSV(os.Stdout, results); err != nil {
			fatal(err)
		}
	default:
		fatal(fmt.Errorf("unknown format %q", *format))
	}
}

func parseSizes(input string) ([]float64, error) {
	parts := strings.Split(input, ",")
	sizes := make([]float64, 0, len(parts))
	for _, part := range parts {
		part = strings.TrimSpace(part)
		if part == "" {
			continue
		}
		v, err := strconv.ParseFloat(part, 64)
		if err != nil {
			return nil, err
		}
		if v <= 0 {
			return nil, fmt.Errorf("grid size must be positive: %v", v)
		}
		sizes = append(sizes, v)
	}
	if len(sizes) == 0 {
		return nil, fmt.Errorf("no grid sizes supplied")
	}
	return sizes, nil
}

func bboxesFromCompressedTopo(input *pb.CompressedTopoTimezones) []bbox {
	edgeBoxes := make(map[int32]bbox, len(input.SharedEdges))
	for _, edge := range input.SharedEdges {
		edgeBoxes[edge.Id] = bboxFromPolylineBytes(edge.Points)
	}

	boxes := make([]bbox, len(input.Timezones))
	for i, timezone := range input.Timezones {
		b := bbox{math.MaxFloat64, math.MaxFloat64, -math.MaxFloat64, -math.MaxFloat64}
		for _, poly := range timezone.Polygons {
			expandPolyBBox(poly, edgeBoxes, &b)
		}
		boxes[i] = b
	}
	return boxes
}

func bboxFromPolylineBytes(data []byte) bbox {
	b := bbox{math.MaxFloat64, math.MaxFloat64, -math.MaxFloat64, -math.MaxFloat64}
	coords, _, _ := decodePolylineCoords(data)
	for _, coord := range coords {
		expandBBox(&b, coord[0], coord[1])
	}
	return b
}

func decodePolylineCoords(buf []byte) ([][]float64, []byte, error) {
	if len(buf) == 0 {
		return nil, buf, nil
	}

	first := make([]float64, 2)
	var err error
	for i := range 2 {
		var v int
		v, buf, err = decodePolylineInt(buf)
		if err != nil {
			return nil, nil, err
		}
		first[i] = float64(v) / polylineScale
	}
	coords := [][]float64{first}

	for len(buf) > 0 {
		coord := make([]float64, 2)
		prev := coords[len(coords)-1]
		for i := range 2 {
			var v int
			v, buf, err = decodePolylineInt(buf)
			if err != nil {
				return nil, nil, err
			}
			coord[i] = prev[i] + float64(v)/polylineScale
		}
		coords = append(coords, coord)
	}

	return coords, nil, nil
}

func decodePolylineInt(buf []byte) (int, []byte, error) {
	u, buf, err := decodePolylineUint(buf)
	if err != nil {
		return 0, nil, err
	}
	if u&1 == 0 {
		return int(u >> 1), buf, nil
	}
	if u == math.MaxUint {
		return math.MinInt, buf, nil
	}
	return -int((u + 1) >> 1), buf, nil
}

func decodePolylineUint(buf []byte) (uint, []byte, error) {
	if len(buf) == 0 {
		return 0, nil, errEmpty
	}
	n := strconv.IntSize / 5
	if n > len(buf) {
		n = len(buf)
	}
	var u, shift uint
	for i := 0; i < n; i++ {
		b := buf[i]
		switch {
		case 95 <= b && b < 127:
			u += (uint(b) - 95) << shift
			shift += 5
		case 63 <= b && b < 95:
			u += (uint(b) - 63) << shift
			return u, buf[i+1:], nil
		default:
			return 0, nil, errInvalidByte
		}
	}
	if len(buf) <= strconv.IntSize/5 {
		return 0, nil, errUnterminatedSequence
	}
	maxValue := byte(1<<(strconv.IntSize-5*(strconv.IntSize/5)) - 1)
	b := buf[n]
	switch {
	case 63 <= b && b <= 63+maxValue:
		u += (uint(b) - 63) << shift
		return u, buf[n+1:], nil
	case b < 127:
		return 0, nil, errOverflow
	default:
		return 0, nil, errInvalidByte
	}
}

func expandPolyBBox(poly *pb.CompressedTopoPolygon, edgeBoxes map[int32]bbox, b *bbox) {
	for _, seg := range poly.Exterior {
		switch s := seg.Content.(type) {
		case *pb.CompressedRingSegment_Inline:
			mergeBBox(b, bboxFromPolylineBytes(s.Inline.Points))
		case *pb.CompressedRingSegment_EdgeForward:
			if eb, ok := edgeBoxes[s.EdgeForward]; ok {
				mergeBBox(b, eb)
			}
		case *pb.CompressedRingSegment_EdgeReversed:
			if eb, ok := edgeBoxes[s.EdgeReversed]; ok {
				mergeBBox(b, eb)
			}
		}
	}
	for _, hole := range poly.Holes {
		expandPolyBBox(hole, edgeBoxes, b)
	}
}

func expandBBox(b *bbox, lng float64, lat float64) {
	b[0] = min(b[0], lng)
	b[1] = min(b[1], lat)
	b[2] = max(b[2], lng)
	b[3] = max(b[3], lat)
}

func mergeBBox(dst *bbox, src bbox) {
	dst[0] = min(dst[0], src[0])
	dst[1] = min(dst[1], src[1])
	dst[2] = max(dst[2], src[2])
	dst[3] = max(dst[3], src[3])
}

func buildIndex(boxes []bbox, size float64) map[cellKey][]uint32 {
	idx := make(map[cellKey][]uint32)
	for i, b := range boxes {
		minLng := int32(math.Floor(b[0] / size))
		minLat := int32(math.Floor(b[1] / size))
		maxLng := int32(math.Floor(b[2] / size))
		maxLat := int32(math.Floor(b[3] / size))
		for lng := minLng; lng <= maxLng; lng++ {
			for lat := minLat; lat <= maxLat; lat++ {
				key := cellKey{lng: lng, lat: lat}
				idx[key] = append(idx[key], uint32(i))
			}
		}
	}
	for key := range idx {
		slices.Sort(idx[key])
	}
	return idx
}

func summarize(dataset string, version string, size float64, idx map[cellKey][]uint32, samples map[string][]samplePoint) indexStats {
	lengths := make([]int, 0, len(idx))
	refs := 0
	cells := make([]*pb.GridIndexCell, 0, len(idx))
	for key, candidates := range idx {
		lengths = append(lengths, len(candidates))
		refs += len(candidates)
		cells = append(cells, &pb.GridIndexCell{
			Lng:       key.lng,
			Lat:       key.lat,
			TzIndices: candidates,
		})
	}

	out := indexStats{
		dataset:    dataset,
		gridDeg:    size,
		cells:      len(idx),
		refs:       refs,
		protoBytes: proto.Size(&pb.GridIndex{Cells: cells, Version: version}),
		cellDist:   summarizeInts(lengths),
		samples:    make(map[string]distStats, len(samples)),
	}
	for name, points := range samples {
		counts := make([]int, len(points))
		for i, point := range points {
			key := pointCell(point.lng, point.lat, size)
			counts[i] = len(idx[key])
		}
		out.samples[name] = summarizeInts(counts)
	}
	return out
}

func pointCell(lng float64, lat float64, size float64) cellKey {
	return cellKey{
		lng: int32(math.Floor(lng / size)),
		lat: int32(math.Floor(lat / size)),
	}
}

func summarizeInts(values []int) distStats {
	if len(values) == 0 {
		return distStats{}
	}
	slices.Sort(values)
	sum := 0
	zero := 0
	single := 0
	le3 := 0
	for _, v := range values {
		sum += v
		if v == 0 {
			zero++
		}
		if v == 1 {
			single++
		}
		if v <= 3 {
			le3++
		}
	}
	return distStats{
		n:         len(values),
		mean:      float64(sum) / float64(len(values)),
		p50:       percentile(values, 0.50),
		p75:       percentile(values, 0.75),
		p90:       percentile(values, 0.90),
		p95:       percentile(values, 0.95),
		p99:       percentile(values, 0.99),
		max:       values[len(values)-1],
		zeroPct:   pct(zero, len(values)),
		singlePct: pct(single, len(values)),
		le3Pct:    pct(le3, len(values)),
	}
}

func percentile(values []int, p float64) int {
	if len(values) == 0 {
		return 0
	}
	idx := int(math.Ceil(p*float64(len(values)))) - 1
	idx = min(max(idx, 0), len(values)-1)
	return values[idx]
}

func pct(n int, total int) float64 {
	if total == 0 {
		return 0
	}
	return 100 * float64(n) / float64(total)
}

func citySamples() []samplePoint {
	var points []samplePoint
	for city := range gocitiesjson.All(false) {
		points = append(points, samplePoint{lng: city.Lng, lat: city.Lat})
	}
	return points
}

func edgeCitySamples(fuzzy tzf.F) []samplePoint {
	var points []samplePoint
	for city := range gocitiesjson.All(false) {
		if fuzzy.GetTimezoneName(city.Lng, city.Lat) == "" {
			points = append(points, samplePoint{lng: city.Lng, lat: city.Lat})
		}
	}
	return points
}

func uniformSamples(n int) []samplePoint {
	rng := rand.New(rand.NewSource(42))
	points := make([]samplePoint, n)
	for i := range points {
		lng := -180 + 360*rng.Float64()
		z := -1 + 2*rng.Float64()
		lat := math.Asin(z) * 180 / math.Pi
		points[i] = samplePoint{lng: lng, lat: lat}
	}
	return points
}

func writeMarkdown(w *os.File, results []indexStats, cities int, edges int, uniform int) {
	fmt.Fprintf(w, "# GridIndex parameter evaluation\n\n")
	fmt.Fprintf(w, "Samples: cities=%d, edge_cities=%d, uniform_glob=%d. Uniform samples use spherical area weighting and seed 42.\n\n", cities, edges, uniform)
	fmt.Fprintln(w, "## Stored index distribution")
	fmt.Fprintln(w)
	fmt.Fprintln(w, "| Dataset | Grid deg | Cells | Refs | Proto bytes | Mean candidates | p50 | p90 | p95 | p99 | Max | Single cell pct | <=3 cell pct |")
	fmt.Fprintln(w, "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|")
	for _, r := range results {
		d := r.cellDist
		fmt.Fprintf(w, "| %s | %.3g | %d | %d | %d | %.2f | %d | %d | %d | %d | %d | %.1f | %.1f |\n",
			r.dataset, r.gridDeg, r.cells, r.refs, r.protoBytes, d.mean, d.p50, d.p90, d.p95, d.p99, d.max, d.singlePct, d.le3Pct)
	}
	fmt.Fprintln(w)
	for _, sampleName := range []string{"cities", "edge_cities", "uniform_glob"} {
		fmt.Fprintf(w, "## Query sample distribution: %s\n\n", sampleName)
		fmt.Fprintln(w, "| Dataset | Grid deg | Empty pct | Mean candidates | p50 | p90 | p95 | p99 | Max | Single pct | <=3 pct |")
		fmt.Fprintln(w, "|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|")
		for _, r := range results {
			d := r.samples[sampleName]
			fmt.Fprintf(w, "| %s | %.3g | %.3f | %.2f | %d | %d | %d | %d | %d | %.1f | %.1f |\n",
				r.dataset, r.gridDeg, d.zeroPct, d.mean, d.p50, d.p90, d.p95, d.p99, d.max, d.singlePct, d.le3Pct)
		}
		fmt.Fprintln(w)
	}
}

func writeCSV(w *os.File, results []indexStats) error {
	cw := csv.NewWriter(w)
	header := []string{
		"dataset", "grid_deg", "index_cells", "index_refs", "index_proto_bytes",
		"cell_mean", "cell_p50", "cell_p90", "cell_p95", "cell_p99", "cell_max", "cell_single_pct", "cell_le3_pct",
		"sample", "sample_n", "sample_empty_pct", "sample_mean", "sample_p50", "sample_p90", "sample_p95", "sample_p99", "sample_max", "sample_single_pct", "sample_le3_pct",
	}
	if err := cw.Write(header); err != nil {
		return err
	}
	for _, r := range results {
		for _, sampleName := range []string{"cities", "edge_cities", "uniform_glob"} {
			row := csvRow(r, sampleName)
			if err := cw.Write(row); err != nil {
				return err
			}
		}
	}
	cw.Flush()
	return cw.Error()
}

func csvRow(r indexStats, sampleName string) []string {
	cell := r.cellDist
	sample := r.samples[sampleName]
	return []string{
		r.dataset,
		fmt.Sprintf("%.6g", r.gridDeg),
		strconv.Itoa(r.cells),
		strconv.Itoa(r.refs),
		strconv.Itoa(r.protoBytes),
		fmt.Sprintf("%.4f", cell.mean),
		strconv.Itoa(cell.p50),
		strconv.Itoa(cell.p90),
		strconv.Itoa(cell.p95),
		strconv.Itoa(cell.p99),
		strconv.Itoa(cell.max),
		fmt.Sprintf("%.4f", cell.singlePct),
		fmt.Sprintf("%.4f", cell.le3Pct),
		sampleName,
		strconv.Itoa(sample.n),
		fmt.Sprintf("%.6f", sample.zeroPct),
		fmt.Sprintf("%.4f", sample.mean),
		strconv.Itoa(sample.p50),
		strconv.Itoa(sample.p90),
		strconv.Itoa(sample.p95),
		strconv.Itoa(sample.p99),
		strconv.Itoa(sample.max),
		fmt.Sprintf("%.4f", sample.singlePct),
		fmt.Sprintf("%.4f", sample.le3Pct),
	}
}

func fatal(err error) {
	fmt.Fprintln(os.Stderr, "gridindexeval:", err)
	os.Exit(1)
}
