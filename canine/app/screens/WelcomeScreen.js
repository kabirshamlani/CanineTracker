import React from 'react'; //rsf
import { ImageBackground, StyleSheet, Image, View, Text, SafeAreaView, TouchableHighlight } from 'react-native';
const image = { uri: 'https://reactjs.org/logo-og.png' };
function WelcomeScreen(props) {
    return (

        <ImageBackground source={require("../assets/background.webp")} resizeMode="cover" style={styles.background}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/gog.jpeg')} style={styles.image} />
                <Text style={styles.text}>Canine Tracking App</Text>
            </View>

            <View style={styles.loginButton}>
                <TouchableHighlight onPress={() => props.navigation.navigate("Login")}>
                    <Text style={styles.logintext}>Login</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.registerButton}>
                <TouchableHighlight onPress={() => props.navigation.navigate("Register")}>
                    <Text style={styles.text}>Register</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>



    );
}

//rnss
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // bottom: '5%',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    imageContainer: {
        width: "100%",
        position: "absolute",
        top: 70,
        alignItems: "center",

    },
    text: {
        width: "100%",
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: '#000000a0',
        backgroundColor: "#442279a0",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "dodgerblue"

    },
    logintext: {
        width: "100%",
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: '#000000a0',
        // backgroundColor: "#442279a0",
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "cyan"

    },
});
export default WelcomeScreen;
