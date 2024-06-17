import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { Badge, Icon } from 'react-native-elements';

const cardData = [
  { id: '1', cardAmount: '$180,000', backgroundColor: '#1a73e8', jobTitle: 'Software Engineer', companyName: 'Facebook', location: 'Accra, Ghana', logo: require('./assets/facebook.png') },
  { id: '2', cardAmount: '$160,000', backgroundColor: '#34A853', jobTitle: 'System Administrator', companyName: 'Google', location: 'Accra, Ghana', logo: require('./assets/google.png') },
]

const jobList = [
  {id: '1', jobTitle: 'Jr Executive', companyName: 'Burger King', location: 'Los Angeles, US', amount: '$96,000/y' , logo: require('./assets/burger-king.png')},
  {id: '2', jobTitle: 'Product Manager', companyName: 'Beats', location: 'Florida, US', amount: '$84,000/y' , logo: require('./assets/beats.png')},
  {id: '3', jobTitle: 'Product Manager', companyName: 'Facebook', location: 'Florida, US', amount: '$86,000/y' , logo: require('./assets/homefacebook.png')},
];

const Card = ({ cardAmount, backgroundColor, jobTitle, companyName, location, logo }) => {

  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.rowAlign}>
        <View style={{marginTop: -5}}>
          <TextInput editable={false} style={{backgroundColor:'white', height:46, width: 48, borderRadius:10}}/>
          <Image source={logo} style={{width: 50, height: 79, marginRight: 10, marginTop: -59}}/>
        </View>
        <View style={{marginTop: -5}}>
          <Text style={styles.job}>{jobTitle}</Text>
          <Text style={styles.company}>{companyName}</Text>
        </View>
      </View>
      <View style={styles.cardRowAlign}>
        <Text style={{color:'white'}}>{cardAmount}</Text>
        <Text style={{color:'white'}}>{location}</Text>
      </View>
    </View>
  );
};

const Joblist = ({ jobTitle, companyName, location, amount, logo }) => {
  return(
    <TouchableOpacity style={styles.jobs}>
      <View style={{marginRight:15}}>
        <Image source={logo}/>
      </View>
      <View>
      <View style={styles.jobRowAlign}>
        <Text style={{fontWeight:'bold', fontSize: 14}}>{jobTitle}</Text>
        <Text style={{fontWeight:'bold', fontSize: 14}}>{amount}</Text>
      </View>
      <View style={styles.jobRowAlign}>
        <Text style={{fontSize: 13, color:'#95969D', fontWeight: 600}}>{companyName}</Text>
        <Text style={{fontSize: 13, color:'#95969D', fontWeight: 600}}>{location}</Text>
      </View>
      </View>
    </TouchableOpacity>

  )
};

export default function HomeScreen(){

    return(
        <View style={styles.container}>

            <View style={styles.header}>
              <View style={{fontFamily: 'Poppins',}}>
                  <Text style={{fontSize: 30, color:'#0D0D26',fontWeight: 700}}>Melvin King</Text>
                  <Text style={{fontSize:20, color:'#95969D', fontWeight: 400}}>mello@gmail.com</Text>
              </View>
              <View>
                  <Image source={require('./assets/profileImage.png')}/>
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
                  <Image source={require('./assets/slider.png')} style={{marginTop: -38, height: 30, marginLeft:11}}/>
                </Pressable>
              </View>
            </View>

            <View style={styles.rowAlign}>
              <Text style={{fontSize: 18, color:'#0D0D26', fontWeight:'bold'}}>Featured Jobs</Text>
              <Text style={{fontSize: 14, color:'#95969D', fontWeight:400, marginTop:6}}>See All</Text>
            </View>

            <View>
              <FlatList
                data={cardData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Card cardAmount={item.cardAmount} 
                  backgroundColor={item.backgroundColor}
                  jobTitle={item.jobTitle}
                  companyName={item.companyName}
                  location={item.location}
                  logo={item.logo} />
                )}
              />
            </View>

            <View style={{marginTop: 30}}>
              <View style={styles.rowAlign}>
                <Text style={{fontSize: 18, color:'#0D0D26', fontWeight:'bold'}}>Popular Jobs</Text>
                <Text style={{fontSize: 14, color:'#95969D', fontWeight:400, marginTop:6}}>See All</Text>
              </View>
            </View>

            <View style={{marginTop: -15}}>
              <FlatList
                data={jobList}
                vertical
                renderItem={({ item }) => (
                  <Joblist jobTitle={item.jobTitle}
                  companyName={item.companyName}
                  location={item.location}
                  amount={item.amount}
                  logo={item.logo}
                  />
                )}
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
      backgroundColor: '#f0f0f05',
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
    },
    cardContainer: {
      borderRadius: 20,
      padding: 20,
      width: 300,  
      height: 190, 
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginHorizontal: 10,
    },
    job: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold', 
      font: 'Poppins',
      marginBottom: 5,
    },
    company: {
      color: '#fff',
      fontSize: 14,
      font: 'Poppins', 
    },
    cardAmount: {
      color: '#fff',
      fontSize: 16,
      marginTop: 5,  
      letterSpacing: 2,
    },
    cardRowAlign: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    jobs: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      padding:20,
      height: 80,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
    }, 
    jobRowAlign: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginBottom:5
    },
  });
  