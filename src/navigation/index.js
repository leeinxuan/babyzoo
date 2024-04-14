import React from 'react';
import { useState } from 'react';
import { Box, Image, Text, Pressable } from '@gluestack-ui/themed';
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
import MyTheme from '../theme';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}

const CustomDrawerContent = (props) => {

  return (
    <DrawerContentScrollView {...props}>
      <Image
        height={48}
        width={48}
        marginLeft={16}
        marginTop={40}
        marginBottom={16}
        source={require("../img/img_avatar.png")}
        alt='AccountImage'
      />
      <Text fontWeight='500' fontSize={24} marginLeft={16} marginBottom={17}>
        May
      </Text>
      <Box backgroundColor='#EDEDEF' height={1} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const MyDrawer = () => {

  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        drawerStyle: { width: 300 },
        drawerActiveBackgroundColor: 'white',
        drawerInactiveTintColor: '#666666',
        drawerActiveTintColor: '#6200EE',
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 20,
        },
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{
          //headerShown: false,
          title: "Account",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsStack"
        component={SettingtScreen}
        options={{
          //headerShown: false,
          title: "Settings",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const MyTabs = ({ navigation }) => {
  const { colors } = useTheme;
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarActiveTintColor: '#FFF2C5',
        tabBarInactiveTintColor: 'white',
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
          backgroundColor: "#D56A6A",
          
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
        component={AnimalInfoScreen}
        options={{
          title: "動物介紹",
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
          title: "購票",
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
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FrontScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#FFF2C5"
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

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#FFF2C5"
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



export default Navigation;



