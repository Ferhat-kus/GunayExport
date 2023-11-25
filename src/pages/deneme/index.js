import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
//component'lar
import Button from '../../component/Button/index'
import YesOrNot from '../../component/YesOrNot/index'
import DescriptionBox from '../../component/DescriptionBox/index'
import Date from '../../component/EFEABİ/date'
import Tutar from '../../component/EFEABİ/tutar'
import ReceiptOrInvoice from '../../component/EFEABİ/ReceiptOrInvoice'
import Navbar from '../../component/EFEABİ/navbar'
import Navigationlocation from '../../component/EFEABİ/Navigationlocation'
import Fillingdocuments from '../../component/EFEABİ/Fillingdocuments'


export default class index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require("../../assets/LoginScreenAssets/LoginPage/background.png")}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        <View style={styles.contentContainer}>
                            {/* <Navbar/> */}
                            <Navigationlocation/>
                            {/* <Fillingdocuments/> */}
                            {/* <YesOrNot/> */}
                            {/* <Date/> */}
                            {/* <Tutar/> */}
                            {/* <DescriptionBox placeholder='Açıklama...'/> */}
                            {/* <ReceiptOrInvoice /> */}
                            {/* <Button Title='Gönder'/> */}
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
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
