import React from 'react';
import { useSelector } from "react-redux";
import { Platform } from "react-native";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import GeneralAccountScreen from './GeneralAccountScreen';
import Login from "../component/Login";


const AccountScreen = () => {
 
    return (
      <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flex={1}
    >
      {/* <GeneralAccountScreen/> */}
        <Login/>
      </KeyboardAvoidingView>
        // <Login/>
    // <View style={{flex: 1}}>
    //     <Text fontSize={30}>
    //         This is a Account Page
    //     </Text>              
    // </View>
    );
}

export default AccountScreen;