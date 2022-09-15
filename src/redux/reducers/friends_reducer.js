
// Friends reducer file, stores the state of the users friends in the app

import { LOAD_FRIENDS } from "../actions/friends_actions";
import { SET_FRIENDS } from "../actions/friends_actions";
import { SET_OUT_OF_DATE } from "../actions/friends_actions";

import { daysBetween, comparePrompts, frequencyInDays } from '../../utils/helpers.js';

const initialFriendsState = {
    friends: [], // holds information about the users friends and the checking with each friend
    prompts: [],
    out_of_date: true,
}


export function friendsReducer(state=initialFriendsState, action) {
    switch (action.type) {
        case SET_FRIENDS:

            let friends = [];
            let overdue = [];

            action.payload.friends.forEach(
                friend => {
                    var friendCheckIns = (action.payload.checkins.filter((c) => { return c.friend_id === friend.id}));
                    var lastCheck = friendCheckIns.length > 0 ?
                        daysBetween((new Date((friendCheckIns[0]).date)), new Date()) : Number.MAX_VALUE;
                    var howOverdue = lastCheck - frequencyInDays(friend.reminder_frequency);
                    var f = {
                        ...friend,
                        checkins: friendCheckIns,
                        daysSinceCheckIn: lastCheck,
                        overdueBy: howOverdue
                    };

                    friends.push(f);
                }
            )

            return {...state, friends: friends, prompts: overdue, out_of_date: false};

        case SET_OUT_OF_DATE:
            return {...state, out_of_date: action.payload.out_of_date};

        default:
            return state;
    }
}

export default { friendsReducer };