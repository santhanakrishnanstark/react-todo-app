import React from 'react';
import './App.css';
import TodoApp from './Components/TodoApp/TodoApp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <div className="todo-container">
          <TodoApp />
        </div>
      </div>
    );
  }
}

export default App;
