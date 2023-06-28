import React, { Component, useContext, useState } from 'react';
import { Pressable,StyleSheet, View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShareValueContext from './myContext';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'

// class NewContext extends React.Component {
//     render() {
//         return (
//             <MyProvider>
//                 <ControlPanel/>
//             </MyProvider>
//         )
//     }
// }
export default class ControlPanel extends Component{

    static contextType = ShareValueContext;

 render() {
        const {sharedValue,setSharedValue} = this.context;
        if(sharedValue > 100 ){
            setSharedValue(100);
        }else if(sharedValue < 0){
            setSharedValue(0);
        }
        let views = [];
        for (let i = 1; i <= 11; i++) {
            views.push(
                <View key={i} style={[styles.floor, {bottom: 5*i + '%'}]}>
                </View>
                
                )
        
        }
        return(
            <SafeAreaView style={styles.container} >
                

                <View style={styles.smallContainer}>

                    <View style =  {[styles.PanelButtons, styles.shadowProp]}>
                        <Pressable
                        onPress={() => {console.log(sharedValue)}}
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle}>Gotowy</Text>
                        </Pressable>

                        <Pressable
                        onPress={() => {setSharedValue(5)}}                       
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle}>Start</Text>
                        </Pressable>

                        <Pressable
                        
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle}>Stop</Text>
                        </Pressable>
                    </View>

                  
                    <View style = {[styles.PanelButtons, styles.shadowProp]}>
                        <Pressable
                     
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle}>Z1 Otwarty</Text>
                        </Pressable>

                        <Pressable
                        style= {styles.button1}>
                            <Text  style={styles.buttonTextStyle}>Z2 Otwarty</Text>
                        </Pressable>
                    </View>
                </View>




                <View style={styles.smallContainer2}>

                    <View style =  {[styles.PanelButtons, styles.shadowProp,{marginLeft:40},{marginTop:50}]}>
                        <Text style={styles.TextStyle}>Water Level: </Text>
                        <Text style={styles.TextStyle}>Alarm Status:</Text>


                    </View>

                </View>
                

                <View style={[styles.tank, { height: sharedValue/2 + '%' }]} ><Text></Text></View>


                <View style = {styles.LevelBorder}>
                </View>
                 

                <View style={styles.partition}></View>
                


                {views}
            </SafeAreaView>
        );

    };
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#caf0f8',
        width: '100%',
        height: '100%',
        flex: 1,
        direction: 'column',
    },
    smallContainer: {
        flex:1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 100,
        marginTop: 20,
    },
    smallContainer2: {
        flex:1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    button1: {
        backgroundColor: '#38a3a5',
        margin: 10,
        height: 40,
        width: '70%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 21,
        letterSpacing: 0.25,
    },

    TextStyle:{
        fontSize: 16,
        color: '#808080'
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
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    PanelButtons:{
        marginLeft: 10,
        marginTop: 30,
        width: '40%',
        height: '60%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 4,
        
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
        backgroundColor: '#38a3a5',
        bottom: '5%',
        left: '55%',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    partition: {
        height: '50.5%',
        width: 2,
        position: 'absolute',
        bottom: '5%',
        left: '90%',
        backgroundColor: 'black',
    },
    floor: {
        height: 2,
        width: 12,
        position: 'absolute',
        left: '87%',
        backgroundColor: 'black',
    },

    LevelBorder:{
        width: '25%',
        height: '50%',
        position: 'absolute',
        bottom: '5%',
        left: '55%',
        backgroundColor:'transparent',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderColor: 'grey',
        borderWidth: 5,
    }
});