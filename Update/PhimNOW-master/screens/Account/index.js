import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import ListPersonalCategories from './ListPersonalCategories';
import PersonalList from './PersonalList';
import Authentication from './Authentication';
import Watching from '../Watching';

export default createStackNavigator({
  ListPersonalCategories: { screen: ListPersonalCategories },
  PersonalList: { screen: PersonalList },
  Authentication: {
   screen: Authentication,
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
      }
},
{
  initialRouteName: 'ListPersonalCategories',
  defaultNavigationOptions: {
    headerTintColor: '#c72911',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  },
}
);