import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import PlantScreen from './app/screens/PlantScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
        <Stack.Screen name="PlantScreen" component={PlantScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

