
// Actions to be executed in order to access the users friends/checkins data

import { get, put } from '../../services/database.js';
import { where } from "firebase/firestore";

export const LOAD_FRIENDS = 'LOAD_FRIENDS';
export const SET_FRIENDS = 'SET_FRIENDS';
export const SET_OUT_OF_DATE = 'SET_OUT_OF_DATE';


export const loadFriends = (user_id) => (dispatch) => {
    get("connections", [where("user_id", "==", user_id)], "")
        .then( friends => {
            get("checkins", [where("user_id", "==", user_id)], "date")
                .then( checkins => {
                    dispatch({
                        type: SET_FRIENDS,
                        payload: {friends: friends, checkins: checkins}
                    });
                });
        });
};

export const addFriend = (f_name, l_name, dob, reminder_frequency, user_id) => (dispatch) => {

    put('connections',
        {
            dob: dob,
            f_name: f_name,
            l_name: l_name,
            reminder_frequency: reminder_frequency,
            user_id: user_id,
        }).then(
            dispatch({
                type: SET_OUT_OF_DATE,
                payload: {out_of_date: true}
            }));
};

export const editFriend = (f_name, l_name, dob, reminder_frequency, user_id) => {
    console.log('Need to implement edit friend and update document method in database');
};

export const addCheckin = (date, friend_id, notes, type, user_id) => (dispatch) => {
    put('checkins',
        {
            date: date,
            friend_id: friend_id,
            notes: notes,
            type: type,
            user_id: user_id,
        }).then(
        dispatch({
            type: SET_OUT_OF_DATE,
            payload: {out_of_date: true}
        }));
};
