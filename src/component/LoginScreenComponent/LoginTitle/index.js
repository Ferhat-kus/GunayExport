import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Title}>GÖREV TAKİP</Text>
        <Text style={styles.subtitle}>UYGULAMASI</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    Title:{
        color:'#FFFFFF',
        fontSize:40,
        fontFamily:'Inter-ExtraBold',
        letterSpacing:10,
    },
    subtitle:{
        color:'#FFFFFF',
        fontSize:30,
        fontFamily:'Inter-ExtraBold',
        letterSpacing:5,
    },
})