import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';

const Index = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <Image source={require('../../../assets/LoginScreenAssets/icon/icon.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default Index;
