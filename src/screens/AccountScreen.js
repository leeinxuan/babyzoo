import React from 'react';
import { useSelector } from "react-redux";
import { Platform } from "react-native";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';
import { KeyboardAvoidingView, Box } from "@gluestack-ui/themed";
import GeneralAccountScreen from './GeneralAccountScreen';
import Login from "../component/Login";
import Register from '../component/Register';
import { selectHasLogin, selectHasAccount } from "../redux/accountSlice";


const AccountScreen = () => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);
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
          <Login />
        ) : (
          <Register />
        )
      ) : (
        <GeneralAccountScreen/>
      )}
    </KeyboardAvoidingView>
  );
}

export default AccountScreen;