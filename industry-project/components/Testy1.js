import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Testy1() {
    const [name, setName] = useState('Mikolaj');

    return (
        <View styles={styles.container}>
            <Text>My name is {name} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
