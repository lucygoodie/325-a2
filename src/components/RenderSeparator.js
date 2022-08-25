import React, { useState } from 'react';
import styles from '../Styles.js';
import { View } from 'react-native';

const renderSeparator = () => {
    return (
        <View style={styles.render.separator}/>
    )
};

export { renderSeparator};