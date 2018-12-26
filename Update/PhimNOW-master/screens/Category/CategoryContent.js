import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import firebase from 'react-native-firebase';

import ListFilms from '../../components/ListFilms';

export default class CategoryContent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title: ''
      };
  }
  static navigationOptions = {
    title: '',
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

  componentDidMount() {
    firebase.database().ref('TheLoai/'+this.props.id).once('value', (dataSnapshot) => {
      this.setState({
          title: dataSnapshot.val().TenTL
      });
    });
  }

  render() {
    return (
    <View style={{ backgroundColor: '#000', flex: 1}}>
      <ListFilms id={this.props.id} kind='category' />
    </View>
    );
  }
}

const styles = StyleSheet.create({
});
