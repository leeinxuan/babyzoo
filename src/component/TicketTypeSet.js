import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Pressable,Platform } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import { useTheme } from '@react-navigation/native';


const TicketTypeSet = () => {
  const { colors } = useTheme();
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
          <Text style={[styles.typefont, selectedIndex === 2 && styles.selectedtypefont]}>團體</Text>
        </Pressable>
      </View>
      <SelectList
        
        setSelected={(num) => setNum(num)}
        data={data}
        save="value"
        placeholder="1"
        search={false}
        boxStyles={{ width: 140, backgroundColor: colors.white, borderColor: colors.deepred, borderWidth: 3, borderRadius: 15 }}
        dropdownStyles={{ width: 140, backgroundColor: colors.white, borderColor: colors.deepred, borderWidth: 3, borderRadius: 15 }}
        dropdownTextStyles={{ color: colors.deepred }}
      />
      <View style={styles.moneycontent}>

        {selectedIndex === 0 && <Text style={styles.moneyfont}>${num * 100}</Text>}
        {selectedIndex === 1 && <Text style={styles.moneyfont}>${num * 50}</Text>}
        {selectedIndex === 2 && <Text style={styles.moneyfont}>${num * 70}</Text>}
      </View>
    </View>
  );
}

export default TicketTypeSet;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    zIndex:999
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
        justifyContent:'center',
        
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
        justifyContent:'center',
        
      },
      android: {
          marginTop:8,
      },
  }),
  },
  selectedtypefont: {
    ...Platform.select({
      ios: {
        
      },
      android: {
          marginTop:5,
      },
  }),
    color: '#913030'
  },
  moneycontent: {
    marginTop: 35,
    marginBottom: 35,
    position:'absolute',
    top:135
  },
  moneyfont: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

});