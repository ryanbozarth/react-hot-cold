import axios from 'axios'

export const getFewestNumber = () => dispatch => {
  return axios.get('/fewest-guesses')
    .then(res => {
      console.log(res.data)
      return dispatch(initGame(res.data.fewestGuesses));
    })
}

export const INIT_GAME = 'INIT_GAME';
export const initGame = (fewestGuesses) => ({
    type: INIT_GAME,
    fewestGuesses
});
export const NUMBER_MATCHED = 'NUMBER_MATCHED';
export const COLDER = 'COLDER';
export const HOTTER = 'HOTTER';
export const NEW_GUESS = 'NEW_GUESS';

export const compareNumber = num => (dispatch, getState) => {
  const {randomNumber, guesses} = getState();
  const lastGuess = guesses.length
                    ? guesses[guesses.length - 1]
                    : num
  if (randomNumber === num) {
    return axios.post('/fewest-guesses', {
      guessCount: guesses.length
    })
    .then(() => dispatch({type: NUMBER_MATCHED}))
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
