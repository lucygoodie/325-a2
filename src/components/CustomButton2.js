import styles from '../styles/Styles.js';
import { Pressable, Text } from 'react-native';

// Custom button component

export default function CustomButton2(props) {
    return (
        <Pressable
            onPress={props.onPress}
            style={[styles.components.customButton2.container, props.additionalStyling]}>
            <Text style={[styles.components.customButton2.content, props.additionalTextStyling]}>
                {props.text}
            </Text>
        </Pressable>
    );
}