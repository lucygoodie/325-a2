import styles from '../styles/Styles.js';
import { View, ActivityIndicator} from 'react-native';

// Component to be used as the footer of list components
// will show activity indicator if the page is loading

const renderFooter = (loading) => {
    if (loading) return null;
    return (
        <View style={styles.components.renderFooter}>
            <ActivityIndicator animating size='large' color='grey'/>
        </View>
    )
};

export { renderFooter };