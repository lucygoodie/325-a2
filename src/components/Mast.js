import { View } from 'react-native';
import styles from '../styles/Styles.js';

export default function Mast(props) {
    return (
        <View style={styles.mast.container}>
            {props.children}
        </View>
    );
}
