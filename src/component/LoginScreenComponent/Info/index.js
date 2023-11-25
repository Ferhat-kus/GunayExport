import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Info}>Bu uygulamanın tüm hakları saklıdır corpright</Text>
        <Text style={styles.Info}>guneyeksport.com</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom:'2%',
    },
    Info: {
        fontSize: 12,
        color: 'white',
        fontFamily:'Inter-Light',
    },
})
