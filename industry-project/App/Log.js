import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Log = () => {
    const [text1, onChangeText] = React.useState('Login');
    const [text2, onChangeText2] = React.useState('Password');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.login}>Login</Text>
            <View style={styles.TextInput}>
                <TextInput
                    style={styles.TextInput2}
                    onChangeText={onChangeText}
                    value={text1}
                ></TextInput>
                <Ionicons name='mail' size={20} color='#f324' />
            </View>

            <View style={styles.TextInput}>
                <TextInput
                    style={styles.TextInput2}
                    onChangeText={onChangeText2}
                    value={text2}
                ></TextInput>
                <Ionicons name='key' size={20} color='#f324' />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 25,
        alignItems: 'center',
    },
    login: {
        paddingHorizontal: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    TextInput: {
        marginTop: '3%',
        backgroundColor: '#f999',
        padding: 20,
        width: '30%',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TextInput2: {
        height: '80%',
        width: '60%',
        borderColor: '#fff',
        borderBottomColor: '#898',
        borderBottomWidth: 2,
    },
});

export default Log;
