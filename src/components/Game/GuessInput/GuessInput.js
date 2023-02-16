import { GAME_STATE } from "../../../constants";
import React from "react";
import VirtualKeyboard from "./VirtualKeyboard";

const GuessInput = ({ gameState, letterStatuses, results, submitGuess }) => {
  const [guess, setGuess] = React.useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (guess.length < 5) {
      return;
    }

    submitGuess(guess);
    setGuess("");
  };

  const addLetter = (letter) => {
    if (gameState !== GAME_STATE.InProgress || guess.length === 5) {
      // Game finished or 5 letters already entered
      return;
    }

    setGuess(`${guess}${letter}`);
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoComplete="off"
        autoFocus
        disabled={gameState !== GAME_STATE.InProgress}
        id="guess-input"
        maxLength={5}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        required
        title="Enter a 5-letter word"
        type="text"
        value={guess} />
      <VirtualKeyboard
        addLetter={addLetter}
        letterStatuses={letterStatuses}
        results={results} />
    </form>
  );
};

export default GuessInput;
