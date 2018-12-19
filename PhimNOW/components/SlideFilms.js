import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';

import Film from './Film';

export default class SlideFilms extends React.Component {
  render() {
    return (
      <View>
      <View style={styles.slideHeader}>
        <Text style={styles.category}>Phim lẻ mới</Text>
        <TouchableOpacity>
            <Text style={styles.seeMore}>Xem thêm</Text>
        </TouchableOpacity>
       </View>
      <ScrollView horizontal={true} style={styles.slideFilms}>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
        <Film style={styles.filmItem}/>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    slideHeader:{
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#c72911',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    category:{
        flex: 4,
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 10,
        color: '#fff'
    },
    seeMore:{
        flex: 1,
        fontSize: 14,
        color: '#c72911',
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: 5
    },
    filmItem:{
        flex: 2/5
    }
});
