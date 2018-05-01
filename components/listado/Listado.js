import React, { Component } from 'react';
import {View} from 'react-native'
import Header from './Header'
import Contenido from './Content'

class Listado extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <View>
        <Header />
        <Contenido />
      </View>
    )
  }
};

export default Listado;