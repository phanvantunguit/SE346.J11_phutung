import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';

import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

class Banner extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          image: ''
      };
  }

  componentDidMount() {
    firebase.database().ref('Phim/'+this.props.id).orderByKey().once('value', (data) => {
        this.setState({
            image: data.val().Image,
        })
    });
}

  render() {
    return (
        <TouchableOpacity style={styles.bannerContainer} onPress={() => this.props.navigation.navigate('Watching', {id: this.props.id})}>
            <Image source={{uri: this.state.image}} style={styles.bannerStyle} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    bannerStyle:{
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').width * 0.75 * 0.75,
        marginRight: 10,
        resizeMode: 'stretch',
        borderRadius: 5
    }
});

export default withNavigation(Banner);