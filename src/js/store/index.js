import { createStore, combineReducers } from 'redux'

//{ todos:[ {id:42,  text: 'testing...',  completed: false} ] }

const todos = (state=[], action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      break
    default:
      return state
  }
} 

// const incId = (state=[{lastId:0}], action) => {

//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           lastId: lastId + 1  
//         }
//       ]
//       break
//     default:
//       return state
//   }
// }  

// const todoApp = combineReducers({
//   todos,
//   incId
// })

//store -- createStore method allows for getState(), subscribe(), dispatch()
export default createStore(todos)
