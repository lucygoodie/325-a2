
import { formatDateHelper } from "../../utils/helpers.js"
import PromptList from './PromptList.js';
import BaseView from '../../components/layout/BaseView.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';


import { Text, View, SafeAreaView, Fragment} from 'react-native';


function Home(props) {
    return (
        <BaseView>
                <View style={[styles.layout.topButtonArea]}/>
                <View style={styles.layout.mast}>
                    <Text style={styles.mast.text.subtitle}>Hello!</Text>
                    <Text style={[styles.mast.text.heading, {paddingBottom: "5%"}]}>{formatDateHelper(new Date())}</Text>
                </View>
            <Content>
                <View style={styles.home.promptListContainer}>
                    <PromptList navigation={props.navigation}></PromptList>
                </View>
            </Content>
        </BaseView>


    );
}



export default Home;