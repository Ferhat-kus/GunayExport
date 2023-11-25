import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Fillingdocuments extends Component {
  render() {
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Kantar fişi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Dolum israliyesi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Sevk israliyesi</Text>
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
        width: '28%',
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#13486b',
        elevation: 10,
      },
      text: {
        letterSpacing: 2,
        fontSize: 18,
        color: '#FFF',
        paddingHorizontal:10,
        textAlign:'center',
      },
})