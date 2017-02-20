// initialize game
export const INIT_GAME = 'INIT_GAME';
export const initGame = () => ({
    type: INIT_GAME
});

// check guess value against random number
export const COMPARE_NUMBER = 'COMPARE_NUMBER';
export const NUMBER_MATCHED = 'NUMBER_MATCHED';
export const COLD = 'COLD';
export const HOT = 'HOT';

export const compareNumber = num => (dispatch, getState) => {
  const {randomNumber, guesses} = getState();
  const lastGuess = guesses[guesses.length - 1]
  const numberDistance = Math.abs(lastGuess - randomNumber);
    dispatch({
      type: COMPARE_NUMBER,
      num
    })
  if (randomNumber === num) {
    dispatch({
      type: NUMBER_MATCHED
    })
  } else if(numberDistance > 10) {
    dispatch({
      type: COLD
    })
  } else if (numberDistance < 10) {
    dispatch({
      type: HOT
    })
  }

}
