import React, { useState } from 'react';
import styles from '../Styles.js';
import {
    Text,
    View,
    Image
} from 'react-native';

// type, notes, date
export default function CheckIn(props) {
    return (
        <View style={styles.checkins.container}>
            <View style={styles.checkins.date}>

            </View>

            <View style={styles.checkins.text}>
                <Text style={styles.checkins.subtitle}>{props.date}</Text>
                <Text style={styles.checkins.title}>{props.type}</Text>
                <Text style={styles.checkins.subtitle}>{props.notes}</Text>
            </View>
        </View>
    );
}
