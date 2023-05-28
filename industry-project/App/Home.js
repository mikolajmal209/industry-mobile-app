import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from './MapScreen';
import PahoConnection from './PahoConnection';
import Charts from './Charts';
import Ionicons from '@expo/vector-icons/Ionicons';
import ControlPanel from './ControlPanel';
import { useState } from 'react';
import ShareValueContext from './context';

const Tab = createBottomTabNavigator();


const TabNavigator = () => {



    const [sharedValue,setSharedValue] = useState('0') ;
    return (

        <ShareValueContext.Provider value={{sharedValue,setSharedValue}}>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#7fffd4' },
                tabBarActiveTintColor: '#8a2be2',
            }}
        >
            <Tab.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='map-sharp' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='Connection'
                component={PahoConnection}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='wifi' size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='ControlPanel'
                component={ControlPanel}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='rocket' size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name='Charts'
                component={Charts}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='stats-chart'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
        </ShareValueContext.Provider>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3f3fb6',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TabNavigator;
