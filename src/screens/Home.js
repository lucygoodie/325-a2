// import Prompt from '../components/Prompt.js';
// import Mast from '../components/Mast.js';

import { formatDateHelper } from "../utils/helpers.js"
import PromptList from '../components/PromptList.js';
import styles from '../styles/Styles.js';

import { Text, View, SafeAreaView, Fragment} from 'react-native';


function Home(props) {
    return (
        <View style={[styles.layout.span]}>
            <SafeAreaView style={[styles.layout.safeArea]}>
                <View style={[styles.layout.topButtonArea]}/>
                <View style={styles.layout.mast}>
                    <Text style={styles.mast.text.subtitle}>Hello!</Text>
                    <Text style={[styles.mast.text.heading, {paddingBottom: "5%"}]}>{formatDateHelper(new Date())}</Text>
                </View>
                <View style={styles.layout.contentArea}>
                    <View style={styles.home.promptListContainer}>
                        <PromptList navigation={props.navigation}></PromptList>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}



export default Home;