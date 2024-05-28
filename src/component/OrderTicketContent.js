import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Center} from "@gluestack-ui/themed";
import { Platform, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';
import TicketTypeSet from './TicketTypeSet';
import TrainTypeSet from './TrainTypeSet';
import Calendar from './Calendar';



export default function OrderTicketContent() {
    const { colors } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const SegmentedContent = () => {
        if (selectedIndex == 1) {
            return (
                <Box style={styles.orderTrain}>
                    <Calendar bgc={colors.deepblue} />
                    <TrainTypeSet />
                </Box>

            )
        } else {
            return (
                <Box style={styles.orderTicket} >
                    <Calendar bgc={colors.deepred} />
                    <TicketTypeSet />
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
                    backgroundColor: colors.red,
                    borderColor: colors.red,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomLeftRadius: 0,
                    marginLeft: 20
                }}
                lastTabStyle={{
                    backgroundColor: colors.blue,
                    borderColor: colors.blue,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 0,
                    marginRight: 20
                }}
                tabTextStyle={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 5, paddingRight: 5, color: "white" }}
                tabsContainerStyle={{
                    width: 310,
                    height: 60
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
        ...Platform.select({
            ios: {
                width: 350,
                height: 450,
            },
            android: {
                width: 352,
                height: 450,
            },
        }),

        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        padding: 35,
        // shadowOffset:{width:0,height:4},
        // shadowColor:'black',
        // shadowOpacity:0.4,
        // shadowRadius:4,
        // elevation:4
    },
    orderTicket: {
        backgroundColor: '#D56A6A',
        ...Platform.select({
            ios: {
                width: 350,
                height: 450,
            },
            android: {
                width: 352,
                height: 450,
            },
        }),
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        padding: 35,
        // shadowOffset:{width:0,height:4},
        // shadowColor:'black',
        // shadowOpacity:0.4,
        // shadowRadius:4,
        // elevation:4
    }

})



