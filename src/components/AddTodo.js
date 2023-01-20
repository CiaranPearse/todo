import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <div>
      <input
        aria-label='Enter todo'
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <button
        className='add-todo'
        onClick={() => {
          dispatch(addTodo(input));
          setInput('');
        }}
      >
        Add a Todo
      </button>
    </div>
  );
};

export default AddTodo;
