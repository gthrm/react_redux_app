import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform } from "react-native";

import Colors from '../constants/Colors';

import ListItem from "../components/ListItem";

const { width, height } = Dimensions.get('window');

export default class List extends React.Component {
    render() {
        return (
            <View
                style={styles.container}>
               {this.props.markers !== undefined ? 
               this.props.markers.map(
                   marker => {
                    return (<ListItem navigation={this.props.navigation} chanageLocation={this.props.chanageLocation} key={marker.id} marker={marker}/>)
                   }
               )
               :null
               }
            </View>
        )
    }

    handelPress = () => {
        this.props.handelPress !== undefined ? this.props.handelPress() : console.log("presss");
    }
}

const styles = StyleSheet.create({
    container: {
    //    flex: 1,
    //    paddingLeft: 10,
    //    paddingRight: 10
    }
})