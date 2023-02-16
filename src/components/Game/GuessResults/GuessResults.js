import { NUM_OF_GUESSES_ALLOWED } from "../../../constants";
import React from "react";
import { range } from "../../../utils";

const GuessResults = ({ results }) => {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row) => (
        <p className="guess" key={row}>
          {range(5).map((col) => (
            <span className={`cell ${results[row]?.[col].status ?? ''}`} key={col}>{results[row]?.[col].letter}</span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
