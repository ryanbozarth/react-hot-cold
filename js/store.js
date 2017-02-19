import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import guessReducer from './reducers/index';

export default createStore(guessReducer, applyMiddleware(thunk));
