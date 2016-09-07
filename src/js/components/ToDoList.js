import React from 'react'
import { connect } from 'react-redux'

const Todo = ({ text }) => (
  <li>
    {text}
  </li>
);

const ToDoList = (todos) => (
    <ul>
    {todos.map(todo => 
      <Todo key={todo.id}
        {...todo}
      />    
    )}
    </ul>
)

const mapStateToProps = (state) => {
  console.log(Array.isArray(state.todos))
  console.log(state.todos)
  return {
    todos: ToDoList(state.todos)
  }
}

export default connect(
  mapStateToProps
)(ToDoList)
