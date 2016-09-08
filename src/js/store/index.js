import { createStore } from 'redux';

//{ todos:[ {id:42,  text: 'testing...',  completed: false} ] }

const todos = (state=[{id:42,  text: 'testing...',  completed: false}], action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id:action.id,
          text:action.text,
          completed:false
        }
      ]
      break
    default:
      return state
  }
}

//store -- createStore method allows for getState(), subscribe(), dispatch()
export default createStore(todos)
