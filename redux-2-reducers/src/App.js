import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addGrocery, removeGrocery } from './redux/grocery.actions'

class App extends Component {
  state = { newGroceryItem: '' }
  handleChange = e => this.setState({ newGroceryItem: e.target.value })
  render() {
    let listOfGroceries = this.props.groceries.map(grocery => <li key={grocery.id}>{grocery.item}</li>)
    return (
      <div className="App">
        <p>
          New Grocery: 
          <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.newGroceryItem}
          />
          <button
            onClick={() => this.props.addGrocery(this.state.newGroceryItem)}
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
