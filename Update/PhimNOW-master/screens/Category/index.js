import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import ListCategories from './ListCategories';
import CategoryContent from './CategoryContent';
import Watching from '../Watching';

export default createStackNavigator({
  ListCategories: {screen: ListCategories},
  CategoryContent: {screen: CategoryContent},
  Watching: {
        screen: Watching,
        navigationOptions: ({navigation}) => ({
                     header: null
                  })
        }
},
{
  initialRouteName: 'ListCategories',
  defaultNavigationOptions: {
    headerTintColor: '#c72911',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  },
}
);