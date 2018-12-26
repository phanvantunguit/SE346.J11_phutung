import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import Watching from '../Watching';
import TypeContent from './TypeContent';

export default createStackNavigator({
  Home: {screen: Home},
  Watching: {
        screen: Watching,
        navigationOptions: ({navigation}) => ({
            header: null
          })
        },
  TypeContent: {
        screen: TypeContent,
        navigationOptions: ({navigation}) => ({
            title: navigation.state.title
          })
        },
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTintColor: '#c72911',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  },
}
);