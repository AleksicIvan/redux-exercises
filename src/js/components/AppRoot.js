import React from 'react';
import { Provider } from 'react-redux';
import AddTodo from './AddTodo.js';
import ToDoList from './ToDoList.js';
import store from '../store';


const TodoApp = () => (
  <div>
    <AddTodo />
    <ToDoList />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
