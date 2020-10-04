import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert,ScrollView,SafeAreaView } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export default function builds({navigation}) {
    return (<View style={styles.container}>
        <Image source={require("../assets/builds.png")}    style={{width: 200, height: 150, resizeMode: 'contain',
 }}></Image>
  <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={{fontWeight:'bold', textAlign:'justify'}}>     In here, you can see few builds that we recommend to beginners and intermediate players who needs a hand in creating builds that will boost them in the game.</Text>

<Image source={require("../assets/famefarm.png")}    style={{resizeMode: 'contain', marginLeft:20
    }}></Image>
    <TouchableOpacity onPress={() => navigation.navigate('Greataxe')}>
    <Image source={require("../assets/Gaxe.png")} style={{width: 120, height: 150, resizeMode: 'contain', alignContent: 'center'
    }}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('LightXbow')}>
    <Image source={require("../assets/elderlightcbow.png")} style={{width: 120, height: 150, resizeMode: 'contain',
    }}></Image>
    </TouchableOpacity>
    <Image source={require("../assets/ganking.png")}    style={{resizeMode: 'contain', marginLeft:40
    }}></Image>
      <TouchableOpacity onPress={() => navigation.navigate('Double Bladed Staff')}>
    <Image source={require("../assets/dbleded.png")} style={{width: 120, height: 150, resizeMode: 'contain',
    }}></Image>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Claws')}>
    <Image source={require("../assets/clawsz.png")} style={{width: 120, height: 150, resizeMode: 'contain',
    }}></Image>
    </TouchableOpacity>
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