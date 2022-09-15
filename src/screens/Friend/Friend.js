
// displays information about a users friend

import  CheckinList  from './CheckinList.js';
import Checkin from '../../modals/Checkin.js';
import { formatBirthdayHelper, formatReminderFrequency } from "../../utils/helpers.js"
import CustomButton4 from '../../components/CustomButton4.js';
import styles from '../../styles/Styles.js';
import { Text, View, Image, Modal } from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';
import  CustomButton3 from '../../components/CustomButton3.js'
import BaseView from '../../components/layout/BaseView.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';
import TopButtonStrip  from '../../components/layout/TopButtonStrip.js';
import Header from '../../components/Header.js';
import Detail from '../../components/Detail.js';


function Friend(props) {

    const friend = props.route.params.friend;
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <BaseView modalOpacity={{opacity: modalVisible === false ? 1 : 0.4}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <Checkin onExit={() => {setModalVisible(false);}}
                         friend={friend}
                         visible={modalVisible}/>
            </Modal>
            <TopButtonStrip>
                <CustomButton4 onPress={() => props.navigation.goBack(null)} buttonText={""}>
                    <Image source = {require('../../assets/back.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 20,
                               height: 20
                           }}/>
                </CustomButton4>
                <CustomButton4 onPress={() => {props.navigation.navigate('AddEditFriend', {friend: friend, isEdit: true});}} buttonText={"Edit"} />
            </TopButtonStrip>
            <Mast additionalStyling={styles.screens.friend.mast}>
                <Image source={require('../../assets/placeholder.bmp')} resizeMode = 'contain' style={styles.screens.friend.image}/>
                <View style={{ justifyContent: 'center'}}>
                    <Text style={styles.screens.friend.mast.heading}>{friend.f_name + " " + friend.l_name}</Text>
                </View>
            </Mast>
            <Content>
                <View style={styles.screens.friend.information}>
                    <Detail title={"Reminder Frequency"}
                            info={formatReminderFrequency(friend.reminder_frequency)}
                            additionalStyling={{flex: 1.15,}}/>
                    <Detail title={"Birthday"}
                            info={formatBirthdayHelper(new Date(friend.dob))}/>
                </View>
                <View style={styles.screens.friend.content}>
                    <Header title={"Log with " + friend.f_name}
                            additionalStyling={{backgroundColor: 'grey', margin: "4%", marginBottom: "0.5%", width: "92%"}}/>
                    <CheckinList user_id={props.user_id} friend_id={friend.id} name={friend.f_name}/>
                    <CustomButton3 onPress={() => {setModalVisible(true)}}
                                   text={"+ Check In"}
                                additionalStyling={{position: 'absolute', marginBottom: '3%',}}/>
                </View>
            </Content>
        </BaseView>
    );
}

const mapStateToProps = (state) => ({
    user_id: state.userReducer.user_id
});

export default connect(mapStateToProps)(Friend);
