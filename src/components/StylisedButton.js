import styles from '../Styles.js';
import { Text, TouchableOpacity, View } from 'react-native';

export default function StylisedButton(props) {
    return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.button}>
                    {props.children}
                    <Text style={styles.button.text}>{props.buttonText}</Text>
                </View>
            </TouchableOpacity>

    );
}