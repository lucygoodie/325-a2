import React, { useState, useEffect } from 'react';
import Prompt from '../components/Prompt.js';
import { formatDateHelper } from "../helpers.js"
import PromptList from '../components/PromptList.js';
import Mast from '../components/Mast.js';
import styles from '../Styles.js';

import {
    Text,
    View, SafeAreaView, Fragment} from 'react-native';

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

function Home({navigation}) {

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


    // return (
    //     <View style={styles.layout.backgroundScreen}>
    //         <SafeAreaView style={styles.layout.safeArea}>
    //
    //
    //             <Mast>
    //                 <View style={styles.mast.buttonStrip}/>
    //                 <View style={styles.mast.content}>
    //                     <View style={styles.mast.text}>
    //                         <Text style={styles.mast.subtitle}>Hello!</Text>
    //                         <Text style={styles.mast.header}>{today}</Text>
    //                     </View>
    //                 </View>
    //             </Mast>
    //
    //             <View style={styles.home.screen}>
    //                 <Text>try something here?</Text>
    //                 <PromptList navigation={navigation} user_id={TEST_USER_ID}></PromptList>
    //             </View>
    //
    //         </SafeAreaView>
    //
    //     </View>
    // );
}

export default Home;