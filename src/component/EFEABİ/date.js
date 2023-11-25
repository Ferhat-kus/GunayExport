import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

class index extends Component {
  state = {
    isDatePickerVisible: false,
    selectedDate: '',
  };

  showDatePicker = () => {
    this.setState({ isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({ isDatePickerVisible: false });
  };

  handleConfirm = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    this.setState({
      selectedDate: `${day}/${month}/${year}`,
    });

    this.hideDatePicker();
  };

  render() {
    const { isDatePickerVisible, selectedDate } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flexDirection:'row',}} onPress={this.showDatePicker}>
          <Image style={{ marginRight: 20, }} source={require('../../assets/icon/date.png')} />
          <Text style={styles.buttonText}>
            {selectedDate || 'gg / aa / yyyy'}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#13486b',
    flexDirection: 'row',
    elevation: 10,
    borderTopWidth: 1,
    borderLeftWidth: 0.55,
    borderRightWidth: 0.55,
    borderTopColor: 'white',
    borderLeftColor: "white",
    borderRightColor: 'white',
    width: '90%',
    height: 50,
    paddingLeft: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'left',
  },

  buttonText: {
    width: '90%',
    letterSpacing: 2,
    fontFamily: 'Inter-Regular',
    color: 'white',
    fontSize: 20,
  },
});

export default index;
