import React, { Component, useState } from 'react';
import { Pressable,StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShareValueContext from './context';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'

export default class ControlPanel extends Component{
   
    static contextType = ShareValueContext;
    render() {
        
        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
        const data = [0,100]    
        let views = [];
        for (let i = 1; i < 10; i++) {
            views.push(
                <View key={i} style={[styles.floor, {top: 10*i + '%'}]}>
                </View>
            );
        }
        return(
            <SafeAreaView style={styles.container} >
                
                <Text style={styles.buttonTextStyle1}>Panel Sterowania</Text>

                <View style={styles.container}>

                    <View style =  {[styles.PanelButtons, styles.shadowProp]}>
                        <Pressable
                        onPress={ready}
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle1}>Gotowy</Text>
                        </Pressable>

                        <Pressable
                        onPress={ready}
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle1}>Start</Text>
                        </Pressable>

                        <Pressable
                        onPress={ready}
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle1}>Stop</Text>
                        </Pressable>
                    </View>

                  
                    <View style = {[styles.PanelButtons, styles.shadowProp]}>
                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text  style={styles.buttonTextStyle}>Z1 Otwarty</Text>
                        </Pressable>

                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text  style={styles.buttonTextStyle}>Z2 Otwarty</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.Waterlevel}>Water Level - {this.context.sharedValue}</Text>
                <View style={[styles.tank, { height: '50%' }]} ><Text></Text></View>
                {/* <View style={styles.partition} ></View>
                 */}
                <View style={[styles.floor, {top: 10 + '%'}]}>
                </View>
                <View style={styles.partition}></View>
                
                

                {views}
            </SafeAreaView>
        );

    };
};

function ready(){
    console.log("Gotowy")
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#3f3fb6',
        width: '100%',
        height: '100%'

    },
    button1: {
        backgroundColor: '#6495ED',
        margin: 10,
        height: 30,
        width: 80,
        borderRadius: 10,
        textAlign:'center',
    },

    button2: {
        backgroundColor: '#6495ED',
        margin: 10,
        height: 25,
        width: 100,
        borderRadius: 5,
        textAlign:'center',
       
    },

    buttonTextStyle1:{
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    Waterlevel:{
        position: 'absolute',
        top: '95%',
        left: '55%',
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 1,
        fontWeight: 'bold',
        color: '#fff'
    },

    buttonTextStyle:{
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 13,
        color: '#fff',
        fontWeight: 'bold',
    },
    PanelButtons:{
        margin: 20,
        width: '40%',
        height: '30%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 50
        
    },
    shadowProp: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        // background color must be set
        backgroundColor : "#0000", // invisible color
        elevation: 5
    },
    tank: {
        width: '25%',
        position: 'absolute',
        backgroundColor: 'blue',
        bottom: '4%',
        left: '55%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    partition: {
        height: '80%',
        width: 2,
        position: 'absolute',
        top: '10%',
        left: '90%',
        backgroundColor: 'black',
    },
    floor: {
        height: 2,
        width: 12,
        position: 'absolute',
        left: '87%',
        backgroundColor: 'black',
    }
});
