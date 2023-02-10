import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {RootStackParamList} from './src/interface/NavInterface';
import ArchiveScreen from './src/screens/ArchiveScreen';
import AudioScreen from './src/screens/AudioScreen';
import DocumentScreen from './src/screens/DocumentScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImagesScreen from './src/screens/ImagesScreen';
import RootScreen from './src/screens/RootScreen';
import VideoScreen from './src/screens/VideoScreen';
import store from './src/store/Store';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ROOT" component={RootScreen} />
          <Stack.Screen name="HOME" component={HomeScreen} />
          <Stack.Screen name="IMAGES" component={ImagesScreen} />
          <Stack.Screen name="VIDEO" component={VideoScreen} />
          <Stack.Screen name="DOCUMENT" component={DocumentScreen} />
          <Stack.Screen name="AUDIO" component={AudioScreen} />
          <Stack.Screen name="ARCHIVE" component={ArchiveScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
