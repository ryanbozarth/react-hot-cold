// initialize game
export const INIT_GAME = 'INIT_GAME';
export const initGame = () => ({
    type: INIT_GAME
});

// check guess value against random number
export const NUMBER_MATCHED = 'NUMBER_MATCHED';
export const COLD = 'COLD';
export const HOT = 'HOT';

export const compareNumber = num => (dispatch, getState) => {
  const {randomNumber, guesses} = getState();
  console.log(randomNumber, guesses, num)
  if (randomNumber === num) {
    console.log('we have a match')
      return dispatch({
        type: NUMBER_MATCHED
      })
  }
  const numberDistance = Math.abs(randomNumber - num)
  if(numberDistance > 10) {
    console.log('we are cold')
    dispatch({
      num,
      type: COLD
    })
  } else if (numberDistance < 10) {
    console.log('we are hot')
    dispatch({
      num,
      type: HOT
    })
  }

}
