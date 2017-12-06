import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class Topbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.leftText}</Text>
        <Text>{this.props.title}</Text>
        <Text>{this.props.rightText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Platform.OS == "ios" ? 20 : 0,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#e6e6e6"
  }
});
