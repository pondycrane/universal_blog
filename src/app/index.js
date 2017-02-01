import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../redux/reducers/reducer';
import AppContainer from '../containers/AppContainer'; 

import thunk from 'redux-thunk'; 

const store = createStore(reducer, applyMiddleware( thunk ) );

export default class Index extends Component { // eslint-disable-line
  render() { // eslint-disable-line
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}
