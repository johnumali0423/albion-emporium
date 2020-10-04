import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Stylesheet1, Text, View, Image,Button,Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textstyles.container}>WELCOME TO THE ROYAL TOUR!</Text>
      <Image source={require("./assets/Specboar.png")}></Image>
      <Text style={textstyles1.container}>Do you want free silver and fame easily?</Text>
      <Text style={textstyles2.container}>WE ARE THE ANSWER!</Text>
      <Text style={textstyles1.container}>WE OFFER:</Text>
      <Text style={textstyles1.container}>{">>"}Daily Fame Farms{"<<"}  </Text>
      <Text style={textstyles1.container}>{">>"}Faction Flagged Ganking{"<<"}</Text>
      <Text style={textstyles1.container}>{">>"}ARCH Diving{"<<"}</Text>
      <Text style={textstyles1.container}>{">>"}LOOTING CTAs{"<<"}</Text>
      <Text style={textstyles1.container}>And much much more!{"\n"}</Text>
      
      <Button
        title="JOIN US NOW!"
        onPress={() => Alert.alert('DISCORD LINK: \n https://discord.gg/vFrvhx')}
        color = '#9b1e12'
      />
      <StatusBar style="auto" />
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
    paddingTop: 65 ,
    flex: 1,
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
