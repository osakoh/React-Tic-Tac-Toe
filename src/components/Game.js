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
    <div style={{ margin: "15%" }}>
      <Board onClick={handleClick} />
    </div>
  );
};

export default Game;
