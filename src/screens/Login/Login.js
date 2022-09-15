
// screen shown to user when app launches and requires the user to login

import { useState, useEffect } from 'react';
import styles from '../../styles/Styles.js';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/user_actions';
import { Text, View, TouchableOpacity } from 'react-native';
import BaseView from '../../components/layout/BaseView.js';
import Mast from '../../components/layout/Mast.js';
import Content  from '../../components/layout/Content.js';
import CustomTextInput  from '../../components/CustomTextInput.js';
import CustomButton1  from '../../components/CustomButton1.js';

function Login(props) {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    return (
        <BaseView>
            <Content additionalStyling={{backgroundColor: '#c3d7d9'}}>
                <View style={styles.screens.login.spacer1}/>
                <View style={styles.screens.login.content}>
                    <Text style={styles.screens.login.text}>in Touch</Text>

                    <CustomTextInput placeholder={'Username'}
                                     additionalStyling={{flexBasis: 40, flex:0.1}}
                                     onChangeText={text => setUsernameInput(text)}/>
                    <CustomTextInput
                        placeholder={'Password'}
                        additionalStyling={{flexBasis: 40, flex:0.1}}
                        onChangeText={text => setPasswordInput(text)} secure={true}/>
                    <View style={styles.screens.login.spacer3}/>
                    <CustomButton1 onPress={() => {props.login(usernameInput, passwordInput, (()=>{props.navigation.navigate("BottomTabs")}))}}
                                   text={'Log in'}
                                   additionalStyling={{flexBasis: 40, flex:0.1}}/>
                </View>
                <View style={styles.screens.login.signUp.text}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => {console.log('Sign up page needs to be made...')}}>
                        <Text style={styles.screens.login.signUp.link}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.screens.login.spacer2}/>
            </Content>
        </BaseView>
    );
}

const mapStateToProps = (state) => ({
    user: state.userReducer,
});

export default connect(mapStateToProps, {login })(Login);
