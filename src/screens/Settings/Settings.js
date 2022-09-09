import * as React from 'react';
import styles from '../../styles/Styles.js';
import Mast from '../../components/Mast'
import BaseView from '../../components/layout/BaseView.js';
import Content  from '../../components/layout/Content.js';

import {
    Text,
    View } from 'react-native';


function Settings() {
    return (
        <BaseView>
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
        </BaseView>
    );
}

export default Settings;
