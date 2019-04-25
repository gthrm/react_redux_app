import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform } from "react-native";

import Colors from '../constants/Colors';

import ListItem from "./ListItem";

const { width, height } = Dimensions.get('window');

export default class Item extends React.Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                { this.props.marker !== undefined ? <ListItem navigation={this.props.navigation} key={this.props.marker.id} open={this.props.open} openInfo={this.props.openInfo} chanageLocation={this.props.chanageLocation} marker={this.props.marker} /> : null }
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
        // paddingLeft: 10,
        // paddingRight: 10
    }
})