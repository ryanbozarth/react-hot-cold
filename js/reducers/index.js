import * as actions from '../actions/index';

const initialState = {
  randomNumber: Math.floor(Math.random() * 100),
  guesses: [],
  correctGuess: false
};

export const guessReducer = (state=initialState, action) => {

  switch (action.type) {
    case actions.INIT_GAME:
      return initialState
    case actions.TAKE_USER_NUMBER:
      return {
        ...state,
        guesses: [...state.guesses, action.num]
      }
    case actions.COMPARE_NUMBER:
      return {
        ...state,
        guesses: [...state.guesses, action.num]
      }
    case actions.NUMBER_MATCHED:
      return {
        ...state,
        correctGuess: true
      }
    default:
      return state
  }
}
