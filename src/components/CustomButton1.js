import styles from '../styles/Styles.js';
import { TouchableOpacity, Text } from 'react-native';

// Custom button component

export default function CustomButton1(props) {
    return (
        <TouchableOpacity
            disabled={props.disabled}
            style={[styles.components.customButton1.container, props.additionalStyling]}
            onPress={props.onPress}>
            <Text style={styles.components.customButton1.content}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}