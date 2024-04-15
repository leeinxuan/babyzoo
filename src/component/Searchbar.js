import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import { useTheme } from '@react-navigation/native';
import { Input, InputField, InputIcon, InputSlot, SearchIcon, Center } from '@gluestack-ui/themed';
import { useSelector } from "react-redux";
import { selectColorMode } from "../redux/counterSlice";

const Searchbar = () => {
    const { colors } = useTheme();
    const colorMode = useSelector(selectColorMode);
    return (
        <Center  mt={10}>
            <Input  bgColor={colorMode == "light"?colors.blue:colors.darkbgc} height={45} width={335} borderRadius={16} pr={15} pl={8}>
                <InputField placeholder="Search..." placeholderTextColor={colors.white}/>
                <InputSlot pl="$3" >
                    <InputIcon as={SearchIcon} color={colors.white}/>
                </InputSlot>
            </Input>
        </Center>
    );
};

const styles = StyleSheet.create({
    section: {
        marginLeft: 20,
    }
})

export default Searchbar;