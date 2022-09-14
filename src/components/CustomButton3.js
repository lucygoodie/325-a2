import React  from 'react';
import styles from '../styles/Styles.js';
import { Text, Pressable } from 'react-native';

// Custom button component

export default function CustomButton3(props) {
    return (
        <Pressable onPress={props.onPress}
                   style={[styles.components.customButton3, props.additionalStyling]}>
            <Text style={styles.components.customButton3.text}>{props.text}
            </Text>
        </Pressable>
    );
};

