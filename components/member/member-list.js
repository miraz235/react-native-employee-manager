import React, {Component} from "react";
import {ListView, View, Button} from "react-native";
import MemberListItem from './member.list.item';

export default class MemberList extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.createDataSource();
    }

    createDataSource(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.listData);
    }

    componentDidMount() {
        this.props.titleBarApi("", "Employees", {text:"Add", type: "button", onPress: this.props.goToMemberDetails });
    }

    renderRow(employee) {
        return <MemberListItem employee={employee} onRowPress={this.props.goToMemberDetails}/>;
    }

    render() {
        return (
            <View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}
