import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';

import BigFilm from './BigFilm';

export default class SlideFilms extends React.Component {
  render() {
    return (
      <ScrollView style={styles.slideFilms}>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
        <BigFilm style={styles.filmItem}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    filmItem:{
        flex: 1/2
    }
});
