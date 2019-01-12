
import React, { Component } from 'react';
import './App.css'
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
        <div className="container pure-u-11-12">
        <div className="header"> <h3>TODO'S</h3></div>
        
      <TodoList />
      
      </div>
    );
  }
}

export default App;