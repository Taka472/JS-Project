import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

  var state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  const getWeather = async (e) => {
    //const city = e.target.elements.city.value;
    //const country = e.target.elements.country.value;
    e.preventDefault();   
    try {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
      const response = await api_call.json();
      if (city && country){
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        })
      } else {
        this.setState({
          error: "Please fill all fields..."
        })
      }
    } catch (error) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Can not find out this city..."
      })
    }
  }  

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>WEATHER SCANNER</Text>
      <TextInput id="input1" style={{height: 40, width: 300, backgroundColor: '#E5E5E5', padding: 10}} placeholder={'Type a country here'} onChangeText={setCountry} />
      <TextInput id='input2' style={{height: 40, width: 300, backgroundColor: '#E5E5E5', padding: 10}} placeholder={'Type a city here'} onChangeText={setCity} />
      <TouchableOpacity style={{height: 40, width: 150, backgroundColor: 'red'}} onPress={getWeather}>
        <View style={{alignItems: 'center', justifyContent: 'center', height: 40}}>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
            Scan
          </Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    gap: 20
  },
});
