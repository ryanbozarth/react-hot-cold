// initialize game
export const INIT_GAME = 'INIT_GAME';
export const initGame = () => ({
    type: INIT_GAME
});

// check guess value against random number
export const NUMBER_MATCHED = 'NUMBER_MATCHED';
export const COLDER = 'COLDER';
export const HOTTER = 'HOTTER';

export const compareNumber = num => (dispatch, getState) => {
  const {randomNumber, guesses} = getState();
  const lastGuess = guesses.length
                    ? guesses[guesses.length - 1]
                    : num
  if (randomNumber === num) {
      return dispatch({
        type: NUMBER_MATCHED
      })
  }
  const isHotter = Math.abs(randomNumber - lastGuess) > Math.abs(randomNumber - num)

  if(!isHotter) {
    dispatch({
      num,
      type: COLDER
    })
  } else if (isHotter) {
    dispatch({
      num,
      type: HOTTER
    })
  }

}
