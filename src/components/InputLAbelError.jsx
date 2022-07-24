import React from "react";

const InputLAbelError = ({ label, id, value, onTextChange, error }) => {
  return (
    <div>
      <label htmlFor="txtInput">{label}</label> <span>{error}</span>
      <input
        id={id}
        name="txtInput"
        type="text"
        onChange={onTextChange}
        value={value}
      />
    </div>
  );
};

export default InputLAbelError;
