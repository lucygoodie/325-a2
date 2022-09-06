// import * from 'react';
import { useState, useEffect } from 'react';
import styles from '../styles/Styles.js';
import { useDispatch, useSelector } from 'react-redux';
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity} from 'react-native';

// import { setName, setAge } from '../redux/actions/user_actions';
import { login } from '../redux/actions/user_actions';

async function login_submit(usernameInput, passwordInput) {

}

function Login({navigation}) {

    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    let {loggedIn, user} = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

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
                            console.log('logged in before: ', loggedIn);
                            dispatch(login(usernameInput, passwordInput)).then(() => {

                                console.log('logged in after: ', loggedIn);
                            });

                            // useEffect(() => {
                            //
                            // }, [loggedIn]);

                        }
                        }
                        >
                        <Text>Login</Text>
                    </TouchableOpacity>

                <View style={{bottom: 20, position: 'absolute',}}>
                    <Text>Don't have an account? Sign up</Text>
                </View>
            </SafeAreaView>
        </View>

    );
}
//
// function mapStateToProps(state) {
//     return {
//         loggedIn: state.userReducer.loggedIn
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         login:(usernameInput, passwordInput) => {
//             dispatch(login(usernameInput, passwordInput));
//
//         },
//     };
// }

export default (Login);
