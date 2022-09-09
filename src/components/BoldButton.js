import React  from 'react';
import styles from '../styles/Styles.js';
import { Text, Pressable } from 'react-native';

export default function boldButton(props) {
    return (
        <Pressable onPress={props.onPress}
                   style={{
            width: "40%",
            height: "8%",
            marginBottom: '3%',
            backgroundColor: '#f5ab33',
            zIndex: 0,
            bottom: "0%",
            right: "2%",
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 0.5,
            borderRightWidth: 3,
            borderBottomWidth: 3,
            borderColor: '#875300'}}>
            <Text style={{
                color: "white",
                fontWeight: "bold"}}>+
                Check In
            </Text>
        </Pressable>
    );
};

