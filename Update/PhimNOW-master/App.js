import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './screens/Home';
import Category from './screens/Category';
import Search from './screens/Search';
import Account from './screens/Account';
console.disableYellowBox = true;

export default createMaterialBottomTabNavigator ({
    Home: { screen: Home,
     navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({tintColor}) => (
            <Icon name="home" color={tintColor} size={24} />
        )
     }},
    Category: { screen: Category,
     navigationOptions: {
        tabBarLabel: 'Danh muc',
        tabBarIcon: ({tintColor}) => (
            <Icon name="th-list" color={tintColor} size={24} />
        )
     }},
    Search: { screen: Search,
     navigationOptions: {
        tabBarLabel: 'Tìm kiếm',
        tabBarIcon: ({tintColor}) => (
            <Icon name="search" color={tintColor} size={24} />
        )
     }},
    Account: { screen: Account,
     navigationOptions: {
        tabBarLabel: 'Cá nhân',
        tabBarIcon: ({tintColor}) => (
            <Icon name="user" color={tintColor} size={24} />
        )
       }
      }
    },{
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#c72911',
            inactiveTintColor: '#fff',
        },
        barStyle: { backgroundColor: 'black',},
    }
);

const styles = StyleSheet.create({
});
