import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';

export default class Login extends Component {

    constructor() {
        super()
        this.emailAddress = '';
        this.password = '';
    }

    onEmailChange(text) {
        this.emailAddress = text;
    }

    onPasswordChange(text) {
        this.password = text;
    }

    onButtonPress() {
        if (this.emailAddress.length > 0 && this.password.length > 0) {
            this.props.goToMember();
        }
    }

    componentDidMount() {
        this.props.titleBarApi("", "Please Login", '');
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
