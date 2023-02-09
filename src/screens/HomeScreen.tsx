import React from 'react';
import {Dimensions, SafeAreaView, Text} from 'react-native';

// import Height Width
const {height, width} = Dimensions.get('screen');

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}
