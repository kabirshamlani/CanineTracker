import React from 'react';
import { ImageBackground, SafeAreaView, TouchableHighlight } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import Feild from '../components/Feild';
import Background from '../assets/gog.jpeg'

function Login(props) {
    return (
        <ImageBackground source={require('../assets/background.jpeg')} resizeMode="cover" style={styles.background}>
            <View style={styles.container}>
                <View style={styles.loginText1}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </View>
                <View style={styles.loginForm}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', fontStyle: 'normal', color: 'white' }}>Welcome Back</Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', fontStyle: 'normal', color: 'grey', marginBottom: 30 }}>Login to your Account</Text>
                    <Feild placeholder='Username'></Feild>
                    <Feild placeholder='Password'></Feild>
                    <View style={styles.loginButton}>
                        <TouchableHighlight onPress={() => alert("Register")}>
                            <Text style={styles.loginText2} >Login</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Login;

const styles = StyleSheet.create({
    loginText: {
        top: 0,
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'normal',
        alignSelf: 'center',
        color: 'white'
        // position: 'absolute',

    },
    loginText1: {
        top: 50,
        position: 'absolute',

    },
    loginText2: {
        top: 0,
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'normal',
        alignSelf: 'center',
        // justifyContent: "center",
        // alignItems: 'center',
        // alignSelf: "center",
        position: 'absolute',
        paddingTop: 8,

    },
    loginForm: {
        // bottom: 50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        position: "absolute",
        backgroundColor: '#000000d0',
        width: '90%',
        alignItems: 'center',
        height: '40%',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'white',

    },
    loginButton: {
        width: '80%',
        height: '13%',
        backgroundColor: "white",
        borderRadius: 100,

    },
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // bottom: '5%',
    },
})