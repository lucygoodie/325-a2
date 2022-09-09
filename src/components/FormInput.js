import React  from 'react';
import styles from '../styles/Styles.js';
import { Text, TextInput, View } from 'react-native';

export default function FormInput(props) {
    return (
            <View style={{borderColor: 'black', borderWidth: 1, justifyContent: 'center', alignItems: 'center',flexDirection: 'row', height: 40, width: '90%'}}>

                <View style={{flex:1, borderColor: 'black', borderWidth: 1, height: '100%'}}>
                    <Text style={{fontSize: 15, justifySelf: 'center', alignSelf: 'center', paddingTop: '10%'}}>
                        {props.text}
                    </Text>
                </View>

                <View style={{flex:3}}>
                    <TextInput
                        style={styles.components.textInput.content}
                        onChangeText={props.onChangeText}
                    />
                </View>

            </View>
    );
};

