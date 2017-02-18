// initialize game
export const INIT_GAME = 'INIT_GAME';
export const initGame = initialize => ({
    type: INIT_GAME,
    initialize
});

export const TAKE_USER_NUMBER = 'TAKE_USER_NUMBER';
export const takeUserNumber = num => ({
  type: TAKE_USER_NUMBER,
  num
});

// check guess value against random number
export const COMPARE_NUMBER = 'COMPARE_NUMBER';
export const NUMBER_MATCHED = 'NUMBER_MATCHED';
export const COLDER = 'COLDER';
export const HOTTER = 'HOTTER';

export const compareNumber = num => (dispatch, getState) => {
  const {randomNumber, guesses} = getState();
  const lastGuess = guesses[guesses.length - 1]
  if (randomNumber === num) {
    dispatch({
      type: NUMBER_MATCHED
    })
  } else if(/*number is farther from answer than last guess*/) {
    dispatch({
      type: COLDER
    })
  } else if (/*number is farther from answer than last guess*/) {
    dispatch({
      type: HOTTER
    })
  }

}
