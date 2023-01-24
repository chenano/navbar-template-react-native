import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeSceen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Tab = createBottomTabNavigator();

/**
 * The App function returns a NavigationContainer component that contains a Tab.Navigator component
 * that contains three Tab.Screen components
 * @returns A NavigationContainer is being returned.
 */
export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: 'Home'}}/>
          <Tab.Screen name="Login" component={LoginScreen} options={{tabBarLabel: 'Login'}}/>
          <Tab.Screen name="Register" component={RegisterScreen} options={{tabBarLabel: 'Register'}}/> 
        </Tab.Navigator>
    </NavigationContainer>
  );
}