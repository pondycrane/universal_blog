/**
 * React Native for Web Starter App
 * Follow me https://twitter.com/grabthecode
 */

import { AppRegistry } from 'react-native';
//import { App } from './src/scenes';
import Index from './src/app/index'; 

AppRegistry.registerComponent('App', () => Index);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
});
