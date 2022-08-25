import * as React from 'react';
import Mast from '../components/Mast.js';
import styles from '../Styles.js';
import {
    Text,
    View } from 'react-native';

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

function Settings() {
    return (
        <View style={styles.container}>
            <Mast>
                <View style={styles.mast.buttonStrip}/>
                <View style={styles.mast.contentC}>
                    <View style={styles.mast.text}>
                        <Text style={styles.mast.header}> Settings</Text>
                    </View>
                </View>
            </Mast>
        </View>
    );
}

export default Settings;
