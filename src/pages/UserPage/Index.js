import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import MenuItem from './component/menuItem/Index'

export default class Index extends Component {
    render() {
        return (
            <ImageBackground style={styles.Container} source={require('../../assets/UserPage/map.png')}>
                <View style={styles.User}>
                    <View style={styles.UserBackgroundEffect} />
                    <TouchableOpacity>
                        <View style={styles.Back}>
                            <Image style={styles.Backpng} source={require('../../assets/UserPage/back.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.Avatar}>
                        <Image style={styles.Avatarpng} source={require('../../assets/UserPage/avatar.png')} />
                    </View>
                    <View style={styles.UserName}>
                        <Text style={styles.Name}>Ferhat </Text>
                        <Text style={styles.Surname}>Kuş</Text>
                    </View>
                </View>
                <View style={styles.Pages}>
                    <View style={styles.BackgroundEffect} />
                    <View style={styles.menucontainer}>
                        <MenuItem MenuTitle="Ana Sayfa" MenuIcon={require('../../assets/UserPage/menuicon/home.png')} />
                        <MenuItem MenuTitle="İşlem Geçmişi" MenuIcon={require('../../assets/UserPage/menuicon/pasttense.png')} />
                        <MenuItem MenuTitle="Bildirimler" MenuIcon={require('../../assets/UserPage/menuicon/notification.png')} />
                        <MenuItem MenuTitle="Harita" MenuIcon={require('../../assets/UserPage/menuicon/map.png')} />
                        <MenuItem MenuTitle="Ayarlar" MenuIcon={require('../../assets/UserPage/menuicon/settings.png')} />
                        <MenuItem MenuTitle="Çıkış yap" MenuIcon={require('../../assets/UserPage/menuicon/logout.png')} />
                    </View>

                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    User: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    Back: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Avatar: {
        borderRadius: 50,
        elevation: 10,
        borderTopWidth: 1,
        borderLeftWidth: 0.55,
        borderRightWidth: 0.55,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Avatarpng: {
        width: 90,
        height: 90,
    },
    Name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    Surname: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    },
    Pages: {
        flex: 2,
        width: '100%',
        height: '100%',
    },
    menucontainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    },
    UserBackgroundEffect: {
        opacity: 0.3,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#105380',
    },
    BackgroundEffect: {
        opacity: 0.7,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#16364a',
    },

})