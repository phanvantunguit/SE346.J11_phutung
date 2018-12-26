import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import firebase from 'react-native-firebase';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Player from '../../components/Player';

import Info from './Info';
import Episodes from './Episodes';
import Comments from './Comments';

const Tabs = createMaterialTopTabNavigator ({
   Info: { screen: Info,
    navigationOptions: {
       tabBarLabel: 'Thông tin',
    }},
   Episodes: { screen: Episodes,
    navigationOptions: {
       tabBarLabel: 'Danh sách tập',
    }},
   Comments: { screen: Comments,
    navigationOptions: {
       tabBarLabel: 'Bình luận',
    }}
   },{
       initialRouteName: 'Info',
       tabBarOptions: {
          labelStyle: { fontWeight: 'bold', color: '#fff' },
          style: { backgroundColor: '#c72911' }
       }
   }
);

export default class Watching extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
        episode: ''
      };
  }

   componentDidMount() {
      firebase.database().ref('Tap').orderByChild('IdPhim').equalTo(this.props.navigation.state.params.id).once('child_added', (snapshot) => {
         this.setState({
            episode: snapshot.key
        });
      });
   }

   render(){
      return (
         <View style={{ backgroundColor: '#000', flex: 1 }}>
            <Player id={this.state.episode} />
            <Tabs screenProps={{id: this.props.navigation.state.params.id}} />
         </View>
      );
   }
}

const styles = StyleSheet.create({
});
