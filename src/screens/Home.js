import React, { useState, useEffect } from 'react';
import Prompt from '../components/Prompt.js';
import { formatDateHelper } from "../utils/helpers.js"
import PromptList from '../components/PromptList.js';
import Mast from '../components/Mast.js';
import styles from '../styles/Styles.js';

import { useSelector, useDispatch } from 'react-redux'

import {
    Text,
    View, SafeAreaView, Fragment} from 'react-native';

const TEST_USER_ID = 'G29z3jX0xQhJ99n7Ig7hAudGgVq1';

function Home({navigation}) {

    // const { store } = useContext(ReactReduxContext);

    const user = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    const [today, setToday] = useState("");

    useEffect(() => {
        setToday(formatDateHelper(new Date()));
    });

    return (
        <View style={[styles.layout.span]}>
            <SafeAreaView style={[styles.layout.safeArea]}>

                <View style={[styles.layout.topButtonArea]}/>
                <View style={styles.layout.mast}>
                    <Text style={styles.mast.text.subtitle}>Hello!</Text>
                    <Text style={[styles.mast.text.heading, {paddingBottom: "5%"}]}>{today}</Text>
                </View>
                <View style={styles.layout.contentArea}>
                    <View style={styles.home.promptListContainer}>
                        <PromptList navigation={navigation} user_id={TEST_USER_ID}></PromptList>
                    </View>
                </View>

            </SafeAreaView>

        </View>

    );

}

export default Home;