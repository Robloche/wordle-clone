import { LETTER_STATUS } from "./constants";

export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split('');
  const answerChars = answer.split('');

  return guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];

    let status;
    if (guessChar === answerChar) {
      status = LETTER_STATUS.Correct;
    } else if (answerChars.includes(guessChar)) {
      status = LETTER_STATUS.Misplaced;
    } else {
      status = LETTER_STATUS.Incorrect;
    }
    return {
      letter: guessChar,
      status,
    };
  });
}
