import reducer from './reducers-practice-2'

let initialState = [{
  id: 1,
  title: 'bananas'
},
{
  id: 2,
  title: 'grapes'
}]

describe('Example Question: Reducers Practice', () => {
  it('should be a function', () => {
    expect(typeof reducer).toBe('function')
  });
  it('should add a grocery to the state', () => {
    let action = { type: 'ADD_GROCERY', payload: {
      id: 3,
      title: 'apples'
    }}
    let result = reducer(initialState, action)
    expect(result.length).toBe(3)
  });
  it('should replace existing state with action\'s payload', () => {
    let action = { type: 'FETCH_GROCERIES', payload: [{
      id: 3,
      title: 'tangerines'
    }] }
    let result = reducer(initialState, action)
    expect(result.length).toBe(1)
  });
  it('should remove a grocery from the list', () => {
    let action = { type: 'REMOVE_GROCERY', payload: 1 }
    let result = reducer(initialState, action)
    expect(result.length).toBe(1)
  });
  it('should return state unchanged if an unknown action type is used', () => {
    let action = { type: 'blah' }
    let result = reducer(initialState, action)
    expect(result.length).toBe(2)
  });
});