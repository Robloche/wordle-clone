import React from "react";

import { GAME_STATE, LETTER_STATUS } from "../../constants";
import Banner from "./Banner";
import GuessInput from "./GuessInput";
import Guess from "./Guess";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";

const initializeLetterStatuses = () => {
  const statuses = {};
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((letter) => statuses[letter] = LETTER_STATUS.Unused);
  return statuses;
};

const initializeAnswer = () => sample(WORDS);

const Game = () => {
  const [answer, setAnwser] = React.useState(initializeAnswer);
  const [guesses, setGuesses] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [gameState, setGameState] = React.useState(GAME_STATE.InProgress);
  const [letterStatuses, setLetterStatuses] = React.useState(initializeLetterStatuses);

  const restartGame = () => {
    setAnwser(initializeAnswer());
    setGuesses([]);
    setResults([]);
    setGameState(GAME_STATE.InProgress);
    setLetterStatuses(initializeLetterStatuses());
  };

  const submitGuess = (guess) => {
    // Update guess list
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    // Check and update results
    const lastResult = checkGuess(guess, answer);
    const newResults = [...results, lastResult];
    setResults(newResults);

    // Update letter statuses (used in VirtualKeyboard)
    const newLetterStatuses = { ...letterStatuses };
    lastResult.forEach(({ letter, status }) => {
      const { [letter]: currentStatus } = letterStatuses;
      if ((currentStatus === LETTER_STATUS.Unused && status !== LETTER_STATUS.Unused)
        || (currentStatus === LETTER_STATUS.Misplaced && status === LETTER_STATUS.Correct)) {
        // Letter changed from Unused to something else, or from Misplaced to Correct
        newLetterStatuses[letter] = status;
      }
    });
    setLetterStatuses(newLetterStatuses);

    // Check end game
    if (lastResult.every((i) => i.status === "correct")) {
      setGameState(GAME_STATE.Won);
    } else if (newResults.length === 6) {
      setGameState(GAME_STATE.Lost);
    }
  };

  return (
    <>
      <Guess results={results} />
      <GuessInput
        gameState={gameState}
        letterStatuses={letterStatuses}
        results={results}
        submitGuess={submitGuess} />
      <Banner
        answer={answer}
        gameState={gameState}
        guessCount={guesses.length}
        restartGame={restartGame} />
    </>
  );
};

export default Game;
