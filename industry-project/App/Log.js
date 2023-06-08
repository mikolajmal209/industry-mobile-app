import React, { Component } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    StyleSheet,
    View,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            isChecked: true
        };
    }

    
    componentDidMount() {
        const username = this.getRememberedUser();
        this.setState({ 
           username: username,  });
           console.log('Powinno sie udac')
        }
    
   
    

     rememberUser= async() =>  {
        try {
          await AsyncStorage.setItem('@key', this.state.username);
          console.log(this.state.username)
        } catch (error) {
          console.log(error);
        }
        };
     getRememberedUser = async() => {

    
        try {
          const username = await AsyncStorage.getItem('@key');
          if (username !== null) {
           console.log(username)
            return username;
          }
        } catch (error) {
            console.log(error);
        }
        };

         forgetUser = async() => {
          try {
            await AsyncStorage.removeItem('@key');
          } catch (error) {
            console.log(error);
          }
        };

    InsertRecord = () => {
        var Username = this.state.username;
        var Password = this.state.password;

        if (Username.length === 0 || Password.length === 0) {
            alert('Required Field Is Missing!!!');
        } else {
            let APIURL = 'http://192.168.1.59:7202/api/login';

            let headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };

            let Data = {
                userName: Username,
                password: Password,
            };

            fetch(APIURL, {
                method: 'POST',
                credentials: 'omit',
                headers: headers,
                body: JSON.stringify(Data),
            })
                .then((Response) => {
                    if(Response.ok)
                    {
                        const  response = Response.json();
                        return response;
                    }
                throw new Error('Something went wrong');
            }).then((Response) => {
                const response = JSON.parse(Response)
                    if (response.Message == "Success") {
                        this.props.navigation.navigate('Home');
                    } else {
                        alert('Wrong Username or Password!!!');

                    }
                    // console.log(Data);
                }).catch((error) => {
                console.error('ERROR ', error);
            });
            if (this.state.isChecked === true) {
                //user wants to be remembered.
                  this.rememberUser();
                } else {
                  this.forgetUser();
                }
        }
    };

    updateSecureTextEntry() {
        this.setState({
            ...this.state,
            secureTextEntry: !this.state.secureTextEntry,
        });
    };


    render() {
        const currentName = this.state.username
        return (
            <View style={styles.viewStyle}>
                <View style={styles.action}>
                  
                    <TextInput
                    // ogarnac jak wstawic tutaj wartosc zeby wyswietliło ta jebana nazwe
                        placeholder='Enter Username'
                        style={styles.textInput}
                        onChangeText={(username) => this.setState({ username })}
                    />
                      <Ionicons name='log-in' size={20} color='#7fffd4' />
                </View>

                <View style={styles.action}>
                   
                        <TextInput
                        
                        placeholder='Enter Password'
                        style={styles.textInput}
                        secureTextEntry={
                            this.state.secureTextEntry ? true : false
                        }
                        on
                        ChangeText={(password) => this.setState({ password })}
                    />
                     <Ionicons name='lock-closed' size={20} color='#7fffd4' />
                    <TouchableOpacity
                        onPress={this.updateSecureTextEntry.bind(this)}
                    ></TouchableOpacity>
                </View>

                    <BouncyCheckbox
                    isChecked = {this.state.isChecked}
                    style={{ margin: 25 }}
                    fillColor = '#7fffd4'
                    text = "Remember me"
                    onPress={() => this.setState({isChecked})}
                    />


                <View style={styles.loginButtonSection}>
                    <Pressable
                        style={styles.loginButton}
                        onPress={() => {
                            this.InsertRecord();
                            this.props.navigation.navigate('Home');
                        }}
                    >
                        <Text style={styles.text}>Log In</Text>
                    </Pressable>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        padding: 20,
        backgroundColor: '#3f3fb6',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    textInput: {
        height: 60,
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 6,
        paddingLeft: 5,
    },
    action: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 25,
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase',
    },
    loginButtonSection: {
        width: '100%',
        height: '30%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: '#7fffd4',
        color: 'white',
        height: 40,
        justifyContent: 'center', //up dwn
        alignItems: 'center', //r & l
        width: '70%',
        borderRadius: 10,
    },
});
export default Log;
