import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import VideoPlayer from 'react-native-video-controls';
import firebase from 'react-native-firebase';

export default class Player extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          URL: ''
      };
  }

  componentDidMount() {
    firebase.database().ref('Tap/'+this.props.id).orderByKey().once('child_added', (data) => {
        this.setState({
            URL: data.val().URL
        })
    });
  }

  render() {
    return (
      <VideoPlayer source={{uri: this.state.URL}}
             navigator={ this.props.navigator }
             style={styles.player}
              />
    );
  }
}

const styles = StyleSheet.create({
    player:{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').width * 0.75,
    }
});