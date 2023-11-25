import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/pages/LoginScreenPages/Login/index';
import LoginPage from './src/pages/LoginScreenPages/LoginPage/index';
import UserPage from './src/pages/UserPage/Index';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="LoginPage"
          options={{ headerShown: false }}
          component={LoginPage}
        />
        <Stack.Screen
          name="UserPage"
          options={{ headerShown: false }}
          component={UserPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
