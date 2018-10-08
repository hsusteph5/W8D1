import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

//action: {user: {id: , username: } }
const sessionReducer = (state = { id: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.user.id});
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, { id: null});
    default:
      return state;
  }
};

export default sessionReducer;
