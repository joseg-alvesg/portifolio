import React, { Component } from 'react'
import './App.css';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Home />
        <Projetos />
        <About />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
