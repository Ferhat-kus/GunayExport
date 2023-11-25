import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Hayır, değilim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Evet, eminim</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingVertical:10,
  },
  button: {
    borderTopWidth: 1,
    borderLeftWidth: 0.55,
    borderRightWidth: 0.55,
    borderTopColor: 'white',
    borderLeftColor: "white",
    borderRightColor: 'white',
    borderRadius: 20,
    width: '42%',
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#13486b',
    elevation: 10,
  },
  text: {
    letterSpacing: 2,
    fontSize: 18,
    color: '#FFF',

  },
})