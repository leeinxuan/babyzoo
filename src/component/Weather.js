import React from "react";
import { Text, FlatList, SectionList, StyleSheet, View, Image } from "react-native";
import { VStack, Center, Box } from "@gluestack-ui/themed";

const Weather = () => {

    return (
        <Center style={{flexDirection:'row',justifyContent:'space-between',margin:30,marginBottom:20}}>
            <VStack style={{alignItems:'center'}}>
                <Box style={styles.serveicon}>
                    <Image
                        source={require('../img/partly_cloudy_day.png')}

                    />
                </Box>
                <Text style={{fontSize:16,fontWeight:700,color:'#D56A6A'}}>20-25℃</Text>
            </VStack>
            <VStack style={{alignItems:'center'}}>
                <Box style={styles.serveicon}>
                    <Image
                        source={require('../img/humidity_high.png')}
                    />
                </Box>
                <Text style={{fontSize:16,fontWeight:700,color:'#D56A6A'}}>0%</Text>
            </VStack>
            <VStack style={{alignItems:'center'}}>
                <Box style={styles.serveicon}>
                    <Image
                        source={require('../img/clear_day.png')}
                    />
                </Box>
                <Text style={{fontSize:16,fontWeight:700,color:'#D56A6A'}}>中量級</Text>
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
        marginBottom:6
    }
})

export default Weather;