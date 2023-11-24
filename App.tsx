import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import GeoSwitch from './components/geolocation/GeoSwitch';
import Login from './components/login/Login';
import { User } from './components/geolocation/types/locationTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const api = 'https';

  const getUser = async () => {
    const user = await AsyncStorage.getItem("@user");
    if (user) {
      setIsLogged(true)
    }else{
      setIsLogged(false);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {!isLogged && <Login setIsLogged={setIsLogged} />}
      {isLogged && <GeoSwitch endPoint={api} label={"Activar"} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});
