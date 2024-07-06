import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
    return (

        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.text}>{text}</Text>
            </Spacer>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        marginLeft: 0
    }
});

export default withNavigation(NavLink);
