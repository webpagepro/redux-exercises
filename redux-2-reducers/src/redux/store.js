import { createStore, combineReducers } from 'redux'
import groceries from './grocery.reducer'

let rootReducer = combineReducers({
  groceries: groceries
})

export default createStore(rootReducer)