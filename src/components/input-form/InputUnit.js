import React from "react";

const InputUnit = ({ unit, handleUnitChange }) => {
  return (
    <input
      className="base-unit-input"
      type="text"
      placeholder="Enter the unit"
      value={unit}
      onChange={handleUnitChange}
    />
  );
};

export default InputUnit;