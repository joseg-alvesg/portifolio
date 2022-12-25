import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <ul className={ styles.ulHeader }>
            <Link to="/"><li>Home</li></Link>
          <Link to="/projects"><li>Projetos</li></Link>
          {/* <Link to="/about">Sobre</Link>
          <Link to="/contacts">Contatos</Link> */}
        </ul>
      </header>
    )
  }
}

export default Header;
