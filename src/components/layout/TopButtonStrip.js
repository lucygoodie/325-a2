import { View } from 'react-native';
import styles from '../../styles/Styles.js';

// Component used in the mast section of the screen throughout the app. It contains the top strip buttons for the given screen.

export default function TopButtonStrip(props) {
    return (
        <View style={[styles.components.layout.topButtonStrip, props.additionalStyling]}>
                {props.children}
        </View>
    );
}