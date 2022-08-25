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
    TextInput, SafeAreaView} from 'react-native';

const TEST_USER_ID = 'BjOxbgqe1SWS7QxWH5tX';

const Friends = ({navigation}) => {

    const [searchText, setSearchText] = useState('');

    return (
        <View style={[styles.layout.span]}>
            <SafeAreaView style={[styles.layout.safeArea]}>
                <View style={[styles.layout.topButtonArea, {justifyContent: 'flex-end',}]}>
                    <StylisedButton onPress={() => {navigation.navigate('AddFriend');}} buttonText={''}>
                        <Image source = {require('../assets/plus.png')}
                               resizeMode = 'contain'
                               style = {{ width: 18, height: 18, tintColor: '#383838' }}/>
                    </StylisedButton>
                </View>

                <View style={[styles.layout.mast, {bottom: "1%",}]}>
                    <Text style={[styles.mast.text.heading, {paddingBottom: "1%"}]}>Friends</Text>

                    <View style={styles.mast.search.box}>
                        <TextInput
                            style={styles.mast.search.input}
                            placeholder="Search..."
                            onChangeText={newText => setSearchText(newText)}/>
                    </View>

                </View>

                <View style={styles.layout.contentArea}>
                    <FriendsList navigation={navigation}></FriendsList>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Friends;


