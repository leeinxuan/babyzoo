import React from 'react';
import { useState } from 'react';
import { Box, Image, Text, Pressable,View } from '@gluestack-ui/themed';
import { Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




import AnimalInfoScreen from '../screens/AnimalInfoScreen';
import PlanScreen from '../screens/PlanScreen';
import AccountScreen from '../screens/AccountScreen';
import SettingtScreen from '../screens/SettingScreen';
import FrontScreen from '../screens/FrontScreen';
import MapScreen from '../screens/MapScreen';
import TicketScreen from '../screens/TicketScreen';
import MybabyScreen from '../screens/MybabyScreen';
import AboutusScreen from '../screens/AboutusScreen';
import AnimalListScreen from '../screens/AnimalListScreen';
import ServerScreen from '../screens/ServerScreen';
import MyTheme from '../theme';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer  theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {
  const { colors } = useTheme();
  return (
    <DrawerContentScrollView {...props}>
       <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: colors.red, height: 250 ,marginTop:-67}}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingTop: 100 }}>
            <Image
              height={55}
              width={55}
              borderRadius={40}
              marginTop={20}
              source={require("../img/APP.jpg")}
              alt='AccountImage'
            />
            <Text fontWeight='500' fontSize={24} marginLeft={16} marginTop={25} color={colors.white}>
              Baby Zoo
            </Text>
          </View>
          <Text fontWeight='500' fontSize={16} marginLeft={20} marginTop={25} color={colors.white}>
            babyzoo1123@gmail.com
          </Text>
        </View>
        <View style={{ backgroundColor: colors.blue, flex: 2 }}>
          <DrawerItemList {...props} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerStyle: { width: 300 },
        drawerStyle: { backgroundColor: colors.blue },
        drawerActiveBackgroundColor: colors.blue,
        drawerInactiveTintColor: colors.white,
        drawerActiveTintColor: colors.red,
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20,
        },
        drawerLabelStyle: { fontSize: 16, fontWeight: '600' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          title: "首頁",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-variant" color={color} size={32} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{
          //headerShown: false,
          title: "我的帳號",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={32} />
          ),
        }}
      />
      <Drawer.Screen
        name="MybabyStack"
        component={MybabyScreen}
        options={{
          //headerShown: false,
          title: "我的寶寶",
          
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={32} />
          ),
        }}
      />
      <Drawer.Screen
        name="TicketStack"
        component={ServerScreen}
        options={{
          //headerShown: false,
          title: "服務設施",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-agent" color={color} size={32} />
          ),
        }}
      />
      <Drawer.Screen
        name="AboutusStack"
        component={AboutusScreen}
        options={{
          //headerShown: false,
          title: "關於我們",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={32} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingtScreen}
        options={{
          //headerShown: false,
          title: "設定",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={32} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              height: 83,
            },
            android: {
              height: 70,
              tabBarLabelStyle: {
                
              },
            },
          }),
          backgroundColor: colors.red,
          
        },

        //headerShown:false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "首頁",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),

        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "地圖",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="map-marker" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="animalInfo"
        component={AnimalInfoStack}
        options={{
          title: "動物介紹",
          headerShown: false,
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),

        }}
      />
      <Tab.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          title: "行程",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-text-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TicketStack"
        component={TicketStack}
        options={{
          title: "門票",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket-confirmation" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

const HomeStack = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FrontScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.yellow
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              color="#D56A6A"
              onPress={() => navigation.openDrawer()}
            />
          ),

        }}
      />

    </Stack.Navigator>
  );
}

const TicketStack = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.yellow
          },
          headerLeft: () => (
            <MaterialCommunityIcons
              name={'menu'}
              size={20}
              color="#D56A6A"
              onPress={() => navigation.openDrawer()}
            />
          ),

        }}
      />

    </Stack.Navigator>
  );
}

const AnimalInfoStack = ({ navigation }) => {
  const { colors } = useTheme();
  return (
      <Stack.Navigator>
          <Stack.Screen
              name="AnimalInfo"
              component={AnimalListScreen}
              options={{
                title: null,
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: colors.yellow
                },
                  headerLeft: () => (
                      <MaterialCommunityIcons
                          name={'menu'}
                          color='#D56A6A'
                          size={20}
                          onPress={() => navigation.openDrawer()}
                          style={{ marginRight: 20 }}
                      />
                  ),
              }}
          />
          <Stack.Screen
              name="AnimalInfo2"
              component={AnimalInfoScreen}
              options={{
                title: null,
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: colors.blue
                },
                  headerLeft: () => (
                      <MaterialCommunityIcons
                          name={'chevron-left'}
                          color='#D56A6A'
                          size={20}
                          onPress={() => navigation.navigate('AnimalInfo')}
                          style={{ marginRight: 20 }}
                      />
                  ),
              }}
          />
      </Stack.Navigator>
  );
}



export default Navigation;



