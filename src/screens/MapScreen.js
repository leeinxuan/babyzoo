import React from "react";
import { View, Text } from "react-native";
import { selectColorMode } from "../redux/counterSlice";
import { useSelector } from "react-redux";
import BuyButton from "../component/BuyButton";
import MyTicket from "../component/MyTicket";
const MapScreen = ({ navigation }) => {
  const colorMode = useSelector(selectColorMode);
  const sampleItem = { id: 1, name: '商品1' };
  return (
  //   <View>
  //   <BuyButton bgc="blue" item={sampleItem} />
  //   <MyTicket/>
  // </View>
    <View style={{ flex: 1 ,backgroundColor:colorMode == "light"?"white":"black"}}>
      <Text fontSize={30}>
        This is a Mybook Page
      </Text>
    </View>
  );
};

export default MapScreen;