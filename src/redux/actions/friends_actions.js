
// TODO write some docs

export const SET_FRIENDS = 'SET_FRIENDS';

// TODO
// pull the friends and the checkins and store in this list....
export const setFriends = (friends) => (dispatch) => {
    dispatch({
        type: SET_FRIENDS,
        payload: friends,
    })
};
