import React from 'react';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet, Platform } from "react-native";

import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

export default class Controller extends React.Component {
    render() {
        return (
            <View
                style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.subtract()}
                >
                    <Image
                        style={styles.buttonImage}
                        source={require("../src/ico/Subtract.png")}

                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.frame()}
                >
                    <Image
                        style={styles.buttonImage}
                        source={require("../src/ico/Frame.png")}

                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.filter()}
                >
                    <Image
                    style={styles.buttonImage}
                    source={require("../src/ico/filter.png")}

                />
                </TouchableOpacity>
            </View >
        )
    }

    handelPress = () => {
        this.props.handelPress !== undefined ? this.props.handelPress() : console.log("presss");
    }
}

const styles = StyleSheet.create({
    container: { height: width / 2, width: 50, position: "absolute", bottom: 20, right: 10 },
    button: {
        borderRadius: 20, width: 40, height: 40, backgroundColor: Colors.background, justifyContent: "center", alignItems: "center", opacity: 0.9, marginBottom: 15,
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
    buttonImage: { width: 15, height: 15, tintColor: Colors.buttonColor }
})