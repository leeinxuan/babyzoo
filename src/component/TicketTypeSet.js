import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Platform } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useTheme } from '@react-navigation/native';
import BuyButton from './BuyButton';


const TicketTypeSet = () => {
  const type = "入園門票";
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
    } else if (selectedIndex === "團體") {
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
          style={[styles.tab, selectedIndex === "團體" && styles.selectedTab]}
          onPress={() => handleTabPress("團體")}
        >
          <Text style={[styles.typefont, selectedIndex === "團體" && styles.selectedtypefont]}>團體</Text>
        </Pressable>
      </View>
      <SelectList

        setSelected={(num) => setNum(num)}
        data={data}
        save="value"
        placeholder="1"
        inputStyles={{ color: colors.deepred }}
        search={false}
        boxStyles={{ width: 140, backgroundColor: colors.white, borderColor: colors.deepred, borderWidth: 3, borderRadius: 15 }}
        dropdownStyles={{ width: 140, backgroundColor: colors.white, borderColor: colors.deepred, borderWidth: 3, borderRadius: 15,zIndex:999 }}
        dropdownTextStyles={{ color: colors.deepred }}
      />
      <View style={styles.moneycontent}>
        <Text style={styles.moneyfont}>${total}</Text>
      </View>
      <View style={styles.button}>
        <BuyButton bgc={colors.deepred} type={type} num={num} tickettype={selectedIndex} total={total} />
      </View>
    </View>
  );
}

export default TicketTypeSet;

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
    borderWidth: 3,
    borderColor: '#913030',

  },
  typefont: {
    fontSize: 20,
    fontWeight: '600',
    color: '#D56A6A',
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
    ...Platform.select({
      ios: {

      },
      android: {
        marginTop: 5,
      },
    }),
    color: '#913030'
  },
  moneycontent: {
    marginTop: 35,
    marginBottom: 35,
    position: 'absolute',
    top: 135
  },
  moneyfont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button:{
    position: 'absolute',
    top: 230,
    zIndex:1
  }

});