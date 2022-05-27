import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component () {
  constructor() {
    super()

    this.state = {
      filterString: '',
      list: ['hello', 'hey', 'howdy']
    }
  }

  handleChange(e) {
    this.setState({ filterString: e })
  }

  render() {
    let display = this.state.list
      .filter((elem, index) => {
        return elem.includes(this.state.filterString)
      })
      .map((elem, index) => {
        return <h2 key={index}>{elem}</h2>
      })

    return (
      <div className="App">
        <input type='text' onChange={this.handleChange(e.target.value)}/>
        {display}
      </div>
    );
  }
}

export default App;
