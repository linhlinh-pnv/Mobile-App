import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diabetes Care</Text>
      <Image style={styles.slide} source={require('../image/1.png')} />
      <Text style={styles.part1}>Save axtra on every order</Text>
      <Text style={styles.part2}>
        Etiam mollis metus non faucibus sollivitudin.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    top: 26,
  },
  slide: {
    width: 361,
    height: 203,
    top: 56,
    left: 8,
    position: 'absolute',
    borderRadius: 10,
  },
  part1: {
    fontFamily: 'Overpass',
    fontSize: 18,
    width: 118,
    height: 42,
    top: 70,
    left: 41,
    color: '#1987FB',
  },
  part2: {
    fontFamily: 'Overpass',
    fontSize: 12,
    width: 124,
    height: 32,
    top: 90,
    left: 41,
  },
});

export default Banner;
