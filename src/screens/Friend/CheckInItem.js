import React, { useState } from 'react';
import styles from '../../styles/Styles.js';
import { checkInText } from "../../utils/helpers.js"
import { Text, View, Image} from 'react-native';


// type, notes, date
export default function CheckInItem(props) {

    function getSource() {
        if (props.type === 0) return require('../../assets/checkin_types/0.png');
        else if (props.type === 1) return require('../../assets/checkin_types/1.png');
        else if (props.type === 2) return require('../../assets/checkin_types/2.png');
        else return require('../../assets/checkin_types/3.png');
    }

    return (
        // <View style={[styles.checkins.container, {flexDirection: 'row'}]}>
        <View style={{flexDirection: 'row'}}>
            <DateCircleTriangle date={props.date}/>
            <View style={{flex: 3, flexDirection: 'column'}}>
                <View style={{backgroundColor: '#e0e0e0', borderRadius: 5,paddingLeft: '5%', paddingBottom:'5%', padding: '3%', flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={getSource()}
                               resizeMode='contain'
                               style={{ width: 20, height: 20, marginRight: '3.5%' }}/>
                        <Text style={styles.checkins.subtitle}>{checkInText(props.name, props.type) }</Text>
                    </View>
                    {
                        props.notes === "" ?
                            null
                            :
                            <Text style={{flex: 1, paddingLeft: "13%", fontSize: 12}}>{props.notes}</Text>
                    }
                </View>
            </View>
            <View style={{flex:0.2}}/>

            {/*</View>*/}

            {/*<View style={{flexDirection: 'row', flex: 20, paddingLeft: '1%', paddingRight: '10%'}}>*/}
            {/*    <View style={styles.triangle}/>*/}
            {/*    <View style={{backgroundColor: '#cccccc', flexDirection: 'column', flex: 5,borderRadius: 5, padding: '2%'}}>*/}

            {/*    </View>*/}
            {/*</View>*/}

        </View>
    );
};

function DateCircleTriangle(props) {
    return (
        <View style={{flex: 1, flexDirection: 'row', paddingTop: '4%'}}>
            <View style={{flex:1}}/>
            <View style={{flex:3, }}>
                <Text style={{ justifyContent: 'center', textAlign: 'center', backgroundColor: 'grey', color: 'white', fontSize: 10,}}>
                    {props.date}
                </Text>
            </View>
            <View style={{flex:1, paddingLeft: '1%', }}>
                <View style={{backgroundColor: '#cccccc', borderRadius: 50, width: 12, height: 12, left: 1.5, top: 1.5}}/>
            </View>
            <View style={{flex:1,}}>
                <View style={{width: 0,
                    height: 0,
                    backgroundColor: "transparent",
                    borderStyle: "solid",
                    borderLeftWidth: 7,
                    borderRightWidth: 7,
                    borderBottomWidth: 14,
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    borderBottomColor: "#e0e0e0",
                    transform: [{ rotate: "-90deg" }],
                    alignSelf: 'center',}}/>
            </View>
        </View>
    );
}
