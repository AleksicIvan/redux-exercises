import React from 'react'
import { connect } from 'react-redux'

const Todo = ({ text, id }) => (
  <li>
    {id + ': ' + text}
  </li>
);

const ToDoList = ({ todos }) => (

    <ul>
    {todos.map(todo => 
      <Todo key={todo.id}
        {...todo}
      />    
    )}
    </ul>

)

const mapStateToProps = (state) => {
  console.log(Array.isArray(state))
  console.log(state)
  return {
    todos: state
  }
}

export default connect(
  mapStateToProps
)(ToDoList)
