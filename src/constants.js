export const NUM_OF_GUESSES_ALLOWED = 6;

export const GAME_STATE = Object.freeze({
  InProgress: 0,
  Lost: 1,
  Won: 2
});

export const LETTER_STATUS = Object.freeze({
  Correct: 'correct',
  Incorrect: 'incorrect',
  Misplaced: 'misplaced',
  Unused: 'unused'
});
