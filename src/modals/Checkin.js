
import React  from 'react';
import styles from '../styles/Styles.js';
import { Text, StyleSheet, SafeAreaView, View, Button, Image, FlatList, Modal, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import FormInput from '../components/FormInput.js'


export default function Checkin(props) {


    // props.friend
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [notes, setNotes] = useState('');

    return (
    <View>
        <Pressable onPress={props.onExit} style={{width: "100%", height: "100%"}}>
            <Pressable onPress={()=>{console.log("inside")}}
                       style={{width: "100%", height: "90%", backgroundColor: "white", borderColor: "grey", borderWidth: 1, bottom: "-4%", position: "absolute", borderRadius: 10}}>

                <View styles={{padding: 100, margin: 20, alignItems: "center"}}>

                    <View>
                        <Text styles={{borderColor: "black", height: '2000%'}}>
                            Check In
                        </Text>
                    </View>

                    <View styles={{borderColor: "black", flex: 6, position: "absolute", top: "20%",}}>

                    <FormInput
                            text={"With"}
                            onChangeText={()=> {}}/>
                    <FormInput
                        text={"Date"}
                        onChangeText={()=> {}}/>
                    <FormInput
                        text={"Type"}
                        onChangeText={()=> {}}/>
                    <FormInput
                        text={"Notes"}
                        onChangeText={()=> {}}/>

                    </View>

                </View>
            </Pressable>
        </Pressable>
    </View>

  );
};