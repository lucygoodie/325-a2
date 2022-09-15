
// list of prompts for the user, sorted into sections

import React, { useState, useEffect } from 'react';
import Prompt from "./Prompt";
import { renderSeparator } from "../../components/RenderSeparator.js";
import { renderFooter } from "../../components/RenderFooter.js";
import styles from '../../styles/Styles.js';
import { daysBetween, comparePrompts, frequencyInDays, getUrgency } from '../../utils/helpers.js';
import { get } from '../../services/database.js';
import { where } from "firebase/firestore";
import { connect } from 'react-redux';
import { loadFriends } from '../../redux/actions/friends_actions';
import { Text, View, SectionList } from 'react-native';
import Header from '../../components/Header.js';


function setSections(friends) {
    let today = new Date();
    let birthdays = [];
    let prompts = [];
    friends.forEach(friend => {
        let dob = new Date(friend.dob);
        if ((dob.getDate() === today.getDate()) && (dob.getMonth() === today.getMonth())) {
            birthdays.push({...friend, urgency: 0});
        } else if (friend.overdueBy > 0) {
            prompts.push({...friend, urgency: getUrgency(friend.overdueBy)});
        }
    });
    return (birthdays.length > 0) ?
        [{title: "Birthdays", data: birthdays}, {title: "Prompts", data: prompts.sort(comparePrompts)}] :
        [{title: "Prompts", data: prompts.sort(comparePrompts)}];
}

function PromptList(props) {

    const [loading, setLoading] = useState(false);
    const [sectionedPrompts, setSectionedPrompts] = useState([]);

    // only load friends once after component mounting
    useEffect(() => {
        props.loadFriends(props.user_id);
    }, []);

    if (props.out_of_date) {
        props.loadFriends(props.user_id);
    }

    // set sectionedPrompts anytime after friends changes
    useEffect(() => {
        if (props.friends.length > 0) {
            setSectionedPrompts(setSections(props.friends));
            setLoading(true);
        }}, [props.friends]);

    function renderPrompt ({ item }) {
        return (
            <Prompt
                name={item.f_name + " " + item.l_name}
                lastCheckIn={item.daysSinceCheckIn}
                onPress={() => { props.navigation.navigate('Friend', {friend: item}); }}
                urgency={item.urgency}
            />
        );
    };

    return (
        <View style={styles.screens.home.promptList}>
            <SectionList
                persistentScrollbar={true}
                sections={sectionedPrompts}
                renderItem={renderPrompt}
                keyExtractor={(item, index) => item + index}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter(loading)}
                renderSectionHeader={({section: {title}}) => <Header title={title}/>}
            />
        </View>
    );
};

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id,
    friends: state.friendsReducer.friends,
    out_of_date: state.friendsReducer.out_of_date,
});

export default connect(mapStateToProps, {loadFriends}) (PromptList);
