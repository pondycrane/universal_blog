import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from '../scenes/App';
import reducer from '../redux/reducers/reducer';
import AppContainer from '../containers/AppContainer'; 

const store = createStore(reducer);

export default class Index extends Component { // eslint-disable-line
  render() { // eslint-disable-line
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}
