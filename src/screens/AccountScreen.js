import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from 'react-navigation';
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {

    const { signout } = useContext(AuthContext);
    return (

        <SafeAreaView
            forceInset={{ top: 'always' }}
        >

            <Text style={styles.text}>Account</Text>

            <Spacer>
                <Button
                    title='Sign Out'
                    onPress={signout}
                />
            </Spacer>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 48,
        marginTop: 35,
        marginLeft: 135
    },
});

export default AccountScreen;


