import * as Location from 'expo-location'

const tenMetersWithDegrees = .0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: -1,
            accuracy: 2.0004,
            altitudeAccuracy: 5.4313677608,
            altitude: 43.592058780,
            latitude: 41.14011993504338 + increment * tenMetersWithDegrees,
            longitude: -73.39120383343882 + increment * tenMetersWithDegrees,

        }

    };
};

let counter = 0;

setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 1000);