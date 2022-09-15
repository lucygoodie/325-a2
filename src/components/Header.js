import styles from '../styles/Styles.js';
import { View, Text } from 'react-native';

// Component to be used as the heading for sections of a section list

export default function Header(props) {
    return (
        <View style={[styles.components.header.container, props.additionalStyling]}>
            <Text style={[styles.components.header.content, props.additionalTextStyling]}>{props.title}</Text>
        </View>
    );
}