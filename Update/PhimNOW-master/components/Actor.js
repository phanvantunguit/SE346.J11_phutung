import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import firebase from 'react-native-firebase';

import srcAvatar from '../resources/profile.png';

export default class Actor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tenDV: ''
        };
    }

  componentDidMount() {
      firebase.database().ref('DienVien/'+this.props.id).orderByKey().once("value", (snapshot) => {
        this.setState({
            tenDV: snapshot.val().TenDV
        });
      });
  }

  render() {
    return (
      <View style={styles.personContainer}>
        <TouchableOpacity>
            <Image source={srcAvatar} style={styles.avatarStyle} />
            <View style={styles.bottomContainer}>
                <Text numberOfLines={1} style={styles.title}>{this.state.tenDV}</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    personContainer:{
        padding: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    avatarStyle:{
        width: 135,
        height: 135,
        resizeMode: 'stretch'
    },
    bottomContainer:{
        width: 150,
        flexDirection: 'row'
    },
    title:{
        textAlign: 'center',
        width: 130,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 10
    }
});
