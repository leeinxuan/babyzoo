import React from "react";
import { ScrollView, Text } from "react-native";
import { Center } from "@gluestack-ui/themed";
import AnimalList from "../component/AnimalList";
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const AnimalListScreen = ({ navigation }) => {
const { colors } = useTheme();
const colorMode = useSelector(selectColorMode);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colorMode == "light"?colors.yellow:colors.darkbgc }}>
      <Center>

      </Center>

      <AnimalList navigation={navigation} />

    </ScrollView>
  );
};

export default AnimalListScreen;