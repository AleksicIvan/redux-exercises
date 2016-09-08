let nextToDo = 0

//action creator
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextToDo++,
    completed: false
  }
}