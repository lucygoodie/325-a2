
// used to add or edit a friend of the user

import React, { useState, useEffect } from 'react';
import styles from '../../styles/Styles.js';
import CustomButton4 from '../../components/CustomButton4.js';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import BaseView from '../../components/layout/BaseView.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';
import TopButtonStrip  from '../../components/layout/TopButtonStrip.js';
import CustomButton1 from '../../components/CustomButton1.js'
import RadioButton from '../../components/RadioButton.js'
import CustomTextInput from '../../components/CustomTextInput.js'
import {formatReminderFrequency, requestCameraPermission } from "../../utils/helpers";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { connect } from 'react-redux';
import { addFriend, editFriend } from '../../redux/actions/friends_actions';

const freqs = [
    {value: 'None', key: 0},
    {value: 'Weekly', key: 1},
    {value: 'Fornightly', key: 2},
    {value: 'Monthly', key: 3},
];

function AddEditFriend(props) {

    function editFriendPost() {
        // var f = freqs.find(item => item.value === friend.reminder_frequency).key;
        // props.editFriend(firstName, lastName, dob, f, props.user_id);
        // props.navigation.goBack(null);
    };

    function addFriendPost() {
        var f = freqs.find(item => item.value === reminderFreq).key;
        props.addFriend(firstName, lastName, dob, f, props.user_id);
        props.navigation.goBack(null);
    }

    const [emptyForm, setEmptyForm] = useState(true);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [reminderFreq, setReminderFreq] = useState('');

    const isEdit = props.route.params.isEdit;
    let user_id = "";

    useEffect(() => {
        if (isEdit) {
            const friend = props.route.params.friend;
            setFirstName(friend.f_name);
            setLastName(friend.l_name);
            setDob(friend.dob);
            setReminderFreq(freqs.find(item => item.key === friend.reminder_frequency).value);
        }
        user_id = props.user_id;
    }, []);

    return (
        <BaseView>
            <TopButtonStrip>
                <CustomButton4 onPress={() => {emptyForm ? props.navigation.goBack(null) : console.log('Implement confirmation Modal')}} buttonText={""}>
                    <Image source = {require('../../assets/back.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 20,
                               height: 20
                           }}/>
                </CustomButton4>
                <CustomButton4 onPress={ isEdit ? editFriendPost : addFriendPost} buttonText={"Confirm"}/>
            </TopButtonStrip>
            <Mast>
                    <Text style={styles.screens.addEditFriend.mastText}>{ isEdit? (firstName + " " + lastName) : 'Add Friend'}</Text>
            </Mast>
            <Content>
                    <View style={styles.screens.addEditFriend.content}>

                        <View style={styles.screens.addEditFriend.imageSection}>
                            <Image source = {require('../../assets/placeholder.bmp')}
                                   resizeMode = 'contain'
                                   style={styles.screens.addEditFriend.image}/>
                            <TouchableOpacity onPress={()=>{if(requestCameraPermission()) console.log('Should launch camera');}}>
                                <Text>Edit photo</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.screens.addEditFriend.spacer1}/>
                        <View style={styles.screens.addEditFriend.container1}>
                            <View style={styles.screens.addEditFriend.container2}>
                                <View style={styles.screens.addEditFriend.name.container}>
                                    <Text style={styles.screens.addEditFriend.name.content}>First name *</Text>
                                    <CustomTextInput value={isEdit ? firstName : undefined} placeholder={isEdit ? undefined : 'First name'} onChangeText={(firstName) => {setFirstName(firstName)}} additionalStyling={{flex:1,}}/>
                                </View>
                                <View style={styles.screens.addEditFriend.name.container}>
                                    <Text style={styles.screens.addEditFriend.name.content}>Last name *</Text>
                                    <CustomTextInput
                                        value={isEdit ? lastName : undefined}
                                        placeholder={isEdit ? undefined : 'Last name'}
                                        onChangeText={(lastName) => {setLastName(lastName)}}
                                        additionalStyling={{flex:1,}}/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.screens.addEditFriend.container3}>
                                    <Text style={styles.screens.addEditFriend.name.content}>Birthday *</Text>
                                    <CustomTextInput
                                        numeric={true}
                                        value={isEdit ? dob : undefined}
                                        placeholder={isEdit ? undefined : 'YYYY-MM-DD'}
                                        onChangeText={(dob) => {setDob(dob)}}
                                        additionalStyling={{flex:1,}}/>
                        </View>
                        <View style={styles.screens.addEditFriend.spacer1}/>
                        <View style={styles.screens.addEditFriend.container4}>
                            <Text>Reminder frequency *</Text>
                            <RadioButton items={freqs}
                                         selected={reminderFreq}
                                         onPress={(reminderFreq) => {setReminderFreq(reminderFreq)}}/>
                            <View style={{height: "2%"}}/>
                        </View>

                        <View style={styles.screens.addEditFriend.spacer2}/>
                        <View style={{flex: 1, }}>
                            {isEdit ?
                                <CustomButton1
                                    onPress={()=> {console.log('Implement delete friend')}}
                                    text={"Delete friend"}
                                    additionalStyling={{backgroundColor: '#ab5454', width: '50%', }}/>
                                :
                                <View/>
                            }
                        </View>
                        <View style={styles.screens.addEditFriend.spacer3}></View>
                    </View>
            </Content>
        </BaseView>
    );
}

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id,
});

export default connect(mapStateToProps, { addFriend, editFriend }) (AddEditFriend);
