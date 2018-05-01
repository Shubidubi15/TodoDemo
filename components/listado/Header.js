import React, { Component } from 'react';
import {  View, Text, StyleSheet, Dimensions } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={estilos.cabecera}>
      <View style={estilos.addFlex}></View>
        <View style={estilos.textoCont}>
            <Text style={estilos.texto}>Listas</Text>
        </View>
        <View style={estilos.addFlex}></View>
      </View>
    );
  }
}

let estilos = StyleSheet.create({
    cabecera: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    textoCont: {
        height: Dimensions.get('window').height*0.08,
        width: Dimensions.get('window').width, 
        backgroundColor: '#008B8B',       
    },
    texto:{
        marginTop: 10,
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        flex: 1
    },
    addFlex: {
        flex: 1
    }
})
