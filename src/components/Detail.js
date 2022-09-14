import styles from '../styles/Styles.js';
import { View, Text } from 'react-native';

// Custom detail component - consists of a heading and subtitle

export default function Detail(props) {
    return (
        <View style={[styles.components.detail, props.additionalStyling]}>
            <Text style={styles.components.detail.infoTextHeader}>{props.title}</Text>
            <Text style={styles.components.detail.infoTextSubtitle}>{props.info}</Text>
        </View>
    );
}