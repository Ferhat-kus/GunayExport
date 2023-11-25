import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Text, ScrollView } from 'react-native';
//component'lar
import Logo from '../../../component/LoginScreenComponent/LoginPage/logo/index';
import Title from '../../../component/LoginScreenComponent/LoginTitle/index';
import Input from '../../../component/Input/index';
import Password from '../../../component/PasswordInput/index';
import Nextbutton from '../../../component/LoginScreenComponent/Nextbutton/index';
import Info from '../../../component/LoginScreenComponent/Info/index';

export default class Index extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require("../../../assets/LoginScreenAssets/LoginPage/background.png")}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.contentContainer}>
                            <Logo />
                            <View style={{width: '100%'}}>
                                <Title />
                                <Text style={styles.description}>Lütfen tüm alanları eksiksiz olarak</Text>
                                <Text style={styles.description}>doldurunuz</Text>
                            </View>
                            <View style={{ width: '100%' }}>
                                <Input placeholder='Kullanıcı Adı' />
                                <Password />
                            </View>
                            <Nextbutton  onPress={()=> navigation.navigate('UserPage')}/>
                            <Info />
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    description: {
        color: '#6C9AB8',
        fontSize: 18,
        fontFamily: 'Inter-Light',
        textAlign: 'center',
    },
});
