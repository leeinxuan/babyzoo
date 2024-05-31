import React from "react";
import { Text, FlatList, SectionList, StyleSheet, View, Image } from "react-native";
import { VStack, Center, Box } from "@gluestack-ui/themed";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import { useQueryClient } from "@tanstack/react-query";
import { useWeatherInfo, useUVrays } from "../tanstack-query";

const Weather = () => {
    const { colors } = useTheme();
    const queryClient = useQueryClient();
    queryClient.invalidateQueries(["weatherInfo"]);
    const weather = useWeatherInfo();
    queryClient.invalidateQueries(["UVrays"]);
    const uvrays = useUVrays();

    const setUvIndex = () => {
        let uvray = ""
        if (uvrays.data <= 2) {
            uvray = "低量級";
        } else if (uvrays.data >= 3 && uvrays.data <= 5) {
            uvray = "中量級";
        } else if (uvrays.data >= 6 && uvrays.data <= 7) {
            uvray = "高量級";
        } else if (uvrays.data >= 8 && uvrays.data <= 10) {
            uvray = "過量級";
        }
        else if (uvrays.data >= 11) {
            uvray = "危險級";
        }
        return uvray;
    };

    const uvrayIndex = uvrays.isSuccess ? setUvIndex() : "";
    return (
        <Center style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 30, marginBottom: 20 }}>
            <VStack style={{ alignItems: 'center' }}>
                <Box style={styles.serveicon}>
                    <MaterialCommunityIcons name="weather-partly-cloudy" color={colors.white} size={42} />
                </Box>
                {/* <Text style={{ fontSize: 16, fontWeight: 700, color: colors.deepblue }}>
                    溫度
                </Text> */}
                <View>
                    {weather.isSuccess && (
                        <Text style={{ fontSize: 16, fontWeight: 700, color: colors.red }}>
                            {weather.data.DailyLow}℃-{weather.data.DailyHigh}℃</Text>
                    )}
                </View>
            </VStack>
            <VStack style={{ alignItems: 'center' }}>
                <Box style={styles.serveicon}>
                    <MaterialCommunityIcons name="weather-pouring" color={colors.white} size={42} />
                </Box>
                {/* <Text style={{ fontSize: 16, fontWeight: 700, color: colors.deepblue }}>
                    降雨量
                </Text> */}
                <View>
                    {weather.isSuccess && (
                        <Text style={{ fontSize: 16, fontWeight: 700, color: colors.red }}>
                            {weather.data.Pop}%</Text>
                    )}
                </View>
            </VStack>
            <VStack style={{ alignItems: 'center' }}>
                <Box style={styles.serveicon}>
                    <MaterialCommunityIcons name="weather-sunny" color={colors.white} size={45} />
                </Box>
                {/* <Text style={{ fontSize: 16, fontWeight: 700, color: colors.deepblue }}>
                    紫外線
                </Text> */}
                <View>
                    {uvrays.isSuccess && (
                        <Text style={{ fontSize: 16, fontWeight: 700, color: colors.red }}>
                            {uvrayIndex}</Text>
                    )}
                </View>
            </VStack>

        </Center>
    );
};

const styles = StyleSheet.create({
    serveicon: {
        backgroundColor: '#D56A6A',
        width: 80,
        height: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6
    }
})

export default Weather;