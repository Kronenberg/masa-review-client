import { combineReducers } from 'redux';
//@REDUCERS
import locationReducer from './locationReducer'
//@ROOT_REDUCER
const rootReducer = combineReducers({
  locationReducer
})
export default rootReducer;