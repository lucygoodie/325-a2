import styles from '../styles/Styles.js';
import { Pressable, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

// Radio button that allows user to select only one option at a time.
// Options to select and function to call when something is selected
// are passed in as props

export default function RadioButton(props) {

    const [userOption, setUserOption] = useState(props.selected);

    return (
        <View style={styles.components.radioButton.container}>
                {props.items.map((item) => {
                    return (
                        <Pressable key={item.key}
                            style={item.value === userOption ?
                                styles.components.radioButton.selected : styles.components.radioButton.unselected}
                            onPress={() => {props.onPress(item.value); setUserOption(item.value);}}>
                            <Text style={styles.components.radioButton.option}> {item.value}</Text>
                        </Pressable>
                    );
                })}
        </View>
    );
}
