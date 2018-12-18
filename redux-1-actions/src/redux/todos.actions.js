export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

// Your job is to write two action creators:

export const addTodo = (newTodo) => {
    return {  //ACTION CREATOR
        type: ADD_TODO,
            payload: {
                id: 4,
                completed: false,
                title: newTodo
            }
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
            payload: id //only need id to delete
            
    }
}