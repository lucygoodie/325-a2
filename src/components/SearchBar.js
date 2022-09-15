import styles from '../styles/Styles.js';
import { View, TextInput } from 'react-native';

// Search bar component - still in development. Need to implement search function.

export default function SearchBar(props) {
    return (
        <View style={styles.components.searchBar.box}>
            <TextInput
                style={styles.components.searchBar.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}/>
        </View>
    );
}