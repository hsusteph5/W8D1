import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import sessionsReducer from './session_reducer';
import errorsReducers from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  errors: errorsReducers
});

export default rootReducer;
