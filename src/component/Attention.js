import React from "react";
import { Text, StyleSheet,View } from "react-native";
import { Center } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const Attention = () => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <Center p={35}>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: colorMode == "light" ? colors.deepblue : colors.white, zIndex: 2 }}>注意事項</Text>
                <View style={{ width: 125, height: 16, backgroundColor: colorMode == "light" ? colors.white : colors.deepblue, borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </View>
            <View>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#D56A6A' ,lineHeight:25 ,letterSpacing:0.5}}>
                    1.凡符合優惠條件者，請於入場時主動出示有效證件，未攜帶者恕不享有優惠！{'\n'}
                    2.入園後恕不退票，如欲重複入園，請於出口處前蓋手戳章，當日可憑此戳章再次入園。{'\n'}
                    3.票券若因遺失、破損、燒毀、撕除或無法辨識等情形，恕不補發、退換。{'\n'}
                    4.如您有透過官網「線上購票」購買各類票卷的諮詢問題，請洽通路客服專線：(03)5910052，或透過購票頁面亦可聯繫線上客服。
                </Text>
            </View>
        </Center>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
})

export default Attention;



