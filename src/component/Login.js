import React from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import { useTheme } from '@react-navigation/native';
import { Input, InputField, InputIcon, InputSlot, SearchIcon, Center, Box } from '@gluestack-ui/themed';
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { HStack, VStack } from "@gluestack-ui/themed";
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const Login = () => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorMode == "light" ? colors.yellow : colors.darkbgc }}>
            <Center mt={10}>
                <Image
                    style={{ width: 190, height: 90, resizeMode: 'contain' }}
                    source={{ uri: 'https://github.com/leeinxuan/babyzoo/blob/main/src/img/logo2.png?raw=true' }}
                />
            </Center>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#60969D', zIndex: 2 }}>登入</Text>
                <View style={{ width: 120, height: 16, backgroundColor: 'white', borderRadius: 10, zIndex: 1, top: -15 }}></View>
            </View>
            <View style={styles.userStyle}>
                <FontAwesome6 name="user-large" size={20} color='#60969D' />
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#60969D', zIndex: 2, marginLeft: 10, marginTop: -3 }}>帳號</Text>
            </View>
            <View style={styles.putStyle}>
                <Input bgColor={colorMode == "light" ? colors.blue : colors.darkbgc} height={45} width={300} borderRadius={16} pr={15} pl={8}>
                    <InputField placeholder="Search..." placeholderTextColor={colors.white} />
                    <InputSlot pl="$3" >
                        <InputIcon as={SearchIcon} color={colors.white} />
                    </InputSlot>
                </Input>
            </View>
            <View style={styles.userStyle}>
                <Fontisto name="locked" size={24} color="#60969D" />
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#60969D', zIndex: 2, marginLeft: 10, marginTop: 1 }}>密碼
                </Text>
            </View>
            <View style={styles.putStyle}>
                <Input bgColor={colorMode == "light" ? colors.blue : colors.darkbgc} height={45} width={300} borderRadius={16} pr={15} pl={8}>
                    <InputField placeholder="Search..." placeholderTextColor={colors.white} />
                    <InputSlot pl="$3" >
                        <InputIcon as={SearchIcon} color={colors.white} />
                    </InputSlot>
                </Input>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    section: {
        marginLeft: 20,
    },
    textStyle: {
        alignItems: 'center',
        marginTop: 45,
    },
    userStyle: {
        flexDirection: 'row',      // 水平排列
        marginTop: 40,
        marginLeft: 50,
    },
    putStyle: {
        alignItems: 'center',
        marginTop: 10,
    },
})

export default Login;