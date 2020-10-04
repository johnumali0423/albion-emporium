import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
                <Image source={require("../assets/logoz.png")}    style={{width: 200, height: 150, resizeMode: 'contain',  }}></Image>
        
        <Grid>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Albion')}>
                <Image source={require("../assets/albion.png")}    style={{width: 180, height: 150, resizeMode: 'contain',  }}></Image>
              </TouchableOpacity>
            </Col>
      
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Begin')}>
                <Image source={require("../assets/begin.png")}    style={{width: 180, height: 150, resizeMode: 'contain',  }}></Image>
              </TouchableOpacity>
            </Col>
        </Grid>

        <Grid>
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Builds')}>
                <Image source={require("../assets/builds.png")}    style={{width: 180, height: 150, resizeMode: 'contain',  }}></Image>
              </TouchableOpacity>
            </Col>
        
            <Col>
              <TouchableOpacity onPress={() => navigation.navigate('Silver Making')}>
                <Image source={require("../assets/silver.png")}    style={{width: 220, height: 150, resizeMode: 'contain',  }}></Image>
              </TouchableOpacity></Col>
        </Grid>

        <Grid>
          <Row>
            <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
              <Image source={require("../assets/spec.png")}    style={{width: 200, height: 150, resizeMode: 'contain', }}></Image>
            </TouchableOpacity>
          </Row>
        </Grid>
    </View>
  );
}

const textstyles= StyleSheet.create({
  container: {
    
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#007647',
  }
})
const textstyles1= StyleSheet.create({
  container: {
    padding:3,
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#008753',
  }
})
const textstyles2= StyleSheet.create({
  container: {
    padding:3,
    textAlignVertical: 'top',
    fontWeight: 'bold',
    fontSize: 19,
    color: '#9b1e12',
  }
})
const styles = StyleSheet.create({
  container: {
    paddingTop: 50 ,
    flex: 1,
    backgroundColor: '#c96f53',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: 20,
  },
});
