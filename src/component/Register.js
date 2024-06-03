import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput, ScrollView, Image } from "react-native";
import { Center } from "@gluestack-ui/themed";
import { useTheme } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { gotoSignIn, setLogin } from "../redux/accountSlice";

const Register = () => {
    const [email, setEmail] = useState('');
    const [emailFocused, setEmailFocused] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [isRemember, setIsRemember] = useState(false);
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <ScrollView style={{ backgroundColor: colorMode == "light" ? colors.yellow : colors.darkbgc }}>
            <Center mt={10}>
                <Image
                    style={{ width: 190, height: 90, resizeMode: 'contain' }}
                    source={{ uri: 'https://github.com/leeinxuan/babyzoo/blob/main/src/img/logo2.png?raw=true' }}
                />
            </Center>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#60969D', zIndex: 2 }}>註冊</Text>
                <View style={{ width: 120, height: 16, backgroundColor: 'white', borderRadius: 10, zIndex: 1, top: -15 }}></View>
            </View>
            <View style={styles.userStyle}>
                <FontAwesome6 name="user-large" size={20} color='#60969D' />
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#60969D', zIndex: 2, marginLeft: 10, marginTop: -3 }}>帳號</Text>
            </View>
            <View style={styles.putStyle}>
                <TextInput
                    style={[
                        styles.input,
                        styles.emailInput,
                        emailFocused && styles.inputFocused,
                    ]}
                    placeholder="電子郵件"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    autoCapitalize="none"
                    placeholderTextColor="#ffffff"
                />
            </View>
            <View style={styles.userStyle}>
                <MaterialIcons name="email" size={20} color='#60969D' />
                <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#60969D', zIndex: 2, marginLeft: 10, marginTop: -3 }}>信箱</Text>
            </View>
            <View style={styles.putStyle}>
                <TextInput
                    style={[
                        styles.input,
                        styles.emailInput,
                        emailFocused && styles.inputFocused,
                    ]}
                    placeholder="電子郵件"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    autoCapitalize="none"
                    placeholderTextColor="#ffffff"
                />
            </View>
            <View style={styles.userStyle}>
                <Fontisto name="locked" size={24} color="#60969D" />
                <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#60969D', zIndex: 2, marginLeft: 10, marginTop: 1 }}>密碼
                </Text>
            </View>
            <View style={styles.putStyle}>
                <TextInput
                    style={[
                        styles.input,
                        styles.passwordInput,
                        passwordFocused && styles.inputFocused,
                    ]}
                    placeholder="密碼"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    placeholderTextColor="#ffffff"
                />
            </View>
            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={() => setIsRemember(!isRemember)}>
                    <Text style={styles.checkboxText}>
                        {isRemember ? '☑' : '☐'} 我已閱讀並同意條款
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>註冊</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>
                或是 <Text onPress={() => { dispatch(gotoSignIn()); }} style={styles.register}>登入</Text>
            </Text>

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
    input: {
        height: 40,
        borderColor: '#BEBEBE',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
        color: '#60969D',
    },
    emailInput: {
        backgroundColor: '#B1D9DE', // 蓝色背景
        width: 305,
        borderRadius: 8,
    },
    inputFocused: {
        borderColor: '#60969D', // 深蓝色边框
    },
    passwordInput: {
        backgroundColor: '#B1D9DE', // 蓝色背景
        width: 305,
        borderRadius: 8,
    },

    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        marginBottom: 24,
    },
    checkboxText: {
        color: '#fe9e49',
        fontSize: 16,
    },
    forgotPassword: {
        color: '#fe9e49',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#B1D9DE',
        padding: 12,
        alignItems: 'center',
        alignSelf: 'center', // 置中
        borderWidth: 1, // 设置边框宽度
        borderRadius: 8,
        borderColor: '#60969D',
        marginTop: 10,
        width: "25%",
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: 16,
        marginBottom:30
    },
    register: {
        color: '#fe9e49',
    },
    errorWrap: {
        marginTop: 16,
        padding: 8,
        borderColor: 'darkred',
        borderWidth: 1,
        borderRadius: 4,
    },
    errorTitle: {
        color: 'darkred',
        fontWeight: 'bold',
    },
    errorMessage: {
        color: 'darkred',
        fontSize: 12,
    },
})

export default Register;