import React, { useState, useEffect } from 'react';
import { renderSeparator } from "../components/RenderSeparator.js";
import { compareName } from "../helpers.js";
import styles from '../Styles.js';
import StylisedButton  from '../components/StylisedButton.js';
import Mast from '../components/Mast.js';
import FriendsList from '../components/FriendsList.js';
import {
    Text,
    View,
    Image,
    TextInput} from 'react-native';

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

const Friends = ({navigation}) => {

    const [searchText, setSearchText] = useState('');

    return (
        <View style={styles.container}>
            <Mast>
                <View style={styles.mast.friendsButtonStrip}>
                    <StylisedButton onPress={() => {navigation.navigate('AddFriend');}} buttonText={''}>
                        <Image source = {require('../assets/plus.png')}
                               resizeMode = 'contain'
                               style = {{ width: 15, height: 15 }}/>
                    </StylisedButton>
                </View>
                <View style={styles.mast.contentCol}>
                    <View style={styles.mast.text}>
                        <Text style={styles.mast.header}>Friends</Text>
                    </View>
                    <View style={styles.search.box}>
                        <TextInput
                            style={styles.search.input}
                            placeholder="Search..."
                            onChangeText={newText => setSearchText(newText)}/>
                    </View>
                </View>
            </Mast>

            <View style={styles.screen}>
                <FriendsList navigation={navigation}></FriendsList>
            </View>
        </View>

    );
};

export default Friends;


