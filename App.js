/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import Topbar from "./components/topbar";
import Login from "./components/login";
import MemberList from "./components/member-list";
import MemberDetails from "./components/member-details";

export default class App extends Component {
  state = {
    loginVisible: true,
    listVisible: false,
    detailsVisible: false,
    titleBarRight: "",
    titleBarTitle: "",
    titleBarLeft: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <Topbar
          leftText={this.state.titleBarLeft}
          title={this.state.titleBarTitle}
          rightText={this.state.titleBarRight}
        />
        <Login
          visible={this.state.loginVisible}
          titleBarApi={this.setTitleBar.bind(this)}
        />
        <MemberList visible={this.state.listVisible} />
        <MemberDetails visible={this.state.detailsVisible} />
      </View>
    );
  }

  setTitleBar(left, title, right) {
    this.setState({
      titleBarRight: left,
      titleBarTitle: title,
      titleBarLeft: right
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
