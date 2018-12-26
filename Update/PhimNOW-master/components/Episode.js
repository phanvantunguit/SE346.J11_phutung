import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, TouchableOpacity, Text} from 'react-native';

import firebase from 'react-native-firebase';

export default class Episode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tenTap: ''
        };
    }

  componentDidMount() {
      firebase.database().ref('Tap/'+this.props.id).orderByKey().once("value", (snapshot) => {
        this.setState({
            tenTap: snapshot.val().TenTap
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={ this.props.updateVideo } style={styles.episodeContainer}>
            <Text style={styles.text}>{this.state.tenTap}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        padding: 5,
        width: Dimensions.get('window').width/3
    },
    episodeContainer: {
        padding: 10,
        backgroundColor: '#c72911'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
});