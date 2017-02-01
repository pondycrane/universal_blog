import React, { Component } from 'react';
import { View } from 'react-native';
import { App } from '../scenes/App'; 

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}
