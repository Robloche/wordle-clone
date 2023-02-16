import React from "react";

const LETTERS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

const VirtualKeyboard = ({ addLetter, letterStatuses, results }) => (
  <div className="keyboard">
    {LETTERS.map((row) => (
      <div key={row}>{row.split("").map((letter) => (
        <span
          className={`letter ${letterStatuses[letter]}`}
          key={letter}
          onClick={() => addLetter(letter)}>{letter}</span>
      ))}</div>
    ))}
  </div>
);

export default VirtualKeyboard;
