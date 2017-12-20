import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Platform, Alert} from 'react-native';

export default class Topbar extends Component {
    renderProp(prop){
        let obj = {text: ""}
        if(typeof prop === 'object') {
            obj = prop
        } else {
            obj.text = prop
        }

        switch(obj.type){
            case 'button': 
                return (
                    <Button onPress={obj.onPress}
                            title={obj.text}
                    />
                )
            default:
                return (
                    <Text style={styles.textStyle}>{obj.text}</Text>
                )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderProp(this.props.left)}
                {this.renderProp(this.props.title)}
                {this.renderProp(this.props.right)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS == "ios" ? 20 : 0,
        flexDirection: "row-reverse",
        backgroundColor: '#F8F8F8',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        paddingLeft: 15,
        paddingRight: 15
    },
    textStyle: {
        fontSize: 20
    }
});
