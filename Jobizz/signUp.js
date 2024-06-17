import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';

const appleLogo = require('./assets/apple.png');
const googleLogo = require('./assets/google.png');
const facebookLogo = require('./assets/facebook.png');

export let exportUsername = '';
export let exportEmail = '';

export default function SignUp({ navigation }) {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    exportUsername = username;
    exportEmail = email;

    navigation.navigate('Home Page');
  };

  

  return(
    <View style={styles.container}>
        <Text style={{color:'#356899', fontWeight:'bold', fontSize:'25px', fontFamily:'Poppins', marginBottom:10}}>Jobizz</Text>
        <Text style={{fontWeight:'bold', fontSize:'27px', fontFamily:'Poppins', marginBottom:10}}>Welcome Back 👋</Text>
        <Text style={{fontSize:'14px', fontFamily:'Poppins', opacity:0.4, marginBottom: 30}}>Let's log in.Apply to jobs!</Text>
        
        <View >
          <TextInput style={styles.textBox} placeholder='Name' value={username} onChangeText={(username) => setName(username)}/> 
          <TextInput style={styles.textBox} placeholder='Email' value={email} onChangeText={(email) => setEmail(email)}/>
        </View>

        <View style={styles.loginButton}>
          <Button title='Log in' color='white' onPress={handleSignUp}/>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 75}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#AFB0B6'}} />
          <View>
            <Text style={{color:'#AFB0B6'}}>  Or continue with  </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: '#AFB0B6'}} />
        </View>

        <View style={{flexDirection: 'row', marginTop: 10, paddingHorizontal:50}}>
          <View style={{marginRight: 25}}>
            <Image source={appleLogo} style={{width: 70, height: 120}}/>
          </View>
          <View style={{marginRight: 25}}>
            <Image source={googleLogo} style={{width: 70, height: 120}}/>
          </View>
          <View>
            <Image source={facebookLogo} style={{width: 70, height: 120}}/>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal:80}}>
          <Text style={{color:'#AFB0B6', fontSize: 14}}>Haven't an account?</Text>
          <Text style={{color:'#356899', fontSize: 14, fontWeight: 'bold'}}> Register</Text>
        </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f05',
    paddingHorizontal: 20,
    paddingVertical: 150,
  },
  textBox: {
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    borderColor: '#AFB0B6',
  },
  loginButton: {
    backgroundColor: '#356899',
    borderRadius: 5,
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

