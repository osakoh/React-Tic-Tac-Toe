import React from "react";
import PropTypes from "prop-types";

const Square = ({ onClick, value }) => (
  <div>
    <button onClick={onClick}>{value}</button>
  </div>
);

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Square;
