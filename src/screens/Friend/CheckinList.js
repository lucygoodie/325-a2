import React, { useState, useEffect } from 'react';
import { renderSeparator } from "../../components/RenderSeparator.js";
import { renderFooter } from "../../components/RenderFooter.js";
import  CheckInItem  from "./CheckInItem.js";
import {comparePrompts, formatReminderFrequency, getSection} from "../../utils/helpers.js";
import styles from '../../styles/Styles.js';
import { connect } from 'react-redux';
import { FlatList, View, ActivityIndicator, Text, SectionList } from 'react-native';
import Header from '../../components/Header.js';
import Detail from "../../components/Detail";


// set sections for checkins so they are grouped by month
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
        }, [props.friends]);



    function renderCheckIn ({ item }) {
        let splitDate = item.date.split('-');
        return (
            <CheckInItem type={item.type} notes={item.notes} date={splitDate[2] + '/' + splitDate[1]} name={props.name}/>
        );
    };

    return (
        <View style={styles.screens.friend.checkinList.container}>
            {sectionedCheckins.length > 0 ?
                <View style={styles.screens.friend.checkinList.list}>
                    <SectionList
                        persistentScrollbar={true}
                        sections={sectionedCheckins}
                        renderItem={renderCheckIn}
                        keyExtractor={(item, index) => item + index}
                        ItemSeparatorComponent={() => {return <View style={{height: 20}}/>}}
                        ListFooterComponent={renderFooter(loading)}
                        renderSectionHeader={({section: {title}}) =>
                            <Header title={title}
                                    additionalTextStyling={{color: '#7d8082'}}
                                    additionalStyling={{margin: 20, width: '90%', backgroundColor: '#e9edf0', borderWidth: 0, marginLeft: '0%'}}/>}
                    />
                </View>
                :
                <Detail title={"No check ins found"}
                        info={"Check in with friend below"}
                        additionalStyling={{flex: 1.15, alignItems: 'center', backgroundColor: '#ededed', margin: 20}}/>
            }

        </View>
    );
};

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id,
    friends: state.friendsReducer.friends,
});

export default connect(mapStateToProps)(CheckinList);