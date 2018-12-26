import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

import firebase from 'react-native-firebase';

import SlideDirectors from '../../components/SlideDirectors';
import SlideActors from '../../components/SlideActors';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tenVn: '',
          tenEng: '',
          namSX: '',
          tomTat: '',
        };
    }
  componentDidMount() {
    firebase.database().ref('Phim/'+this.props.screenProps.id).on("value", (snapshot) => {
        this.setState({
            tenVn: snapshot.val().TenVN,
            tenEng: snapshot.val().TenENG,
            namSX: snapshot.val().NamSX,
            tomTat: snapshot.val().TomTat,
        });
      });
  }

  getInfo(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].key == key) return arr[i].value;
    }
  }

  render() {
    return (
        <View style={{ backgroundColor: '#000', flex: 1, padding: 10 }}>
            <ScrollView>
                <Text style={styles.enTitle}>{this.state.tenVn} ({this.state.namSX})</Text>
                <Text style={styles.vnTitle}>{this.state.tenEng} ({this.state.namSX})</Text>
                <SlideDirectors id={this.props.screenProps.id} />
                <SlideActors id={this.props.screenProps.id}/>
                <Text style={styles.infoTitle}>Tóm tắt</Text>
                <Text style={styles.info}>{this.state.tomTat}</Text>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    enTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    vnTitle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'justify'
    },
    info: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'justify'
    },
    infoTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'justify'
    },

});
