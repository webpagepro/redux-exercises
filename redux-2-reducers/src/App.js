import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './redux/todos.actions'

class App extends Component {
  state = { newTodo: '' }
  handleChange = e => this.setState({ newTodo: e.target.value })
  render() {
    let listOfGroceries = this.props.groceries.map(grocery => <li key={grocery.id}>{grocery.item}</li>)
    return (
      <div className="App">
        <p>
          New newTodo: 
          <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button
            onClick={() => this.props.addGrocery(this.state.newTodo)}
          >Submit</button>
        </p>
        <h3>Grocery List:</h3>
        <ul>{listOfGroceries}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  groceries: state.groceries
})

export default connect(mapStateToProps, { addGrocery, removeGrocery })(App)
