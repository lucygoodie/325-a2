import React, { useState } from 'react';
import styles from '../styles/Styles.js';
import {
    View,
    ActivityIndicator
} from 'react-native';


const renderFooter = (loading) => {

    if (loading) return null;

    return (
        <View style={styles.render.footer}>
            <ActivityIndicator animating size='large' color='grey'/>
        </View>
    )
};

export { renderFooter };