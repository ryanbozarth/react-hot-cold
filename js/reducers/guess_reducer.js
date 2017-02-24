import * as actions from '../actions/index';

const initialState = {
  randomNumber: Math.floor(Math.random() * 100),
  guesses: [],
  correctGuess: false,
  modalView: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_GAME:
      return state
    case actions.COMPARE_NUMBER:
      const payload = state.guesses
      console.log(state)
      return {
        ...state,
        guesses: [...state.guesses, action.num] }
    case actions.COLD:
      return {
        ...state,
        modalView: true
      }
      case actions.HOT:
        return {
          ...state,
          modalView: true
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

export const anotherReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.INIT_TEST:
      return initialState
    default:
      return state
  }
}

//TODO: combine reducers after separating into own files
