// Friends reducer file, stores the state of the users friends in the app

import { LOAD_FRIENDS } from "../actions/friends_actions";
import { SET_FRIENDS } from "../actions/friends_actions";
import { SET_CHECKINS } from "../actions/friends_actions";
import { daysBetween, comparePrompts, frequencyInDays } from '../../utils/helpers.js';

const initialFriendsState = {
    friends: [], // set check ins
    prompts: [],
    birthdays: [],
}

export function friendsReducer(state=initialFriendsState, action) {
    switch (action.type) {
        case SET_FRIENDS:

            let friends = [];
            let birthdays = [];
            let overdue = [];

            action.payload.friends.forEach(
                friend => {
                    var friendCheckIns = (action.payload.checkins.filter((c) => { return c.friend_id === friend.id}));
                    var lastCheck = friendCheckIns.length > 0 ?
                        daysBetween((new Date((friendCheckIns[friendCheckIns.length - 1]).date)), new Date()) : Number.MAX_VALUE;
                    var howOverdue = lastCheck - frequencyInDays(friend.reminder_frequency);
                    var f = {
                        ...friend,
                        checkins: friendCheckIns,
                        daysSinceCheckIn: lastCheck,
                        overdueBy: howOverdue
                    };

                    friends.push(f);
                    // TODO set the correct urgency ???
                }
            )

            return {...state, friends: friends, prompts: overdue, birthdays: birthdays }

        default:
            return state;
    }
}

export default { friendsReducer };