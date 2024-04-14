import React from "react";
import { FlatList, View, Text, Image, StyleSheet } from "react-native";
import { Center } from "@gluestack-ui/themed";
import data from "../json/front.json"
import ActivityDetail from "./ActivityDetail";

const ActivityList = () => {
    return (

        <View style={styles.activitySection}>
            <View style={styles.textStyle}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#60969D', zIndex: 2 }}>{data[0].title}</Text>
                <View style={{ width: 125, height: 16, backgroundColor: 'white', borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </View>
            <FlatList
                horizontal={true}
                data={data[0].data}
                renderItem={({ item }) => <ActivityDetail data={item} />}
                keyExtractor={item => item.actname}
            />
        </View>

    );
};

export default ActivityList;

const styles = StyleSheet.create({
    activitySection: {
       marginLeft:20,
       marginBottom:55,
       marginTop:45,
        height:320
    },
    textStyle: {
        alignItems: 'center',
        marginBottom: 10,
        marginRight:20
    },
    imgArrange: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    activitImg: {
        width: 169,
        height: 188,
        borderRadius: 35,
        zIndex: 1,


    },
    textsection: {
        position: 'relative',
        zIndex: 2,
        top: -35,
        alignItems: 'flex-end',
        marginRight: 20,

    }


})

