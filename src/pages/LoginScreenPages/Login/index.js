import React, { Component } from 'react';
import {View, ImageBackground, StyleSheet ,Image,Button} from 'react-native';

//Component bileşenlerim
import Title from '../../../component/LoginScreenComponent/LoginTitle/index'
import Nextbutton from '../../../component/LoginScreenComponent/Nextbutton/index'
import Info from '../../../component/LoginScreenComponent/Info/index'

export default class Index extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage}source={require('../../../assets/LoginScreenAssets/Login/backgroun.png')}>
          <View style={{flex:1,paddingTop:30,}}><Title/></View>
          <View style={{flex:1,justifyContent:'flex-end',paddingBottom:20,}}>
          <Nextbutton onPress={()=> navigation.navigate('LoginPage')}/>
          </View>
          <View style={{alignItems:'center',}}>
            <Image source={require('../../../assets/LoginScreenAssets/Login/logo.png')}/>
            </View>
            <Info/>
            </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
