import React, { Component } from 'react';
import './App.css';

import AliveBand from './containers/AliveBand';
import Shutdown from './containers/Shutdown';
import Restart from './containers/Restart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AliveBand />
        <div className="App-content">
          <Shutdown />
          <Restart />
        </div>
      </div>
    );
  }
}

export default App;
