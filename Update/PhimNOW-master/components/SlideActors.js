import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView, ScrollView} from 'react-native';

import firebase from 'react-native-firebase';

import Actor from './Actor';

export default class SlideActors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        arrId: []
      };
  }

  componentDidMount() {
    let arr = [];
    firebase.database().ref('DienVien_Phim').orderByChild('IdPhim').equalTo(this.props.id).on('child_added', (dataSnapshot) => {
      firebase.database().ref('DienVien_Phim/'+dataSnapshot.key).orderByKey().once('value', (snapshot) => {
        if (!arr.includes(snapshot.val().IdDV)) {
          arr.push(snapshot.val().IdDV);
          this.setState({
             arrId: arr
          });
        }
      });
    });
  }

  renderActorArray(arrId) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return (
            <ListView
                horizontal={true}
                dataSource={ds.cloneWithRows(arrId)}
                renderRow={(rowData) => <Actor id={rowData} style={styles.personItem}/>}
            />
        );
  }

  render() {
    return (
      <View>
       <View style={styles.slideHeader}>
        <Text style={styles.title}>Diễn viên</Text>
       </View>
      <ScrollView horizontal={true} style={styles.slideFilms}>
        {this.renderActorArray(this.state.arrId)}
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
    title:{
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff'
    },
    personItem:{
        flex: 1/4
    }
});
