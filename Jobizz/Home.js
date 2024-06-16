import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { Badge, Icon } from 'react-native-elements';

const profileImage = require('./assets/profileImage.png');


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

            <View style={styles.searchBox}>
              <View>
                <Icon name='search' size={30} style={{opacity:0.2, paddingRight:200, marginTop:10}}/>
                <TextInput placeholder='Search for a job or position' style={{fontWeight: 'bold', marginLeft: 30, marginTop: -35, opacity:0.7, paddingRight:-50, height:40}}/>
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
    searchBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: '#ECECE9',
      width:280,
      height: 45,
    },
  });
  