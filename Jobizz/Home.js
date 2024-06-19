import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, FlatList, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import { exportUsername, exportEmail } from './signUp';


const cardData = [
  {
    id: '1',
    cardAmount: '$180,000',
    backgroundColor: '#1a73e8',
    jobTitle: 'Software Engineer',
    companyName: 'Facebook',
    location: 'Accra, Ghana',
    logo: require('./assets/cardfacebook.png')
  },
  {
    id: '2',
    cardAmount: '$160,000',
    backgroundColor: '#34A853',
    jobTitle: 'System Administrator',
    companyName: 'Google',
    location: 'Accra, Ghana',
    logo: require('./assets/cardgoogle.png')
  },
  {
    id: '3',
    cardAmount: '$170,000',
    backgroundColor: '#ff9900',
    jobTitle: 'Data Scientist',
    companyName: 'Amazon',
    location: 'Accra, Ghana',
    logo: require('./assets/amazon.png')
  },
  {
    id: '4',
    cardAmount: '$155,000',
    backgroundColor: '#0e76a8',
    jobTitle: 'Product Manager',
    companyName: 'LinkedIn',
    location: 'Accra, Ghana',
    logo: require('./assets/linkedin.png')
  },
  {
    id: '5',
    cardAmount: '$165,000',
    backgroundColor: '#ff0000',
    jobTitle: 'UX Designer',
    companyName: 'YouTube',
    location: 'Accra, Ghana',
    logo: require('./assets/youtube.png')
  },
  {
    id: '17',
    cardAmount: '$180,000',
    backgroundColor: '#c13584',
    jobTitle: 'Data Analyst',
    companyName: 'Instagram',
    location: 'Accra, Ghana',
    logo: require('./assets/ig.png')
  },
  {
    id: '7',
    cardAmount: '$140,000',
    backgroundColor: '#1db954',
    jobTitle: 'DevOps Engineer',
    companyName: 'Spotify',
    location: 'Accra, Ghana',
    logo: require('./assets/spotify.png')
  },
  {
    id: '8',
    cardAmount: '$175,000',
    backgroundColor: '#ff4500',
    jobTitle: 'Backend Developer',
    companyName: 'Reddit',
    location: 'Accra, Ghana',
    logo: require('./assets/reddit.png')
  },
  {
    id: '9',
    cardAmount: '$160,000',
    backgroundColor: '#d1cd00',
    jobTitle: 'Mobile Developer',
    companyName: 'Snapchat',
    location: 'Accra, Ghana',
    logo: require('./assets/snapchat.png')
  },
  {
    id: '10',
    cardAmount: '$145,000',
    backgroundColor: '#5865f2',
    jobTitle: 'Security Analyst',
    companyName: 'Discord',
    location: 'Accra, Ghana',
    logo: require('./assets/discord.png')
  },
];


const jobList = [
  {
    id: '1',
    jobTitle: 'Jr Executive',
    companyName: 'Burger King',
    location: 'Los Angeles, US',
    amount: '$96,000/y',
    logo: require('./assets/burger-king.png')
  },
  {
    id: '2',
    jobTitle: 'Product Manager',
    companyName: 'Beats',
    location: 'Florida, US',
    amount: '$84,000/y',
    logo: require('./assets/beats.png')
  },
  {
    id: '3',
    jobTitle: 'Product Manager',
    companyName: 'Facebook',
    location: 'Florida, US',
    amount: '$86,000/y',
    logo: require('./assets/jobsfacebook.png')
  },
  {
    id: '4',
    jobTitle: 'Software Engineer',
    companyName: 'Google',
    location: 'Mountain View, US',
    amount: '$120,000/y',
    logo: require('./assets/jobsgoogle.png')
  },
  {
    id: '5',
    jobTitle: 'Data Scientist',
    companyName: 'Amazon',
    location: 'Seattle, US',
    amount: '$110,000/y',
    logo: require('./assets/jobsamazon.png')
  },
  {
    id: '6',
    jobTitle: 'UX Designer',
    companyName: 'Apple',
    location: 'Cupertino, US',
    amount: '$105,000/y',
    logo: require('./assets/jobsapple.png')
  },
  {
    id: '7',
    jobTitle: 'Backend Developer',
    companyName: 'Twitter',
    location: 'San Francisco, US',
    amount: '$115,000/y',
    logo: require('./assets/twitter.png')
  },
  {
    id: '8',
    jobTitle: 'DevOps Engineer',
    companyName: 'Microsoft',
    location: 'Redmond, US',
    amount: '$125,000/y',
    logo: require('./assets/microsoft.png')
  },
  {
    id: '9',
    jobTitle: 'Network Engineer',
    companyName: 'Cisco',
    location: 'San Jose, US',
    amount: '$118,000/y',
    logo: require('./assets/cisco.png')
  },
];


const Card = ({ cardAmount, backgroundColor, jobTitle, companyName, location, logo }) => {

  return (
    <View style={[styles.cardContainer, { backgroundColor }]}>
      <View style={styles.rowAlign}>
        <View style={{marginTop: -5}}>
          <TextInput editable={false} style={{backgroundColor:'white', height:50, width: 50, borderRadius:10}}/>
          <Image source={logo} style={{width: 50, height: 50, marginRight: 10, marginTop: -50}}/>
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
                  <Text style={{fontSize: 30, color:'#0D0D26',fontWeight: 700}}>{exportUsername}</Text>
                  <Text style={{fontSize:20, color:'#95969D', fontWeight: 400}}>{exportEmail}</Text>
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

            <ScrollView>
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

            </ScrollView>
            
            
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
  