import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function App({navigation, route}) {
  const state = route.params;

  const NavigateToHome = () => {
    navigation.navigate("1", state);
  }

  return (
    <View style={styles.container}>
    <LinearGradient colors={["#00D8FF", "#56E5FF", "#93EEFF"]} style={styles.container}>
      <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 20, width: 200, marginTop: 30}} onPress={NavigateToHome}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 30}}>Back</Text>
        </View>
      </TouchableOpacity>
      <Text style={{fontWeight: 'bold', fontSize: 30, marginTop: 10}}>{state.country}, {state.city}</Text>
      <Image source={{uri: state.icon}} style={{width: 200, height: 200}}></Image>
      <Text style={{fontWeight: 'bold', fontSize: 40}}>{state.temperature} Kelvin</Text>
      <Text style={{fontWeight: 'bold', fontSize: 40}}>{(state.temperature - 273).toFixed(2)} Celcius</Text>
      <View style={{alignItems: 'flex-start', width: 350, marginTop: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Description: {state.description}</Text>
        <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Humidity: {state.humidity} g/m</Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, lineHeight: 18}}>3</Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Wind speed: {state.windSpeed}</Text>
      </View>
      <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: 400,
  },
});