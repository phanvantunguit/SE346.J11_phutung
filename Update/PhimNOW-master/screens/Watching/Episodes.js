import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import ListEpisodes from '../../components/ListEpisodes';

export default class Episodes extends React.Component {
  render() {
    return (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <ListEpisodes id={this.props.screenProps.id}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
});
