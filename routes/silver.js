import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert,ScrollView,SafeAreaView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function silver(navigate) {
    return (<View style={styles.container}>
            <Image source={require("../assets/silver.png")}    style={{width: 220, height: 140, resizeMode: 'contain',marginLeft:20,
     }}></Image>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={{fontWeight:'bold', textAlign:'justify'}}>     As an open world game, there are plenty of ways to make silver in this game, from killing players to killing mobs, and aside from that there are plenty of resources that a player can gather throughout the game and sell it for a fortune!{'\n'}{'\n'}</Text>
      <WebView
       allowsFullscreenVideo
       allowsInlineMediaPlayback
       mediaPlaybackRequiresUserAction
       style={{width:400, height:250}}
        source={{uri: "https://www.youtube.com/embed/hCkXdkZ3UAA"}}>
            
            </WebView>
           <Text>{'\n'}{'\n'}</Text>
            <WebView
       allowsFullscreenVideo
       allowsInlineMediaPlayback
       mediaPlaybackRequiresUserAction
       style={{width:400, height:250}}
        source={{uri: "https://www.youtube.com/embed/J2Uw6h85Zfk"}}></WebView>
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