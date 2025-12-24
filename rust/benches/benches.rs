#![feature(test)]
extern crate test;

#[cfg(test)]
mod benches_tz_crates {
    // use rtzlib::CanPerformGeoLookup;
    // use rtzlib::{NedTimezone, OsmTimezone};
    use spatialtime;
    use test::Bencher;
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

    // #[bench]
    // fn bench_rtz_get_timezone_ned_random_city(b: &mut Bencher) {
    //     b.iter(|| {
    //         let city = cities_json::get_random_cities();
    //         let _ = NedTimezone::lookup(city.lng as f32, city.lat as f32);
    //     });
    // }

    // #[bench]
    // fn bench_rtz_get_timezone_osm_random_city(b: &mut Bencher) {
    //     b.iter(|| {
    //         let city = cities_json::get_random_cities();
    //         let _ = OsmTimezone::lookup(city.lng as f32, city.lat as f32);
    //     });
    // }

    #[bench]
    fn bench_zone_detect_random_city(b: &mut Bencher) {
        let database = zone_detect::Database::open("data/timezone21.bin").expect("failed to open database");
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = database.simple_lookup(zone_detect::Location {
                latitude: city.lat as f32,
                longitude: city.lng as f32,
            }).unwrap();
        });
    }

    #[bench]
    fn bench_spatialtime_ned(b: &mut Bencher) {
        let reader = spatialtime::ned::NedReader::new().unwrap();
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = reader.lookup(city.lng, city.lat);  // sometimes fails, so unwrap removed
        });
    }

    #[bench]
    fn bench_spatialtime_osm(b: &mut Bencher) {
        let reader = spatialtime::osm::OsmReader::new().unwrap();
        b.iter(|| {
            let city = cities_json::get_random_cities();
            let _ = reader.lookup(city.lng, city.lat).unwrap();
        });
    }
}
