import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import Interactable from 'react-native-interactable';

import { connect } from "react-redux";
import dispatch from "../store/dispatch.js";
import Colors from '../constants/Colors.js';

import { getStatusBarHeight } from 'react-native-status-bar-height';
const statusBarHeight = getStatusBarHeight();

const { width, height } = Dimensions.get('window');

class StarsScreen extends Component {

    static navigationOptions = {
        title: null,
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            snapToIndex: 0
        }
    }

    componentDidMount() {

    }

    shouldComponentUpdate(nextProps, nextState) {

        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <Interactable.View
                    ref='headInstance'
                    verticalOnly={true}
                    snapPoints={[{ y: 0 }, { y: height / 2 }, { y: height - statusBarHeight - 60 }]}
                    initialPosition={{ y: height / 2 }}>
                    <View style={{ width: width, height: height, backgroundColor: Colors.greyTextColor }}>
                        <Text>StarsScreen</Text>
                        <Text>Ширина экрана: {width}</Text>
                        <Text>Высота экрана: {height}</Text>
                        <Text>Высота статус-бара: {statusBarHeight}</Text>
                    </View>
                </Interactable.View>

            </View>
        );
    };

    onButtonPress() {
        this.refs['headInstance'].snapTo({ index: this.state.snapToIndex });
        this.setState({
            snapToIndex: this.state.snapToIndex
        });
    };
}


export default connect(
    dispatch.mapStateToProps,
    dispatch.mapDispatchToProps
)(StarsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.background
    },
    // map: {
    //   ...StyleSheet.absoluteFillObject
    // },
});
