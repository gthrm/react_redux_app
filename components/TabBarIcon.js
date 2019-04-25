import React from 'react';
import { View, Image } from "react-native";

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View
        style={{
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Image
          style={{
            width: 25,
            height: 25,
            tintColor: this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
          }}
          
          source={this.getIcon(this.props.name)}
        />
      </View>
    );
  }

  getIcon = name => {
    switch (name) {
      case "ios-home" || "md-home":
        return require("../src/ico/home.png")
      case "ios-favorites" || "md-favorites":
        return require("../src/ico/starico.png")
      case "ios-cart" || "md-cart":
        return require("../src/ico/card.png")
      case "ios-contact" || "md-contact":
        return require("../src/ico/lk.png")
      default:
        break;
    }
  }
}