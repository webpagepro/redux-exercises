import reducer from './reducers-practice-1'

let initialState = 0

describe('Example Question: Reducers Practice', () => {
  it('should be a function', () => {
    expect(typeof reducer).toBe('function')
  });
  it('should increment the state by one', () => {
    let action = { type: 'INCREMENT' }
    let result = reducer(initialState, action)
    expect(result).toBe(1)
  });
  it('should decrement the state by one', () => {
    let action = { type: 'DECREMENT' }
    let result = reducer(initialState, action)
    expect(result).toBe(-1)
  });
  it('should return state unchanged if an unknown action type is used', () => {
    let action = { type: 'blah' }
    let result = reducer(initialState, action)
    expect(result).toBe(0)
  });
});