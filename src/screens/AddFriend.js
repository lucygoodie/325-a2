import React, { useState, useEffect } from 'react';
import styles from '../Styles.js';
import StylisedButton  from '../components/StylisedButton.js';
import Mast from '../components/Mast.js';
import {
    Text,
    View,
    Image } from 'react-native';

function AddFriend({navigation}) {

    const [emptyForm, setEmptyForm] = useState(true);

    return (
        <View style={styles.container}>
            <Mast>
                <View style={styles.mast.buttonStrip}>
                    <StylisedButton onPress={() => navigation.goBack(null)} buttonText={""}>
                        <Image source = {require('../assets/back.jpg')}
                               resizeMode = 'contain'
                               style = {{ width: 15, height: 15 }}/>
                    </StylisedButton>
                    { emptyForm ? null :
                        (<StylisedButton onPress={() => {console.log('doin something else')}} buttonText={"Confirm"}/>)}
                </View>
                <View style={styles.mast.content}>
                    <View style={styles.mast.text}>
                        <Text style={styles.mast.header}>Add Friend</Text>
                    </View>
                </View>
            </Mast>

            <View style={styles.screen}>
                <Text>Just about any old thing</Text>
            </View>
        </View>
    );
}

export default AddFriend;

