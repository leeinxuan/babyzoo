import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Box, Text, Center } from "@gluestack-ui/themed";
import OrderTicketContent from '../component/OrderTicketContent';
import MyTicket from '../component/MyTicket';
import SegmentedControlTab from "react-native-segmented-control-tab";
import Attention from '../component/Attention';
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";
import { useTheme } from '@react-navigation/native';

const TicketScreen = () => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <Box pt={10}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <Box flex={1} mt={25} >
                            <OrderTicketContent />
                            <Attention />
                        </Box>
                    </ScrollView>
                </Box>
            )
        } else {
            return (
                <Center flex={1} mt={40}>
                    <MyTicket/>
                </Center>
            )
        }
    }

    return (
        <View
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: colorMode == "light" ? colors.yellow : colors.darkbgc }} >
            <SegmentedControlTab
                values={["我的門票", "我要買票"]}
                tabStyle={{
                    backgroundColor: colorMode == "light" ? colors.yellow : colors.darkbgc,
                    marginTop: 10,
                    borderColor: "white",
                    borderWidth: 3,
                }}
                activeTabStyle={{
                    backgroundColor: "#B1D9DE",
                    marginTop: 10,
                    borderColor: "white",
                }}
                firstTabStyle={{ marginLeft: 20 }}
                lastTabStyle={{ marginRight: 20 }}
                tabTextStyle={{ fontSize: 24, color: "#B1D9DE", fontWeight: 'bold' }}
                activeTabTextStyle={{ color: "white" }}
                tabsContainerStyle={{
                    height: 70,

                }}
                borderRadius={25}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
        </View>
    );
}

export default TicketScreen;