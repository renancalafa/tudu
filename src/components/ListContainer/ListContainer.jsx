import React, { useState } from 'react';
import './ListContainer.css';
import Input from '../Input';
import Item from '../Task';

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!input2Value) {
      setInput2Value('no description');
    }

    if (inputValue) {
      setList([
        ...list,
        {
          task: inputValue,
          description: input2Value,
        },
      ]);

      setInputValue('');
      setInput2Value('');
    } else {
      alert('You must set a Task to add');
    }
  };

  const handleDeletion = (index) => setList(list.filter((task, indice) => indice !== index));

  return (
    <div className="list-container">
      <ul className="item-container">
        {list.map((item, index) => (
          <div key={item.task}>
            <Item item={item} />
            <input type="button" value="-" onClick={() => handleDeletion(index)} />
          </div>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          input2Value={input2Value}
          setInput2Value={setInput2Value}
        />
        <input type="submit" value="+" />
      </form>
    </div>
  );
};

export default ListContainer;
