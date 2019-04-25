import React from 'react';
import { Platform, StatusBar, StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import { connect } from 'react-redux';
import dispatch from '../store/dispatch.js';

import AppNavigator from '../navigation/AppNavigator';
import Colors from '../constants/Colors.js';

class Home extends React.Component {

   

    componentWillMount() {
        
    }
    render() {
        
          return (
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator
              />
            </View>
          );
        
      }
     

    
}
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});



export default connect(dispatch.mapStateToProps, dispatch.mapDispatchToProps)(Home);