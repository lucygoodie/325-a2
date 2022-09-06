// File to combine reducers and create redux store

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/user_reducer';
import { friendsReducer } from './reducers/friends_reducer';


const rootReducer = combineReducers({ userReducer, friendsReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));

//
//
//
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import {firebaseReducer} from "react-redux-firebase";
// import {firestoreReducer} from "redux-firestore";
// import { userReducer } from './reducers/user_reducer';
// import { friendsReducer } from './reducers/friends_reducer';
//
// // const rootReducer = combineReducers({firebaseReducer, firestoreReducer, userReducer, friendsReducer, });
// const rootReducer = combineReducers({userReducer});
//
//
// // export default function configureStore(persistedState) {
// //     const store = createStore(
// //         rootReducer,
// //         persistedState,
// //         applyMiddleware(thunk)
// //     );
// //     return store;
// // };
