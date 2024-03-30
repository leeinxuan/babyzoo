import React from 'react';
import { useState } from 'react';
import { Box,Image, Text, Pressable } from '@gluestack-ui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screen/homescreen';
import MapScreen from '../screen/MapScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    );
}

  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      
    </Stack.Navigator>
    );
  }

  export default Navigation;