import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class Log extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true,
        };
    }

    InsertRecord = () => {
        var Username = this.state.username;
        var Password = this.state.password;

        if (Username.length == 0 || Password.length == 0) {
            alert('Required Field Is Missing!!!');
        } else {
            let APIURL = 'http://127.0.0.1:5000/login';

            let headers = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
                // 'Access-Control-Allow-Credentials': true,
            };

            let Data = {
                Username: Username,
                Password: Password,
            };

            fetch(APIURL, {
                method: 'POST',
                credentials: 'omit',
                headers: headers,
                body: JSON.stringify(Data),
            })
                .then((Response) => Response.json())
                .then((Response) => {
                    if (Response.Message == 'Success') {
                        console.log('true');
                        this.props.navigation.navigate('Paho');
                    } else if (
                        Response.Message == 'password or login is wrong'
                    ) {
                        alert('Wrong Username or Password!!!');
                    }
                    // console.log(Data);
                });
            // .catch((error) => {
            //     console.error('ERROR FOUND' + error);
            // });
        }
    };

    updateSecureTextEntry() {
        this.setState({
            ...this.state,
            secureTextEntry: !this.state.secureTextEntry,
        });
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <View style={styles.action}>
                    <TextInput
                        placeholder='Enter Username'
                        placeholderTextColor='#000'
                        style={styles.textInput}
                        onChangeText={(username) => this.setState({ username })}
                    />
                </View>

                <View style={styles.action}>
                    <TextInput
                        placeholder='Enter Password'
                        placeholderTextColor='#000'
                        style={styles.textInput}
                        secureTextEntry={
                            this.state.secureTextEntry ? true : false
                        }
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity
                        onPress={this.updateSecureTextEntry.bind(this)}
                    ></TouchableOpacity>
                </View>

                {/* Button */}

                <View style={styles.loginButtonSection}>
                    <Pressable
                        style={styles.loginButton}
                        onPress={() => {
                            this.InsertRecord();
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
        marginTop: 50,
        backgroundColor: '#f0ffff'
    },
    textInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 50,
        height: 40,
        fontSize: 20,
        flex: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#000',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
        width: '100%',
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
        backgroundColor: '#deb887',
        color: 'white',
        height: 40,
        justifyContent: 'center', //up dwn
        alignItems: 'center', //r & l
        width: '70%',
        borderRadius: 10,
    },
});
export default Log;
