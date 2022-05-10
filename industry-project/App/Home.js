import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import log from './log';
import Map from './map';
import PahoConnection from './PahoConnection';
import Scada from './scada';


const Stack = createNativeStackNavigator();

function Home() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Paho' component={PahoConnection} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
