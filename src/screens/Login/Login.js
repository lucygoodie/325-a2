import { useState } from 'react';
import styles from '../../styles/Styles.js';
import { connect } from 'react-redux';
import { login, loginMock } from '../../redux/actions/user_actions';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import { BaseView } from '../../components/Layout.js';

const USE_MOCK = false; // todo remove this stuff when I hand in the assignment

function Login(props) {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    // wait for state of log in to change then return new navigation???

    return (
        <BaseView>
                        <View style={{flex: 2,}}/>

                        <View style={{justifyContent: 'center', alignItems: 'center', flex:2.5, flexDirection: 'column'}}>

                                <Image source = {require('../../assets/app_header.jpg')}
                                       resizeMode = 'contain'
                                       style={{flex: 2, margin: '3%'}}/>

                            <View style={styles.components.textInput.container}>
                                <TextInput
                                    style={styles.components.textInput.content}
                                    placeholder="Username"
                                    onChangeText={text => setUsernameInput(text)}/>
                            </View>
                            <View style={styles.components.textInput.container}>
                                <TextInput
                                    secureTextEntry={true}
                                    style={styles.components.textInput.content}
                                    placeholder="Password"
                                    onChangeText={text => setPasswordInput(text)}/>
                            </View>
                            <View style={{height: 30,}}/>
                            <TouchableOpacity
                                style={styles.components.buttons.b1}
                                onPress={() => {
                                    USE_MOCK ?
                                        props.loginMock(usernameInput, passwordInput)
                                        : props.login(usernameInput, passwordInput, (()=>{props.navigation.navigate("BottomTabs")}));
                                }}>
                                <Text style={styles.components.buttons.b1_content}>
                                    Log In
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View>

                        </View>
                        <View style={{
                            height: 30,
                            width: '90%',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            borderRadius: 2.5,
                            paddingLeft: '10%',
                            bottom: 20,
                            position: 'absolute',}}>

                            <Text>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => {console.log('Sign up page needs to be made...')}}>
                                <Text style={{fontWeight: "bold", textDecorationLine: 'underline', paddingLeft: '2%'}}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 3,}}/>
                </BaseView>
    );
}

const mapStateToProps = (state) => ({
    user: state.userReducer,
});

export default connect(mapStateToProps, {login, loginMock})(Login);
