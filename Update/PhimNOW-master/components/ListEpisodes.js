import React, {Component} from 'react';
import {StyleSheet, ListView, ScrollView} from 'react-native';

import firebase from 'react-native-firebase';

import Episode from './Episode';

export default class ListEpisodes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          arrId: []
        };
    }
    
  componentDidMount() {
    let arr = [];
    firebase.database().ref('Tap').orderByChild('IdPhim').equalTo(this.props.id).on('child_added', (snapshot) => {
      if (!arr.includes(snapshot.key)) {
          arr.push(snapshot.key);
          this.setState({
          arrId: arr
        });
      }
    });
  }

  renderEpisodeArray(arrId) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return (
            <ListView
                dataSource={ds.cloneWithRows(arrId)}
                renderRow={(rowData) => <Episode id={rowData} style={styles.episode} />}
            />
        );
  }

  render() {
    return (
      <ScrollView style={styles.listEpisodes}>
        {this.renderEpisodeArray(this.state.arrId)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    listEpisodes: {
        
    },
    episode: {
        alignSelf: 'flex-start'
    }
});
