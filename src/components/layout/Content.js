import { View, SafeAreaView } from 'react-native';
import styles from '../../styles/Styles.js';

export default function Content(props) {
    return (
        <View style={styles.layout.contentArea}>
            {props.children}
        </View>
    );
}
