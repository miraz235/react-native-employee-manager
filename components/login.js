import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Card from './card';
import CardSection from './card.section';
import Input from './input';
import Button from './buttons';

export default class Login extends Component {

    onEmailChange(text) {
        this.props.email = text;
    }

    onPasswordChange(text) {
        this.props.password = text;
    }

    onButtonPress() {

    }

    componentDidMount() {
        this.props.titleBarApi("", "Please Login", "");
    }

    render() {
        if (this.props.visible) {
            return (
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="email@gmail.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Login
                        </Button>
                    </CardSection>
                </Card>
            );
        } else {
            return <View/>;
        }
    }
}
