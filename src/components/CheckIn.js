import React, { useState } from 'react';
import styles from '../Styles.js';
import { checkInText } from "../helpers.js"
import {
    Text,
    View,
    Image
} from 'react-native';



// type, notes, date
export default function CheckIn(props) {
    return (
        <View style={[styles.checkins.container, {flexDirection: 'row'}]}>

            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center', paddingBottom: '5%', paddingTop: '5%' }}>
                <Text style={{ flex: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey', color: 'white', fontSize: 10, }}>{props.date}</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <View style={{flex: 1}} />
                <View style={{backgroundColor: '#cccccc', borderRadius: 50, flex: 1, width: '110%'}}/>
                <View style={{flex: 1}} />
            </View>


            <View style={{flexDirection: 'row', flex: 20, paddingLeft: '1%', paddingRight: '10%'}}>
                <View style={styles.triangle}/>
                <View style={{backgroundColor: '#cccccc', flexDirection: 'column', flex: 5,borderRadius: 5,}}>
                    <Text style={styles.checkins.title}>{checkInText(props.name, props.type) }</Text>
                    <Text style={styles.checkins.subtitle}>{props.notes}</Text>
                </View>
            </View>

        </View>
    );
};


//, borderRadius: 50, flex: 2, margin: "10%" ,height: "25%", alignSelf: 'center'