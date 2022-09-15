
// check in item to render a given check in with a given friend

import styles from '../../styles/Styles.js';
import { checkInText } from "../../utils/helpers.js"
import { Text, View, Image } from 'react-native';


export default function CheckInItem(props) {

    function getSource() {
        if (props.type === 0) return require('../../assets/checkin_types/0.png');
        else if (props.type === 1) return require('../../assets/checkin_types/1.png');
        else if (props.type === 2) return require('../../assets/checkin_types/2.png');
        else return require('../../assets/checkin_types/3.png');
    }

    return (
        <View style={styles.screens.friend.checkinItem.container}>
            <DateCircleTriangle date={props.date}/>
            <View style={styles.screens.friend.checkinItem.bubble}>
                <View style={styles.screens.friend.checkinItem.bubble.content}>
                    <View style={{flexDirection: 'row'}}>
                        <Image source={getSource()}
                               resizeMode='contain'
                               style={{
                                   width: 20,
                                   height: 20,
                                   marginRight: '3.5%'
                               }}/>
                        <Text style={styles.screens.friend.checkinItem.bubble.subtitle}>
                            {checkInText(props.name, props.type)}
                        </Text>
                    </View>
                    {
                        props.notes === "" ?
                            null :
                            <Text style={styles.screens.friend.checkinItem.bubble.notes}>{props.notes}</Text>
                    }
                </View>
            </View>
            <View style={styles.screens.friend.checkinItem.spacer}/>
        </View>
    );
};

function DateCircleTriangle(props) {
    return (
        <View style={styles.screens.friend.checkinItem.container2}>
            <View style={styles.screens.friend.checkinItem.spacer1}/>
            <View style={styles.screens.friend.checkinItem.container1}>
                <Text style={styles.screens.friend.checkinItem.date}>
                    {props.date}
                </Text>
            </View>
            <View style={styles.screens.friend.checkinItem.circle.container}>
                <View style={styles.screens.friend.checkinItem.circle}/>
            </View>
            <View style={{flex:1,}}>
                <View style={styles.screens.friend.checkinItem.triangle}/>
            </View>
        </View>
    );
}
