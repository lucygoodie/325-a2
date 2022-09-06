import React, { useState, useEffect } from 'react';
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import { get } from '../services/database.js';
import { where } from "firebase/firestore";
import  CheckIn  from "../components/CheckIn.js";
import {comparePrompts, getSection} from "../utils/helpers.js";
import styles from '../styles/Styles.js';
import { connect } from 'react-redux';
import {
    FlatList,
    View,
    ActivityIndicator,
    Text, SectionList
} from 'react-native';

function setSections(checkins) {
    var sortedList = [];

    checkins.forEach(checkin => {
        sortedList.push({...checkin, section: getSection(checkin.date)});
    });

    var sections = [...new Set(sortedList.map(item => item.section))].map(item => {
        var datas = sortedList.filter((c) => { return c.section === item});
        // this needs to be a list
        return {title: item, data: datas}
    });
    return sections;
}

function CheckinList(props) {

    const [sectionedCheckins, setSectionedCheckins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const checkins = props.friends.find(friend => friend.id === (props.friend_id)).checkins;
        setSectionedCheckins(setSections(checkins));
        setLoading(true);
        }, []);

    function renderCheckIn ({ item }) {
        let splitDate = item.date.split('-');

        return (
            <CheckIn
                type={item.type}
                notes={item.notes}
                date={splitDate[2] + '/' + splitDate[1]}
                name={props.name}
            />
        );
    };

    // ACTUALLY WANT TO USE SECTION LIST -> SORTED BY MONTH/YEAR SECTIONS

    return (

        <View style = {[styles.home.promptListContainer, {marginTop: "0%", paddingRight: "0.5%"}]}>
            {sectionedCheckins.length > 0 ?
            <View style={{flex: 10, zIndex: 1, position: 'absolute', width: "100%", bottom: "4%"}}>


                    <SectionList
                        sections={sectionedCheckins}
                        renderItem={renderCheckIn}
                        keyExtractor={(item, index) => item + index}
                        ItemSeparatorComponent={renderSeparator}
                        ListFooterComponent={renderFooter(loading)}
                        renderSectionHeader={({ section: { title } }) =>
                            (<View style={styles.home.promptDivider}>
                                <Text style={styles.home.promptDividerText}>{title.toUpperCase()}</Text>
                            </View>)}
                    />



            </View>
                :
                <Text>
                    No checkins found...
                </Text>
            }

        </View>
    );
};

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id,
    friends: state.friendsReducer.friends,
});

export default connect(mapStateToProps)(CheckinList);