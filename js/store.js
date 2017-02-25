import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import guessReducer from './reducers/guess_reducer'

const store = createStore(guessReducer, applyMiddleware(thunk, logger()));

export default store
