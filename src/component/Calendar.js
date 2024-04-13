import React from 'react'
import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HStack, Text } from "@gluestack-ui/themed";

const Calendar = ({ bgc }) => {
    return (
        
        <HStack
            w={140}
            h={50}
            bg='white'
            borderRadius={15}
            borderWidth={3}
            borderColor={bgc}
            alignItems='center'
            pl={17}
            mb={35}
            
        >
            <MaterialCommunityIcons name="calendar-month-outline" color={bgc} size={25} />
            <Text
                fontSize={20}
                fontWeight='bold'
                color={bgc}
                ml={5}
            >日期</Text>
        </HStack>
    );
};

const styles = StyleSheet.create({

})

export default Calendar;