import * as actions from '../actions/index';

const initialState = {
  randomNumber: null,
  guesses: [],
  correctGuess: false,
  modalView: false,
  modalType: null,
  fewestGuesses: ''
}

const generateRandomNumber = () => {
  initialState.randomNumber = Math.floor(Math.random() * 100)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_GAME:
      generateRandomNumber()
      return initialState
    case actions.COLDER:
    case actions.HOTTER:
      return {
        ...state,
        modalView: true,
        modalType: action.type,
        guesses: [...state.guesses, action.num]
      }
    case actions.NUMBER_MATCHED:
      return {
        ...state,
        correctGuess: true,
        modalView: true,
        modalType: action.type
      }
    
    default:
      return state
  }
}
