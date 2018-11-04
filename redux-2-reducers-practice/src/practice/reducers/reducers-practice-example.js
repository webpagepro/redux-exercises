/* 
  EXAMPLE PROBLEM!!!
  
  Export a reducer that will manages an array of todos. It must expect the following action types:
    - ADD_TODO
    - FETCH_TODOS
    - REMOVE_TODO
*/

// These labels were theoretically imported from an action creator file:
let ADD_TODO = 'ADD_TODO'
let FETCH_TODOS = 'FETCH_TODOS'
let REMOVE_TODO = 'REMOVE_TODO'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case FETCH_TODOS:
      return [...action.payload]
    case REMOVE_TODO:
      return state.filter(todo => todo.id === Number(action.payload))
  
    default:
      return state;
  }
}

/*
  Problem # 1

  Export the following:
    - An action type label that says INCREMENT
    - An action creator function called "increment" that expects no arguments.
*/


/*
  Problem # 2

  Export the following:
    - An action type label that says ADD_GROCERY
    - An action creator function called "addGrocery" that expects one argument "newGroceryItem".
*/


/*
  Problem # 3

  Export the following:
    - An action type label that says UPDATE_CONTACT
    - An action creator function called "updateContact" that expects one argument "updatedContact".
*/


/*
  Problem # 4

  Export the following:
    - An action type label that says REMOVE_USER
    - An action creator function called "removeUser" that expects one argument "id".
*/


/*
  Problem # 5

  Export the following:
    - An action type label that says FETCH_USER
    - An action creator function called "fetchUser" that expects one argument "id".
*/
