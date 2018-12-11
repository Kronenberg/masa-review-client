import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/testReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;