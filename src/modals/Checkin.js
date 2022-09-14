
import React  from 'react';
import styles from '../styles/Styles.js';
import { Text, StyleSheet, SafeAreaView, View, Button, Image, FlatList, Modal, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header.js'
import { connect } from 'react-redux';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton1 from '../components/CustomButton1.js'
import RadioButton from '../components/RadioButton.js'
import CustomTextInput from '../components/CustomTextInput.js'
import CustomButton2 from "../components/CustomButton2";
import { formatDateHelper } from "../utils/helpers.js"
import { addCheckin } from '../redux/actions/friends_actions';


const types = [
    {value: 'Birthday', key: 0},
    {value: 'Message', key: 1},
    {value: 'Call', key: 2 },
    {value: 'In person', key: 3},
]

function Checkin(props) {

    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [notes, setNotes] = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    function onExit() {
        if (date !== '' || type !== '' || notes != '') {
            setModalVisible(true);
        }
    }

    return (
        <View>
            <Pressable onPress={props.onExit} style={{width: "100%", height: "100%"}}>
                <Pressable
                       style={{width: "100%", height: "80%", backgroundColor: "white", borderWidth: 1, bottom: "-4%", position: "absolute", borderRadius: 10, alignItems: 'center',}}>
                    <Text style={[styles.modals.checkIn.header, {marginTop: '10%', padding: 0}]}>{'Add check in with ' + props.friend.f_name}</Text>
                        <View style={{ height: '76%', width: '95%', top: '4%', alignSelf: "center", backgroundColor: 'white', justifySelf: 'center'}}>
                            <View style={{width: "95%", flex: 1, flexDirection: 'column', alignItems:'flex-start', justifyContent: 'space-between', padding: '5%'}}>
                                <Text>Date *</Text>
                                <CustomButton2 text={date === "" ? "Select" : (formatDateHelper(date))}
                                               onPress={() => {setDatePickerVisibility(true); }}
                                               additionalStyling={{width: "100%", }}
                                               additionalTextStyling={{color: 'grey', top: '20%'}}/>
                                <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={(date) => {
                                    setDate(date);
                                    setDatePickerVisibility(false);}}
                                onCancel={()=>{setDatePickerVisibility(false);}}
                                />
                                <View style={{height: "2%"}}/>
                                <Text>Type *</Text>
                                <RadioButton items={types}
                                         onPress={(type) => {setType(type)}}/>
                                <View style={{height: "2%"}}/>
                                <Text>Notes</Text>
                                <CustomTextInput placeholder="e.g. Timothy just moved houses" onChangeText={(notes) => {setNotes(notes)}}
                                                 additionalStyling={{flex:3, width: "100%",}}/>
                                <View style={{height: "2%"}}/>
                                <CustomButton1 onPress={()=> {
                                    let formatDate = date.getYear() + "-" + date.getMonth() + "-" + date.getDate();
                                    props.addCheckin(
                                        date.toISOString().split('T')[0],
                                        props.friend.id,
                                        notes,
                                        types.find(t => t.value === type).key,
                                        props.user_id);
                                    props.onExit();}}
                                               text={"Add check in"}
                                               disabled={(date === '' || type === '')}
                                               additionalStyling={{backgroundColor: (date === '' || type === '') ? '#baaf9c' : '#eb9c15', width: '50%',alignSelf: "flex-end"}}/>
                            </View>
                        </View>
                </Pressable>
            </Pressable>
        </View>

  );
};

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id
});

export default connect(mapStateToProps, { addCheckin })(Checkin);