import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-timepicker';

const MyDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [dateTime, setDateTime] = useState('');

  const handleDatePickerChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimePickerChange = (newHour, newMinute) => {
    const updatedTime = new Date(selectedDate);
    updatedTime.setHours(newHour);
    updatedTime.setMinutes(newMinute);
    setSelectedTime(updatedTime);

    const formattedDateTime = updatedTime.toLocaleString();
    setDateTime(formattedDateTime);
  };

  return (
    <View>
      <DatePicker
        date={selectedDate}
        mode="date"
        placeholder="Select Date"
        format="YYYY-MM-DD"
        minDate={new Date(2023, 0, 1)}
        maxDate={new Date(2024, 11, 31)}
        onDateChange={handleDatePickerChange}
      />

      <TimePicker
        hour={selectedTime.getHours()}
        minute={selectedTime.getMinutes()}
        placeholder="Select Time"
        mode="time"
        format="HH:mm"
        onTimeChange={handleTimePickerChange}
      />

      <Text>{dateTime}</Text>
    </View>
  );
};

export default MyDateTimePicker;
