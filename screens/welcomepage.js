
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Loginpage from './loginpage';

const WelcomePage = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'LexendDeca': require('../assets/fonts/LexendDeca-Black.ttf'),
    'LexendDeca-SemiBold': require('../assets/fonts/LexendDeca-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }
  return (
    <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.text}>Welcome!</Text>
      <Text style={styles.textthin}>Select the mode you would like to work in, next:</Text>
      <TouchableOpacity onPress={()=>{
        navigation.replace("Home");
        
        
      }} style={[styles.button,{margin:20,backgroundColor:'#3C1361'}]}>
        <Text style={styles.buttontext}>Personal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate("Home");
        
        
      }} style={[styles.button,{backgroundColor:'white'}]}>
        <Text style={[styles.buttontext,{color:'#3C1361'}]}>Collaborative</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  button: {
    shadowColor: 'white', // IOS
    shadowOffset: { height: -1, width: 3 }, // IOS (negative width for left shadow)
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    borderRadius: 20,
    elevation: 10, // Android
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: '#474747',
    borderRadius: 10,
    height: 332,
    width: 264,
    alignItems: 'center',
  },
  text: {
    margin: 10,
    color: 'white',
    fontFamily: 'LexendDeca',
    fontSize: 30,
  },
  buttontext:{
    color:'white',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 15,

  },
  textthin: {
    margin: 20,
    color: 'white',
    fontFamily: 'LexendDeca-SemiBold',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
});