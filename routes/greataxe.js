import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert,ScrollView,SafeAreaView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export default function greataxe() {
    return (<View style={styles.container}>
        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Image source={require("../assets/Gaxe1.png")} style={{marginLeft:40,}}></Image>
            <Image source={require("../assets/Greataxe.png")} style={{width: 400, height: 450, resizeMode: 'contain'}}></Image>
            <Text>{'\n'}</Text>
            <Image source={require("../assets/Greataxe1.png")} style={{resizeMode:'contain'}}></Image>
            <Text>{'\n'}</Text>
            <WebView
       allowsFullscreenVideo
       allowsInlineMediaPlayback
       mediaPlaybackRequiresUserAction
       style={{width:400, height:250}}
        source={{uri: "https://www.youtube.com/embed/-e-J3q9xOIw"}}>
            
            </WebView>
        </ScrollView>
        </SafeAreaView>
    </View>
    )
};
const styles = StyleSheet.create({
    container: {
      paddingTop: 50 ,
      flex: 1,
      backgroundColor: '#c96f53',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingBottom: 20,
    },
    WebViewStyle:{
      margin:20
    }
  })
  const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });