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
import ShareValueContext from './myContext';


// class NewContext extends React.Component {
//     render() {
//         return (
//             <MyProvider>
//                 <PahoConnection/>
//             </MyProvider>
//         )
//     }
// }

class PahoConnection extends React.Component {
static contextType = ShareValueContext;
    constructor(props){
        super(props);
        this.state={
            host:  '',
            port: 0,
            clientId: '',
            userName: '',
            password: '',
        };
    }
    updateMsg = (message) => {
        const setSharedValue = this.context.setSharedValue;
        setSharedValue(message);
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
            // userName: userName,
            // password: password,
      
            onSuccess: function () {
                console.log('Połącznie');
                alert('Połączono');
                
                // client.subscribe('testtopicGliwice1');
                // client.send('mytopic', 'beagleboneGliwice');
                client.subscribe('mytopic');
            },
            onFailure: function (error) {
                console.log(error);
                console.log(host);
                console.log(localPort);
                console.log(userName);
                console.log(password);
            },

        });
        client.onMessageArrived =  function(message)  {
            console.log(
                    'Topic: ' +
                    message.destinationName +
                    ', Message: ' +
                    message.payloadString);
            updateMsg(message.payloadString);
                    // console.log(this.context.level);  
                    }
       const updateMsg = this.updateMsg;
       
        client.onConnectionLost =  function(responseObject){
            if (responseObject.errorCode !== 0) {
            alert('Conenction Lost');
            }
        }
      
    
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
                placeholder='Username(Optional)' 
             
                style={styles.TextInput}
                onChangeText={(userName) => this.setState({ userName })}>
                </TextInput>
                <TextInput 
                placeholder='Password(Optional)' 
                secureTextEntry={true}
                style={styles.TextInput}
                onChangeText={ (password)=> this.setState({ password })}
                >
                    
                </TextInput>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.connection();
                        console.log(this.context);
                    }}
                >
                    <Text style={styles.Text1}>Connect to server  {this.context.level}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#caf0f8',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput:{
        margin: 10,
        borderWidth: 2,
        borderColor: '#808080',
        color: '#808080',
        fontSize: 18,
        lineHeight: 21,
        width: '80%',
        padding: 10,
        letterSpacing: 0.25,
        borderRadius: 6,
    },
    button: {
        backgroundColor: '#38a3a5',
        padding: 10,
        height: 40,
        width: '70%',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});



export default PahoConnection;


