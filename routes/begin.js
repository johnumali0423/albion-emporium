import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert,ScrollView,SafeAreaView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export default function begin() {
    return (<View style={styles.container}>
            <Image source={require("../assets/begin.png")}    style={{width: 200, height: 150, resizeMode: 'contain',
     }}></Image>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={{fontWeight:'bold', textAlign:'justify'}}>        Are you new to this game? Are you lost and don't know   
      {'\n'}what to do after the tutorial? I've been there too, here is a simple guide that will help you navigate the game and show you the ropes of the game!{'\n'}{'\n'}</Text>
      <WebView
       allowsFullscreenVideo
       allowsInlineMediaPlayback
       mediaPlaybackRequiresUserAction
       style={{width:400, height:250}}
        source={{uri: "https://www.youtube.com/embed/ubO00GQLJoQ"}}>
            
            </WebView>
           <Text>{'\n'}{'\n'}</Text>
            <WebView
       allowsFullscreenVideo
       allowsInlineMediaPlayback
       mediaPlaybackRequiresUserAction
       style={{width:400, height:250}}
        source={{uri: "https://www.youtube.com/embed/-TLFn-NAQtM"}}></WebView>
      </ScrollView>
    </SafeAreaView>


    </View>

      );
    }












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