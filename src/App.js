import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = {
    persons: [
      { name: 'Alan', age: 20,},
      { name: 'Mohamed', age: 23},
      { name: 'Jessica', age: 34}
    ]
  }
  switchNameHandler = () => {
    console.log('clicked!')
  }
  
  render(){
    return (
      <div className="App">
        <h1>This is a React app</h1>
        <p>It's working! Mwahahahaha!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Soccer </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  }
}

export default App;
