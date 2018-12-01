import React, { Component } from 'react';
import Test from './components/test';
import Navbar from './components/Navbar'
class App extends Component {
  render() {
    return (
      <div>
    <Navbar / >
    <div className="">
    <Test />
    </div>
    </div>
    );
  }
}

export default App;
