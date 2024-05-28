import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Platform } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useTheme } from '@react-navigation/native';
import BuyButton from './BuyButton';

const TrainTypeSet = () => {
    const type = "遊客列車";
    const { colors } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState("普通");
    const [num, setNum] = useState("1");

    const handleTabPress = (index) => {
        setSelectedIndex(index);
    };


    const data = [
        { key: '1', value: '1' },
        { key: '2', value: '2' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: '5', value: '5' },
        { key: '6', value: '6' },
        { key: '7', value: '7' },
        { key: '8', value: '8' },
        { key: '9', value: '9' },
        { key: '10', value: '10' },
    ]

    const calculateTotal = () => {
        let price = 0;
        if (selectedIndex === "普通") {
            price = 100;
        } else if (selectedIndex === "優待") {
            price = 50;
        } else if (selectedIndex === "雙人") {
            price = 70;
        }
        return num * price;
    };

    const total = calculateTotal();



    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <Pressable
                    style={[styles.tab, selectedIndex === "普通" && styles.selectedTab]}
                    onPress={() => handleTabPress("普通")}
                >
                    <Text style={[styles.typefont, selectedIndex === "普通" && styles.selectedtypefont]}>普通</Text>
                </Pressable>
                <Pressable
                    style={[styles.tab, selectedIndex === "優待" && styles.selectedTab]}
                    onPress={() => handleTabPress("優待")}
                >
                    <Text style={[styles.typefont, selectedIndex === "優待" && styles.selectedtypefont]}>優待</Text>
                </Pressable>
                <Pressable
                    style={[styles.tab, selectedIndex === "雙人" && styles.selectedTab]}
                    onPress={() => handleTabPress("雙人")}
                >
                    <Text style={[styles.typefont, selectedIndex === "雙人" && styles.selectedtypefont]}>雙人</Text>
                </Pressable>
            </View>
            <SelectList
                setSelected={(num) => setNum(num)}
                data={data}
                save="value"
                placeholder="1"
                inputStyles={{ color: colors.deepblue, }}
                search={false}
                boxStyles={{ width: 140, backgroundColor: colors.white, borderColor: colors.deepblue, borderWidth: 3, borderRadius: 15, }}
                dropdownStyles={{ width: 140, backgroundColor: colors.white, borderColor: colors.deepblue, borderWidth: 3, borderRadius: 15,zIndex:999 }}
                dropdownTextStyles={{ color: colors.deepblue, }}
                
            />
            <View style={styles.moneycontent}>
                <Text style={styles.moneyfont}>${total}</Text>
            </View>
            <View style={styles.button}>
                <BuyButton style={styles.button} bgc={colors.deepblue} type={type} num={num} tickettype={selectedIndex} total={total} />
            </View>
        </View>
    );
}

export default TrainTypeSet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
        marginBottom: 35
    },
    tab: {
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        alignItems: 'center',
        width: 82,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                justifyContent: 'center',

            },
            android: {

            },
        }),
    },
    selectedTab: {
        borderColor: 'blue',
        borderWidth: 3,
        borderColor: '#60969D',

    },
    typefont: {
        fontSize: 20,
        fontWeight: '600',
        color: '#B1D9DE',
        ...Platform.select({
            ios: {
                justifyContent: 'center',

            },
            android: {
                marginTop: 8,
            },
        }),
    },
    selectedtypefont: {
        color: '#60969D',
        ...Platform.select({
            ios: {

            },
            android: {
                marginTop: 5,
            },
        }),
    },
    moneycontent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        position: 'absolute',
        top: 135

    },
    moneyfont: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    button:{
        position: 'absolute',
        top: 230,
        zIndex:1
      }
});