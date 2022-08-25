import React, { useState, useEffect } from 'react';
import Prompt from '../components/Prompt.js';
import { formatDateHelper } from "../helpers.js"
import PromptList from '../components/PromptList.js';
import Mast from '../components/Mast.js';
import styles from '../Styles.js';
import {
    Text,
    View} from 'react-native';

////////////////////////////////////////
// TODO -- HOME
    // have to get users friends and apply logic to find PROMPTS:
        // anyone with birthdays today
        // anyone who user is due to check in with
////////////////////////////////////////

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

function Home({navigation}) {

    const [today, setToday] = useState("");

    useEffect(() => {
        setToday(formatDateHelper(new Date()));
    });

    return (
        <View style={styles.home.container}>
            <Mast>
                <View style={styles.mast.buttonStrip}/>
                <View style={styles.mast.content}>
                    <View style={styles.mast.text}>
                        <Text style={styles.mast.subtitle}>Hello!</Text>
                        <Text style={styles.mast.header}>{today}</Text>
                    </View>
                </View>
            </Mast>

            <View style={styles.home.screen}>
                <Text>try something here?</Text>
                <PromptList navigation={navigation} user_id={TEST_USER_ID}></PromptList>
            </View>
        </View>
    );
}

export default Home;