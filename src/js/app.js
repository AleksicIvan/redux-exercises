import ReactDOM from 'react-dom';
import AppRoot from './components/AppRoot.js';

ReactDOM.render(
  AppRoot,
  document.getElementById('app')
);


// // TODO:
// // 1. How to connect with react app - learn about connect()
// // 2. Learn about combineReducers
// // 3. Presentational and Container Components
//
// import React, { PropTypes } from 'react'
// import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
// import { connect, Provider } from 'react-redux'
//
// let nextToDoId = 0
//
// //action creator
// const addTodo = (text) => {
//   return {
//     type: 'ADD_TODO',
//     id: nextToDoId++,
//     text,
//     completed: false
//   }
// }
//
// //reducer
// const TodoApp = (state=[], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return Object.assign({}, state, {
//         todos: [
//           state.todos,
//           {
//             text: action.text,
//             id: action.id,
//             completed: false
//           }
//         ]
//       })
//       break
//     default:
//       return state
//   }
// }
//
// //store -- createStore method allows for getState(), subscribe(), dispatch()
// const store = createStore(TodoApp)
//
// let unsubscribe = store.subscribe = () => console.log(store.getState().todos)
//
// //adding todo to the state.todos
// store.dispatch(addTodo('I want to learn Redux'))
// store.dispatch(addTodo('I want to learn Redux and connect it with React'))
//
// unsubscribe()
//
// //attempting to connect Redux Store with React
//
// const Test = (props) => {
//     return (
//       <h1>Hello, {props.name}!</h1>
//     )
// }
//
// class App extends React.Component {
//   render() {
//     return (
//       <Test name='Ivan' />
//     )
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('app'))
