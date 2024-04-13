import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Box, Text, Center } from "@gluestack-ui/themed";
import OrderTicketContent from '../component/OrderTicketContent';
import MyTicket from '../component/MyTicket';
import SegmentedControlTab from "react-native-segmented-control-tab";
import Attention from '../component/Attention';

const TicketScreen = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <Box flex={1} mt={35} >
                    <OrderTicketContent />
                    <Attention />
                </Box>
            )
        } else {
            return (
                <Center flex={1} >
                    <MyTicket />
                </Center>
            )
        }
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#FFF2C5' }} >
            <SegmentedControlTab
                values={["我的門票", "我要買票"]}
                tabStyle={{
                    backgroundColor: "#FFF2C5",
                    marginTop: 10,
                    borderColor: "white",
                    borderWidth:3,
                    
                }}
                activeTabStyle={{
                    backgroundColor: "#B1D9DE",
                    marginTop: 10,
                    borderColor: "white",
                }}
                firstTabStyle={{ marginLeft: 20 }}
                lastTabStyle={{ marginRight: 20 }}
                tabTextStyle={{ fontSize: 24,  color: "#B1D9DE",fontWeight:'bold' }}
                activeTabTextStyle={{ color: "white" }}
                tabsContainerStyle={{
                    height:70,
                    
                }}
                borderRadius={25}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
        </ScrollView>
    );
}

export default TicketScreen;