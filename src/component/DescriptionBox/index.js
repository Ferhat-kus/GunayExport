import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class index extends Component {
  render() {
    return (
        <View style={styles.container}>
          <LinearGradient
            style={styles.backgroundcolor}
            colors={['#033d63', '#105380', '#0f5380']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <TextInput
              {...this.props}
              placeholderTextColor="#6d899b"
              style={styles.input}
              multiline={true}
            />
            <Image
              source={require('../../assets/DescriptionBox/icon.png')}
              style={styles.icon}
            />
          </LinearGradient>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundcolor: {
    elevation: 10,
    borderTopWidth: 1,
    borderLeftWidth: 0.55,
    borderRightWidth: 0.55,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  input: {
    letterSpacing: 2,
    fontSize: 18,
    color: '#FFF',
    textAlignVertical: 'top',
    height: 160, 
  },
  icon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    tintColor: '#FFF',
    width: 25,
    height: 25,
  },
});
