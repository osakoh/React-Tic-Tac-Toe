import React from "react";
import Square from "./Square";
import PropTypes from "prop-types";

const Board = ({ squares, onClick }) => {
  return (
    <div>
      <Square value='1' onClick={() => onClick("working")} />
      <Square value='2' onClick={() => onClick("working")} />
      <Square value='3' onClick={() => onClick("working")} />
      <Square value='4' onClick={() => onClick("working")} />
      <Square value='5' onClick={() => onClick("working")} />
      <Square value='6' onClick={() => onClick("working")} />
      <Square value='7' onClick={() => onClick("working")} />
      <Square value='8' onClick={() => onClick("working")} />
      <Square value='9' onClick={() => onClick("working")} />
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
