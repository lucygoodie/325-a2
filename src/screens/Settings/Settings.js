
// settings screen displays users settings and allows them to change them

import styles from '../../styles/Styles.js';
import Mast from '../../components/layout/Mast'
import BaseView from '../../components/layout/BaseView.js';
import Content  from '../../components/layout/Content.js';
import TopButtonStrip  from '../../components/layout/TopButtonStrip.js';
import RadioButton from '../../components/RadioButton.js';
import CustomButton1 from '../../components/CustomButton1.js';
import { Text, View } from "react-native";


function Settings(props) {
    return (
        <BaseView>
            <TopButtonStrip/>
            <Mast>
                <Text style={styles.screens.settings.mastText}>Settings</Text>
            </Mast>
            <Content>
                <View style={styles.screens.settings.spacer1}/>
                <View style={styles.screens.settings.notifications.container}>
                <Text style={styles.screens.settings.notifications.text}>Notifications</Text>
                <View style={styles.screens.settings.notifications.radioButton}>
                    <RadioButton items={[
                        { value: 'Off', key: 0 },
                        { value: 'Birthdays', key: 1 },
                        { value: 'Prompts', key: 2 },
                        { value: 'Birthdays and Prompts', key: 3 },]} onPress={(result) => {console.log(result);}}/>
                </View>
                </View>
                <View style={styles.screens.settings.spacer1}/>
                <View style={styles.screens.settings.login.container}>
                    <View style={styles.screens.settings.spacer2}/>
                    <Text style={styles.screens.settings.login.text}>Login</Text>
                    <CustomButton1 additionalStyling={{}}  text={'Log out'} onPress={()=>{props.navigation.navigate("Login")}}/>
                </View>
            </Content>
        </BaseView>

    );
}

export default Settings;