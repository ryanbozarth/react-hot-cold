import { combineReducers } from 'redux'
import guessReducer from './guess_reducer'

const rootReducer = combineReducers({
  guess: guessReducer
})

export default rootReducer
