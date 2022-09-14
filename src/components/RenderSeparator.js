import styles from '../styles/Styles.js';
import { View } from 'react-native';

// Component to be used as the separator between items in list components

const renderSeparator = () => {
    return (
        <View style={styles.components.separator}/>
    )
};

export { renderSeparator};