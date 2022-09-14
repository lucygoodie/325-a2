
// TODO write some docs

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
    // put('connections',
    //     {
    //         dob: dob,
    //         f_name: f_name,
    //         l_name: l_name,
    //         reminder_frequency: reminder_frequency,
    //         user_id: user_id,
    //     }).then(res => {console.log(res)});
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



export const loadFriendsMock = (user_id) => (dispatch) => {
    dispatch({
        type: SET_FRIENDS,
        payload: {
            "checkins": [
                {"date": "2017-07-23", "friend_id": "vuiSXTLS5a4vbMHSXdMB", "id": "dAYZugFb7amT27MSmPpR", "notes": "Moved to California", "type": 2, "user_id": "G29z3jX0xQhJ99n7Ig7hAudGgVq1"},
                {"date": "2016-01-16", "friend_id": "vuiSXTLS5a4vbMHSXdMB", "id": "pOijVviJPTQpJf6Ryt7u", "notes": "\"\"", "type": 2, "user_id": "G29z3jX0xQhJ99n7Ig7hAudGgVq1"},
                {"date": "2015-12-17", "friend_id": "vuiSXTLS5a4vbMHSXdMB", "id": "TX00rYUnDhUf6YM95iMF", "notes": "New dog called Bella", "type": 3, "user_id": "G29z3jX0xQhJ99n7Ig7hAudGgVq1"}],
            "friends": [
                {"dob": "1982-09-04", "f_name": "Timothy", "id": "kpL74xpsfvFoFouFRTze", "l_name": "Green", "reminder_frequency": 2, "user_id": "G29z3jX0xQhJ99n7Ig7hAudGgVq1"},
                {"dob": "1995-12-17", "f_name": "Steven", "id": "vuiSXTLS5a4vbMHSXdMB", "l_name": "Brule", "reminder_frequency": 1, "user_id": "G29z3jX0xQhJ99n7Ig7hAudGgVq1"}]}
    });
};
