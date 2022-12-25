import React, { Component } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/projects" component={ Projetos } />
            <Route exact path="/about" component={ About } />
          </Switch>
      </div>
    );
  }
}

export default App;
