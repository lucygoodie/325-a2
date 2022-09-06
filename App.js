import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';


// const type = ["birthday", "message", "call", "in-person"];
// const frequency = ["None", "Weekly", "Fornightly", "Monthly", "BiMonthly"];

// const store = configureStore();

export default function App() {

    return (
        <Provider store={Store}>
          <NavigationContainer>
              <Stack/>
          </NavigationContainer>
        </Provider>
  );
};
