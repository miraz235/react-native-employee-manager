import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import  CardSection  from './card.section';

class MemberListItem extends Component {

    onRowPress() {

    }

    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default MemberListItem;