import React from "react";
import { Text, Image, StyleSheet, View, Pressable } from "react-native";
import { VStack, HStack } from "@gluestack-ui/themed";

const NewbornDetail = ({ data }) => {

    return (

        <View style={styles.newbornContent}>
            <VStack mr={14} pl={5} >
                <Text
                    style={{ fontSize: 24, fontWeight: '600', color: '#60969D', marginTop: 10 }}>
                    {data.babyname}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#B1D9DE', marginTop: 2 }}>
                    {data.type}
                </Text>
                <HStack>
                    <View style={styles.hastag}>
                        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', marginTop: 2 }}>
                            {data.hastag1}
                        </Text>
                    </View>
                    <View style={styles.hastag}>
                        <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', marginTop: 2 }}>
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
        justifyContent:'space-between',
        backgroundColor: 'white',
        marginRight: 16,
        width: 315,
        height: 186,
        padding: 24,
        borderRadius: 20,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 4

    },
    imageStyle: {
        width: 140,
        height: 140,
        borderRadius: 100,
        marginTop: 2
    },
    hastag: {
        backgroundColor: '#B1D9DE',
        width: 51,
        height: 22,
        borderRadius:6,
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    more: {
        alignItems: 'center',
        width: 51,
        height: 22,
        backgroundColor: '#E59B9B',
        borderRadius: 6,
        marginTop: 4,
        paddingTop: 1

    }
});

export default NewbornDetail;