import React, { useState, useEffect } from 'react';
import Prompt from "../components/Prompt";
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import styles from '../Styles.js';
import { daysBetween, comparePrompts, frequencyInDays } from '../helpers.js';
import { get } from '../database.js';
import { where } from "firebase/firestore";
import {
    Text,
    FlatList,
    View,
    ActivityIndicator, SectionList } from 'react-native';

export default function PromptList(props) {

    const user_id = props.user_id;

    const [loading, setLoading] = useState(false);
    const [sectionedPrompts, setSectionedPrompts] = useState([]);

    useEffect(() => {
        get("checkins", [where("user_id", "==", user_id)], "date")
            .then((checkins) => {
                get("connections", [where("user_id", "==", user_id)], "")
                    .then( friends => {

                        let birthdays = [];
                        let overdue = [];
                        let prompts1 = [];

                        // TODO
                        // set the correct urgency

                        friends.forEach( friend => {
                            var friendCheckIns = (checkins.filter((c) => { return c.friend_id === friend.id}));
                            var lastCheck = friendCheckIns.length > 0 ?
                                daysBetween((new Date((friendCheckIns[friendCheckIns.length - 1]).date)), new Date()) : Number.MAX_VALUE;
                            var howOverdue = lastCheck - frequencyInDays(friend.reminder_frequency);

                            var obj = {...friend, daysSinceCheckIn: lastCheck, overdueBy: howOverdue};
                            prompts1.push(obj);

                            if ((new Date()).toDateString() === new Date(friend.dob).toDateString()) {
                                birthdays.push(obj);
                            } else if (howOverdue > 0) {
                                overdue.push(obj);
                            }
                        });

                        setSectionedPrompts((birthdays.length > 0) ? [{title: "Birthdays", data: birthdays}, {title: "Prompts", data: overdue.sort(comparePrompts)}] :
                        [{title: "Prompts", data: overdue.sort(comparePrompts)}] );
                    });
            });
        setLoading(true);
    }, []);

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
            <SectionList
                sections={sectionedPrompts}
                renderItem={renderPrompt}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter(loading)}
                renderSectionHeader={({ section: { title } }) =>
                    (<View style={styles.home.promptDivider}>
                        <Text style={styles.home.promptDividerText}>{title.toUpperCase()}</Text>
                    </View>)}
            />
        </View>
    );
};
