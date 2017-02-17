// initialize game

export const INIT_GAME = 'INIT_GAME';
export const initGame = initialize => ({
    type: 'INIT_GAME',
    initialize
});

//generate a new random number

export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const genNumber = generate => ({
  type: 'GENERATE_NUMBER',
  generate
});

// check guess value against random number

export const VALIDATE_NUMBER = 'VALIDATE_NUMBER';
export const compareNumber = (genNumber, currentGuess ) => ({
  type: 'VALIDATE_NUMBER',
  genNumber,
  currentGuess
});
