import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/Todolist';
import AddTodo from './components/AddTodo';
import './App.css'
import store from './redux-toolkit/store'
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoList />
        <AddTodo />
      </div>
    </Provider>
  );
};

export default App;
