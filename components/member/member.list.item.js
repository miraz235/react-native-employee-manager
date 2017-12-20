import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import CardSection  from '../card.section';

class MemberListItem extends Component {

    onRowPress() {
        this.props.onRowPress(this.props.employee)
    }

    render() {
        const { name, phone, shift } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <View style={styles.containerStyle}>
                            <View>
                                <Text style={styles.titleStyle}>
                                    {name}
                                </Text>
                                <Text style={[styles.titleStyle, styles.heighLightStyle]}>
                                    {phone}
                                </Text>
                            </View>
                            <Text>
                                {shift}
                            </Text>
                        </View>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18
    },
    heighLightStyle: {
        color: '#000000'
    },
    containerStyle: {
        height: 48,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
};

export default MemberListItem;