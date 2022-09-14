import { View } from 'react-native';
import styles from '../../styles/Styles.js';

// Component that provides a container for the content of screens within the app.

export default function Content(props) {
    return (
        <View style={[styles.components.layout.content, props.additionalStyling]}>
            {props.children}
        </View>
    );
}
