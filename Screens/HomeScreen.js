import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

import { connect } from "react-redux";
import dispatch from "../store/dispatch.js";
import Colors from '../constants/Colors.js';

import { getStatusBarHeight } from 'react-native-status-bar-height';
const statusBarHeight = getStatusBarHeight();

const { width, height } = Dimensions.get('window');

class HomeScreen extends Component {

  static navigationOptions = {
    title: null,
    header: null
  };

  constructor(props) {
    super(props);
    // this.state = {
     
    // }
  }

  componentDidMount() {

  }

  shouldComponentUpdate(nextProps, nextState) {
    
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Text>Ширина экрана: {width}</Text>
        <Text>Высота экрана: {height}</Text>
        <Text>Высота статус-бара: {statusBarHeight}</Text>
      </View>
    );
  }; 
}


export default connect(
  dispatch.mapStateToProps,
  dispatch.mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.background
  },
  // map: {
  //   ...StyleSheet.absoluteFillObject
  // },
});
