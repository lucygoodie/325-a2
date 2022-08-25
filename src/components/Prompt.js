import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../Styles.js';

const urgency_colours = ['#b0c4d9', '#e8c5c1', '#fcd7ac', '#fff8cc'];

// name, lastCheckIn, onPress, urgency

export default function Prompt(props) {

    const subtitle = props.lastCheckIn === Number.MAX_VALUE ?
        "No check-ins with this friend" : ("Last checked in " + props.lastCheckIn + " days ago");

    console.log("Am I getting to 'Prompt'?");

    return (
        <View style={styles.prompt.container}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{width: "5%", height: "120%", position: 'absolute', top: 0, backgroundColor: urgency_colours[props.urgency]}}/>
                <View style={styles.prompt.text}>
                    <Text style={styles.prompt.title}>{props.name}</Text>
                    <Text style={styles.prompt.subtitle}>{subtitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
