import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import Friend from '../screens/Friend.js';
import AddFriend from '../screens/AddFriend.js';
import EditFriend from '../screens/EditFriend.js';

const Stck = createStackNavigator();

export default function Stack() {
    return (
            <Stck.Navigator screenOptions={{headerShown: false}}>
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
