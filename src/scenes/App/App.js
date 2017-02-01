/**
 * React Native for Web Starter App
 * https://github.com/grabcode/react-native-web-starter
 * Follow me https://twitter.com/grabthecode
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Touchable } from '../../components';
import { connect } from 'react-redux'; 

import {
  clickTab
} from '../../redux/actions/action_basic'; 

class App extends Component {
  constructor( props ) {
    super(props);
    this._handlePress = this._handlePress.bind(this);
  }

  _handlePress() {
    this.props.dispatch( clickTab() ); 
    console.log("Can't touched this?");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/react-native-web.png')}
          style={styles.logo}
        />
        <Touchable
          onPress={this._handlePress}
          style={styles.touchable}>
          <Text style={styles.welcome}>
            Welcome to React Native for Web Starter!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.web.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Alt+Cmd+I for dev menu
          </Text>
          <Text>
            { this.props.checked }
          </Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
});

function mapStateToProps( state ) {
  console.log( state ); 
  return {
    checked: !state.checked ? 'not yet' : state.checked
  }
}

export default connect( mapStateToProps )( App ); 
