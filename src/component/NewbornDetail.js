import React from "react";
import { Platform, Text, Image, StyleSheet, View, Pressable } from "react-native";
import { VStack, HStack } from "@gluestack-ui/themed";
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const NewbornDetail = ({ data }) => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (

        <View style={{
            flexDirection: 'row',
            backgroundColor: colorMode == "light" ? colors.white : colors.darkbgc,
            marginRight: 25,
            width: 315,
            height: 186,
            padding: 24,
            borderWidth: colorMode == "light" ? null : 1,
            borderColor: colorMode == "light" ? null : colors.white,
            borderRadius: 20,
            shadowOffset: { width: 0, height: 4 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4
        }}>
            <VStack mr={8} pl={5} mt={4}>
                <Text
                    style={{ fontSize: 24, fontWeight: '600', color: '#60969D', marginBottom: -5 }}>
                    {data.babyname}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#B1D9DE', marginVertical: 9 }}>
                    {data.type}
                </Text>
                <HStack>
                    <View style={styles.hastag}>
                        <Text style={{
                            fontSize: 12, fontWeight: '600', color: 'white',
                            ...Platform.select({
                                android: {
                                    paddingBottom: 3,
                                },
                            }),
                        }}>
                            {data.hastag1}
                        </Text>
                    </View>
                    <View style={styles.hastag}>
                        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white' }}>
                            {data.hastag2}
                        </Text>
                    </View>
                </HStack>
                <Pressable
                    // onPress={() => navigation.navigate('Detail', book)}
                    style={styles.more}
                >
                    <Text style={{ fontSize: 12, color: 'white', fontWeight: '600' }}>
                        更多
                    </Text>
                </Pressable>
            </VStack>
            <Image
                style={styles.imageStyle}
                source={{ uri: data.image }}

            />
        </View>



    );
};

const styles = StyleSheet.create({
    newbornContent: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginRight: 25,
        width: 315,
        height: 186,
        padding: 24,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4

    },
    imageStyle: {
        width: 140,
        height: 140,
        borderRadius: 100,

    },
    hastag: {
        backgroundColor: '#B1D9DE',
        width: 51,
        height: 22,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
        marginRight: 6,



    },
    more: {
        alignItems: 'center',
        backgroundColor: '#E59B9B',
        borderRadius: 6,
        ...Platform.select({
            ios: {
                width: 55,
                height: 25,
                paddingTop: 5,

            },
            android: {
                width: 51,
                height: 22,
                paddingTop: 1,
            },
        }),

    }
});

export default NewbornDetail;