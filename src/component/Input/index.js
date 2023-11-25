import React, { Component } from 'react';
import { StyleSheet, View, TextInput, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.background}
          colors={['#033d63', '#105380', '#0f5380']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <TextInput
            {...this.props}
            placeholderTextColor="#FFF"
            style={styles.Input}
          />
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  background: {
    elevation: 10,
    borderTopWidth: 1,
    borderLeftWidth: 0.55,
    borderRightWidth: 0.55,
    borderTopColor: 'white',
    borderLeftColor: "white",
    borderRightColor: 'white',
    borderRadius: 20,
    paddingHorizontal: '4%',
    width: '75%',
    height: 65,
  },
  Input: {
    letterSpacing: 2,
    fontSize: 18,
    height: 65,
    color: '#FFF',
    textAlignVertical: 'center',
  },
});
