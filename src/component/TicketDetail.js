import React from 'react';
import { View, Button } from "react-native";
import { Box, Text, HStack, Center } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/cartSlice";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';
import TicketActionSheet from './TicketActionSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function TicketDetail({ item }) {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    const dispatch = useDispatch();


    const handleRemove = (cartItems) => {
        dispatch(removeCartItem(cartItems));
    };

    return (

        <Box borderColor={item.type == "入園門票" ? colors.red : colors.deepblue}
            borderWidth={3} width={340} height={210} borderRadius={20} mb={30} pt={20}>
            <Box ml={105}>
                <HStack>
                    <Center mr={40}>
                        <Text color={item.type == "入園門票" ? colors.red : colors.deepblue} fontSize={24} fontWeight='bold' zIndex={2}>
                            {item.type}
                        </Text>
                        <View style={{ width: 125, height: 16, backgroundColor: colorMode == "light" ? colors.white : colors.deepblue, borderRadius: 10, zIndex: 1, top: -12 }}></View>
                    </Center>
                    <TicketActionSheet item={item} />
                </HStack>
            </Box>
            <Box pl={50} >
                <HStack >
                    <Box mt={4} mr={2}>
                        <MaterialCommunityIcons name="calendar-month" size={20} color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"} />
                    </Box>
                    <Text fontSize={18} fontWeight='bold' mb={15} color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"}>
                        日期:2024/04/09
                    </Text>
                </HStack>
                <HStack mb={15}>
                    <HStack mr={50}>
                        <Box mt={4} mr={2}>
                            <MaterialCommunityIcons name="ticket-confirmation" size={20} color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"} />
                        </Box>
                        <Text fontSize={18} fontWeight='bold' color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"}>
                            票種: {item.tickettype}
                        </Text>
                    </HStack>
                    <HStack>
                        <Box mt={4} mr={2}>
                            <MaterialCommunityIcons name="shopping" size={20} color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"} />
                        </Box>
                        <Text fontSize={18} fontWeight='bold' color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"}>
                            數量: {item.quantity}
                        </Text>
                    </HStack>
                </HStack>
                <HStack>
                    <Box mt={4} mr={2}>
                        <MaterialCommunityIcons name="currency-usd" size={20} color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"} />
                    </Box>
                    <Text fontSize={18} fontWeight='bold' color={item.type == "入園門票" ? "#B26A5C" : "#7BA5A3"}>
                        金額: {item.total}
                    </Text>
                </HStack>
            </Box>
            {/* <Button title="移除" onPress={() => handleRemove(item)} /> */}
        </Box>




    );
}
