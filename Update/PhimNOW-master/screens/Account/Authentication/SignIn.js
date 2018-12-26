import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, AsyncStorage, TouchableOpacity, View, Dimensions} from 'react-native';

import firebase from 'react-native-firebase';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = null;
    this.state = {
      user: null,
      message: '',
      codeInput: '',
      phoneNumber: '+84',
      confirmResult: null,
    };
  }

  async facebookLogin() {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  
      if (result.isCancelled) {
        throw new Error('User cancelled request'); // Handle this however fits the flow of your app
      }
  
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
  
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();
  
      if (!data) {
        throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
      }
  
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
  
      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  
      console.info(JSON.stringify(currentUser.user.toJSON()))
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user.toJSON() });
      } else {
        // Đã đăng xuất, reset state
        this.setState({
          logined: false,
          user: null,
          message: '',
          codeInput: '',
          phoneNumber: '+84',
          confirmResult: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  facebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
  
      if (result.isCancelled) {
        throw new Error('User cancelled request'); // Handle this however fits the flow of your app
      }
  
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
  
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();
  
      if (!data) {
        throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
      }
  
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
  
      // login with credential
      const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
  
      console.info(JSON.stringify(currentUser.user.toJSON()))

      this.props.navigation.navigate('ListPersonalCategories', {isLogined: true});
    } catch (e) {
      console.error(e);
    }
  }
  
  async signIn() {
    const { phoneNumber } = this.state;
    this.setState({ message: 'Đang gửi mã xác nhận...' });

    firebase.auth().signInWithPhoneNumber(phoneNumber)
      .then(confirmResult => {
        // Nếu đăng nhập thành công thì lưu user lại cho lần đăng nhập sau
        this.setState({
          logined: true,
          message: `Đã gửi thành công mã xác nhận!`
        })
      })
      .catch(error => this.setState({ message: `Không gửi được mã xác nhận: ${error.message}` }));

      if(this.state.logined) {
        await AsyncStorage.setItem('user', phoneNumber);
      }
  };

  confirmCode = () => {
    const { codeInput, confirmResult } = this.state;

    if (confirmResult && codeInput.length) {
      confirmResult.confirm(codeInput)
        .then((user) => {
          this.setState({ message: 'Xác nhận thành công!' });
        })
        .catch(error => this.setState({ message: `Mã xác nhận không đúng: ${error.message}` }));
    }
  };

  static navigationOptions = {
      header: null,
    };

    renderPhoneNumberInput() {
        const { phoneNumber } = this.state;
     
         return (
           <View style={styles.signInContainer}>
             <TextInput
               autoFocus
               style={styles.textInput}
               onChangeText={value => this.setState({ phoneNumber: value })}
               placeholder={'Số điện thoại... '}
               value={phoneNumber}
             />
             <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {this.signIn()}}>
                <Text style={styles.submitButtonText}>Đăng nhập</Text>
            </TouchableOpacity>
            <LoginButton
              onPress={() => this.facebookLogin()}/>
           </View>
         );
       }
     
       renderMessage() {
         const { message } = this.state;
     
         if (!message.length) return null;
     
         return (
           <Text style={styles.text}>{message}</Text>
         );
       }
     
       renderVerificationCodeInput() {
         const { codeInput } = this.state;
     
         return (
           <View style={styles.signInContainer}>
             <TextInput
               autoFocus
               style={styles.textInput}
               onChangeText={value => this.setState({ codeInput: value })}
               placeholder={'Mã xác nhận... '}
               value={codeInput}
             />
             <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {this.confirmCode}}>
                <Text style={styles.submitButtonText}>Xác nhận</Text>
            </TouchableOpacity>
           </View>
         );
       }
     
       render() {
         const { user, confirmResult } = this.state;
         return (
           <View style={styles.signInContainer}>
     
             {!user && !confirmResult && this.renderPhoneNumberInput()}
     
             {this.renderMessage()}
     
             {!user && confirmResult && this.renderVerificationCodeInput()}
     
             {user && (() => this.props.navigation.navigate('Account'))}
           </View>
         );
       }
}

const styles = StyleSheet.create({
    signInContainer:{
        backgroundColor: '#000',
        flex: 1,
        alignItems: 'center',
        paddingTop: 80
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
    socialButton: {
      width: Dimensions.get('window').width - 80,
      padding: 10,
      backgroundColor: '#fff',
      marginTop: 10,
      marginBottom: 10
    },
    socialButtonText: {
      textAlign: 'center',
      fontSize: 22,
      color: '#000'
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
