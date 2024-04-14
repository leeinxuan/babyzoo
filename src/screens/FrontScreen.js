import React from "react";
import { ScrollView, Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import ActivityList from "../component/ActivityList";
import NewsList from "../component/NewsList";
import Weather from "../component/Weather";
import Searchbar from "../component/Searchbar";
import NewbornList from "../component/NewbornList";


const FrontScreen = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: '#FFF2C5' }}>
      <Center>
        <Text style={{ fontSize: 36, fontWeight: '900', color: '#B1D9DE', textAlign: 'center' }}>
          BABY{'\n'}ZOO
        </Text>
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





