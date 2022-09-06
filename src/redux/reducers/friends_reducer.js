// Friends reducer file, stores the state of the users friends in the app

import { SET_FRIENDS } from "../actions/friends_actions";

const initialFriendsState = {
    friends: [],
}

export function friendsReducer(state=initialFriendsState, action) {
    switch (action.type) {
        case SET_FRIENDS:
            return {...state, friends: action.payload }
        default:
            return state;
    }
}

export default { friendsReducer };