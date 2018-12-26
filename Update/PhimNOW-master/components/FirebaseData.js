import React, {Component} from 'react';
import {Platform} from 'react-native';

import firebase from 'react-native-firebase';

const iosConfig = {};
const androidConfig = {
    clientId: "75025085142-jujjitlerp1882euc25n9oeaf75s9236.apps.googleusercontent.com",
    appId: "1:75025085142:android:061e3cd86207ca49",
    apiKey: "AIzaSyC2uz_ge5bjjFLXHHWeizJsHXov4cEx-F8",
    databaseURL: "https://phimnow-7f2b7.firebaseio.com",
    storageBucket: "phimnow-7f2b7.appspot.com",
    messagingSenderId: "75025085142",
    projectId: "phimnow-7f2b7",
    persistence: true,
};

const App = firebase.initializeApp(
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    'PhimNOW'
);

const rootRef = firebase.database().ref();

