import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {

    const { state: { currentLocation } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    // console.log(currentLocation)

    initialLocation = {
        longitude: -73.39120383343882,
        latitude: 41.14011993504338,
    };

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...initialLocation,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={40}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,.5)"
            />
        </MapView >

    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    },
});

export default Map;
