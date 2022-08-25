import styles from '../Styles.js';
import { Text, TouchableOpacity, View } from 'react-native';

export default function StylisedButton(props) {
    return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.mast.buttons}>
                    {props.children}
                    <Text style={styles.mast.buttons.text}>{props.buttonText}</Text>
                </View>
            </TouchableOpacity>

    );
}