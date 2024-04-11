import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Pressable, } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

const TrainTypeSet = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
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



    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                <Pressable
                    style={[styles.tab, selectedIndex === 0 && styles.selectedTab]}
                    onPress={() => handleTabPress(0)}
                >
                    <Text style={[styles.typefont, selectedIndex === 0 && styles.selectedtypefont]}>普通</Text>
                </Pressable>
                <Pressable
                    style={[styles.tab, selectedIndex === 1 && styles.selectedTab]}
                    onPress={() => handleTabPress(1)}
                >
                    <Text style={[styles.typefont, selectedIndex === 1 && styles.selectedtypefont]}>優待</Text>
                </Pressable>
                <Pressable
                    style={[styles.tab, selectedIndex === 2 && styles.selectedTab]}
                    onPress={() => handleTabPress(2)}
                >
                    <Text style={[styles.typefont, selectedIndex === 2 && styles.selectedtypefont]}>雙人</Text>
                </Pressable>
            </View>
            <SelectList
                setSelected={(num) => setNum(num)}
                data={data}
                save="value"
                placeholder="1"
                search={false}
                boxStyles={{ width: 140, backgroundColor: 'white', borderColor: "#60969D", borderWidth: 3, borderRadius: 15 }}
                dropdownStyles={{ width: 140, backgroundColor: 'white', borderColor: "#60969D", borderWidth: 3, borderRadius: 15 }}
                dropdownTextStyles={{ color: "#60969D" }}
            />
            <View style={styles.moneycontent}>

                {selectedIndex === 0 && <Text style={styles.moneyfont}>${num * 30}</Text>}
                {selectedIndex === 1 && <Text style={styles.moneyfont}>${num * 15}</Text>}
                {selectedIndex === 2 && <Text style={styles.moneyfont}>${num * 20}</Text>}
            </View>

        </View>
    );
}

export default TrainTypeSet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
        marginBottom: 35
    },
    tab: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        width: 82,
        height: 50,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderColor: 'blue',
        borderWidth: 3,
        borderColor: '#60969D',

    },
    typefont: {
        fontSize: 20,
        fontWeight: '600',
        color: '#B1D9DE'
    },
    selectedtypefont: {
        color: '#60969D'
    },
    moneycontent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },
    moneyfont:{
        fontSize:24,
        fontWeight:'bold',
        color:'white'
    }

});