import React, { useState, useEffect } from 'react';
import styles from '../Styles.js';
import Mast from '../components/Mast.js';
import StylisedButton, { stylisedButton } from '../components/StylisedButton.js';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

function EditFriend({route, navigation}) {

    const friend = route.params.friend;

    console.log("Changing a file");

    const [emptyForm, setEmptyForm] = useState(true);
    const [firstName, setFirstName] = useState(friend.f_name);
    const [lastName, setLastName] = useState(friend.l_name);
    const [dob, setDob] = useState(friend.dob);
    const [reminderFreq, setReminderFreq] = useState(friend.reminder_frequency);


    function EditDetail(props) {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 3, height: 40, borderColor: 'grey', borderWidth: 1, backgroundColor: 'white', width: '100%',}}>
                <View>
                    <Text>{props.fieldText}</Text>
                </View>
                <View>
                    {props.children}
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Mast>
                <View style={styles.mast.buttonStrip}>
                    <StylisedButton onPress={() => navigation.goBack(null)} buttonText={""}>
                        <Image source = {require('../assets/back.jpg')}
                               resizeMode = 'contain'
                               style = {{ width: 15, height: 15 }}/>
                    </StylisedButton>
                    { emptyForm ? null :
                        (<StylisedButton onPress={() => {console.log('doin something else')}} buttonText={"Confirm"}/>)}
                </View>
                <View style={styles.mast.content}>
                    <View style={styles.mast.text}>
                        <Text style={styles.mast.header}>{firstName + " " + lastName}</Text>
                    </View>
                </View>
            </Mast>

            <View style={styles.screen}>
                <View style={{flexDirection: 'column'}}>
                    <View style={{borderColor: 'black', justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, height: 150}}>
                        <Image source = {require('../assets/placeholder.bmp')}
                               resizeMode = 'contain'
                               style={styles.editFriend.image}/>
                        <TouchableOpacity onPress={()=>{console.log('Choose a photo')}}>
                                <Text >Edit photo</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderColor: 'black', borderWidth: 0.5, height: 50}}/>

                    <View style={{borderColor: 'black', borderWidth: 0.5, height: 50}}>
                        <EditDetail fieldText="First Name" currentValue={firstName}>
                            <TextInput
                                style={styles.search.input}
                                value={firstName}
                                onChangeText={newText => setFirstName(newText)}/>
                        </EditDetail>
                    </View>

                    <View style={{borderColor: 'black', borderWidth: 0.5, height: 50}}>
                        <EditDetail fieldText="Last Name" currentValue={lastName}>
                            <TextInput
                                style={styles.search.input}
                                value={lastName}
                                onChangeText={newText => console.log("new last name")}/>
                        </EditDetail>
                    </View>

                    <View style={{borderColor: 'black', borderWidth: 0.5, height: 50}}/>
                    <View style={{borderColor: 'black', borderWidth: 0.5, height: 50}}/>

                </View>
            </View>
        </View>
    );
}

export default EditFriend;