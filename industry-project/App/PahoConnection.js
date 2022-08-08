import * as React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity,
    Text,
    SafeAreaView,
} from 'react-native';
import Paho from 'paho-mqtt';

class Poho extends React.Component {
    connection() {
        var client = new Paho.Client('192.168.7.2', Number(1883), 'mqtt');
        client.onMessageArrived = function (message) {
            console.log(
                'Topic: ' +
                    message.destinationName +
                    ', Message: ' +
                    message.payloadString
            );
        };

        client.connect({
            onSuccess: function () {
                console.log('Połącznie testowe z Beagle');
                client.subscribe('test');
                // global.par1 = true;
            },
            onFailure: function () {
                console.log('Brak połączenia');
                // client.subscribe('test');
                global.par1 = false;
            },
            userName: 'Mikolaj',
            password: 'Kospit21',
            useSSL: true,
        });
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.przycisk}
                    onPress={() => {
                        this.connection();
                    }}
                >
                    <Text style={styles.Text1}>Connect to server</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '20%',
        justifyContent: 'center',
    },
    przycisk: {
        backgroundColor: '#7fffd4',
        padding: 20,
        width: '50%',
        borderRadius: 20,
    },
    Text1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Poho;
// import * as React from 'react';
// import { View, StyleSheet, Button, Alert } from 'react-native';
// import Paho from 'paho-mqtt';

// export default class PahoConnection extends React.Component {
//     componentDidMount() {
//         var client = new Paho.Client(
//             'cf750ebd4d664c51b8ac93a46f288c99.s1.eu.hivemq.cloud',
//             Number(8884),
//             '/mqtt',
//             'Mikolaj'
//         );
//         client.onMessageArrived = function (message) {
//             console.log(
//                 'Topic: ' +
//                     message.destinationName +
//                     ', Message: ' +
//                     message.payloadString
//             );
//         };
//         client.connect({
//             onSuccess: function () {
//                 console.log('Połącznie testowe z chmurą');
//                 // client.subscribe('test');
//                 global.par = true;
//             },
//             userName: 'Mikolaj',
//             password: 'Kospit21',
//             useSSL: true,
//         });
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.Przycisk}>
//                     <Button
//                         title='Connection'
//                         onPress={() => {
//                             Alert.alert('alert1');
//                             // this.componentDidMount();
//                             console.log(global.par);
//                             if (global.par === true) {
//                                 Alert.alert('Udane Połącznie z chmurą');
//                             } else {
//                                 Alert.alert('Nieudane połącznie z chmurą');
//                             }
//                         }}
//                     />
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: 'yellow',
//         flex: 1,
//     },
//     Przycisk: {
//         backgroundColor: 'purple',
//         marginTop: 50,
//     },
// });
