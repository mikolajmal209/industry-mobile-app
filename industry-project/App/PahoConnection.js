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
import { useState } from 'react';
import ShareValueContext from './context';
class Poho extends React.Component {

    static contextType = ShareValueContext;
    updateMsg = (message) => {
        const {setSharedValue} = this.context;
        setSharedValue(message);
    }


    constructor(props){
        super(props);
        this.state={
            host:  '',
            port: 0,
            clientId: 'mikolaj1',
            userName: '',
            password: '',
            
        };
    }

    connection() {
        var host = this.state.host;
        var localPort = this.state.port;
        var clientId = this.state.clientId
        var userName = this.state.userName;
        var password = this.state.password;

        var client = new Paho.Client(
            host,
            localPort,
            clientId,
        );

          
        client.connect({     
            useSSL: false,
            onSuccess: function () {
                console.log('Połącznie');
                // client.subscribe('testtopicGliwice1');
                // client.send('mytopic', 'beagleboneGliwice');
                client.subscribe('mytopic');
            },
            onFailure: function (error) {
                console.log(error);
                console.log(host);
                console.log(localPort);
                console.log(this.userName);
            },

        });
        client.onMessageArrived =  function(message)  {
            console.log(
                'Topic: ' +
                    message.destinationName +
                    ', Message: ' +
                    message.payloadString);
                    setMsg( message.payloadString)
            // alert(message.payloadString);  

        }

        const setMsg = this.updateMsg()
        // client.onConnectionLost =  function(responseObject){
        //     if (responseObject.errorCode !== 0) {
        //     console.log('onConnectionLost:' + responseObject.errorMessage);
        //     }
        // }
      
    
    }


    render() {
 
        return (
            <SafeAreaView style={styles.container}>
                <TextInput 
                placeholder='nazwa serwera/ip' 
                placeholderTextColor={"#fff"}
                style={styles.TextInput}
                onChangeText={(host) => this.setState({ host })}>
                </TextInput>
                <TextInput 
                placeholder='Port' 
                placeholderTextColor={"#fff"}
                style={styles.TextInput}
                onChangeText={ (localPort)=> this.setState({ port: parseInt(localPort) })}>
                </TextInput>
                <TextInput 
                placeholder='Username(Optional)' 
                placeholderTextColor={"#fff"}
                style={styles.TextInput}
                onChangeText={(userName) => this.setState({ userName })}>
                </TextInput>
                <TextInput 
                placeholder='Password(Optional)' 
                secureTextEntry={true}
                placeholderTextColor={"#fff"}
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
        backgroundColor: '#3f3fb6',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput:{
        margin: 10,
        borderWidth: 2,
        borderColor: '#D2CACA',
        color: '#D2CACA',
        height: 50,
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
        color: '#808080',
    },
});

export default Poho;


