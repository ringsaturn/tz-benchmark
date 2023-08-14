#![feature(test)]
extern crate test;

#[cfg(test)]
mod benches_tz_crates {
    use cities_json;
    use rtzlib::CanPerformGeoLookup;
    use rtzlib::{NedTimezone, OsmTimezone};
    use test::Bencher;
    use tz_search;
    use tzf_rs::{DefaultFinder, Finder, FuzzyFinder};

    #[bench]
    fn bench_tz_search_lookup_random_city(b: &mut Bencher) {
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = tz_search::lookup(city.lat, city.lng);
        });
    }

    #[bench]
    fn bench_tzf_fuzzy_finder_random_city(b: &mut Bencher) {
        let finder: FuzzyFinder = FuzzyFinder::new();
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = finder.get_tz_name(city.lng, city.lat);
        });
    }

    #[bench]
    fn bench_tzf_default_finder_random_city(b: &mut Bencher) {
        let finder: DefaultFinder = DefaultFinder::new();
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = finder.get_tz_name(city.lng, city.lat);
        });
    }

    #[bench]
    fn bench_tzf_finder_random_city(b: &mut Bencher) {
        let finder: Finder = Finder::new();
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = finder.get_tz_name(city.lng, city.lat);
        });
    }

    #[bench]
    fn bench_rtz_get_timezone_ned_random_city(b: &mut Bencher) {
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = NedTimezone::lookup(city.lng as f32, city.lat as f32);
        });
    }

    #[bench]
    fn bench_rtz_get_timezone_osm_random_city(b: &mut Bencher) {
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = OsmTimezone::lookup(city.lng as f32, city.lat as f32);
        });
    }
}
