import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class MemberDetails extends Component {
  render() {
    if (this.props.visible) {
      return <Text>Login Page</Text>;
    } else {
      return <View />;
    }
  }
}
