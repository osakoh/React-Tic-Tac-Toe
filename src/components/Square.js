import React from "react";
import PropTypes from "prop-types";

const Square = ({ onClick, value }) => (
  <div>
    <button style={style} onClick={onClick}>
      {value}
    </button>
  </div>
);

const style = {
  background: "#293241",
  border: "2px solid #000814",
  fontSize: "25px",
  color: "white",
  fontWeight: "750",
  cursor: "pointer",
  outline: "none",
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Square;
