import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from  './routes/Homescreen';
import albion from './routes/albion';
import begin from './routes/begin';
import builds from './routes/builds';
import greataxe from './routes/greataxe';
import lightxbow from './routes/lightxbow';
import dbladed from './routes/dbladed';
import claws from './routes/claws';
import silver from './routes/silver';
import aboutus from './routes/aboutus';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Albion" component={albion }/>
      <Stack.Screen name="Begin" component={begin }/>
      <Stack.Screen name="Builds" component={builds }/>
      <Stack.Screen name="Greataxe" component={greataxe }/>
      <Stack.Screen name="LightXbow" component={lightxbow }/>
      <Stack.Screen name="Double Bladed Staff" component={dbladed }/>
      <Stack.Screen name="Claws" component={claws }/>
      <Stack.Screen name="Silver Making" component={silver }/>
      <Stack.Screen name="About Us" component={aboutus }/>
      </Stack.Navigator>
  </NavigationContainer>
);
}
export default App;