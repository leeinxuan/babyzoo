import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import ActivityList from "../component/ActivityList";
import NewsList from "../component/NewsList";


const FrontScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#FFF2C5' }}>
      <ActivityList />
      <NewsList/>
    </ScrollView>
  );
};

export default FrontScreen;

