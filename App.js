import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Store, persistor } from './src/redux/store';
import { Text, } from 'react-native';


export default function App() {

    return (
        <Provider store={Store}>
            {/*<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>*/}
                <NavigationContainer>
                    <Stack/>
                </NavigationContainer>
            {/*</PersistGate>*/}
        </Provider>
  );
};
