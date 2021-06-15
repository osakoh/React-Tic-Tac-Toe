import React from "react";
import Board from "./Board";

const Game = () => {
  // handleClick function
  const handleClick = () => {
    console.log("hello");
  };

  // jumpto function
  const jumpTo = () => {};

  // rendermoves function
  const renderMoves = () => {};

  return (
    <div>
      <Board onClick={handleClick} />
    </div>
  );
};

export default Game;
