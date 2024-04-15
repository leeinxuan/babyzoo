import React from 'react';
import { View } from 'react-native';
import { Text } from "@gluestack-ui/themed";
import ColorModeSwitch from '../component/ColorModeSwitch';
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const SettingtScreen = () => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
    <View style={{flex: 1,alignItems:'center',backgroundColor:colorMode == "light"?colors.yellow:colors.darkbgc}}>
        <Text fontSize={30}>
            <ColorModeSwitch/>
        </Text>              
    </View>
    );
}

export default SettingtScreen;