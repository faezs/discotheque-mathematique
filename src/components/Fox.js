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
                {scale: [0.3, 0.3, 0.3]},
                //{scaleY: 0.3},
                //{scaleZ: 0.3},
              ],
            }
          } 
          source={
            {obj: asset('fox.old/model.obj'), mtl: asset('fox.old/materials.mtl')}
          } />
      </View>
    );
  }
};

AppRegistry.registerComponent('Fox', () => Fox);
