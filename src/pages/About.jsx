import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { data } from '../data/infos'
import styles from './styles/about.module.css';

export default class About extends Component {
  render() {
    return (
      <div className={ styles.about }>
        <Header />
        <div className={ styles.aboutContainer }>
          <h1>Sobre mim</h1>
          <br />
          <br />
          <p>{data.about.p1}</p>
          <br />
          <p>{data.about.p2}</p>
          <br />
          <p>{data.about.p3}</p>
          <br />
        </div>
        <Footer />
      </div>
    )
  }
}
