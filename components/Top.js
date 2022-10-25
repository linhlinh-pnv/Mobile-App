import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import Products from './Products';

const Top = () => {
  return (
    <View style={styles.cards}>
      <Text style={styles.titleTopBanner}>Diabetic Diet</Text>
      <Products></Products>
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    marginLeft: 14,
    marginTop: 30,
  },
  titleTopBanner: {
    top: 190,
    fontSize: 16,
    color: 'red',
  },
});

export default Top;
