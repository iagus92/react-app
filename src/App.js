import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a React</h2>
        </div>
        <p className="App-intro">
          Para empezar, edita <code>src/App.js</code> y guarda para recargar.
        </p>
      </div>
    );
  }
}

export default App;
