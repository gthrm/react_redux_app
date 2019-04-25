import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from "react-native";

import Colors from '../constants/Colors';

const { width, height } = Dimensions.get('window');

export default class PayItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.openItem}>
                    <View
                        style={styles.container}
                    >
                        <View style={{ flex: 1, maxWidth: 60, justifyContent: "flex-start", alignItems: "center" }}>
                            <Image
                                style={styles.typeImage}
                                source={require("../src/ico/freeicon.png")}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{ fontWeight: "600" }}
                            >
                                {this.props.pay.title}
                            </Text>
                            <Text>
                                {this.props.pay.date}
                            </Text>
                        </View>
                        <View style={{ flex: 1, maxWidth: 60, alignItems: "flex-end", paddingRight: 15 }}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => { console.log("В избранное") }}>
                                <Image
                                    style={{ width: 33 / 2, height: 33 / 2 }}
                                    source={require("../src/ico/Star.png")}
                                />
                            </TouchableOpacity>
                            <View
                                style={{ minWidth: 100, flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingBottom: 5 }}
                            >
                                <Text
                                    style={{ fontSize: 15, color: Colors.blueText, paddingRight: 5 }}
                                >
                                   {this.props.pay.price}
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }

    openItem = () => {

        // console.log("open")

    };
}

const styles = StyleSheet.create({
    container: {
        height: 70, flexDirection: "row", borderBottomColor: Colors.border, borderBottomWidth: 1, paddingTop: 10, paddingLeft: 10

    },
    typeImage: {
        width: 40,
        height: 40
    }
})