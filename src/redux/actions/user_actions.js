import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO write some docs

export const SET_USER = 'SET_USER';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const setUser = user => dispatch => {
    dispatch({
        type: SET_USER,
        payload: user,
    });
};

export const setLoggedIn = loggedIn => dispatch => {
    dispatch({
        type: SET_LOGGED_IN,
        payload: loggedIn,
    });
};


// todo add doc
// https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0#web-version-9
export const login = (email, password) => (dispatch) => {

    const auth = getAuth();

    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch(setUser(userCredential.user));
            dispatch(setLoggedIn(true));
        })
        .catch((error) => {
            console.error(error.code, error.message)
        });
};
