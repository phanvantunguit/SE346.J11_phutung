import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';

import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

import srcLiked from '../resources/liked.png';
import srcDisliked from '../resources/disliked.png';

class BigFilm extends React.Component {
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
let {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    filmContainer:{
        width: '100%',
        padding: 10,
        marginBottom: 10,
    },
    posterStyle:{
        width: width - 20,
        height: (width - 20) * 0.75,
        resizeMode: 'stretch'
    },
    bottomContainer:{
        width: '100%',
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
        width: '95%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10
    },
    vnTitle:{
        width: '95%',
        fontSize: 17,
        color: '#fff'
    },
    iconStyle:{
        width: 36,
        height: 36,
        resizeMode: 'stretch'
    }
});

export default withNavigation(BigFilm);