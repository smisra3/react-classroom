import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Passing properties form parent to child */}
        <Hello text="Hello World" number={1 + 2 + 3 + 4} />
        <Clock/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
