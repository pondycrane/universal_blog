import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import App from '../scenes/App/App'; 

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
      }
    }); 

    return (
      <View style={ styles.container } >
        <App />
      </View>
    );
  }
}
