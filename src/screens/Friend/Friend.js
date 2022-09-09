import  CheckinList  from './CheckinList.js';
import Checkin from '../../modals/Checkin.js';
import { formatBirthdayHelper, formatReminderFrequency } from "../../utils/helpers.js"
import StylisedButton, { stylisedButton } from '../../components/StylisedButton.js';
import styles from '../../styles/Styles.js';
import { StyleSheet, SafeAreaView, Text, View, Button, Image, FlatList, Modal, TouchableOpacity, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';
import  BoldButton, {boldButton}  from '../../components/BoldButton.js'
import BaseView from '../../components/layout/BaseView.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';


function Friend(props) {

    const friend = props.route.params.friend;
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <BaseView modalOpacity={{opacity: modalVisible === false ? 1 : 0.4}}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}>
                    <Checkin onExit={() => {setModalVisible(false);}} friend={friend.f_name + " " + friend.l_name}></Checkin>
                </Modal>
                <View style={[styles.layout.topButtonArea]}>
                    <StylisedButton onPress={() => props.navigation.goBack(null)} buttonText={""}>
                        <Image source = {require('../../assets/back.bmp')}
                               resizeMode = 'contain'
                               style = {{ width: 20, height: 20 }}
                               borderRadius={10}

                        backgroundColor='white' />
                    </StylisedButton>
                    <StylisedButton onPress={() => {props.navigation.navigate('EditFriend', {friend: friend});}} buttonText={"Edit"}>
                    </StylisedButton>
                </View>

                <View style={[styles.layout.mast, styles.friend.mast]}>
                    <Image source={require('../../assets/placeholder.bmp')} resizeMode = 'contain' style={styles.friend.image}/>
                    <View style={[styles.mast.text, { justifyContent: 'center'}]}>
                        <Text style={styles.mast.text.heading}>{friend.f_name + " " + friend.l_name}</Text>
                    </View>
                </View>
                <Content>

                    <View style={[styles.home.promptListContainer, {flexDirection: 'row', flex: 2, paddingRight: "0.5%", marginBottom: "2%"}]}>

                        <View style={[styles.home.promptContainer, styles.friend.infoContainer, {flex: 1.15,}]}>
                            <Text style={styles.friend.infoTextHeader}>Reminder Frequency</Text>
                            <Text style={styles.friend.infoTextSubtitle}>{formatReminderFrequency(friend.reminder_frequency)}</Text>
                        </View>

                        <View style={[styles.home.promptContainer, styles.friend.infoContainer]}>
                            <Text style={styles.friend.infoTextHeader}>Birthday</Text>
                            <Text style={styles.friend.infoTextSubtitle}>{formatBirthdayHelper(new Date(friend.dob))}</Text>
                        </View>
                    </View>


                    <View style={{flex: 11, paddingBottom: "3%",}}>
                        <View style={[styles.home.promptDivider, {marginLeft: "4%", marginRight: "4%", marginBottom: "0.5%",}]}>
                            <Text style={styles.home.promptDividerText}>LOG WITH {friend.f_name.toUpperCase()}</Text>
                        </View>
                            <CheckinList
                                user_id={props.user_id}
                                friend_id={friend.id}
                                name={friend.f_name}/>

                        <BoldButton onPress={() => {setModalVisible(true)}}/>
                    </View>
                </Content>
            </BaseView>


    );
}

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id
});

export default connect(mapStateToProps)(Friend);
