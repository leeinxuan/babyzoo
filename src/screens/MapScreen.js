import React from "react";
import { View, Text } from "react-native";
import { selectColorMode } from "../redux/counterSlice";
import { useSelector } from "react-redux";

const MapScreen = ({ navigation }) => {
  const colorMode = useSelector(selectColorMode);

  return (
    <View style={{ flex: 1 ,backgroundColor:colorMode == "light"?"white":"black"}}>
      <Text fontSize={30}>
        This is a Mybook Page
      </Text>
    </View>
  );
};

export default MapScreen;