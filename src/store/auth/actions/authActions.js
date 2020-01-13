import API_ROUTE from "../../../constants";
import axios from 'axios';
import setAuthorizationToken from "../../../authorization";
import {history} from "../../../history";
import { BEFORE_STATE, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, UPDATE_USER_AVATAR, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_AVATAR_ERROR, BEFORE_AVATAR_STATE, BEFORE_USER_STATE, FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, DELETE_USER_SUCCESS, DELETE_USER_ERROR } from '../actionTypes';

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(SignOut());
        }, expirationTime * 1000);
    };
};

export const SignIn = (credentials) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE });
        try {
            const res = await axios.post(`${API_ROUTE}/login`, credentials);
            let userData = res.data.response;
            const expirationDate = new Date(new Date().getTime() + 3600);
            localStorage.setItem("token", userData.token);
            localStorage.setItem('user_data', JSON.stringify(userData));
            localStorage.setItem("expirationDate", expirationDate);
            setAuthorizationToken(userData.token);
            dispatch({ type: LOGIN_SUCCESS, payload: userData });
            dispatch(checkAuthTimeout(3600));
        } catch(err) {
            dispatch({ type: LOGIN_ERROR, payload: err.data.response.error })
        }
    }
};

export const SignOut = () => {
    return (dispatch) => {
        localStorage.removeItem("token");
        setAuthorizationToken(false);
        dispatch({ type: LOGOUT_SUCCESS });
        window.localStorage.clear(); //update the localstorage
        localStorage.removeItem("expirationDate");
        history.push('/login');
    }
};

export const SignUp = (newUser) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE });
        try {
            await axios.post(`${API_ROUTE}/users`, newUser);
            dispatch({ type: SIGNUP_SUCCESS });
            history.push('/login');
        } catch(err) {
            dispatch({ type: SIGNUP_ERROR, payload: err.data.response.error })
        }
    }
};

export const updateUserAvatar = (updateUserAvatar) => {
    return async (dispatch, getState) => {
        dispatch({ type: BEFORE_AVATAR_STATE });
        const { id } = getState().Auth.currentUser;
        try {
            const res = await axios.put(`${API_ROUTE}/avatar/users/${id}`, updateUserAvatar, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            let updatedUser = res.data.response;
            window.localStorage.setItem('user_data', JSON.stringify(updatedUser)); //update the localstorage
            dispatch({ type: UPDATE_USER_AVATAR, payload: updatedUser })
        } catch (err) {
            dispatch({ type: UPDATE_USER_AVATAR_ERROR, payload: err.data.response.error })
        }
    }
};

export const updateUser = (updateUser, clearInput) => {

    return async (dispatch, getState) => {
        dispatch({ type: BEFORE_USER_STATE });
        const { currentUser } = getState().Auth;
        try {
            const res = await axios.put(`${API_ROUTE}/users/${currentUser.id}`, updateUser);
            let updatedUser = res.data.response;

            dispatch({ type: UPDATE_USER_SUCCESS, payload: updatedUser });
            window.localStorage.setItem('user_data', JSON.stringify(updatedUser)); //update the localstorages
            clearInput()
        } catch (err) {
            dispatch({ type: UPDATE_USER_ERROR, payload: err.data.response.error })
        }
    }
};

export const deleteUser = (id)  => {

    return async dispatch => {
        dispatch({ type: BEFORE_STATE });
        try {
            const res = await axios.delete(`${API_ROUTE}/users/${id}`);
            let deleteMessage = res.data.response;
            dispatch({ type: DELETE_USER_SUCCESS, payload: deleteMessage });
            window.localStorage.clear(); //update the localstorage
            window.location.href = "/"
        } catch (err) {
            dispatch({ type: DELETE_USER_ERROR, payload: err.data.response.error })
        }
    }
};


export const ForgotPassword = (userEmail, clearInput) => {

    return async (dispatch) => {

        dispatch({ type: BEFORE_STATE });

        try {
            const res = await axios.post(`${API_ROUTE}/password/forgot`, userEmail);
            let passwordRequest = res.data.response;
            dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: passwordRequest });
            clearInput()
        } catch (err) {
            dispatch({ type: FORGOT_PASSWORD_ERROR, payload: err.data.response.error })
        }
    }
};

export const ResetPassword = (details, clearInput) => {

    return async (dispatch) => {

        dispatch({ type: BEFORE_STATE });

        try {
            const res = await axios.post(`${API_ROUTE}/password/reset`, details);
            let passwordRequest = res.data.response;
            dispatch({ type: RESET_PASSWORD_SUCCESS, payload: passwordRequest });
            clearInput()
        } catch (err) {
            dispatch({ type: RESET_PASSWORD_ERROR, payload: err.data.response.error })
        }
    }
};



