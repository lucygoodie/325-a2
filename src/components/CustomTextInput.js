import styles from '../styles/Styles.js';
import { View, TextInput, Text } from 'react-native';

// Custom text input component

export default function CustomTextInput(props) {
    return (
        <View style={[styles.components.customTextInput.container, props.additionalStyling]}>
                <TextInput
                    keyboardType={props.numeric ? 'numeric' : 'default'}
                    style={styles.components.customTextInput.content}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                    value={props.value}
                    secureTextEntry={props.secure}/>
        </View>
    );
}