import { useState } from 'react';
import styles from '../styles/Styles.js';
import { connect } from 'react-redux';
import { login, loginMock } from '../redux/actions/user_actions';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';

const USE_MOCK = true;

function Login(props) {

    function loginFunc(usernameInput, passwordInput) {
        if (USE_MOCK) {
            props.loginMock(usernameInput, passwordInput);
        } else {
            props.login(usernameInput, passwordInput);

        }
    }
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    return (
        <View style={[styles.layout.span]}>
            <SafeAreaView style={[styles.layout.safeArea, {justifyContent: 'center', alignItems: 'center',}]}>
                <Text>LOGIN</Text>
                    <TextInput
                        style = {{shadowColor: 'black', elevation: 5, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', width: '50%', height: '7%', paddingLeft: 10, margin: 5}}
                        placeholder="username"
                        onChangeText={text => setUsernameInput(text)}/>
                    <TextInput
                        style = {{shadowColor: 'black', elevation: 5, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', width: '50%', height: '7%', paddingLeft: 10, margin: 5}}
                        placeholder="password"
                        onChangeText={text => setPasswordInput(text)}/>
                <TouchableOpacity
                        onPress={() => {

                            // todo need to WAIT until this function is finished execution before continuing
                            loginFunc(usernameInput, passwordInput);

                            // how do I wait until above function is finished before this
                            if (props.user.user !== undefined) props.navigation.navigate("BottomTabs");
                        }}>
                        <Text>
                            Login
                        </Text>
                </TouchableOpacity>
                <View style={{bottom: 20, position: 'absolute',}}>
                    <Text>Don't have an account? Sign up</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

const mapStateToProps = (state) => ({
    user: state.userReducer,
});

export default connect(mapStateToProps, {login, loginMock})(Login);
