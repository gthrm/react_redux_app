import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../Screens/HomeScreen';
import StatusScreen from '../Screens/StatusScreen';
import StarsScreen from '../Screens/StarsScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import LKScreen from '../Screens/LKScreen';
import Colors from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Status: StatusScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Домой",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home' }
    />
  ),
};

const StarStack = createStackNavigator({
  Star: StarsScreen
});

StarStack.navigationOptions = {
  tabBarLabel: 'Избранное',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? 'ios-favorites' : 'md-favorites' }
    />
  ),
};

const HistoryStack = createStackNavigator({
  History: HistoryScreen
});

HistoryStack.navigationOptions = {
  tabBarLabel: 'История',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? 'ios-cart' : 'md-cart' }
    />
  ),
};

const LKStack = createStackNavigator({
  LK: LKScreen,
});

LKStack.navigationOptions = {
  tabBarLabel: 'Кабинет',
  title: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={ Platform.OS === 'ios' ? 'ios-contact' : 'md-contact' }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  StarStack,
  HistoryStack,
  LKStack
},
{
  tabBarOptions: {
    style: {
      backgroundColor: Colors.tabBar,
      height: 60
    },
    showLabel: false
  }
  
});
