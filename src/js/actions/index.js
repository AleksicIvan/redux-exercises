let nextTodoId = 0

//action creator
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextToDoId++,
    text,
    completed: false
  }
}
