import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";

import '../_mockLocation'

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(isFocused, addLocation);

    return (

        <View style={styles.view} >

            <Text h2>Create A Track </Text>
            <Map />
            {err ? <Text style={styles.error}>Please enable location services</Text> : null}

        </View>
    );
};



const styles = StyleSheet.create({
    error: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 15,
    },
    view: {
        marginTop: 55,
        marginLeft: 15,
        marginRight: 15
    }
});

export default withNavigationFocus(TrackCreateScreen);


