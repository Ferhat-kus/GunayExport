import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, TextInput,} from 'react-native';

export default class Index extends Component {
  

  render() {
    return (
      <View style={styles.Container}>
        <Image style={styles.icon} source={require('../../assets/icon/tutar.png')} />
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'left',}}>
            <TextInput
              style={styles.amount}
              placeholderTextColor='white'
              placeholder='0,00 tl'
              keyboardType="numeric"
            />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
  Container: {
    marginVertical:10,
    elevation: 10,
    backgroundColor: '#13486b',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderLeftWidth: 0.55,
    borderRightWidth: 0.55,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    width: '90%',
    height: 50,
    paddingLeft: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  amount: {
    width: '85%',
    letterSpacing: 2,
    fontFamily: 'Inter-Regular',
    color: 'white',
    fontSize: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
});
