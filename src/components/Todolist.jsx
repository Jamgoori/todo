import React from 'react';
import { useSelector } from 'react-redux';
import DeleteTodo from './DeleteTodo';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>
          <span className="todo-text">{todo.text}</span>
          <DeleteTodo id={todo.id} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
