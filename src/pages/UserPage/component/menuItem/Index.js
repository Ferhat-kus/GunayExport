import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class Index extends Component {
  render() {
    const { MenuTitle, MenuIcon } = this.props;
    return (
      <TouchableOpacity style={styles.menuItem}>
        <Image style={styles.icon} source={MenuIcon} />
        <Text style={styles.menuTitle}>{MenuTitle}</Text>
      </TouchableOpacity>
    );
  }
}

Index.propTypes = {
  MenuTitle: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  menuItem: {
    marginVertical: '1%',
    paddingHorizontal: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
    width: 35,
    height: 35,
    tintColor: '#FFF',
  },
  menuTitle: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#FFF',
  },
});
