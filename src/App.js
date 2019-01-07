import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='container'>
      <div className="header">React TODO Application</div>
    <Todo />
</div>
    );
  }
}

export default App;
