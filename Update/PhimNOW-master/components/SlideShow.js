import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, ListView} from 'react-native';

import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase';

import Banner from './Banner';

class SlideShow extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
              arrId: []
          };
      }

      componentDidMount() {
        let arr = [];
        firebase.database().ref('Tap').orderByKey().limitToLast(20).on('child_added', (snapshot) => {
          firebase.database().ref('Tap/'+snapshot.key).on('value', (data) => {
            if (!arr.includes(data.val().IdPhim)) {
                arr.push(data.val().IdPhim)
                this.setState({
                    arrId: arr
                });
            }
          });
        });
      }
      
      renderBannerArray(arrId) {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        return (
            <ListView
                horizontal={true}
                autoplay={true}
                dataSource={ds.cloneWithRows(arrId)}
                renderRow={(rowData) => <Banner id={rowData}/>}
            />
        );
      }

    render () {
      return (
        <View style={{marginTop: 10}}>
            <ScrollView horizontal={true} style={styles.slideFilms}>
                {this.renderBannerArray(this.state.arrId)}
            </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    filmItem:{
        flex: 2/5
    }
});

export default withNavigation(SlideShow);