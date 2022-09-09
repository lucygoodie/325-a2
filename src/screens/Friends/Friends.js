import React, { useState, useEffect } from 'react';
import { renderSeparator } from "../../components/RenderSeparator.js";
import { compareName } from "../../utils/helpers.js";
import styles from '../../styles/Styles.js';
import StylisedButton  from '../../components/StylisedButton.js';
import FriendsList from './FriendsList.js';
import { Text, View, Image, TextInput, SafeAreaView} from 'react-native';
import BaseView from '../../components/layout/BaseView.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';

const Friends = ({navigation}) => {

    const [searchText, setSearchText] = useState('');

    return (
        <BaseView>
                <View style={[styles.layout.topButtonArea, {justifyContent: 'flex-end',}]}>
                    <StylisedButton onPress={() => {navigation.navigate('AddFriend');}} buttonText={''}>
                        <Image source = {require('../../assets/plus.png')}
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
                <Content>
                    <FriendsList navigation={navigation}></FriendsList>
                </Content>
            </BaseView>
    );
};

export default Friends;


