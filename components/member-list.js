import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class MemberList extends Component {
  render() {
    if (this.props.visible) {
      return <Text>Member List</Text>;
    } else {
      return <View />;
    }
  }
}
