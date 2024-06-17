import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { Badge, Icon } from 'react-native-elements';

const profileImage = require('./assets/profileImage.png');
const slider = require('./assets/slider.png');
// const profileImage = require('./assets/profileImage.png');
// const profileImage = require('./assets/profileImage.png');
// const profileImage = require('./assets/profileImage.png');


export default function HomeScreen(){

  const cardData = [
    { id: '1', cardNumber: '1234567890129999', backgroundColor: '#1a73e8' },
    { id: '2', cardNumber: '2345678901234567', backgroundColor: '#c2185b' },
    { id: '3', cardNumber: '3456789012345678', backgroundColor: '#00796b' },
    { id: '4', cardNumber: '4567890123456789', backgroundColor: '#5d4037' },
    { id: '5', cardNumber: '5678901234567890', backgroundColor: '#7b1fa2' },
    { id: '6', cardNumber: '6789012345678901', backgroundColor: '#303f9f' },
    { id: '7', cardNumber: '7890123456789012', backgroundColor: '#0288d1' },
    { id: '8', cardNumber: '8901234567890123', backgroundColor: '#c2185b' },
  ];

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

            <View style={styles.rowAlign}>
              <View style={styles.searchBox}>
                <View>
                  <Icon name='search' size={30} style={{opacity:0.2, paddingRight:200, marginTop:10}}/>
                  <TextInput placeholder='Search for a job or position' style={{fontWeight: 'bold', marginLeft: 30, marginTop: -35, opacity:0.7, paddingRight:-50, height:40}}/>
                </View>
              </View>

              <View>
                <Pressable>
                  <TextInput editable={false} style={{backgroundColor:'#ECECE9', height:46, width: 48, borderRadius:10}}/>
                  <Image source={slider} style={{marginTop: -38, height: 30, marginLeft:11}}/>
                </Pressable>
              </View>
            </View>

            <View style={styles.rowAlign}>
              <Text style={{fontSize: 20, color:'#0D0D26', fontWeight:'bold'}}>Featured Jobs</Text>
              <Text style={{fontSize: 14, color:'#95969D', fontWeight:400, marginTop:6}}>See All</Text>
            </View>

            <View>
              <FlatList
                data={cardData}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
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
      backgroundColor: '#ECECE9',
      width:290,
      height: 45,
    },
    rowAlign: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 25,
    }
  });
  