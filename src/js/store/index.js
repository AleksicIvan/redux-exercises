import { createStore } from 'redux';

//reducer
const TUDU = (state={todos: [{id:44, text:'test44'}, {id:45, text:'test45'}]}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [
          state.todos,
          {
            text: action.text,
            id: action.id,
            completed: false
          }
        ]
      })
      break
    default:
      return state
  }
}

//store -- createStore method allows for getState(), subscribe(), dispatch()

export default createStore(TUDU)
