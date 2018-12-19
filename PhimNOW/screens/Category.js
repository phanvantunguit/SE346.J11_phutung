import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground} from 'react-native';

export default class Category extends React.Component {
  render () {
    return (
            <View style={{ backgroundColor: '#000', flex: 1 }}>
                        <ScrollView style={styles.menuContainer}>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.menuItemText}>Phim bộ mới</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.menuItemText}>Phim lẻ mới</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.menuItemText}>Phim hành động mới</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.menuItemText}>Phim ngôn tình mới</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.menuItemText}>Phim tiên hiệp mới</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.menuItem}>
                                <Text style={styles.menuItemText}>Phim hoạt hình mới</Text>
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