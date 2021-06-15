import React from "react";
import PropTypes from "prop-types";

const Square = ({ onClick, value }) => (
  <div style={{ margin: "auto" }}>
    <button className='click' style={style} onClick={onClick}>
      {value}
    </button>
  </div>
);

// css for square
const style = {
  background: "#293241",
  border: "2px dotted #edf2f4",
  borderRadius: "20px",
  fontSize: "40px",
  color: "white",
  fontWeight: "300",
  width: "100px",
  height: "100px",
  margin: "0 auto",
  cursor: "pointer",
  outline: "none",
};

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Square;
