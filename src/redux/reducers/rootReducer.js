import { combineReducers } from 'redux';

// @REDUCERS
import testReducer from './testReducer';

// @ROOT REDUCER
const rootReducer = combineReducers({
  testReducer
});

export default rootReducer;