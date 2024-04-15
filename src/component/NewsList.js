import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";
import { Box } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';



const NewsList = () => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <View style={styles.activitySection}>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: colorMode == "light" ? colors.deepblue : colors.white, zIndex: 2 }}>最新消息</Text>
                <View style={{ width: 125, height: 16, backgroundColor: colorMode == "light" ? colors.white : colors.deepblue, borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </View>
            <View
                style={{
                    backgroundColor:colorMode == "light" ? colors.blue : colors.darkbgc,
                    borderColor:colorMode == "light" ? null : colors.white,
                    borderWidth:colorMode == "light" ? null : 1,
                    paddingLeft: 25,
                    justifyContent: 'center',
                    marginBottom: 20,
                    width: 355,
                    height: 55,
                    borderRadius: 20,
                    shadowOffset: { width: 0, height: 4 },
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    elevation: 4
                }}
            >
                <Text style={styles.newstext}>【公告】BABY ZOO 4/9暫停營業</Text>
            </View>
            <View 
            style={{
                backgroundColor:colorMode == "light" ? colors.blue : colors.darkbgc,
                borderColor:colorMode == "light" ? null : colors.white,
                borderWidth:colorMode == "light" ? null : 1,
                paddingLeft: 25,
                justifyContent: 'center',
                marginBottom: 20,
                width: 355,
                height: 55,
                borderRadius: 20,
                shadowOffset: { width: 0, height: 4 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4
            }}>
                <Text style={styles.newstext}>【停展】企鵝餵食秀因食安問題暫停演出</Text>
            </View>
            <View 
            style={{
                backgroundColor:colorMode == "light" ? colors.blue : colors.darkbgc,
                borderColor:colorMode == "light" ? null : colors.white,
                borderWidth:colorMode == "light" ? null : 1,
                paddingLeft: 25,
                justifyContent: 'center',
                marginBottom: 20,
                width: 355,
                height: 55,
                borderRadius: 20,
                shadowOffset: { width: 0, height: 4 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4
            }}>
                <Text style={styles.newstext}>【人事】BABY ZOO 徵求工讀生數名</Text>
            </View>



        </View>

    );
};

export default NewsList;

const styles = StyleSheet.create({
    activitySection: {
        margin: 20,

    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10
    },
    newstext: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',

    }


})

