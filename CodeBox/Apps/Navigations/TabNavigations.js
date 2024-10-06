import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyCourse from './../Screen/MyCourse';
import LeaderBoard from './../Screen/LeaderBoard';
import HomeScreen from './../Screen/HomeScreen';
import Profile from '../Screen/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
  return (
    // <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#e91e63', 
        tabBarInactiveTintColor: 'gray',
      }}> 
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }} 
        />
         <Tab.Screen 
          name="My Course" 
          component={MyCourse} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="book-open" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Leaderboard" 
          component={LeaderBoard} 
          options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="leaderboard" size={size} color={color} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }} 
        />
     </Tab.Navigator>
    // </NavigationContainer>
    
  )
}