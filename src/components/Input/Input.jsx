import React from 'react';
import './Input.css';

const Input = ({
  inputValue, setInputValue, input2Value, setInput2Value,
}) => (
  <div className="input-container">
    <input
      type="text"
      id="text-input"
      className="task-input"
      placeholder="Next task"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />

    <br />

    <input
      type="text"
      id="text-input"
      className="description-input"
      placeholder="Task description"
      value={input2Value}
      onChange={(event) => setInput2Value(event.target.value)}
    />
  </div>
);

export default Input;
