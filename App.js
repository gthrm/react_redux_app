import React from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { AppLoading, Asset, Font, Icon, KeyboardAvoidingView } from 'expo';
import MainComponent from './MainComponent.js';

import { createStore } from 'redux';


import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers.js';


class App extends React.Component {
  
  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
  const store = createStore(rootReducer);
    
    return(
      <Provider store={store}>
        <MainComponent />
      </Provider>
    )
  }
}

export default App;
