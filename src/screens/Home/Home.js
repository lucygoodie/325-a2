
import { formatDateHelper } from "../../utils/helpers.js"
import PromptList from './PromptList.js';
import styles from '../../styles/Styles.js';
import { BaseView, Content } from '../../components/Layout.js';

import { Text, View, SafeAreaView, Fragment} from 'react-native';


function Home(props) {
    return (
        <BaseView>
            <Mast>
                <View style={[styles.layout.topButtonArea]}/>
                <View style={styles.layout.mast}>
                    <Text style={styles.mast.text.subtitle}>Hello!</Text>
                    <Text style={[styles.mast.text.heading, {paddingBottom: "5%"}]}>{formatDateHelper(new Date())}</Text>
                </View>
            </Mast>
            <Content>
                <View style={styles.home.promptListContainer}>
                    <PromptList navigation={props.navigation}></PromptList>
                </View>
            </Content>
        </BaseView>


    );
}



export default Home;