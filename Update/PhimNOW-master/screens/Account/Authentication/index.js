import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import SignIn from './SignIn';

export default createStackNavigator({
  SignIn: { screen: SignIn }
},
{
  initialRouteName: 'SignIn',
  defaultNavigationOptions: {
    headerTintColor: '#c72911',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
  },
}
);