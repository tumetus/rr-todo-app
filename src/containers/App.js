import React, { Component } from 'react';

import InputBar from './InputBar';
import ListView from './ListView';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <InputBar />
          <ListView />
        </div>
      </div>
    );
  }
}

export default App;
