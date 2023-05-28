import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Pressable,StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShareValueContext from './context';
import { Line, Circle } from 'react-native-svg';
export default class ControlPanel extends Component{
   
    static contextType = ShareValueContext;
    render() {

        return(
            <SafeAreaView style={styles.container} >
                
                <Text style={styles.buttonTextStyle1}>Panel Sterowania</Text>

                <Text style={styles.buttonTextStyle1}>Water Level - {this.context.sharedValue}</Text>
                <View style={styles.container}>

                    <View styles = {styles.PanelButtons}>
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

                  
                    <View style = {styles.PanelButtons}>
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


            </SafeAreaView>
        );

    };
};

function ready(){
    console.log("Gotowy")
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3f3fb6',
        width: '100%',
        height: '100%'

    },
    button1: {
        backgroundColor: '#6495ED',
        height: 30,
        width: 80,
        borderRadius: 10,
        marginTop: '10%',
        marginLeft: '6%',
        textAlign:'center',
    },

    button2: {
        backgroundColor: '#6495ED',
        height: 25,
        width: 100,
        borderRadius: 5,
        marginTop: '5%',
        marginLeft: '6%',
        textAlign:'center',
       
    },

    buttonTextStyle1:{
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    buttonTextStyle:{
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 13,
        color: '#fff'
    },
    PanelButtons:{
        width: '20%',
        height: '20%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#000',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});
