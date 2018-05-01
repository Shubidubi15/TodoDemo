import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

export default class ListaHeader extends Component {
  render() {
    return (
      <View style={{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }}>
        <Text style={{textAlign: 'center'}}> Titulo </Text>
      </View>
    );
  }
}
