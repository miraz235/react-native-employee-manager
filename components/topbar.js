import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Topbar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.leftText}</Text>
                <Text style={styles.textStyle}>{this.props.title}</Text>
                <Text>{this.props.rightText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});
