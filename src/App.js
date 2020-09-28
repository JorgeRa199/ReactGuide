import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { name: 'Jorge', age: 21},
      { name: 'Luis', age: 29},
      { name: 'Pedro', age: 25}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>App mamalona en react</h1>
        <br />
        <button>Cambiar nombre</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className : "App"}, React.createElement('h1', null,'Otra forma de hacer una app en react mamalona'));
  }
}

export default App;
