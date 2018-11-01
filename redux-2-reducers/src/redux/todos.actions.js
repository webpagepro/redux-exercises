export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// Your job is to write two action creators:

export const addTodo = Todo => {
  return {
    type: ADD_TODO,
    payload: TODO
  }
}

export const removeTodo = id => {
  return {
    type: REMOVE_Todo,
    payload: id
  }
}