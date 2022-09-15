import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home.js';
import Friends from '../screens/Friends/Friends.js';
import Settings from '../screens/Settings/Settings.js';
import styles from '../styles/Styles.js';
import {Text, View, Image} from 'react-native';

const Tab = createBottomTabNavigator();

const inFocusColour = '#2c362f';
const outOfFocusColour = '#c0ccc3';

function BottomTabs({ navigation }) {
    return (
        <Tab.Navigator
            initialRouteName={ "Home" }
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.navigation.bottomTabs.tabBarStyle
            }}>
            <Tab.Screen name="Home" component={ Home } options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.navigation.bottomTabs.tabScreen}>
                        <Image
                            source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? inFocusColour : outOfFocusColour
                            }}
                        />
                        <Text style={{
                            fontSize: 12,
                            color: focused ? inFocusColour : outOfFocusColour
                        }}>Home</Text>
                    </View>
                ),
            }}/>

            <Tab.Screen name="Friends" component={ Friends } options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.navigation.bottomTabs.tabScreen}>
                        <Image
                            source={require('../assets/friends.png')}
                            resizeMode='contain'
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: focused ? inFocusColour : outOfFocusColour
                            }}
                        />
                        <Text style={{
                            fontSize: 12,
                            color: focused ? inFocusColour : outOfFocusColour
                        }}>Friends</Text>
                    </View>
                )
            }}/>

            <Tab.Screen name="Settings" component={ Settings } options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.navigation.bottomTabs.tabScreen}>
                        <Image
                            source={require('../assets/settings.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? inFocusColour : outOfFocusColour
                            }}
                        />
                        <Text style={{
                            fontSize: 12,
                            color: focused ? inFocusColour : outOfFocusColour
                        }}>Settings</Text>
                    </View>
                )
            }}/>

        </Tab.Navigator>
    );
}

export default BottomTabs;