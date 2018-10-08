import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducers = combineReducers({
  sessions: sessionErrorsReducer
});

export default errorsReducers;
