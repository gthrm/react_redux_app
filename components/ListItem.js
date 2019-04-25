import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from "react-native";

import Colors from '../constants/Colors';
import ButtonOvality from './ButtonOvality';

const { width, height } = Dimensions.get('window');

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
            openInfo: this.props.openInfo ? this.props.openInfo : false
        }
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.openItem() }}>
                    <View
                        style={styles.container}
                    >
                        <View style={{ flex: 1, maxWidth: 60, justifyContent: "flex-start", alignItems: "center" }}>
                            <Image
                                style={styles.typeImage}
                                source={this.getImage(this.props.marker.status)} //require("../src/ico/Image.png")
                            />
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text
                                style={{ fontWeight: "600" }}
                            >
                                {`Зарядная станция: ${this.props.marker.type}`}
                            </Text>
                            <Text>
                                {this.props.marker.adress}
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
                                style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingBottom: 5 }}
                            >
                                <Text
                                    style={{ fontSize: 10, color: Colors.blueText, paddingRight: 5 }}
                                >
                                    1 km
                                </Text>
                                <Image
                                    style={{ width: 33 / 2, height: 33 / 2 }}
                                    source={require("../src/ico/arrow.png")}
                                />
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
                {this.state.open
                    ? <View
                        style={{ height: 126 / 2 * 3 / 2, backgroundColor: Colors.backgroundTop, borderBottomColor: Colors.borderColorTop, borderBottomWidth: 1 }}
                    >
                        <View
                            style={{ flex: 1, paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
                        >
                            <Text
                                style={{ fontSize: 12, paddingRight: 5 }}
                            >
                                Выберете разъем
                    </Text>
                            <TouchableOpacity
                                onPress={() => this.openInfo()}
                                style={{ flex: 1, flexDirection: "row" }}
                            >
                                <View style={{ flex: 1, maxWidth: 50, justifyContent: "center", alignItems: "flex-start" }}>
                                    <Image
                                        style={{ width: 42 / 2, height: 42 / 2, marginLeft: 10 }}
                                        source={this.getTypeImage(this.props.marker.type)}
                                    />
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
                                    <Text
                                        style={{ fontSize: 12, paddingRight: 5, fontWeight: "600" }}
                                    >
                                        {this.props.marker.type}
                                    </Text>
                                    <Text
                                        style={{ fontSize: 10, paddingRight: 5, color: Colors.greyTextColor }}
                                    >
                                        Разъем
                                </Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text
                                            style={{ fontSize: 12, paddingRight: 5, fontWeight: "600" }}
                                        >
                                            {`${this.props.marker.power} кВ`}
                                        </Text>
                                        <Image
                                            style={{ width: 36 / 2, height: 36 / 2 }}
                                            source={require("../src/ico/fl.png")}
                                        />
                                    </View>

                                    <Text
                                        style={{ fontSize: 10, paddingRight: 5, color: Colors.greyTextColor }}
                                    >
                                        Мощность
                                </Text>

                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                                    <Text
                                        style={{ fontSize: 12, paddingRight: 5, fontWeight: "600" }}
                                    >
                                        ₽₽<Text
                                            style={{ fontSize: 12, paddingRight: 5, fontWeight: "600", color: Colors.greyTextColor }}
                                        >₽</Text>
                                    </Text>
                                    <Text
                                        style={{ fontSize: 10, paddingRight: 5, color: Colors.greyTextColor }}
                                    >
                                        Цена
                                </Text>
                                </View>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
                                    <Image
                                        style={{ width: 42 / 2, height: 42 / 2 }}
                                        source={require("../src/ico/open.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null}
                {this.state.openInfo
                    ? <View
                        style={{ flex: 1, minHeight: 126 / 2 * 3, backgroundColor: Colors.backgroundTop, justifyContent: "center", alignItems: "center" }}
                    >
                        <View
                            style={{ minWidth: width / 2 }}
                        >
                            <View style={{ flexDirection: "row", paddingTop: 10, alignItems: "center" }}>
                                <Text
                                    style={{ fontSize: 10, color: Colors.greyTextColor, paddingRight: 5, flex: 1 }}
                                >
                                    Заряд
                        </Text>
                                <Text
                                    style={{ fontSize: 12, color: Colors.textColor, paddingRight: 5, textAlign: "right", flex: 1 }}
                                >
                                    {`${this.props.marker.price} ₽ / мин.`}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row", paddingTop: 5, alignItems: "center" }}>
                                <Text
                                    style={{ fontSize: 10, color: Colors.greyTextColor, paddingRight: 5, flex: 1 }}
                                >
                                    Бронирование
                        </Text>
                                <Text
                                    style={{ fontSize: 12, color: Colors.textColor, paddingRight: 5, textAlign: "right", flex: 1 }}
                                >
                                    {`${this.props.marker.price} ₽ / мин.`}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", paddingTop: 30 }}>
                            <ButtonOvality color={"#10CF5C"} text="Забронировать" handelPress={()=>this.props.navigation.navigate("Status")} />
                        </View>
                    </View>
                    : null
                }
            </View>
        )
    }

    getImage = (status) => {
        switch (status) {
            case "free":
                return require("../src/ico/freeicon.png");
            case "busy":
                return require("../src/ico/busyicon.png");
            default:
                break;
        }
    }

    openItem = () => {
        if (this.state.openInfo) {
            this.setState({ openInfo: false })
        }
        // console.log(this.props.marker)
        this.props.chanageLocation(this.props.marker.latlng)
        this.setState({ open: !this.state.open })
    };

    openInfo = () => {
        // console.log(this.props.marker)
        this.setState({ openInfo: !this.state.openInfo })
    };

    getTypeImage = (type) => {
        switch (type) {
            case "Type 2":
                return require("../src/ico/type2.png");

            default:
                break;
        }
    }

    handelPress = () => {
        this.props.handelPress !== undefined ? this.props.handelPress() : console.log("presss");
    }
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