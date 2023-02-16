import { GAME_STATE } from "../../../constants";
import React from "react";

const Banner = ({ answer, gameState, guessCount, restartGame }) => {
  console.log(answer);
  if (gameState === GAME_STATE.InProgress) {
    return null;
  }

  const renderHappyBanner = () => (
    <>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{guessCount} guess{guessCount > 1 && "es"}</strong>.
    </>
  );

  const renderSadBanner = () => (
    <>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </>
  );

  return (
    <div className={`${gameState === GAME_STATE.Won ? "happy" : "sad"} banner`}>
      <p>{gameState === GAME_STATE.Won ? renderHappyBanner() : renderSadBanner()}</p>
      <button
        className="restart"
        onClick={restartGame}>Restart Game
      </button>
    </div>
  );
};

export default Banner;
