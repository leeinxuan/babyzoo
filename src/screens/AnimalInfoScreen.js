import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
    

const AnimalInfoScreen = () => {
    const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'1'},
      {key:'2', value:'2'},
      {key:'3', value:'3'},
      {key:'4', value:'4'},
      {key:'5', value:'5'},
      {key:'6', value:'6'},
      {key:'7', value:'7'},
      {key:'8', value:'8'},
      {key:'9', value:'9'},
      {key:'10', value:'10'},
  ]
    return (
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder="數量"
        search={false}
        boxStyles={{width:140}}
        dropdownStyles={{width:140}}
        
    />
    );
}

export default AnimalInfoScreen;

const styles = StyleSheet.create({
    
  });
  
