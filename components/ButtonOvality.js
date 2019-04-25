import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Platform } from "react-native";

import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

export default class ButtonOvality extends React.Component {
    render() {
        // console.log('====================================')
        // console.log('this.props.color', this.props.color)
        // console.log('====================================')
        return (
            <TouchableOpacity
                onPress={this.handelPress}
                style={[styles.container, { backgroundColor: this.props.color !== undefined ? this.props.color : Colors.buttonColor }, this.props.homeButton ? {position: "absolute", bottom: 20}:null]}
            >
                <Text
                    style={styles.text}
                >{this.props.text !== undefined ? this.props.text : "пууууш"}</Text>
            </TouchableOpacity >
        )
    }

    handelPress = () => {
        this.props.handelPress !== undefined ? this.props.handelPress() : console.log("presss");
    }
}

const styles = StyleSheet.create({
    container: {
        width: width / 2, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center",  opacity: 0.9,
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { height: 5 },
                shadowOpacity: 0.5,
                shadowRadius: 10
            },
            android: {
                elevation: 20
            }
        }),
    },
    text: { color: Colors.whiteTextColor, fontSize: 14, fontWeight: '400' }
})