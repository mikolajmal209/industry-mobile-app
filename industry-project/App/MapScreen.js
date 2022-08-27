import React, { useState, useEffect, Component } from 'react';
import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import { getDistance } from 'geolib';

export default class MapScreen extends Component {
    state = {
        mapRegion: {
            latitude: 50.288703,
            longitude: 18.677314,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        hasLocationPermissions: false,
        locationResult: null,
        distance: null,
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _handleMapRegionChange = (mapRegion) => {
        console.log(mapRegion);
        this.setState({ mapRegion });
    };

    _getLocationAsync = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            this.setState({
                locationResult: 'Permission to access location was denied',
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });

        // Center the map on the location we just fetched.
        this.setState({
            mapRegion: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        });
        let newDistance = getDistance(
            { latitude: 50.288703, longitude: 18.677314 },
            {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            }
        );
        this.setState({
            distance: newDistance,
        });
    };

    // _getDistance1() {

    //     let Distance = getDistance(
    //         { latitude: 50.288703, longitude: 18.677314 },
    //         {
    //             latitude: location.coords.latitude,
    //             longitude: location.coords.longitude,
    //         }
    //     );
    //     return Distance;
    // }

    _CustomMarker() {
        return (
            <Image
                style={styles.marker}
                source={require('industry-project/images/pipes.jpg')}
            ></Image>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>Zoom, and tap on the map!</Text>
                <Text  style={styles.paragraph}>{this.state.distance}</Text>
                
                {this.state.locationResult === null ? (
                    <Text state>Finding your current location...</Text>
                ) : this.state.hasLocationPermissions === false ? (
                    <Text>Location permissions are not granted.</Text>
                ) : this.state.mapRegion === null ? (
                    <Text>Map region doesn't exist.</Text>
                ) : (
                    <MapView
                        style={{ alignSelf: 'stretch', height: 400 }}
                        initialRegion={this.state.mapRegion}
                    >
                        <Marker
                            coordinate={{
                                latitude: 50.288703,
                                longitude: 18.677314,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <this._CustomMarker></this._CustomMarker>
                        </Marker>
                        <Marker coordinate={this.state.mapRegion}></Marker>
                    </MapView>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    marker: {
        width: 50,
        height: 50,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});

// import React, { useState } from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';

// export default function MapScreen() {
//     return <View></View>;
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'blue',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
