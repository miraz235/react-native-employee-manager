import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Card from './card';
import CardSection from './card.section';

export default class Login extends Component {
    componentDidMount() {
        this.props.titleBarApi("", "Please Login", "");
    }

    render() {
        if (this.props.visible) {
            return (
                <Card>
                    <CardSection>
                        <Text>Email</Text>
                    </CardSection>
                    <CardSection>
                        <Text>Password</Text>
                    </CardSection>
                    <CardSection>
                        <Text>Login Btn</Text>
                    </CardSection>
                </Card>
            );
        } else {
            return <View/>;
        }
    }
}
