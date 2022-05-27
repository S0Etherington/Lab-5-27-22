import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: ['1', '2', '3']
    }
  }

  render() {
    let display = this.state.list.map((elem, index) => {
      return <h2 key={index}>{elem}</h2>
    })
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
