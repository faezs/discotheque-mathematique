import React from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  View,
  asset
} from 'react-360';

import Entity from 'Entity';

export default class Fox extends React.Component {
  render() {
    return (
      <View>
        <Entity 
          style={
            {
              transform: [ 
                {translate: [0, 0, 0]},
                {scale: [0.1, 0.1, 0.1]}
              ],
              color: '#64120c'
            }
          } 
          source={
            {obj: asset('fox/Fox.obj'), mtl: asset('fox/Fox.mtl')}
          } />
      </View>
    );
  }
};

AppRegistry.registerComponent('Fox', () => Fox);
