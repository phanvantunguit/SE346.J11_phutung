import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView, ListView} from 'react-native';

import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

import Film from './Film';

class SlideFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        arrId: []
      };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    firebase.database().ref('Loai/'+this.props.id).once('value', (dataSnapshot) => {
      this.setState({
          title: dataSnapshot.val().TenLoai + ' mới'
      });
    });
    let arr = [];
    firebase.database().ref('Phim').orderByChild('Loai').equalTo(this.props.id).limitToLast(5).on('child_added', (snapshot) => {
      if (!arr.includes(snapshot.key)) {
          arr.push(snapshot.key);
          this.setState({
            arrId: arr
          });
      }
    });
  }

  renderFilmArray(arrId) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    return (
        <ListView
            horizontal={true}
            dataSource={ds.cloneWithRows(arrId)}
            renderRow={(rowData) => <Film id={rowData} style={styles.filmItem}/>}
        />
    );
  }

  render() {
    return (
      <View style={{marginTop: 10}}>
        <View style={styles.slideHeader}>
            <Text style={styles.category}>{this.state.title}</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('TypeContent', {id: this.props.id})}>
                <Text style={styles.seeMore}>Xem thêm</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal={true} style={styles.slideFilms}>
            {this.renderFilmArray(this.state.arrId)}
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

export default withNavigation(SlideFilms);