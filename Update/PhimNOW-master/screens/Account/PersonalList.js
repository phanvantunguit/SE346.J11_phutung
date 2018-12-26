import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import ListFilms from '../../components/ListFilms';

export default class PersonalList extends React.Component {
  static navigationOptions = {
    title: 'List yêu thích',
    headerStyle: {
          backgroundColor: '#000',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: '#c72911'
        },
        headerTintColor: '#c72911',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
  };
  render() {
    return (
    <View style={{ backgroundColor: '#000', flex: 1}}>
      <ListFilms />
    </View>
    );
  }
}

const styles = StyleSheet.create({
});
