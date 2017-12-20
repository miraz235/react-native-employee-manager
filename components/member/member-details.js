import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";
import Card from '../card';
import CardSection from '../card.section';
import Input from '../input';
import Button from '../buttons';
import Picker from '../picker'

export default class MemberDetails extends Component {
  dayList = [
    {name: 'Sunday', value: 'sun'},
    {name: 'Monday', value: 'mon'},
    {name: 'Tuesday', value: 'tue'},
    {name: 'Wednesday', value: 'wed'},
    {name: 'Thursday', value: 'thu'},
    {name: 'Friday', value: 'fri'},
    {name: 'Saturday', value: 'sat'}
  ]
  state = {
    id: this.props.loadData.id || 0,
    name: this.props.loadData.name || '',
    phone: this.props.loadData.phone || '',
    shift: this.props.loadData.shift || this.dayList[0].value
  }
  componentDidMount() {
      this.props.titleBarApi({text:"<", type: "button", onPress: this.onCancelPress.bind(this) }, "Employee", "");
  }

  onFirePress() {
    Alert.alert(`Fire ${this.state.name}`, 'Are you sure?', [
        {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
        {text: 'Yes', onPress: () => this.props.goToMemberList(this.state, 'fire')}
    ])
  }

  onSavePress() {
    this.props.goToMemberList(this.state)
  }

  onTextSchedulePress() {
    Alert.alert('Text Schedule')
  }

  onCancelPress() {
    this.props.goToMemberList()
  }

  renderFireButton() {
      if(this.state.id) {
          return (
            <CardSection>
                <Button onPress={this.onFirePress.bind(this)}>
                    Fire Employee
                </Button>
            </CardSection>
          )
      }
  }
  render() {
    return (
      <Card>
          <CardSection>
              <Input
                  label="Name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChangeText={name => this.setState({name})}
              />
          </CardSection>
          <CardSection>
              <Input
                  label="Phone"
                  placeholder="Your Phone"
                  value={this.state.phone}
                  onChangeText={phone => this.setState({phone})}
              />
          </CardSection>
          <CardSection>
              <Picker
                  label="Shift"
                  selectedValue={this.state.shift}
                  onValueChange={shift => this.setState({shift})}
                  itemList={this.dayList}
              />
          </CardSection>
          <CardSection>
              <Button onPress={this.onSavePress.bind(this)}>
                  Save Changes
              </Button>
          </CardSection>
          <CardSection>
              <Button onPress={this.onTextSchedulePress.bind(this)}>
                  Text Schedule
              </Button>
          </CardSection>
          {this.renderFireButton()}
      </Card>
  );
  }
}
