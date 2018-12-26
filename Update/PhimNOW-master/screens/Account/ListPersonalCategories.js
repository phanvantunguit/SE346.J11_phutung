import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, AsyncStorage, TouchableOpacity, Image} from 'react-native';
import firebase from 'react-native-firebase';

import srcProfile from '../../resources/profile.png';

export default class ListPersonalCategories extends React.Component {
    constructor(props) {
        super(props);
        this.unsubscribe = null;
        this.state = {
          logined: false,
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+84',
          confirmResult: null,
        };
      }

    async componentWillMount() {
        // Kiểm tra du lieu dang nhap
        let user = await AsyncStorage.getItem('user')
        if(user != null || this.props.navigation.state.params.isLogined) {
            this.setState({
                logined: true
            })
        }
    }

  static navigationOptions = {
    header: null,
  };

  SignOut() {
        firebase.auth().signOut().then(function() {
            () => {this.props.navigation.navigate('Account')}})
          .catch(function(error) {
            Alert.alert(
                'Đăng xuất không thành công',
                '',
                [
                    {text: 'Hủy', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK pressed')}
                ],
                { cancelable: false }
            )
          });
  }

  login() {
    this.props.navigation.navigate('SignIn');
  }

  render () {
        if (this.state.logined) {
            return (
                <View style={{ backgroundColor: '#000', flex: 1 }}>
                  <ScrollView style={styles.menuContainer}>
                    <Text style={styles.text}>Xin chào</Text>
                    <TouchableOpacity>
                        <Image source={srcProfile} style={styles.profile} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => { this.props.navigation.navigate('PersonalList') }}>
                        <Text style={styles.menuItemText}>List yêu thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => { this.props.navigation.navigate('PersonalList') }}>
                        <Text style={styles.menuItemText}>Lịch sử</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.SignOut()}>
                        <Text style={styles.authentication}>Đăng xuất</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={{ backgroundColor: '#000', flex: 1 }}>
                  <ScrollView style={styles.menuContainer}>
                    <Text style={styles.text}>Xin chào</Text>
                    <TouchableOpacity>
                        <Image source={srcProfile} style={styles.profile} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Authentication') }}>
                        <Text style={styles.authentication}>Đăng nhập</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
            )
        }
  }
}

const styles = StyleSheet.create({
    menuContainer:{
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    text:{
        color: '#fff',
        fontSize: 24,
        marginRight: 10,
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    profile:{
        width: 150,
        height: 150,
        alignSelf: 'flex-end',
        resizeMode: 'stretch'
    },
    authentication:{
        color: '#c72911',
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 10,
        marginBottom: 30,
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    menuItem:{
        padding: 10,
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    menuItemText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
});