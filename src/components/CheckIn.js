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
        <View style={styles.checkin.container}>
            <View style={styles.checkin.date}>

            </View>

            <View style={styles.checkin.text}>
                <Text style={styles.checkin.subtitle}>{props.date}</Text>
                <Text style={styles.checkin.title}>{props.type}</Text>
                <Text style={styles.checkin.subtitle}>{props.notes}</Text>
            </View>
        </View>
    );
}
