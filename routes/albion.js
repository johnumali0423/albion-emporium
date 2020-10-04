import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert,ScrollView,SafeAreaView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
export default function albion() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/logo2.png")}    style={{width: 250, height: 200, resizeMode: 'contain',
     }}></Image>
   <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={{fontWeight:'bold', textAlign:'justify'}}>    Albion Online (AO) is a medieval fantasy MMORPG developed by Sandbox Interactive, a studio based in Berlin, Germany.</Text>
    <Text style={{fontWeight:'bold', textAlign:'justify'}}>  {'\n'}    During the beta stages of development, players were able to purchase "Founder's Packs" to gain access to the closed beta play-tests which were run intermittently by Sandbox Interactive, typically after an interval of a few months of development.</Text>
    <Text style={{fontWeight:'bold', textAlign:'justify'}}> {'\n'}   After the release of the game, these founder's packs were made unavailable for purchase. Albion Online removed its free-to-play model for various reasons on December 30, 2015.</Text>
    <Text style={{fontWeight:'bold', textAlign:'justify'}}> {'\n'}  When it initially released on July 17, 2017, Albion Online offered a selection of "Starter Packs" which granted players access to the game and offered a varying amount of gold to get started.</Text>   
    <Text style={{fontWeight:'bold', textAlign:'justify'}}> {'\n'}   Once a player purchased any of the starter packs, they would be granted open-ended access to the game with no extra mandatory fees. Players can also purchase membership for a limited amount of time without the benefits of the starter packs. {'\n'}    As of April 10, 2019, Albion Online has gone Free to Play.</Text>
        <WebView
       allowsFullscreenVideo
       allowsInlineMediaPlayback
       mediaPlaybackRequiresUserAction
       style={{width:400, height:250}}
        source={{uri: "https://www.youtube.com/embed/eBU_Fxd0Jf4"}}>

        </WebView>
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