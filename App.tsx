import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {RootStackParamList} from './src/interface/NavInterface';
import RootScreen from './src/screens/RootScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ROOT" component={RootScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
