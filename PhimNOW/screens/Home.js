import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, ImageBackground} from 'react-native';

import SlideShow from '../components/SlideShow';
import SlideFilms from '../components/SlideFilms';

export default class Home extends React.Component {
  render() {
    return (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <ScrollView>
                <SlideShow />
                <SlideFilms />
                <SlideFilms />
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
});
