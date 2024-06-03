import React from 'react';
import { useSelector } from "react-redux";
import { Platform } from "react-native";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';
import { KeyboardAvoidingView } from "@gluestack-ui/themed";
import { selectHasLogin, selectHasAccount } from "../redux/accountSlice";
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import GeneralAccountScreen from './GeneralAccountScreen';
import Login from "../component/Login";


const AccountScreen = () => {
    const hasLogin = useSelector(selectHasLogin);
  const hasAccount = useSelector(selectHasAccount);
    return (
        <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        {!hasLogin ? (
          !hasAccount ? (
            <LoginScreen />
          ) : (
            <RegisterScreen />
          )
        ) : (
          <GeneralAccountScreen/>
        )}
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