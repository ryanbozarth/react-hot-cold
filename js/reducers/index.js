import * as actions from '../actions/index';

const initialState = [];

export const guessReducer = (state=initialState, action) => {
    if (action.type === actions.INIT_GAME) {
      return [...state, {

      }];
    } else if (action.type === GENERATE_NUMBER){

    } else if (action.type === VALIDATE_NUMBER) {

    }
    return state;
}
