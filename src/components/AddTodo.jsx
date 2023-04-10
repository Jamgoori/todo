import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux-toolkit/todoSlice.js';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text,
    };
    dispatch(addTodo(newTodo));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
