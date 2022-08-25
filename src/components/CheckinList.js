import React, { useState, useEffect } from 'react';
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import { get } from '../database.js';
import { where } from "firebase/firestore";
import  CheckIn  from "../components/CheckIn.js";
import styles from '../Styles.js';
import {
    FlatList,
    View,
    ActivityIndicator
} from 'react-native';

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

export default function CheckinList(props) {

    const user_id = props.user_id;
    const friend_id = props.friend_id;

    const [checkins, setCheckins] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        get("checkins", [where("user_id", "==", user_id), where("friend_id", "==", friend_id)], "date")
            .then(
                res => {
                    setCheckins(res);
                    setLoading(true);
                });
    }, []);


    function renderCheckIn ({ item }) {
        return (
            <CheckIn
                type={item.type}
                notes={item.notes}
                date={item.date}
            />
        );
    };

    return (
        <View style = {styles.list.container}>
            <FlatList
                data={checkins.reverse()}
                renderItem={renderCheckIn}
                keyExtractor={(item) => item.id}
                extraData={0}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter(loading)}/>
        </View>
    );
};

