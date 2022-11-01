// import React, {useState} from 'react';
// import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import Banner from './components/Banner';
// import Products from './components/Products';
// import Top from './components/Top';
// import Pro from './components/Pro';
// const DisplayAnImage = () => {
//   return (
//     <View style={styles.container}>
//       <Banner></Banner>
//       <Top></Top>
//       <Pro></Pro>
//       {/* <Products></Products> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 0,
//   },
// });

// export default DisplayAnImage;
import * as React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, StatusBar, Text, View, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenA from './Page/Home';
import ScreenB from './Page/DiabetaCare';
import ScreenC from './Page/Detail';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const Tab = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={{ header: () => null }}
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, size, color}) => {
      //     let iconName;
      //     if (route.name === 'Screen_A') {
      //       iconName = 'autoprefixer';
      //       size = focused ? 25 : 20;
      //       // color = focused ? "#f0f" : "#555";
      //     } else if (route.name === 'Screen_B') {
      //       iconName = 'btc';
      //       size = focused ? 25 : 20;
      //       // color = focused ? "#f0f" : "#555";
      //     } else if (route.name === 'Screen_C') {
      //       iconName = 'abc';
      //       size = focused ? 25 : 20;
      //     }
      //     return <FontAwesome5 name={iconName} size={size} color={color} />;
      //   },
      // })}
      // tabBarOptions={{
      //   activeTintColor: '#f0f',
      //   inactiveTintColor: '#555',
      //   inactiveBackgroundColor: '#999',
      //   showLabel: true,
      //   labelStyle: {fontSize: 14},
      // }}
      >
        <Tab.Screen name="Screen_A" component={ScreenA} />
        {/* // options={{tabBarBadge: 3}} */}
        {/* options={{header: () => null}} */}
        <Tab.Screen name="Screen_B" component={ScreenB} />
        <Tab.Screen name="Screen_C" component={ScreenC} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
