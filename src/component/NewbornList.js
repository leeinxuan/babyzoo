import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { Center } from "@gluestack-ui/themed";
import data from "../json/front.json"
import NewbornDetail from "./NewbornDetail";
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const NewbornList = () => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (

        <View style={styles.activitySection}>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: colorMode == "light" ? colors.deepblue : colors.white, zIndex: 2 }}>{data[1].title}</Text>
                <View style={{ width: 125, height: 16, backgroundColor: colorMode == "light" ? colors.white : colors.deepblue, borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data[1].data}
                renderItem={({ item }) => <NewbornDetail data={item} />}
                keyExtractor={item => item.babyname}
            />
        </View>

    );
};

export default NewbornList;

const styles = StyleSheet.create({
    activitySection: {
        marginLeft: 20,
        marginBottom: 55,
        height: 255
    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 20
    },




})

