import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class NavigationLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.background}
          colors={['#00395e', '#00121e', '#011929', '#00395f']}//emilatörün ekranın kalite düşüklüğünden dolayı grdiente renkleri tuturmak zor
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.title}>
            <Text style={styles.titleText}>DOLUM NOKTASINA GİDİYORSUNUZ</Text>
          </View>
          <View style={styles.navigation}>
            <Text style={styles.navigationText}>
              <Text style={styles.time}>10 Dakika{'\n'}</Text>
              <Text style={styles.distance}>4,00 KM</Text>
            </Text>
          </View>
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
  background: {
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
    height: 80,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: '#FFF',
    letterSpacing: 3,
    fontFamily: 'Inter-Regular',
    lineHeight:30,
    fontSize:16,

  },
  navigationText: {
    color: '#FFF',
    fontFamily: 'Inter-ExtraBold',
    flexDirection: 'column',
    textAlign: 'right',
    lineHeight:30,
    fontSize:16,
  },
});
