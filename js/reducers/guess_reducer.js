import * as actions from '../actions/index';

const initialState = {
  randomNumber: Math.floor(Math.random() * 100),
  guesses: [],
  correctGuess: false,
  modalView: false,
  modalType: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_GAME:
      return state
    case actions.COLD:
    case actions.HOT:
      return {
        ...state,
        modalView: true,
        modalType: action.type,
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

export const anotherReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.INIT_TEST:
      return initialState
    default:
      return state
  }
}

//TODO: combine reducers after separating into own files
