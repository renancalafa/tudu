import React, { useState } from 'react';
import './ListContainer.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from '../Input';
import Task from '../Task';

const ListContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [list, setList] = useState([]);

  const Toasting = (text, delay, time) => setTimeout(() => {
    toast.dark(text, {
      position: 'top-right',
      autoClose: time,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, delay);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) {
      /* return toast.dark('SET', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }); */

      Toasting('SET', 500, 5000);
      Toasting('THE', 1000, 4500);
      Toasting('MOTHERFUCKING', 1500, 4000);
      Toasting('TASK', 2000, 3500);
      return Toasting('YOU DUMB FUCK!!', 2500, 3000);
    }
    setList([
      ...list,
      {
        task: inputValue,
        description: input2Value || 'no description',
      },
    ]);

    setInputValue('');
    return setInput2Value('');
  };

  const handleDeletion = (indexToDelete) => {
    setList(list.filter((task, index) => index !== indexToDelete));
  };
  return (

    <div className="list-container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          placeholder="New Task"
        />

        <Input
          inputValue={input2Value}
          setInputValue={setInput2Value}
          placeholder="Task Description"
        />
        <input type="submit" className="btn-submit" value="Add Task" />
      </form>
      <ul className="item-container">
        {list.map((item, index) => (
          <div key={item.task}>
            <Task item={item} />
            <input type="button" className="btn-deletion" value="-" onClick={() => handleDeletion(index)} />
          </div>
        ))}
      </ul>
    </div>

  );
};

export default ListContainer;
