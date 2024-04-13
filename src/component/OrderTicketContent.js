import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Text, Center, VStack, HStack } from "@gluestack-ui/themed";
import { StyleSheet } from "react-native";
import TicketTypeSet from './TicketTypeSet';
import TrainTypeSet from './TrainTypeSet';
import BuyButton from './BuyButton';
import Calendar from './Calendar';


export default function OrderTicketContent() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <Box style={styles.orderTrain}>
                    <Calendar bgc={"#60969D"}/>
                    <TrainTypeSet/>
                    <BuyButton bgc={"#60969D"}/>
                </Box>

            )
        } else {
            return (
                <Box style={styles.orderTicket} >
                    <Calendar bgc={"#913030"}/>
                    <TicketTypeSet/>
                    <BuyButton bgc={"#913030"}/>
                </Box>
            )
        }
    }

    return (
        <Box >

            <SegmentedControlTab
                values={["入園門票", "遊客列車"]}
                tabStyle={{
                    marginTop: 10,
                    opacity: 0.5,

                }}
                activeTabStyle={{
                    marginTop: 10,
                    opacity: 1
                }}

                firstTabStyle={{
                    backgroundColor: "#D56A6A",
                    borderColor: "#D56A6A",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomLeftRadius: 0,
                    marginLeft: 20
                }}
                lastTabStyle={{
                    backgroundColor: "#B1D9DE",
                    borderColor: "#B1D9DE",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 0,
                    marginRight: 20
                }}
                tabTextStyle={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 5,paddingRight:5, color: "white" }}
                tabsContainerStyle={{
                    width: 310,
                    height:60
                }}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <Center>
                <SegmentedContent />
            </Center>
        </Box>
    );
}

const styles = StyleSheet.create({

    orderTrain: {
        backgroundColor: '#B1D9DE',
        width: 350,
        height: 450,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        padding:35,
        // shadowOffset:{width:0,height:4},
        // shadowColor:'black',
        // shadowOpacity:0.4,
        // shadowRadius:4,
        // elevation:4
    },
    orderTicket: {
        backgroundColor: '#D56A6A',
        width: 350,
        height: 450,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        padding:35,
        // shadowOffset:{width:0,height:4},
        // shadowColor:'black',
        // shadowOpacity:0.4,
        // shadowRadius:4,
        // elevation:4
    }

})



