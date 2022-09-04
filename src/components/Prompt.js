import React, { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import styles from '../styles/Styles.js';

const urgency_colours = ['#b0c4d9', '#e8c5c1', '#fcd7ac', '#fff8cc'];

// name, lastCheckIn, onPress, urgency

export default function Prompt(props) {

    const subtitle = props.lastCheckIn === Number.MAX_VALUE ?
        "No check-ins with this friend" : ("Last checked in " + props.lastCheckIn + " days ago");

    return (
        <View>

            <TouchableOpacity style={styles.home.promptContainer} onPress={props.onPress}>

                <View style={styles.home.promptUrgency}>
                    <View style={{flex: 1, backgroundColor: urgency_colours[props.urgency]}}/>
                </View>

                <View style={styles.home.promptText}>
                    <Text style={styles.home.promptHeading}>{props.name}</Text>
                    <Text style={styles.home.promptSubtitle}>{subtitle}</Text>
                </View>

            </TouchableOpacity>

        </View>

    );
}
