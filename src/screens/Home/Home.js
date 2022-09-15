
// home page of the app that displays the users list of friend prompts

import { Text, View} from 'react-native';

import BaseView from '../../components/layout/BaseView.js';
import TopButtonStrip  from '../../components/layout/TopButtonStrip.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';
import PromptList from './PromptList.js';

import { formatDateHelper } from "../../utils/helpers.js"

function Home(props) {
    return (
        <BaseView>
            <TopButtonStrip/>
            <Mast>
                <Text style={styles.screens.home.mastSubtitle}>Hello!</Text>
                <Text style={styles.screens.home.mastHeading}>{formatDateHelper(new Date())}</Text>
            </Mast>
            <Content>
                <PromptList navigation={props.navigation}></PromptList>
            </Content>
        </BaseView>
    );
}

export default Home;