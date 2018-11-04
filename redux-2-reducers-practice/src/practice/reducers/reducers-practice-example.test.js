import reducer from './reducers-practice-example'

let initialState = [{
  id: 1,
  title: 'do dishes'
},
{
  id: 2,
  title: 'do laundry'
}]

describe('Example Question: Reducers Practice', () => {
  it('should be a function', () => {
    expect(typeof reducer).toBe('function')
  });
  it('should add a todo to the state', () => {
    let action = { type: 'ADD_TODO', payload: {
      id: 3,
      title: 'eat some food'
    }}
    let result = reducer(initialState, action)
    expect(result.length).toBe(3)
  });
  it('should replace existing state with action\'s payload', () => {
    let action = { type: 'FETCH_TODOS', payload: [{
      id: 3,
      title: 'eat some food'
    }] }
    let result = reducer(initialState, action)
    expect(result.length).toBe(1)
  });
  it('should remove a todo from the list', () => {
    let action = { type: 'REMOVE_TODO', payload: 1 }
    let result = reducer(initialState, action)
    expect(result.length).toBe(1)
  });
  it('should return state unchanged if an unknown action type is used', () => {
    let action = { type: 'blah' }
    let result = reducer(initialState, action)
    expect(result.length).toBe(2)
  });
});