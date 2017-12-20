import React from 'react';
import { View, Text, Picker, Platform } from 'react-native';

const PickerInput = ({ label, selectedValue, onValueChange, itemList}) => (
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <Picker style={styles.inputStyle}
              selectedValue={selectedValue}
              onValueChange={onValueChange}>
              { itemList.map((item, i) => {
                    return <Picker.Item key={i} label={item.name} value={item.value} />
                }) }
        </Picker>   
    </View>
);

const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

if(Platform.OS == "ios") {
    styles.inputStyle.height = 200
    styles.inputStyle.width = '100%'
    styles.labelStyle.paddingTop = 10
    styles.containerStyle.flexDirection = 'column'
    styles.containerStyle.alignItems = 'flex-start'
} else {
    styles.inputStyle.flex = 2
    styles.labelStyle.flex = 1
    styles.containerStyle.height = 40
}

export default PickerInput;