import React, { Component } from 'react'
//import logo from './logo.svg'
import TodoApp from './components/todo/TodoApp'
//import Counter from './components/counter/Counter'
import './bootstrap.css'

import './App.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp/>
      </div>
    );
  }
}
/*
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        FirstComponent
      </div>
    )
  }
}
class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        SecondComponent
      </div>
    )
  }
}

*/
export default App;
