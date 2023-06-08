    import React, { useState } from 'react';
    import { StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
    export default function Charts() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
        return (
            <SafeAreaView style={styles.container}>


                    <Text>Wykres 1</Text>
                    <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                                <YAxis
                                    data={data}
                                    style={{ marginBottom: xAxisHeight }}
                                    contentInset={verticalContentInset}
                                    svg={axesSvg}
                                />
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <LineChart
                                        style={{ flex: 1 }}
                                        data={data}
                                        contentInset={verticalContentInset}
                                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                                    >
                                        <Grid/>
                                    </LineChart>
                                    <XAxis
                                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                                        data={data}
                                        formatLabel={(value, index) => index}
                                        contentInset={{ left: 10, right: 10 }}
                                        svg={axesSvg}
                                    />
                                </View>
                    </View>

                    <Text>Wykres 2</Text>
                    <View style={{ height: 200, padding: 20, flexDirection: 'row' }}>
                                <YAxis
                                    data={data}
                                    style={{ marginBottom: xAxisHeight }}
                                    contentInset={verticalContentInset}
                                    svg={axesSvg}
                                />
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <LineChart
                                        style={{ flex: 1 }}
                                        data={data}
                                        contentInset={verticalContentInset}
                                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                                    >
                                        <Grid/>
                                    </LineChart>
                                    <XAxis
                                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                                        data={data}
                                        formatLabel={(value, index) => index}
                                        contentInset={{ left: 10, right: 10 }}
                                        svg={axesSvg}
                                    />
                                </View>
                    </View>
            </SafeAreaView>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#3f3fb6',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
