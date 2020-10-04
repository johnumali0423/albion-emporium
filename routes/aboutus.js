import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert,ScrollView,SafeAreaView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function aboutus(navigate) {
    return (<View style={styles.container}>
            <Image source={require("../assets/spec.png")}    style={{width: 200, height: 150, resizeMode: 'contain',
     }}></Image>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={{fontWeight:'bold', textAlign:'justify'}}>        We are The Royal Tour, composed of guys that are addicted in ganking and looting within the Royal Continent thus the name, The Royal Tour. We are very welcoming to beginners and even veterans in the game, we aspire to be one of the most well-known gank squads in the world of Albion, but of course everything starts from the bottom. Watch out, or else you might be our next victim!
          </Text>     
          <Image source={require("../assets/royaltour.png")}    style={{width: 400, height: 290, resizeMode: 'contain',
     }}></Image>  
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