/* 
  EXAMPLE PROBLEM!!!
  
  Export the following:
    - An action type label that says ADD_TODO
    - An action creator function called "addTodo" that expects a new todo object as an argument.
*/

export const ADD_TODO = 'ADD_TODO'

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
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
