import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class ListaContent extends Component {

  render() {
    return (
      <View style={estilos.contenedor}>
        <Text style={estilos.texto}>Hello</Text>
      </View>
    );
  }
}

let estilos = StyleSheet.create({
  contenedor:{
    flexDirection: 'row'
  },
  texto:{
    marginLeft: 10,
  }
})