import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

import srcLiked from '../resources/liked.png';
import srcDisliked from '../resources/disliked.png';

class Film extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        image: '',
        tenVn: '',
        tenEng: '',
        namSX: '',
        isLiked: false
      };
  }
  like = () => {
    this.setState({
        isLiked: !this.state.isLiked
    });
  }

  componentDidMount() {
        firebase.database().ref('Phim/'+this.props.id).orderByKey().once("value", (data) => {
            this.setState({
                image: data.val().Image,
                tenVn: data.val().TenVN,
                tenEng: data.val().TenENG,
                namSX: data.val().NamSX
            })
        });
  }

  render() {
    return (
      <View style={styles.filmContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Watching', {id: this.props.id})}>
            <Image source={{ uri: this.state.image }} style={styles.posterStyle} />
            <View style={styles.bottomContainer}>
                <View style={styles.title}>
                    <Text numberOfLines={1} style={styles.enTitle}>{this.state.tenVn} ({this.state.namSX})</Text>
                    <Text numberOfLines={1} style={styles.vnTitle}>{this.state.tenEng} ({this.state.namSX})</Text>
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

export default withNavigation(Film);