import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';


export default class Comments extends React.Component {
  render() {
    return (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <ScrollView>
                <Text style={{textAlign: 'center'}}>Đang phát triển...</Text>
            </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
});
