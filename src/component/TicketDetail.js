import React from 'react';
import { View, Button } from "react-native";
import { Box, Text, HStack, Center } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/cartSlice";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';


export default function TicketDetail({item}) {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    const dispatch = useDispatch();
    

    const handleRemove = (cartItems) => {
        dispatch(removeCartItem(cartItems));
    };

    return (

        <Box borderColor={item.type == "入園門票" ? colors.red : colors.deepblue}
            borderWidth={3} width={340} height={210} borderRadius={20} mb={30} pt={20}>
            <Center>
                <Text color={item.type == "入園門票" ? colors.red : colors.deepblue} fontSize={24} fontWeight='bold' zIndex={2}>
                    {item.type}
                </Text>
                <View style={{ width: 125, height: 16, backgroundColor: colorMode == "light" ? colors.white : colors.deepblue, borderRadius: 10, zIndex: 1, top: -12 }}></View>
            </Center>
            <Box pl={60} >
                <Text fontSize={18} fontWeight='bold' mb={15} color={item.type == "入園門票" ? "#B26A5C" : "#90B2A9"}>
                    日期:2024/04/09
                </Text>
                <HStack mb={15}>
                    <Text fontSize={18} fontWeight='bold'mr={70} color={item.type == "入園門票" ? "#B26A5C" : "#90B2A9"}>
                        票種: {item.tickettype}
                    </Text>
                    <Text fontSize={18} fontWeight='bold' color={item.type == "入園門票" ? "#B26A5C" : "#90B2A9"}>
                        數量: {item.quantity}
                    </Text>
                </HStack>
                <Text fontSize={18} fontWeight='bold' color={item.type == "入園門票" ? "#B26A5C" : "#90B2A9"}>
                    金額: {item.total}
                </Text>
            </Box>
            {/* <Button title="移除" onPress={() => handleRemove(item)} /> */}
        </Box>




    );
}
