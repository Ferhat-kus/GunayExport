import { Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropTaypes from 'prop-types';
export default class index extends Component {
  render() {
    const {Title} = this.props;
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{Title}</Text>
        </TouchableOpacity>
    )
  }
}
index.PropTaypes = {
  Title: PropTaypes.string.isRequired,
};
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#FFF',
        marginBottom:12,
        width:'90%',
        height:60,
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        letterSpacing:2,
        fontFamily:'Inter-Bold',
        color:'#104C74',
        fontSize:20,
        textAlign:'center',
    },
})