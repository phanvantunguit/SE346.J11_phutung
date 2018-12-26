import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, ListView} from 'react-native';

import firebase from 'react-native-firebase';
import Category from '../../components/Category';

export default class ListCategories extends React.Component {
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
    let arr = [];
    firebase.database().ref('TheLoai').on('child_added', (dataSnapshot) => {
        arr.push(dataSnapshot.key);
      this.setState({
        arrId: arr
      });
    });
  }

  renderCatArray(arrId) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return (
            <ListView
                dataSource={ds.cloneWithRows(arrId)}
                renderRow={(rowData) => <Category id={rowData} style={styles.menuItem} />}
            />
        );
  }

  render () {
    return (
            <View style={{ backgroundColor: '#000', flex: 1 }}>
                        <ScrollView style={styles.menuContainer}>
                            {this.renderCatArray(this.state.arrId)}
                        </ScrollView>
            </View>
    )
  }
}

const styles = StyleSheet.create({
    menuContainer:{
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    menuItem:{
        alignSelf: 'flex-end',
        textAlign: 'right',
        bottom: 0
    },
});