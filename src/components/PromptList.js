import React, { useState, useEffect } from 'react';
import Prompt from "../components/Prompt";
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import styles from '../Styles.js';
import { daysBetween } from '../helpers.js';
import { get } from '../database.js';
import { where } from "firebase/firestore";
import {
    FlatList,
    View,
    ActivityIndicator } from 'react-native';

// have to get users friends and apply logic to find PROMPTS:
// anyone with birthdays today
// anyone who user is due to check in with

function sectionPromps(prompts) {
    let b = [];
    forEach
};

export default function PromptList(props) {

    const user_id = props.user_id;

    const [loading, setLoading] = useState(false);
    const [friends, setFriends] = useState([]);
    const [prompts, setPrompts] = useState([]);
    const [checkins, setCheckins] = useState([]);

    useEffect(() => {
        get("connections", [where("user_id", "==", user_id)], "")
            .then( res => { setFriends(res) });
    }, []);

    useEffect(() => {
        get("checkins", [where("user_id", "==", user_id)], "date")
            .then( res => { setCheckins(res) });
    }, []);

    console.log("Am I getting to 'PromptList'?");

    useEffect(() => {
        setPrompts(friends.map(
            (friend) => {
                var logs = (checkins.filter((c) => { return c.friend_id === friend.id}))
                var log = logs.length > 0 ?
                    daysBetween((new Date((logs[logs.length - 1]).date)), new Date())
                    // daysBetween(new Date((logs[logs.length - 1]).date), new Date())
                    : Number.MAX_VALUE;
                return {...friend, daysSinceCheckIn: log};
            }));
        setLoading(true);
    }, []);

    console.log(prompts);

    function renderPrompt ({ item }) {
        return (
            <Prompt
                name={item.f_name + " " + item.l_name}
                lastCheckIn={item.daysSinceCheckIn}
                onPress={() => { props.navigation.navigate('Friend', {friend: item}); }}
                urgency={1}
            />
        );
    };

    return (
        <View style = {styles.list.container}>
            <FlatList
                data={prompts}
                renderItem={renderPrompt}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter(loading)}/>
        </View>
    );
};
