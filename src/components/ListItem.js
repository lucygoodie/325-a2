import styles from '../styles/Styles.js';
import { Text, TouchableOpacity } from 'react-native';

// List item to be rendered in a List component

export default function ListItem(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.components.listItem.container}>
            <Text style={styles.components.listItem.content}>{props.f_name + " " + props.l_name}</Text>
        </TouchableOpacity>
    );
};

