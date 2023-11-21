import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import GeoSwitch from './components/geolocation/GeoSwitch';

export default function App() {
  const api = 'https://jsonplaceholder.typicode.com/posts/';
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <GeoSwitch endPoint={api} />
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
