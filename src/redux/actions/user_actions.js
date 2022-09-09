// TODO write some docs

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

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
            // dispatch(setUser());
            // dispatch(setLoggedIn(true));
            onSuccess();
        })
        .catch((error) => {
            console.error(error.code, error.message)
        });
};

export const loginMock = (email, password) => (dispatch) => {
    dispatch(
        setUser(
        {   "_redirectEventId": undefined,
            "apiKey": "AIzaSyBjoJa_Uq81o0oLSODl3lHuY9NRmtf6vto",
            "appName": "[DEFAULT]", "createdAt": "1662337931770",
            "displayName": undefined,
            "email": "test_user@gmail.com",
            "emailVerified": false, "isAnonymous": false,
            "lastLoginAt": "1662441112528",
            "phoneNumber": undefined,
            "photoURL": undefined,
            "providerData": [[Object]],
            "stsTokenManager": {
                "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImVkNmJjOWRhMWFmMjM2ZjhlYTU2YTVkNjIyMzQwMWZmNGUwODdmMTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3dlbjMyNS1hMi1hcHAiLCJhdWQiOiJzd2VuMzI1LWEyLWFwcCIsImF1dGhfdGltZSI6MTY2MjQ0MTExMiwidXNlcl9pZCI6IkcyOXozalgweFFoSjk5bjdJZzdoQXVkR2dWcTEiLCJzdWIiOiJHMjl6M2pYMHhRaEo5OW43SWc3aEF1ZEdnVnExIiwiaWF0IjoxNjYyNDQxMTEyLCJleHAiOjE2NjI0NDQ3MTIsImVtYWlsIjoidGVzdF91c2VyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0X3VzZXJAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.Hi7q3eK4sUFRRjN0VZPx_4Iuq9CBHFTMqbi9Af83dNK1uokcYojX3tGjQS9Op4laDK0CVIZbuJBK8_3aN_scoC7R6Kr8_veQrHZEcX8dr5qfrmmMBrTM_jyPCeE54EvVyhtvLItwf17DvGQKsxZUbp8CL5RtQjA_0MVi6D6z0ZlKf7mX_4-myZF6f-FFQABC7pD9tURPtxme0xxll6WUDv2ovrV5p-06vyksgfRSac4B0Jl59hOdKr9vKiKNdsmEsqdFAKfEO_I4SWoPIpHuOM_FmAZFCNaKXunvP3veecfTl3VPFhn6SCJm1oSggjjV_Qjp9u6_-H196KS2mt73xA",
                "expirationTime": 1662444710477,
                "refreshToken": "AOEOulbpGr8dtY58LG8tDvx_2Uk8SeJqAcq-lAZeD42FNkr_EVHmUT58PIxovw99EDUKA6hEo8b9srnHKtIH8YDq4G39vxqxgw0kyCTfcHNoiNfe-u9zgFqKUAFLJdURQau52dtu4uoJTdU7TBVMgJnJHaPV_9fp_cSTPTjfjO5LtFhRoI7M-8gctSx4Da1r-1TcPcOPEkho3EP1kRkLE3Hyxsea66Q09w"
            },
            "tenantId": undefined,
            "uid": "G29z3jX0xQhJ99n7Ig7hAudGgVq1"}
        ));
    dispatch(setLoggedIn(true));
};