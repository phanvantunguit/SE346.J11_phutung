import React, {Component} from 'react';
import {StyleSheet, TextInput, View, ScrollView, ListView, TouchableOpacity, Image} from 'react-native';

import firebase from 'react-native-firebase';
import SearchInput, { createFilter } from 'react-native-search-filter';
import BigFilm from '../../components/BigFilm';
const KEYS_TO_FILTERS = ['tenVn', 'tenEng'];

export default class Search extends React.Component {
  constructor(props) {
          super(props);
          this.state = {
              searchTerm: '',
              arr: []
          };
      }

      onSearch() {
        let arr = [];
        firebase.database().ref('Phim').orderByKey().on('child_added', (snapshot) => {
            if (!arr.includes(snapshot.key)) {
                arr.push({
                    id: snapshot.key,
                    tenVn: snapshot.val().TenVN,
                    tenEng: snapshot.val().tenEng
                });
                this.setState({
                    arr: arr
                });
            }
        });
      }

      
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const filteredFilms = this.state.arr.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
              <View style={{ backgroundColor: '#000', flex: 1 }}>
                <View style={styles.header}>
                <SearchInput 
                    onChangeText={(term) => { this.searchUpdated(term) }} 
                    style={styles.textInput}
                    placeholder="Tìm kiếm..."
                    placeholderTextColor="#666"
                />
                </View>
                <ScrollView>
                    {filteredFilms.map(film => {
                        return (
                            <BigFilm id={film.id} />
                        )
                    })}
                </ScrollView>
              </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        padding: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c72911'
    },
    textInput:{
        padding: 10,
        backgroundColor: '#000',
        color: '#666',
        marginRight: 10,
        paddingVertical: 0,
        borderRadius: 2,
    }
});
