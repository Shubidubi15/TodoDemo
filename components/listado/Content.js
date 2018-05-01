import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import Lista from './Lista';

export default class Content extends Component {
  render() {
    return (
      <View style={estilos.addFlex}>
          <Lista />
      </View>
    );
  }
}

let estilos = StyleSheet.create({
  addFlex: {
      flex: 8
  }
})