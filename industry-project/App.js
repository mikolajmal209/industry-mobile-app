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
            <View style={styles.zdjecie}>
                <Image style={styles.image1} source={'/assets/splash.png'} />
            </View>
            <View></View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Paho')}
                style={styles.startbutton}
            >
                <Text style={styles.text2}>Let's start</Text>

                <Ionicons name='send' size={20} color='#fff' />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: '20%',
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
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name='Main' component={Main} />
                <Stack.Screen name='Paho' component={PahoConnection} />
                <Stack.Screen name='Log' component={Log} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import PahoConnection from './App/PahoConnection';
// function HomeScreen({ navigation }) {
//     return (
//         <View
//             style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
//         >
//             <Text>Home Screen</Text>
//             <Button
//                 title='Go to Details'
//                 onPress={() => navigation.navigate('Paho')}
//             />
//         </View>
//     );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName='Home'>
//                 <Stack.Screen name='Home' component={HomeScreen} />
//                 <Stack.Screen name='Paho' component={PahoConnection} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }

// export default App;
