import { View  } from 'react-native';
import styles from '../../styles/Styles.js';

// Component that provides a container for the mast of screens within the app.

export default function Mast(props) {
    return (
        <View style={[styles.components.layout.mast, props.additionalStyling]}>
                {props.children}
        </View>
    );
}