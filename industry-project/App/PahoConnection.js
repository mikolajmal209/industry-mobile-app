import * as React from 'react';
import MapScreen from './MapScreen';
import {
    View,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity,
    Text,
    SafeAreaView,
    TextInput,
} from 'react-native';
import Paho from 'paho-mqtt';
import { getDistance } from 'geolib';
class Poho extends React.Component {

    constructor(props){
        super(props);
        this.state={
        host:  '',
        port: 0,
        clientId: '',
        userName: '',
        password: ''
        };
    }
    connection() {
        var host = this.state.host;
        var localPort = this.state.port;
        var clientId = this.state.clientId
        var userName = this.state.userName;
        var password = this.state.password

        var client = new Paho.Client(
            host,
            localPort,
            clientId,
        );
        client.onMessageArrived = function (message) {
            console.log(
                'Topic: ' +
                    message.destinationName +
                    ', Message: ' +
                    message.payloadString
            );
            alert(message.payloadString);
        };
        client.onMessageDelivered = function (message) {
            console.log('Message was delivered');
        };

        client.connect({
         
            useSSL: true,
            userName: userName,
            password: password,
            // protocol: 'wss',

            onSuccess: function () {
                console.log('Połącznie');
                // client.subscribe('testtopicGliwice1');
                client.send('my/test/topic', 'beagleboneGliwice');
            },
            onFailure: function (error) {
                console.log(error);
                console.log(host);
                console.log(localPort);
                console.log(this.userName);

                // client.subscribe('test');
            },
            
        });

        // client.subscribe('my/test/topic');
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput 
                placeholder='nazwa serwera/ip' 
                style={styles.TextInput}
                onChangeText={(host) => this.setState({ host })}>
                </TextInput>
                <TextInput 
                placeholder='Port' 
                style={styles.TextInput}
                onChangeText={ (localPort)=> this.setState({ port: parseInt(localPort) })}>
                </TextInput>
                <TextInput 
                placeholder='Username' 
                style={styles.TextInput}
                onChangeText={(userName) => this.setState({ userName })}>
                </TextInput>
                <TextInput 
                placeholder='Password' 
                secureTextEntry={true}
                style={styles.TextInput}
                onChangeText={ (password)=> this.setState({ password })}
                >
                    
                </TextInput>
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
        justifyContent: 'center'
    },
    TextInput:{
        margin: 10,
        borderWidth: 1,
        height: 40,
        width: '80%',
        padding: 10,
    },
    przycisk: {
        backgroundColor: '#7fffd4',
        padding: 10,
        width: '50%',
        borderRadius: 10,
        margin: 10,
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
