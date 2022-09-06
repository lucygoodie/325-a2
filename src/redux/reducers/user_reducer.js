// User reducer file, stores the state of the user of the app

import { SET_USER, SET_LOGGED_IN} from '../actions/user_actions';

const initialState = {
    user: undefined, // todo can I try persist the user data?
    user_id: '',
    loggedIn: false,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload, user_id: action.payload.uid };
        case SET_LOGGED_IN:
            return { ...state, loggedIn: action.payload };
        default:
            return state;
    }
}

export default userReducer;