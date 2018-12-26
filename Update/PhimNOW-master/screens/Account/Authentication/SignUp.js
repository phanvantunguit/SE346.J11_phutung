import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Alert} from 'react-native';
import {firebase} from 'react-native-firebase';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        txtName: '',
        txtUsername: '',
        txtPassword: '',
        txtPassword2: '',
    };
  }

  signUp() {
    
    if (this.state.txtName === '' || this.state.txtUsername === '' || this.state.txtPassword === '' || this.state.txtPassword2 === '')
    {
        Alert.alert(
            'Đăng ký không thành công',
            'Vui lòng nhập đầy đủ thông tin cần thiết.',
            [
                {text: 'Hủy', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK pressed')}
            ],
            { cancelable: false }
        )
    }
    else if (this.state.txtPassword !== this.state.txtPassword2)
    {
        Alert.alert(
            'Đăng ký không thành công',
            'Hai mật khẩu không trùng khớp, vui lòng nhập lại.',
            [
                {text: 'Hủy', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK pressed')}
            ],
            { cancelable: false }
        ) 
    }
    else
    {
        firebase.auth().createUserWithEmailAndPassword(this.state.txtUsername, this.state.txtPassword).then(
            () => {
                Alert.alert(
                    'Đăng ký thành công',
                    'Chúc mừng bạn '+this.state.txtName+' đã đăng ký thành công, hãy đăng nhập ngay để trải nghiệm PhimNOW ngay nào!',
                    [
                        {text: 'Hủy', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => { this.props.navigation.navigate('SignIn') }},
                    ],
                    { cancelable: false }
                ) 
            })
            .catch(function(error)
            {
                Alert.alert(
                    'Đăng ký không thành công',
                    'Email không khả dụng hoặc mật khẩu không an toàn (phải gồm cả chữ và số)',
                    [
                        {text: 'Hủy', onPress: () => console.log('Cancel pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK pressed')}
                    ],
                    { cancelable: false }
                )
            });
    }
  }

  static navigationOptions = {
      header: null
    };

  render() {
    return (
        <View style={styles.signUpContainer}>
            <TextInput style={styles.textInput} placeholder="Họ tên..." placeholderTextColor="#666" underlineColorAndroid="transparent" value={this.state.txtName} onChangeText={text => this.setState({ txtName: text })} />
            <TextInput style={styles.textInput} placeholder="Email..." placeholderTextColor="#666" underlineColorAndroid="transparent" value={this.state.txtUsername} onChangeText={text => this.setState({ txtUsername: text })} />
            <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Mật khẩu..." placeholderTextColor="#666" underlineColorAndroid="transparent" value={this.state.txtPassword} onChangeText={text => this.setState({ txtPassword: text })} />
            <TextInput style={styles.textInput} secureTextEntry={true} placeholder="Xác nhận mật khẩu..." placeholderTextColor="#666" underlineColorAndroid="transparent" value={this.state.txtPassword2} onChangeText={text => this.setState({ txtPassword2: text })} />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {this.signUp()}}>
                <Text style={styles.submitButtonText}>Đăng ký</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Đã có tài khoản?</Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignIn') }}><Text style={styles.textButton}>Đăng nhập</Text></TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    signUpContainer:{
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
