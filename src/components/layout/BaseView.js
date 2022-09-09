import { View, SafeAreaView } from 'react-native';
import styles from '../../styles/Styles.js';

export default function BaseView(props) {
    return (
        <View style={[styles.layout.span, props.modalOpacity]}>
            <SafeAreaView style={[styles.layout.safeArea]}>
                {props.children}
            </SafeAreaView>
            <View style={styles.layout.unsafeBottomArea}/>
        </View>
    );
}
