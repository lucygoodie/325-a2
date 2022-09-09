import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login.js';
import BottomTabs from './BottomTabs';
import Friend from '../screens/Friend/Friend.js';
import AddFriend from '../screens/AddFriend/AddFriend.js';
import EditFriend from '../screens/EditFriend/EditFriend.js';

const Stck = createStackNavigator();
const persisted_state_loggedin = false; // todo persist the state of the user


export default function Stack() {
    return (
            <Stck.Navigator initialRouteName={ persisted_state_loggedin ? "BottomTabs" : "Login" }
                            screenOptions={{headerShown: false}}>
                <Stck.Screen name="Login"
                             component={Login} />
                <Stck.Screen name="BottomTabs"
                             component={BottomTabs} />
                <Stck.Screen name="Friend"
                             component={Friend}/>
                <Stck.Screen name="AddFriend"
                             component={AddFriend} />
                <Stck.Screen name="EditFriend"
                             component={EditFriend} />
            </Stck.Navigator>
    );
};
