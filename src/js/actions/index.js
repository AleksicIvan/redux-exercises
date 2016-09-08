var nextId = 0

//action creator
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextId++,
    completed: false
  }
}
