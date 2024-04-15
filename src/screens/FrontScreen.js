import React from "react";
import { ScrollView, Text, Image } from "react-native";
import { Center, Box } from "@gluestack-ui/themed";
import ActivityList from "../component/ActivityList";
import NewsList from "../component/NewsList";
import Weather from "../component/Weather";
import Searchbar from "../component/Searchbar";
import NewbornList from "../component/NewbornList";

import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const FrontScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: colorMode == "light"?colors.yellow:colors.darkbgc }}>
      <Center mt={10}>
        <Image
          style={{ width: 190, height: 90 ,resizeMode:'contain'}}
          source={{ uri: 'https://github.com/leeinxuan/babyzoo/blob/main/src/img/logo2.png?raw=true' }}
        />
        {/* <Text style={{ fontSize: 36, fontWeight: '900', color: '#B1D9DE', textAlign: 'center' }}>
          BABY{'\n'}ZOO
        </Text> */}
      </Center>
      <Weather />
      <Searchbar />
      <ActivityList />
      <NewbornList />
      <NewsList />
    </ScrollView>
  );
};

export default FrontScreen;





