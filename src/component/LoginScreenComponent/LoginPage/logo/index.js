import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const paddingTopValue = height * 0.10; // Yüksekliğin yüzde 15'i

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPortrait: height > width,
    };

    Dimensions.addEventListener('change', this.handleOrientationChange);
  }
  handleOrientationChange = ({ window: { height: newHeight, width: newWidth } }) => {
    this.setState({ isPortrait: newHeight > newWidth });
  };

  render() {
    const { isPortrait } = this.state;

    return (
      <View style={{ paddingTop: isPortrait ? paddingTopValue : 0, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../../../../assets/LoginScreenAssets/LoginPage/logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
