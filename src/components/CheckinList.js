import React, { useState, useEffect } from 'react';
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import { get } from '../services/database.js';
import { where } from "firebase/firestore";
import  CheckIn  from "../components/CheckIn.js";
import {comparePrompts, getSection} from "../utils/helpers.js";
import styles from '../styles/Styles.js';
import {
    FlatList,
    View,
    ActivityIndicator,
    Text, SectionList
} from 'react-native';

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

export default function CheckinList(props) {

    const user_id = props.user_id;
    const friend_id = props.friend_id;

    const [checkins, setCheckins] = useState([]);
    const [sectionedCheckins, setSectionedCheckins] = useState([]);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        get("checkins", [where("user_id", "==", user_id), where("friend_id", "==", friend_id)], "date")
            .then(
                res => {
                    var c_list = [];
                    res.forEach(c => {
                        c_list.push({...c, section: getSection(c.date)});
                    });
                    setCheckins(c_list);

                    var sections = [...new Set(c_list.map(item => item.section))].map(item => {
                        var datas = c_list.filter((c) => { return c.section === item});
                        // this needs to be a list
                        return {title: item, data: datas}
                    });

                    setSectionedCheckins(sections);
                    setLoading(true);

                }
                );



        // SORT SECTIONS HERE?
        /////////////////////////////////////////////////////// TODO


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

