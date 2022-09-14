// File to combine reducers and create redux store

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user_reducer';
import { friendsReducer } from './reducers/friends_reducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, userReducer);

const rootReducer = combineReducers({ userReducer, friendsReducer, persistedReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(Store);

