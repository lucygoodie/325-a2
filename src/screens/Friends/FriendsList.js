import { useState, useEffect } from 'react';
import ListItem from "../../components/ListItem";
import { renderSeparator } from "../../components/RenderSeparator.js";
import { renderFooter } from "../../components/RenderFooter.js";
import styles from '../../styles/Styles.js';
import { compareName, comparePrompts } from "../../utils/helpers.js";
import { connect } from 'react-redux';
import { loadFriends } from '../../redux/actions/friends_actions';
import { FlatList, View } from 'react-native';


function Friends(props) {

    const [selectedId, setSelectedId] = useState(null);
    const [loading, setLoading] = useState(false);

    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);

    // only load friends once after component mounting
    useEffect(() => {
        props.loadFriends(props.user_id);
        setLoading(true); // todo  ?
    }, []);

    if (props.out_of_date) {props.loadFriends(props.user_id);}

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
        <View style = {styles.screens.friends.friendsList}>
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
    out_of_date: state.friendsReducer.out_of_date,
});

export default connect(mapStateToProps, { loadFriends }) (Friends);
