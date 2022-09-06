import React, { useState, useEffect } from 'react';
import  CheckinList  from '../components/CheckinList.js';
import { formatBirthdayHelper, formatReminderFrequency } from "../utils/helpers.js"
import { get } from '../services/database.js';
import { where } from "firebase/firestore";
import StylisedButton, { stylisedButton } from '../components/StylisedButton.js';
import Mast from '../components/Mast.js';
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import styles from '../styles/Styles.js';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View,
    Button,
    Image,
    FlatList
} from 'react-native';

const USER_ID = 'G29z3jX0xQhJ99n7Ig7hAudGgVq1';

function Friend({route, navigation}) {


    const friend = route.params.friend;
    const user_id = USER_ID;

    return (
        <View style={[styles.layout.span]}>
            <SafeAreaView style={[styles.layout.safeArea]}>

                <View style={[styles.layout.topButtonArea]}>
                    <StylisedButton onPress={() => navigation.goBack(null)} buttonText={""}>
                        <Image source = {require('../assets/back.bmp')}
                               resizeMode = 'contain'
                               style = {{ width: 20, height: 20 }}
                               borderRadius={10}

                        backgroundColor='white' />
                    </StylisedButton>
                    <StylisedButton onPress={() => {navigation.navigate('EditFriend', {friend: friend});}} buttonText={"Edit"}>
                    </StylisedButton>
                </View>

                <View style={[styles.layout.mast, styles.friend.mast]}>
                    <Image source={require('../assets/placeholder.bmp')} resizeMode = 'contain' style={styles.friend.image}/>
                    <View style={[styles.mast.text, { justifyContent: 'center'}]}>
                        <Text style={styles.mast.text.heading}>{friend.f_name + " " + friend.l_name}</Text>
                    </View>
                </View>

                <View style={styles.layout.contentArea}>

                    <View style={[styles.home.promptListContainer, {flexDirection: 'row', flex: 2, paddingRight: "0.5%", marginBottom: "2%"}]}>

                        <View style={[styles.home.promptContainer, styles.friend.infoContainer, {flex: 1.15,}]}>
                            <Text style={styles.friend.infoTextHeader}>Reminder Frequency</Text>
                            <Text style={styles.friend.infoTextSubtitle}>{formatReminderFrequency(friend.reminder_frequency)}</Text>
                        </View>

                        <View style={[styles.home.promptContainer, styles.friend.infoContainer]}>
                            <Text style={styles.friend.infoTextHeader}>Birthday</Text>
                            <Text style={styles.friend.infoTextSubtitle}>{formatBirthdayHelper(new Date(friend.dob))}</Text>
                        </View>
                    </View>


                    <View style={{flex: 11}}>
                        <View style={[styles.home.promptDivider, {marginLeft: "4%", marginRight: "4%", marginBottom: "0.5%",}]}>
                            <Text style={styles.home.promptDividerText}>LOG WITH {friend.f_name.toUpperCase()}</Text>
                        </View>
                            <CheckinList
                                user_id={user_id}
                                friend_id={friend.id}
                                name={friend.f_name}/>

                        <View style={{
                            width: "40%",
                            height: "20%",
                            backgroundColor: '#f5ab33',
                            zIndex: 0,
                            bottom: "0%",
                            right: "2%",
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderWidth: 0.5,
                            borderRightWidth: 3,
                            borderBottomWidth: 3,
                            borderColor: '#875300'}}>
                            <Text style={{
                                color: "white",
                                fontWeight: "bold"}}>+ Check In</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.layout.unsafeBottomArea}/>
            </View>
    );
}

export default Friend;
