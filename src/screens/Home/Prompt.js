import React, { useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styles from '../../styles/Styles.js';


export default function Prompt(props) {

    const subtitle = props.lastCheckIn === Number.MAX_VALUE ?
        "No check-ins with this friend" : ("Last checked in " + props.lastCheckIn + " days ago");

    return (
            <TouchableOpacity style={styles.screens.home.prompt.container} onPress={props.onPress}>
                <View style={styles.screens.home.prompt.urgency}>
                    <Urgency urgency = {props.urgency}/>
                </View>
                <View style={styles.screens.home.prompt.text}>
                    <Text style={styles.screens.home.prompt.text.heading}>{props.name}</Text>
                    <Text style={styles.screens.home.prompt.text.subtitle}>{subtitle}</Text>
                </View>
            </TouchableOpacity>
    );
}

function Urgency(props) {
    const urgency_colours = ['#b0c4d9', '#e8c5c1', '#fcd7ac', '#fff8cc'];
    return (
        <View style={{flex: 1, backgroundColor: urgency_colours[props.urgency]}}/>
    );
};
