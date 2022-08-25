import React, { useState, useEffect } from 'react';
import ListItem from "../components/ListItem";
import { renderSeparator } from "../components/RenderSeparator.js";
import { renderFooter } from "../components/RenderFooter.js";
import styles from '../Styles.js';
import { compareName } from "../helpers.js";
import { get } from '../database.js';
import { where } from "firebase/firestore";
import {
    StyleSheet,
    FlatList,
    View,
    Image, 
    ActivityIndicator
} from 'react-native';

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

export default function Friends(props) {

    const [selectedId, setSelectedId] = useState(null);
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);

    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    useEffect(() => {
        get("connections", [where("user_id", "==", TEST_USER_ID)], "").then(
            res => {
                setFriends(res);
                setLoading(true);
                setFilteredDataSource(res);
                setMasterDataSource(res);
            });
    }, []);

    function renderItem ({ item }) {
        return (
            <ListItem
                f_name={item.f_name}
                l_name={item.l_name}
                onPress={() => { props.navigation.navigate('Friend', {friend: item}); }}
            />
        );
    };

    return (
        <View style = {styles.list.container}>
            <FlatList
                data={friends.sort(compareName)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter(loading)}/>
        </View>
    );
};
