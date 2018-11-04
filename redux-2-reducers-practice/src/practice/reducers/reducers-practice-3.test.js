import reducer from './reducers-practice-3'

let initialState = [{
  id: 1,
  fname: 'james'
},
{
  id: 2,
  fname: 'jodie'
}]

describe('Example Question: Reducers Practice', () => {
  it('should be a function', () => {
    expect(typeof reducer).toBe('function')
  });
  it('should add a contact to the state', () => {
    let action = { type: 'ADD_CONTACT', payload: {
      id: 3,
      fname: 'jonathan'
    }}
    let result = reducer(initialState, action)
    expect(result.length).toBe(3)
  });
  it('should replace existing state with action\'s payload', () => {
    let action = { type: 'FETCH_CONTACTS', payload: [{
      id: 3,
      fname: 'jason'
    }] }
    let result = reducer(initialState, action)
    expect(result.length).toBe(1)
  });
  it('should remove a contact from the list', () => {
    let action = { type: 'REMOVE_CONTACT', payload: 1 }
    let result = reducer(initialState, action)
    expect(result.length).toBe(1)
  });
  it('should return state unchanged if an unknown action type is used', () => {
    let action = { type: 'blah' }
    let result = reducer(initialState, action)
    expect(result.length).toBe(2)
  });
});