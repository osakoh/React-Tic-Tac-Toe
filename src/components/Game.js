import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./utils/helper";

const Game = () => {
  // functional state: create an array with 9 elements and fill with null
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const winner = calculateWinner(board);

  // handleClick function
  const handleClick = (i) => {
    // create copy and not mutate the state
    const copyBoard = [...board]; // shallow copy of array using the spread operator
    // user clicks an occupied square or game is won
    if (winner || copyBoard[i]) return;
    // put X or O in the clicked square
    copyBoard[i] = xIsNext ? "X" : "O";
    setBoard(copyBoard);
    setxIsNext(!xIsNext);
  };

  // jumpto function
  const jumpTo = () => {};

  // rendermoves function
  const renderMoves = () => {};

  return (
    <div style={{ margin: "15%" }}>
      <Board squares={board} onClick={handleClick} />
    </div>
  );
};

export default Game;
