import React, { useState, useEffect } from 'react';
import { renderSeparator } from "../../components/RenderSeparator.js";
import { compareName } from "../../utils/helpers.js";
import styles from '../../styles/Styles.js';
import CustomButton4  from '../../components/CustomButton4.js';
import SearchBar  from '../../components/SearchBar.js';

import FriendsList from './FriendsList.js';
import { Text, View, Image, TextInput, SafeAreaView} from 'react-native';
import BaseView from '../../components/layout/BaseView.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';
import TopButtonStrip  from '../../components/layout/TopButtonStrip.js';


const Friends = ({navigation}) => {

    const [searchText, setSearchText] = useState('');

    return (
        <BaseView>
            <TopButtonStrip additionalStyling = {{justifyContent: 'flex-end'}}>
                    <CustomButton4 onPress={() => {navigation.navigate('AddEditFriend', {isEdit: false});}} buttonText={''}>
                        <Image source = {require('../../assets/plus.png')} resizeMode = 'contain'
                               style = {{ width: 18, height: 18, tintColor: '#383838' }}/>
                    </CustomButton4>
            </TopButtonStrip>
            <Mast additionalStyling={{bottom: "1%",}}>
                <Text style={styles.screens.friends.header}>Friends</Text>
                <SearchBar placeholder="Search..." onChangeText={newText => setSearchText(newText)}/>
            </Mast>
            <Content>
                <FriendsList navigation={navigation}></FriendsList>
            </Content>
        </BaseView>
    );
};

export default Friends;


