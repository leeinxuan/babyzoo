import React from 'react';
import { useState, } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, StyleSheet, Text, Pressable, Modal } from 'react-native';
import { HStack } from '@gluestack-ui/themed';



const AnimalInfoScreen = () => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState('');

  return (
    <View>
      <Pressable

        onPress={() => setOpenCalendar(!openCalendar)}
      >
        <Text>open</Text>
      </Pressable>
      <Modal
        animationType="none"
        transparent={true}
        visible={openCalendar}

        onRequestClose={() => {
          setOpenCalendar(false);
        }}
      >
        <View >
          <Calendar
            style={styles.calendar}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e'
            }}
            onDayPress={day => {
              setDate(day.dateString);
            }}
            markedDates={{
              [date]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
            }}
          />
          <HStack bgColor='white' w='80%'>
          <Pressable
            onPress={() => setOpenCalendar(!openCalendar)}
          >
            <Text>close</Text>
          </Pressable><Pressable
            onPress={() => setOpenCalendar(!openCalendar)}
          >
            <Text>確定
            </Text>
          </Pressable>
          </HStack>
        </View>

      </Modal>
    </View>
  );
}

export default AnimalInfoScreen;

const styles = StyleSheet.create({
  calendar: {
    width: '80%', // 设置日历的宽度为容器宽度的 80%
    aspectRatio: 1, // 设置日历的宽高比为 1:1，保持等比例缩放
  },
});

