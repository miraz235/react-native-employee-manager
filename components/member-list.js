import React, {Component} from "react";
import {Text, View} from "react-native";

export default class MemberList extends Component {

    componentDidMount() {
        if (this.props.visible)
            this.props.titleBarApi("", "Employees", "Add");
    }

    render() {
        if (this.props.visible) {
            return <Text>Member List</Text>;
        } else {
            return <View/>;
        }
    }
}
