import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Entity
} from 'react-360';

import { Fox } from './src/components/Fox.js';

import { Location } from 'react-360-web';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

//import * as reducers from './store/reducers'
//const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class FBox extends React.Component {
  /*constructor(props, context) {
    super(props);
    const g = '';
    this.state({greet:})
  }*/
  render() {
    return (
      //<Pano>
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting} adjustsFontSizeToFit="true">
            placeholder. 
          </Text>
        </View>
      </View>
    );
  }
};

//const location = new Location([0, 2, 0]);

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 1000,
    backgroundColor: '#d0a1a8',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 1,
    backgroundColor: '#d0a1a8',
    borderColor: '#d0a1a8',
    borderWidth: 1,
  },
  greeting: {
    fontSize: 20,
    color: '#616161',
    fontStyle: 'italic'
  },
});

AppRegistry.registerComponent('fbox', () => FBox);
