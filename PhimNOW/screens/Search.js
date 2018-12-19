import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground} from 'react-native';

import ListFilms from '../components/ListFilms';

import srcSearchButton from '../resources/search.png';

export default class Header extends React.Component {
  constructor(props) {
          super(props);
          this.state = {
              txtSearch: ''
          };
      }

  onSearch = () => {

      }

  render() {
    return (
              <View style={{ backgroundColor: '#000', flex: 1 }}>
                <View style={styles.header}>
                  <TextInput style={styles.textInput} placeholder="Tìm kiếm..." placeholderTextColor="#666" underlineColorAndroid="transparent" value={this.state.txtSearch} onChangeText={text => this.setState({ txtSearch: text })} onSubmitEditing={this.onSearch.bind(this)} />
                  <TouchableOpacity>
                    <Image source={srcSearchButton} style={styles.iconStyle} />
                  </TouchableOpacity>
                </View>
                <ListFilms />
              </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c72911'
    },
    iconStyle:{
        width: 40,
        height: 40,
        flex: 1
    },
    textInput:{
        height: 35,
        backgroundColor: '#000',
        color: '#666',
        marginRight: 10,
        paddingVertical: 0,
        borderRadius: 2,
        flex: 5
    }
});
