import styles from '../styles/Styles.js';
import { Text, View, Pressable } from 'react-native';
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

// Checkin modal used to log a checkin with a friend

const types = [
    {value: 'Birthday', key: 0},
    {value: 'Message', key: 1},
    {value: 'Call', key: 2 },
    {value: 'In person', key: 3},
];

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
            <Pressable onPress={props.onExit} style={styles.modals.checkIn.fullScreen}>
                <Pressable style={styles.modals.checkIn.container}>
                    <Text style={styles.modals.checkIn.header}>{'Add check in with ' + props.friend.f_name}</Text>
                        <View style={styles.modals.checkIn.content}>
                            <View style={styles.modals.checkIn.form}>
                                <Text>Date *</Text>
                                <CustomButton2 text={date === "" ? "Select" : (formatDateHelper(date))}
                                               onPress={() => {setDatePickerVisibility(true); }}
                                               additionalStyling={{
                                                   width: "100%",
                                               }}
                                               additionalTextStyling={{
                                                   color: 'grey',
                                                   top: '20%'
                                               }}/>
                                <DateTimePickerModal isVisible={isDatePickerVisible}
                                                     mode="date"
                                                     onConfirm={(date) => {setDate(date); setDatePickerVisibility(false);}}
                                                     onCancel={()=>{setDatePickerVisibility(false);}}/>
                                <View style={styles.modals.checkIn.spacer}/>
                                <Text>Type *</Text>
                                <RadioButton items={types} onPress={(type) => {setType(type)}}/>
                                <View style={styles.modals.checkIn.spacer}/>
                                <Text>Notes</Text>
                                <CustomTextInput placeholder={"e.g. " + props.friend.f_name + " just moved houses"}
                                                 onChangeText={(notes) => {setNotes(notes)}}
                                                 additionalStyling={{
                                                     flex:3,
                                                     width: "100%",
                                                 }}/>
                                <View style={styles.modals.checkIn.spacer}/>
                                <CustomButton1 onPress={()=> {
                                    props.addCheckin(date.toISOString().split('T')[0], props.friend.id, notes,
                                        types.find(t => t.value === type).key, props.user_id);
                                    props.onExit();}}
                                               text={"Add check in"}
                                               disabled={(date === '' || type === '')}
                                               additionalStyling={{
                                                   backgroundColor: (date === '' || type === '') ? '#baaf9c' : '#eb9c15',
                                                   width: '50%',
                                                   alignSelf: "flex-end"
                                               }}/>
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