import styles from '../styles/Styles.js';
import { Text, TouchableOpacity, View } from 'react-native';

// Custom button component

export default function CustomButton4(props) {
    return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.components.customButton4.container}>
                    {props.children}
                    <Text style={styles.components.customButton4.content}>{props.buttonText}</Text>
                </View>
            </TouchableOpacity>

    );
}