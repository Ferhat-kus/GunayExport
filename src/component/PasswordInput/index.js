import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class Index extends Component {
    state = {
        password: '',
        showPassword: false,
    };
    togglePasswordVisibility = () => {
        this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
    };
    render() {
        const { showPassword } = this.state;

        return (
            <View style={styles.container}>
                <LinearGradient
                    style={styles.background}
                    colors={['#033d63', '#105380', '#0f5380']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                    <View style={styles.InputBody}>
                        <TextInput
                            style={styles.Input}
                            placeholder="Password"
                            secureTextEntry={!showPassword}
                            placeholderTextColor="#FFF"
                        />
                        <TouchableOpacity onPress={this.togglePasswordVisibility}>
                            <Image
                                source={showPassword ? require('../../assets/PasswordInput/icon/eye.png') : require('../../assets/PasswordInput/icon/eye-off.png')}
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
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
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderRadius: 20,
        height: 65,
        width: '75%',
        alignItems: 'center',
    },
    InputBody: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 65,
        alignItems: 'center',
        color: '#FFF',
        textAlignVertical: 'center',
        width: '90%',
    },
    Input: {
        letterSpacing: 2,
        fontSize: 18,
        color: '#FFF',
        width: '100%',
    },
    icon: {
        tintColor: '#FFF',
        width: 30,
        height: 30,
    },
});

export default Index;
