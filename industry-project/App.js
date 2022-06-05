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
import Log from './App/Log';
import PahoConnection from './App/PahoConnection';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Main = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.Text1}>Industry APP</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Log')}
                style={styles.startbutton} 
            >
                <Text style={styles.text2}>Let's start</Text>

                <Ionicons name='send' size={20} color='#fff' />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen
                    name='Main'
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name='Paho' component={PahoConnection} />
                <Stack.Screen
                    name='Log'
                    component={Log}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2f4f4f',
        alignItems: 'center',
        marginTop: 5,
    },
    startbutton: {
        backgroundColor: '#8fbc8f',
        padding: 20,
        width: '70%',
        borderRadius: 20,
        marginTop: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 80,
    },
    text2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    image1: {
        width: 200,
        height: 200,
    },
    zdjecie: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
