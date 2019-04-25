"use strict";

import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image,
  Button,
  Keyboard,
  TouchableHighlight,
  Alert,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import dispatch from "../store/dispatch.js";
// import api from "../api";
import Colors from "../constants/Colors.js";
// import erorAlert from "../etc/erorAlert";
// import { _dataToStore, _retrieveData } from "../etc/updateCredentials";

// import { _refreshToken } from "../components/RefreshToken";

class LoginForm extends Component {

  static navigationOptions = {
    title: null,
    header: null
};

  constructor(props) {
    super(props);
    this.state = {
      buttonLoginBlock: false,
      isSplashReady: false,
      isAppReady: false,
      photo: new Array()
    };
  }

  render() {
   
    return (
      <TouchableHighlight
        style={styles.tochContainer}
        onPress={this.handelBlurInput}
        activeOpacity={100}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <View
            style={styles.logoCont}
            onResponderMove={event => {
              this.handelBlurInput(event);
            }}
          >
            
             <Image
              style={styles.logo}
              source={require("../src/ico/logo.png")}
            />
            <Text
                style={{ fontWeight: "400" }}
            >
                Вход в аккаунт не выполнен
            </Text>
          </View>
          <View style={styles.logMain}>
            <View style={styles.containerForm}>
              <TextInput
                style={styles.inputText}
                autoFocus={true}
                placeholder="E-mail"
                placeholderTextColor="rgba(111,111,111, .8)"
                returnKeyType="next"
                keyboardType={"email-address"}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                value={this.props.loginEmail}
                onChangeText={text => this.props.changeloginEmail(text)}
              />
              <TextInput
                style={styles.inputText}
                placeholder="Пароль"
                secureTextEntry
                placeholderTextColor="rgba(111,111,111, .8)"
                returnKeyType="go"
                ref={input => (this.passwordInput = input)}
                value={this.props.loginPassword}
                onSubmitEditing={() => this.handleCkickLogin()}
                onChangeText={text => this.props.changeloginPassword(text)}
              />

              <TouchableOpacity
                onPress={() => this.handleCkickLogin()}
                style={styles.buttonCont}
                color={Colors.PANTONE_876_C}
                accessibilityLabel="Learn more about this purple button"
                disabled={this.state.buttonLoginBlock}
              >
                <Text style={styles.loginButton}>Войти</Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableHighlight>
    );
  };

  handleCkickLogin = () => {
    
  }

  handelBlurInput = () => {
    Keyboard.dismiss();
  };

  

}

export default connect(
  dispatch.mapStateToProps,
  dispatch.mapDispatchToProps
)(LoginForm);

const styles = StyleSheet.create({
  tochContainer: {
    width: "100%",
    height: "100%"
  },

  buttonCont: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.buttonColor,
    justifyContent: "center",
    borderRadius: 25
  },

  loginButton: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
    color: Colors.whiteTextColor
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background
  },

  logoCont: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center"
  },

  logo: {
    width: 100,
    height: 100
    // resizeMode: "contain"
  },

  logText: {
    width: "100%",
    textAlign: "center",
    marginTop: 20,
    color: "rgba(255,255,255,.7)",
    fontSize: 16
  },

  logMain: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },

  containerForm: {
    width: "60%",
    minWidth: 300,
    padding: 20
  },

  inputText: {
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "rgb(111,111,111)",
    borderStyle: "solid",
    textAlign: "center",
    color: "rgb(111,111,111)"
  }
});
