import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class Login extends Component {
  componentDidMount() {
    this.props.titleBarApi("", "Please Login", "");
  }
  render() {
    if (this.props.visible) {
      return <Text>Login Page</Text>;
    } else {
      return <View />;
    }
  }
}
