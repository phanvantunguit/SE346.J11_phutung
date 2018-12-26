import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import SlideShow from '../../components/SlideShow';
import SlideFilms from '../../components/SlideFilms';
import firebase from 'react-native-firebase';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          arrId: []
        };
    }
  static navigationOptions = {
    header: null,
  };
  
  componentDidMount() {
      /** let id = 12345
       * let objFilm = {}
       * objFilm.name = 'Am Anh Kinh Hoang'
       * objFilm.genre = 'Phim Ma'
       * objFilm.date = '2019'
       * firebase.database().ref('Film').child('2019').child('LastestFilm').child(id).set(objFilm)
       * .then(() => alert('Pass'))
       * .catch((error) => alert(error))*/
      let arr = [];
      firebase.database().ref('Loai').on('child_added', (dataSnapshot) => {
        arr.push(dataSnapshot.key);
        this.setState({
            arrId: arr
        });
      });
  }

  renderSlideArray(arrId) {
    let t = [];
    for (let i = 0; i < arrId.length; i++) {
        t.push(<SlideFilms id={arrId[i]} />);
    }
    return t;
  }

  render() {
    return (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <ScrollView>
                <SlideShow />
                {this.renderSlideArray(this.state.arrId)}
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
