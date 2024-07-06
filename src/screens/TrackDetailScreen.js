import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const TrackDetailScreen = () => {
    return (

        <View>

            <Text style={styles.text}>TrackDetailScreen</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 48,
    },
});

export default TrackDetailScreen;


