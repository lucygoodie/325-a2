import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack';
import { db } from './firebase-config.js';
import { collection, getDocs} from "firebase/firestore";

const type = ["birthday", "message", "call", "in-person"];
const frequency = ["None", "Weekly", "Fornightly", "Monthly", "BiMonthly"];


export default function App() {


    return (
          <NavigationContainer>
              <Stack/>
          </NavigationContainer>
  );
};
