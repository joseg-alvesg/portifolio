import React from 'react';
import styles from './Header.module.css';

function Header() {

  return (
    <header className={styles.header}>
      <ul className={styles.ulHeader}>
        <a href='#home'><li>Home</li></a>
        <a href="#projects"><li>Projetos</li></a>
        <a href="#about">Sobre</a>
        <a href='#contacts'>Contatos</a>
      </ul>
    </header >
  )

}

export default Header;
