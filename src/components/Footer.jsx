import React, { Component } from 'react'
import styles from './Footer.module.css';

export default class Footer extends Component {
  state = {
    curD: new Date().toLocaleDateString(),
  }

  render() {
    return (
      <footer className={ styles.footer }>
        <section>{this.state.curD}</section>
        <section>José alves | 2022</section>
      </footer>
    )
  }
}
