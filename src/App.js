import React, { Component } from 'react';
import logo from './logo.svg';
import cris from './rejazzer2.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
	<img src={cris} alt="test"/>
      </div>
    );
  }
}

export default App;
