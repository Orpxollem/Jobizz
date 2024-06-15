import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Badge } from 'react-native-elements';

const profileImage = require('./assets/profileImage.png');
const redDot = require('./assets/redDot.png')


export default function HomeScreen(){
    return(
        <View style={styles.container}>

            <View style={styles.header}>
            <View style={{fontFamily: 'Poppins',}}>
                <Text style={{fontSize: 30, color:'#0D0D26',fontWeight: 700}}>Melvin King</Text>
                <Text style={{fontSize:20, color:'#95969D', fontWeight: 400}}>mello@gmail.com</Text>
            </View>
            <View>
                <Image source={profileImage}/>
                <Badge value='' status='error' containerStyle={{position:'absolute', right:1, top:7, backgroundColor:'white', borderRadius:10, padding:3}}/>
            </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical:100,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: '#000000',
      fontFamily: 'Lato',
      marginBottom: 30,
    },
    profileImage: {
      width: 50,
      height: 52,
    },
  });
  