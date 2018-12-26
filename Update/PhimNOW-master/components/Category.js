import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: ''
      };
  }

  componentDidMount() {
    firebase.database().ref('TheLoai/'+this.props.id).once('value', (dataSnapshot) => {
      this.setState({
          title: dataSnapshot.val().TenTL
      });
    });
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <TouchableOpacity style={styles.menuItem} onPress={() => { this.props.navigation.navigate('CategoryContent', {id: this.props.id}) }}>
            <Text style={styles.menuItemText}>{this.state.title}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    menuItem:{
        padding: 10,
        alignSelf: 'flex-end',
        textAlign: 'right',
        bottom: 0
    },
    menuItemText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default withNavigation(Category);