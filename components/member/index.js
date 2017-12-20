import React, {Component} from "react";
import {View, Text} from "react-native";
import MemberList from './member-list';
import MemberDetails from "./member-details";

export default class Member extends Component {

    constructor() {
        super();
        this.employees = [
            {id: 1, name: 'Himel', phone: '123', shift: 'mon'},
            {id: 2, name: 'Rana', phone: '13', shift: 'tue'},
            {id: 3, name: 'Shuvro', phone: '23', shift: 'fri'},
            {id: 4, name: 'Proshad', phone: '12', shift: 'sun'}
        ];
        this.state = {
            listVisible: true,
            detailVisible: false
        }
        
        this.employee = {}
    }

    setEmployees(employees, employee, type){
        let empList = [];
        switch(type) {
            case 'fire':
                empList = employees.filter(e => e.id !== employee.id)
                break;
            default:
                if(employee.id) {
                    empList = employees.map(e => e.id === employee.id ? employee : e)
                } else {
                    empList = employees;
                    employee.id = employees.reduce((prevId,e) => e.id > prevId ? e.id : prevId, 0) + 1
                    empList.push(employee)
                }
        }
        return empList
    }

    goToMemberList(employee, type){
        this.employee = {}
        if(employee){
            this.employees = this.setEmployees(this.employees, employee, type)
        }
        this.setState({
            listVisible: true,
            detailVisible: false
        })
    }

    goToMemberDetails(employee) {
        this.employee = employee
        this.setState({
            listVisible: false,
            detailVisible: true
        })
    }

    renderEmployeeList() {
        if(this.state.listVisible) {
            return (
                <MemberList 
                    titleBarApi={this.props.titleBarApi} 
                    listData={this.employees}
                    goToMemberDetails={this.goToMemberDetails.bind(this)} 
                />
            )
        }
    }

    renderEmployeeDetail() {
        if(this.state.detailVisible) {
            return (
                <MemberDetails 
                    titleBarApi={this.props.titleBarApi} 
                    loadData={this.employee}
                    goToMemberList={this.goToMemberList.bind(this)}
                />
            )
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderEmployeeList()}
                {this.renderEmployeeDetail()}
            </View>
        );
    }
}
