import { View, SafeAreaView } from 'react-native';
import styles from '../styles/Styles.js';

function BaseView(props) {
    return (
        <View style={[styles.layout.span, props.modalOpacity]}>
            <SafeAreaView style={[styles.layout.safeArea]}>
            {props.children}
            </SafeAreaView>
            <View style={styles.layout.unsafeBottomArea}/>
        </View>
    );
}

function Mast(props) {
    return (
        <View>
            {props.children}
        </View>
    );
}

function Content(props) {
    return (
        <View style={styles.layout.contentArea}>
            {props.children}
        </View>
    );
}

export { BaseView, Content };