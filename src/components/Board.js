import React from "react";
import Square from "./Square";
import PropTypes from "prop-types";

const Board = ({ squares, onClick }) => {
  return (
    <div style={style}>
      {squares.map((square, idx) => (
        <Square key={idx} value={square} onClick={() => onClick(idx)} />
      ))}
    </div>
  );
};

const style = {
  border: "4px solid black",
  borderRadius: "20px",
  width: "300px",
  height: "300px",
  margin: "auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr)/repeat(3, 1fr)",
};

Board.propTypes = {
  squares: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default Board;
