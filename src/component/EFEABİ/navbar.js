import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class Navbar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/navlogo/logo.png')} />
                <View style={styles.buttons}>
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Image source={require('../../assets/navlogo/notification.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.btn}>
                            <Image source={require('../../assets/navlogo/people.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-around',
    },
    buttons: {

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn: {
        marginHorizontal: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        elevation: 10,
        borderTopWidth: 1,
        borderLeftWidth: 0.55,
        borderRightWidth: 0.55,
        borderTopColor: 'white',
        borderLeftColor: "white",
        borderRightColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0e68a3',
    },
});
