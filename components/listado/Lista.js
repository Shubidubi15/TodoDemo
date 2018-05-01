import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions } from 'react-native';
import ListaHeader from './ListaHeader'
import ListaContent from './ListaContent'

export default class Lista extends Component {
  render() {
    return (
      <View style={estilos.tarjeta}>
        <ListaHeader />
        <ListaContent />
      </View>
    );
  }
}

let estilos = StyleSheet.create({
  tarjeta: {
      margin: 10,
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#333'
  }
})