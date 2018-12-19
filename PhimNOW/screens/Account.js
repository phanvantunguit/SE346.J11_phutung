import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native';

import srcProfile from '../resources/profile.png';

export default class Menu extends React.Component {
  render () {
    return (
            <View style={{ backgroundColor: '#000', flex: 1 }}>
              <ScrollView style={styles.menuContainer}>
                <Text style={styles.text}>Xin chào</Text>
                <TouchableOpacity>
                    <Image source={srcProfile} style={styles.profile} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.authentication}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>List yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Lịch sử</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
    )
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