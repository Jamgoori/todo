import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux-toolkit/todoSlice.js';
// import './DeleteTodo.css';

const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(deleteTodo({ id }));
  };

  return (
    <button className="todo-delete" onClick={handleSubmit}>
      삭제하기
    </button>
  );
};

export default DeleteTodo;
