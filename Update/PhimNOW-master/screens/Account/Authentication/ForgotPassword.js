import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
      header: null
    };

  render() {
    return (
        <View style={styles.forgotPasswordContainer}>
            <Text style={styles.text}>Đang phát triển</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    forgotPasswordContainer:{
            backgroundColor: '#000',
            flex: 1,
            alignItems: 'center',
            paddingTop: 120
        },
        textInput: {
            width: Dimensions.get('window').width - 40,
            height: 40,
            backgroundColor: '#000',
            color: '#666',
            marginRight: 10,
            paddingVertical: 0,
            borderRadius: 2
        },
        submitButton: {
            backgroundColor: '#c72911',
            padding: 10,
            borderRadius: 3,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#fff',
            marginTop: 30,
            marginBottom: 50
        },
        submitButtonText: {
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
            color: '#fff'
        },
        textButton: {
            textAlign: 'center',
            fontSize: 16,
            color: '#c72911',
        },
        text: {
            textAlign: 'center',
            fontSize: 16,
            color: '#fff'
        }
});
