import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

//regular action
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


//thunk action creators
export const signup = (user) => {
  return (dispatch) => (
    //make the AJAX call
    APIUtil.signupUser(user)
      .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
  );
};

export const login = (user) => {
  return (dispatch) => {
    return (
      APIUtil.loginUser(user)
      .then((currentUser) => dispatch(receiveCurrentUser(currentUser)))
    );
  }
};

export const logout = () => {
  return (dispatch) => (
    APIUtil.logout()
      .then(() => dispatch(logoutCurrentUser()))
  );
};
