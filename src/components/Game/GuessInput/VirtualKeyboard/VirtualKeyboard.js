import React from "react";

const LETTERS = ["QWERTYUIOP", "ASDFGHJKL", "↵ZXCVBNM←"];

const VirtualKeyboard = ({ addLetter, deleteLetter, letterStatuses, submitGuess }) => {
  const handleOnClick = (letter) => {
    if (letter === "↵") {
      // Enter
      submitGuess();
    } else if (letter === "←") {
      // Backspace
      deleteLetter();
    } else {
      // Regular letter
      addLetter(letter);
    }
  };

  return (
    <div className="keyboard">
      {LETTERS.map((row) => (
        <div key={row}>{row.split("").map((letter) => (
          <span
            className={`letter ${letterStatuses[letter]} ${"↵←".indexOf(letter) > -1 && "action"}`}
            key={letter}
            onClick={() => handleOnClick(letter)}>{letter}</span>
        ))}</div>
      ))}
    </div>
  );
};

export default VirtualKeyboard;
