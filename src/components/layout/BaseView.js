import { View, SafeAreaView } from 'react-native';
import styles from '../../styles/Styles.js';

// Component that provides a base container within a safe area view to be used for screens within the app.

export default function BaseView(props) {
    return (
        <View style={[styles.components.layout.baseView.container, props.modalOpacity]}>
            <SafeAreaView style={[styles.components.layout.baseView.safeArea]}>
                {props.children}
            </SafeAreaView>
            <View style={styles.components.layout.baseView.unsafeBottomArea}/>
        </View>
    );
}
