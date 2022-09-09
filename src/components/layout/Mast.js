import { View, SafeAreaView } from 'react-native';
import styles from '../../styles/Styles.js';

export default function Mast(props) {
    return (
        <View>
            {props.children}
        </View>
    );
}