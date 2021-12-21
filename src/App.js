import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './Components/About/about';
import TodoApp from './Components/TodoApp/TodoApp';


import { createBrowserHistory } from 'history';
import { runDataDog } from './service/datadog';
import Contact from './Components/Contact/Contact';
import Demo from './Components/Demo/Demo';
let history = createBrowserHistory();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
     this.unlisten = history.listen(({ location, action }) => {
      console.log(action, location.pathname, location.state);
    });

    runDataDog();
  } 

  componentWillMount() {
  //   history.listen((location, action) => {
  //     console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  //   console.log(`The last navigation action was ${action}`)
  // })
  }

  componentWillUnmount = () => {
    this.unlisten();
  }

  render() {
    return (
      <div className="app">
        <nav>
        <Link to="/about">about</Link>
        <Link to="/demo">demo</Link>
        <Link to="/contact">contact</Link>
        </nav>
        <div className="todo-container">
          <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="demo" element={<Demo />} />
        </Routes>
        </div>
      </div>
    );
  }
}

export default App;
