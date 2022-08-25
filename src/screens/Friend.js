import React, { useState, useEffect } from 'react';
// import {Avatar, Div, Icon, Input} from "react-native-magnus";
import  CheckinList  from '../components/CheckinList.js';
import { formatBirthdayHelper, formatReminderFrequency } from "../helpers.js"
import { get } from '../database.js';
import { where } from "firebase/firestore";
import StylisedButton, { stylisedButton } from '../components/StylisedButton.js';
import Mast from '../components/Mast.js';
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import styles from '../Styles.js';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    FlatList
} from 'react-native';

const USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

function Friend({route, navigation}) {

    const friend = route.params.friend;
    const user_id = USER_ID;

    return (
        <View style={styles.container}>
            <Mast>
                <View style={styles.mast.buttonStrip}>
                    <StylisedButton onPress={() => navigation.goBack(null)} buttonText={""}>
                        <Image source = {require('../assets/back.jpg')}
                               resizeMode = 'contain'
                               style = {{ width: 15, height: 15 }}/>
                    </StylisedButton>
                    <StylisedButton onPress={() => {navigation.navigate('EditFriend', {friend: friend});}} buttonText={"Edit"}>
                    </StylisedButton>
                </View>
                <View style={styles.mast.content}>
                            <Image source={require('../assets/friend.jpg')} resizeMode = 'contain' style={styles.mast.contactImage}/>
                    <View style={styles.mast.text}>
                        <Text style={styles.mast.header}>{friend.f_name + " " + friend.l_name}</Text>
                    </View>
                </View>
            </Mast>

            <View style={styles.screen}>
                <View style={styles.friend.infoContainer}>

                    <View style={styles.friend.infoDetail}>
                        <Text style={styles.friend.infoTextHeader}>Birthday</Text>
                        <Text style={styles.friend.infoTextSubtitle}>{formatBirthdayHelper(new Date(friend.dob))}</Text>
                    </View>

                    <View style={styles.friend.infoDetail}>
                        <Text style={styles.friend.infoTextHeader}>Reminder Frequency</Text>
                        <Text style={styles.friend.infoTextSubtitle}>{formatReminderFrequency(friend.reminder_frequency)}</Text>
                    </View>
                </View>

                <View style={styles.friend.checkins}>
                    <View style = {styles.list}>
                        <CheckinList
                            user_id={user_id}
                            friend_id={friend.id}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Friend;