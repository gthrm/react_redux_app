import React from 'react';
import { Animated, View, Image, Dimensions, StyleSheet, TouchableOpacity, Platform } from "react-native";

import Colors from '../constants/Colors';

import { connect } from "react-redux";
import dispatch from "../store/dispatch.js";
import { ScrollView } from 'react-native-gesture-handler';

import List from "./List";
import Item from "./Item";

const heightMenu = - Dimensions.get("window").height / 3 - 15

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bottom: new Animated.Value(heightMenu)
        }
    };



    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            this.openMenu()
        } else if (!nextProps.isOpen) {
            this.closeMenu()
        }
    }

    render() {
        return (
            <Animated.View
                style={[styles.container, { bottom: this.state.bottom }]}
            >
                <View
                    style={styles.button}
                >
                    <TouchableOpacity onPress={() => this.props.handelBlurMenu()} >
                        <Image
                            style={{ width: 15, height: 15, tintColor: Colors.buttonColor }}
                            source={require("../src/ico/closed.png")}

                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    contentContainerStyle={styles.contentContainer}
                >

                    {
                        this.props.typeMenu === "list" ?
                            (<List navigation={this.props.navigation} chanageLocation={this.props.chanageLocation} markers={this.props.markerData} />)
                            : this.props.typeMenu === "item" ?
                                (<Item navigation={this.props.navigation} open={true} openInfo={true} chanageLocation={this.props.chanageLocation} marker={this.props.markerData} />)
                                : null
                    }

                </ScrollView>
            </Animated.View>
        )
    }

    openMenu = () => {
        Animated.timing(                  // Animate over time
            this.state.bottom,            // The animated value to drive
            {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
                duration: 400,              // Make it take a while
            }
        ).start();
    }

    closeMenu = () => {
        Animated.timing(                  // Animate over time
            this.state.bottom,            // The animated value to drive
            {
                toValue: heightMenu,                   // Animate to opacity: 1 (opaque)
                duration: 400,              // Make it take a while
            }
        ).start();
    }
}
export default connect(
    dispatch.mapStateToProps,
    dispatch.mapDispatchToProps
)(Menu);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: Colors.background,

        width: Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 40,
        width: 40,
        position: "absolute",
        top: -15,
        right: 15,
        backgroundColor: Colors.background,
        justifyContent: "center",
        alignItems: "center"
    },

    contentContainer: {
        width: Dimensions.get("window").width,

    }
});