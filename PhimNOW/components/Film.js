import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import srcPoster from '../resources/poster/venom.jpg';
import srcLiked from '../resources/liked.png';
import srcDisliked from '../resources/disliked.png';

export default class Film extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        isLiked: false
      };
  }
  like = () => {
    this.setState({
        isLiked: !this.state.isLiked
    });
  }

  render() {
    return (
      <View style={styles.filmContainer}>
        <TouchableOpacity>
            <Image source={srcPoster} style={styles.posterStyle} />
            <View style={styles.bottomContainer}>
                <View style={styles.title}>
                    <Text numberOfLines={1} style={styles.enTitle}>Venom (2018)</Text>
                    <Text numberOfLines={1} style={styles.vnTitle}>Venom (2018)</Text>
                </View>
                <TouchableOpacity onPress={this.like} style={styles.likeButton}>
                    {
                        this.state.isLiked ? <Image source={srcLiked} style={styles.iconStyle} /> : <Image source={srcDisliked} style={styles.iconStyle} />
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    filmContainer:{
        padding: 10,
        marginBottom: 10,
    },
    posterStyle:{
        width: 240,
        height: 180,
        resizeMode: 'stretch'
    },
    bottomContainer:{
        width: 240,
        flexDirection: 'row'
    },
    title:{
        flex: 9
    },
    likeButton:{
        flex: 1,
        marginTop: 10,
        padding: 10
    },
    enTitle:{
        width: 210,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10
    },
    vnTitle:{
        width: 210,
        fontSize: 14,
        color: '#fff'
    },
    iconStyle:{
        width: 30,
        height: 30,
        resizeMode: 'stretch'
    }
});
