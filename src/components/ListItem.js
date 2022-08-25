import React, { useState } from 'react';
import styles from '../Styles.js';
import {
    Text,
    TouchableOpacity
} from 'react-native';

// props holds an onPress, and f_name/l_name
export default function ListItem(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.list.item}>
            <Text style={styles.list.name}>{props.f_name + " " + props.l_name}</Text>
        </TouchableOpacity>
    );
};

