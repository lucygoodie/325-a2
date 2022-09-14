import * as React from 'react';
import styles from '../../styles/Styles.js';
import Mast from '../../components/layout/Mast'
import BaseView from '../../components/layout/BaseView.js';
import Content  from '../../components/layout/Content.js';
import TopButtonStrip  from '../../components/layout/TopButtonStrip.js';
import RadioButton from '../../components/RadioButton.js';
import CustomButton1 from '../../components/CustomButton1.js';

import { Button, Text, View } from "react-native";


function Settings(props) {
    return (
        <BaseView>
            <TopButtonStrip/>
            <Mast>
                <Text style={[styles.screens.home.mastHeading, {paddingLeft: '10%'}]}>Settings</Text>
            </Mast>
            <Content>
                <View style={{height: '5%'}}/>
                <View style={{backgroundColor: 'white', borderRadius: 3, borderWidth: 0.2, height: '25%', width: '90%', justifyContent: 'center', alignSelf: 'center', paddingTop: '5%', paddingBottom: '5%'}}>

                <Text style={[styles.screens.home.mastHeading, {paddingLeft: '10%', fontSize: 20}]}>Notifications</Text>
                <View style={{width: '90%', height: '50%', paddingLeft: '5%'}}>
                    <RadioButton items={[
                        { value: 'Off', key: 0 },
                        { value: 'Birthdays', key: 1 },
                        { value: 'Prompts', key: 2 },
                        { value: 'Birthdays and Prompts', key: 3 },]} onPress={(result) => {console.log(result);}}/>
                </View>
                </View>
                <View style={{height: '5%'}}/>
                <View style={{backgroundColor: 'white',  borderRadius: 3, borderWidth: 0.2, height: '20%', width: '90%', justifyContent: 'center', alignSelf: 'center', paddingTop: '5%', paddingBottom: '5%'}}>

                <View style={{height: '3%'}}/>
                <Text style={[styles.screens.home.mastHeading, {paddingLeft: '10%', fontSize: 20}]}>Login</Text>
                <CustomButton1 additionalStyling={{}}  text={'Log out'} onPress={()=>{props.navigation.navigate("Login")}}/>
                </View>
                </Content>
        </BaseView>

    );
}


export default Settings;
