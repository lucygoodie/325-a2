// TODO write some docs

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const SET_USER = 'SET_USER';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';


export const login = (email, password, onSuccess) => (dispatch) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch({
                type: SET_USER,
                payload: userCredential.user,
            });
            dispatch({
                type: SET_LOGGED_IN,
                payload: true,
            });
            onSuccess();
        })
        .catch((error) => {
            console.error(error.code, error.message)
        });
};
