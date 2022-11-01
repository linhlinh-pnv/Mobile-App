import {StyleSheet, Text, View, StatusBar, Pressable} from 'react-native';
import * as React from 'react';
import 'react-native-gesture-handler';

export default function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
    navigation.navigate('Screen_C');
    // navigation.replace("Screen_B");
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({
          backgroundColor: pressed ? '#ddd' : '#0f0',
        })}>
        <Text style={styles.text}>Go to the Products</Text>
        <Text style={styles.text1}>Go to the Detail</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'pink',
    backgroundColor:'white',
  }
});
