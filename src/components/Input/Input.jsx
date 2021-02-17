import React from 'react';
import './Input.css';

const Input = ({
  inputValue,
  setInputValue,
  placeholder,
}) => (
  <div className="input-container">
    <input
      type="text"
      className="task-input"
      placeholder={placeholder}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />

  </div>
);

export default Input;
