import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Pressable,StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class ControlPanel extends Component{
   
    
    render() {
        return(
            <SafeAreaView >
                
                <Text style={styles.buttonTextStyle1}>Panel Sterowania</Text>

                <View style={styles.container}>

                    <View>
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

                    <View>
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

                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text  style={styles.buttonTextStyle}>Z3 Otwarty</Text>
                        </Pressable> 

                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text  style={styles.buttonTextStyle}>Z4 Otwarty</Text>
                        </Pressable> 

                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text  style={styles.buttonTextStyle}>Mieszadło</Text>
                        </Pressable> 
            
                    
                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text style={styles.buttonTextStyle}>Poziom dodatku A</Text>
                        </Pressable> 

                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text  style={styles.buttonTextStyle}>Poziom dodatku B</Text>
                        </Pressable> 

                        <Pressable
                        onPress={ready}
                        style= {styles.button2}>
                            <Text  style={styles.buttonTextStyle}>Poziom Wody</Text>
                        </Pressable> 
                    </View>

                </View>

            <View>

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
        backgroundColor: '$fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
        
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
        fontWeight: 'bold'
    },

    buttonTextStyle:{
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 13
    }
});
