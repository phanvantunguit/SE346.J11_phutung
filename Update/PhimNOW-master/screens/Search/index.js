import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import Search from './Search';
import Watching from '../Watching';

export default createStackNavigator({
  Search: {
     screen: Search,
     navigationOptions: ({navigation}) => ({
                  headerStyle: {
                      backgroundColor: '#000',
                      borderBottomWidth: 1,
                      borderStyle: 'solid',
                      borderColor: '#c72911'
                  },
                  headerTintColor: '#c72911',
                  headerTitleStyle: {
                      fontWeight: 'bold',
                  }
               })
     },
  Watching: {
        screen: Watching,
        navigationOptions: ({navigation}) => ({
                     header: null
                  })
        },
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    headerTintColor: '#c72911',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  },
}
);