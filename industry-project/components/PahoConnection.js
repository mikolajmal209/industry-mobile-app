import * as React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';
import Paho from 'paho-mqtt';

export default class PahoConnection extends React.Component {
    Connection() {
        var client = new Paho.Client(
            'cf750ebd4d664c51b8ac93a46f288c99.s1.eu.hivemq.cloud',
            Number(8884),
            '/mqtt',
            'Mikolaj'
        );
        client.onMessageArrived = function (message) {
            console.log(
                'Topic: ' +
                    message.destinationName +
                    ', Message: ' +
                    message.payloadString
            );
        };
        client.connect({
            onSuccess: function  () {
                console.log('Połącznie testowe z chmurą');
                // client.subscribe('test');
                global.par = true
                
            },
            userName: 'Mikolaj',
            password: 'Kospit21',
            useSSL: true,
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Przycisk}>
                    <Button
                        title='Connection'
                        onPress={() => {
                            this.Connection();
                            if (global.par==true) {
                                Alert.alert('Udane Połącznie z chmurą');
                            }else{
                                Alert.alert('Nieudane połącznie z chmurą');
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        flex: 1,
    },
    Przycisk: {
        backgroundColor: 'purple',
        marginTop: 50,
    },
});
