import { 
  addTodo, 
  ADD_TODO,
  increment,
  INCREMENT,
  addGrocery,
  ADD_GROCERY, 
  UPDATE_CONTACT,
  updateContact,
  removeUser,
  REMOVE_USER, 
  FETCH_USER,
  fetchUser } from './actions-practice'

describe('Example Question: addTodo', () => {
  let result = addTodo({ title: 'do dishes' })
  it('should contain an action type label', () => {
    expect(ADD_TODO).toBe("ADD_TODO")
  });
  it('should return an action object with a property of "type"', () => {
    expect(result.hasOwnProperty('type')).toBeTruthy()
  });
  it('should return an object containing a property of "type" and a value of ADD_TODO', () => {
    expect(result.type).toBe('ADD_TODO')
  });
  it('should return an object containing a "payload" property', () => {
    expect(result.payload).toBeTruthy()
  });
  it('should return an object containing a "payload" property that contains the argument passed into the action creator', () => {
    expect(result.payload.title).toBe('do dishes')
  });
});

describe('Question 1: increment', () => {
  let result = increment()
  it('should contain an action type label', () => {
    expect(INCREMENT).toBe("INCREMENT")
  });
  it('should return an action object with a property of "type"', () => {
    expect(result.hasOwnProperty('type')).toBeTruthy()
  });
  it('should return an object containing a property of "type" and a value of INCREMENT', () => {
    expect(result.type).toBe('INCREMENT')
  });
});

describe('Question 2: addGrocery', () => {
  let result = addGrocery({ name: 'bananas' })
  it('should contain an action type label', () => {
    expect(ADD_GROCERY).toBe("ADD_GROCERY")
  });
  it('should return an action object with a property of "type"', () => {
    expect(result.hasOwnProperty('type')).toBeTruthy()
  });
  it('should return an object containing a property of "type" and a value of ADD_GROCERY', () => {
    expect(result.type).toBe('ADD_GROCERY')
  });
  it('should return an object containing a "payload" property', () => {
    expect(result.payload).toBeTruthy()
  });
  it('should return an object containing a "payload" property that contains the argument passed into the action creator', () => {
    expect(result.payload.name).toBe('bananas')
  });
});

describe('Question 3: updateContact', () => {
  let result = updateContact({ name: 'Daven' })
  it('should contain an action type label', () => {
    expect(UPDATE_CONTACT).toBe("UPDATE_CONTACT")
  });
  it('should return an action object with a property of "type"', () => {
    expect(result.hasOwnProperty('type')).toBeTruthy()
  });
  it('should return an object containing a property of "type" and a value of UPDATE_CONTACT', () => {
    expect(result.type).toBe('UPDATE_CONTACT')
  });
  it('should return an object containing a "payload" property', () => {
    expect(result.payload).toBeTruthy()
  });
  it('should return an object containing a "payload" property that contains the argument passed into the action creator', () => {
    expect(result.payload.name).toBe('Daven')
  });
});

describe('Question 4: removeUser', () => {
  let result = removeUser(1)
  it('should contain an action type label', () => {
    expect(REMOVE_USER).toBe("REMOVE_USER")
  });
  it('should return an action object with a property of "type"', () => {
    expect(result.hasOwnProperty('type')).toBeTruthy()
  });
  it('should return an object containing a property of "type" and a value of REMOVE_USER', () => {
    expect(result.type).toBe('REMOVE_USER')
  });
  it('should return an object containing a "payload" property', () => {
    expect(result.payload).toBeTruthy()
  });
  it('should return an object containing a "payload" property that contains the argument passed into the action creator', () => {
    expect(result.payload).toBe(1)
  });
});

describe('Question 5: fetchUser', () => {
  let result = fetchUser(1)
  it('should contain an action type label', () => {
    expect(FETCH_USER).toBe("FETCH_USER")
  });
  it('should return an action object with a property of "type"', () => {
    expect(result.hasOwnProperty('type')).toBeTruthy()
  });
  it('should return an object containing a property of "type" and a value of FETCH_USER', () => {
    expect(result.type).toBe('FETCH_USER')
  });
  it('should return an object containing a "payload" property', () => {
    expect(result.payload).toBeTruthy()
  });
  it('should return an object containing a "payload" property that contains the argument passed into the action creator', () => {
    expect(result.payload).toBe(1)
  });
});