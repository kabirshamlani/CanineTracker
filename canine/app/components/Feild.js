import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Feild = (props) => {
    return (
        <TextInput {...props} style={styles.input}>
        </TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 100,
        backgroundColor: 'rgb(220,220,220)',
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 20,
        marginBottom: 40,
    },
})

export default Feild;
