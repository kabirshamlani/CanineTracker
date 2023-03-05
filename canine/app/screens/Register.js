import React from 'react';
import { ImageBackground, SafeAreaView, TouchableHighlight } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import Feild from '../components/Feild';
import Background from '../assets/gog.jpeg'

function Register(props) {
    return (
        <ImageBackground source={require('../assets/background.jpeg')} resizeMode="cover" style={styles.background}>
            <View style={styles.container}>
                <View style={styles.registerText1}>
                    <Text style={styles.registerText}>Register</Text>
                </View>
                <View style={styles.registerForm}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', fontStyle: 'normal', color: 'white' }}>Welcome New User</Text>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', fontStyle: 'normal', color: 'grey', marginBottom: 30 }}>Register Account</Text>
                    <Feild placeholder='Firstname'></Feild>
                    <Feild placeholder='Lastname'></Feild>
                    <Feild placeholder='Username'></Feild>
                    <Feild placeholder='Email'></Feild>
                    <Feild placeholder='Password'></Feild>
                    <View style={styles.registerButton}>
                        <TouchableHighlight onPress={() => alert("register")}>
                            <Text style={styles.registerText2} >Register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

export default Register;

const styles = StyleSheet.create({
    registerText: {
        top: 0,
        fontSize: 50,
        fontWeight: 'bold',
        fontStyle: 'normal',
        alignSelf: 'center',
        color: 'white'
        // position: 'absolute',

    },
    registerText1: {
        top: 50,
        position: 'absolute',

    },
    registerText2: {
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
    registerForm: {
        // bottom: 50,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        position: "absolute",
        backgroundColor: '#000000d0',
        width: '90%',
        alignItems: 'center',
        height: '70%',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        // padding: 20

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
    registerButton: {
        width: '80%',
        height: '9%',
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