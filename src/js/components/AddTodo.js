import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => {
        onTodoClick(text)
      }}>
        Add Todo
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (text) => {
      dispatch(addTodo('hard-coded'));
    }
  };
};

export default connect()(AddTodo);
