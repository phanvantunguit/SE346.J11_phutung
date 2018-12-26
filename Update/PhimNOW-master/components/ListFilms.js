import React, {Component} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, Text, ListView} from 'react-native';

import firebase from 'react-native-firebase';

import BigFilm from './BigFilm';

export default class ListFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        arrId: []
      };
  }

  componentDidMount() {
    let arr = [];
      firebase.database().ref('TheLoai_Phim').orderByChild('IdTheLoai').equalTo(this.props.id).on('child_added', (snapshot) => {
        firebase.database().ref('TheLoai_Phim/'+snapshot.key).on('value', (data) => {
          if (!arr.includes(data.val().IdPhim)) {
            arr.push(data.val().IdPhim);
            this.setState({
              arrId: arr
            });
          }
        });
      });
  }
  
  renderFilmArray(arrId) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    return (
        <ListView
          dataSource={ds.cloneWithRows(arrId)}
          renderRow={(rowData) => <BigFilm id={rowData}/>}
        />
      );
  }
  
  loadMore() {
  };

  render() {
    return (
      <ScrollView style={styles.slideFilms}>
        {this.renderFilmArray(this.state.arrId)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      alignSelf: 'center',
      padding: 5,
      backgroundColor: '#c72911',
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 10
    },
    buttonText: {
      fontSize: 13,
      color: '#fff',
      textAlign: 'center'
    }
});
