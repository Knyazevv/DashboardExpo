import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import Dashboard from '../screens/Dashboard';



const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({title: 'Login'})}/>   
        <Stack.Screen name="Dashboard" component={Dashboard} options={({ navigation }) => ({title: 'Dashboard'})}/>   
      </Stack.Navigator>
    </NavigationContainer>
  );
};