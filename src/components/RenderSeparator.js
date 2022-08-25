import React, { useState } from 'react';
import styles from '../Styles.js';
import { View } from 'react-native';

const renderSeparator = () => {
    return (
        <View style={styles.list.separator}/>
    )
};

export { renderSeparator};