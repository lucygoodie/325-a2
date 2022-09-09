import React, { useState, useEffect } from 'react';
import ListItem from "../../components/ListItem";
import { renderSeparator } from "../../components/RenderSeparator.js";
import { renderFooter } from "../../components/RenderFooter.js";
import styles from '../../styles/Styles.js';
import { compareName } from "../../utils/helpers.js";
import { get } from '../../services/database.js';
import { where } from "firebase/firestore";
import { connect } from 'react-redux';
import { loadFriends, loadFriendsMock } from '../../redux/actions/friends_actions';

import {
    StyleSheet,
    FlatList,
    View,
    Image, 
    ActivityIndicator
} from 'react-native';

const USE_MOCK = false;

function Friends(props) {

    const [selectedId, setSelectedId] = useState(null);
    // const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);

    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    // only load friends once after component mounting
    useEffect(() => {
        USE_MOCK ?
            props.loadFriendsMock(props.user_id)
            : props.loadFriends(props.user_id);
        setLoading(true); // todo  ?
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
                persistentScrollbar={true}
                data={props.friends.sort(compareName)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                ItemSeparatorComponent={renderSeparator}
                ListFooterComponent={renderFooter(loading)}/>
        </View>
    );
};

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id,
    friends: state.friendsReducer.friends,
});

export default connect(mapStateToProps, {loadFriends, loadFriendsMock}) (Friends);
