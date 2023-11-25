import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class ReceiptOrInvoice extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ flexDirection: 'row',}}>
                <View style={{ flexDirection: 'row', }}>
                    <Image style={styles.icon} source={require('../../assets/icon/fis.png')} />
                    <Text style={styles.placeholder}>Fiş veya fatura</Text>
                </View>
                <Image style={styles.icon} source={require('../../assets/icon/camera.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: '#13486b',
        flexDirection: 'row',
        elevation: 10,
        borderRadius: 30,
        borderTopWidth: 1,
        borderLeftWidth: 0.55,
        borderRightWidth: 0.55,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',     
        marginVertical:10,
    },
    icon: {
        marginHorizontal: 20,
    },
    placeholder: {
        letterSpacing: 3,
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'Inter-Regular',
    },
})