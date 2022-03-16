import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
} from '@expo-google-fonts/playfair-display';
import AppLoading from 'expo-app-loading';


const Module1 = () => {
  
  const width = useWindowDimensions()
  
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require("../img/top.png")} />
        <Text style={styles.h1} >The digital world moves quickly!</Text>
        <Text style={styles.text}>Courses designed to help you reach your goals.</Text>
      </View>
    )
  }
}

export default Module1

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    // marginTop:10,
    justifyContent:"center",
    alignItems: "center"
  },
  img: {
    width: 340,
    height: 200
  },
  h1: {
    // fontFamily:"PlayfairDisplay_600SemiBold",
    fontSize:23,
    padding:0,
    margin: 0
    // color:"#493d8a",
  },
  text: {
    fontFamily:"PlayfairDisplay_400Regular",
    fontSize:14,
    textAlign:"center",
    color:"#493d8a",
  }
})