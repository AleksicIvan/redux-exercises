import React from 'react'
import { Provider } from 'react-redux'
import AddTodo from './AddTodo.js'
import ToDoList from './ToDoList.js'
import store from '../store'


var divStyle = {
  color: 'red'
}

const TodoApp = () => (

  <div>
    <AddTodo />
    <ToDoList style={divStyle}/>
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)
