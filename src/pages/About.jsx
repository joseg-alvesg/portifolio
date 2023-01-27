import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { data } from '../data/infos'
import styles from './styles/about.module.css';

export default class About extends Component {
  render() {
    const { text, tools: { focus } } = data.about;
    return (
      <div className={styles.about}>
        <Header />
        <div className={styles.aboutContainer}>
          <h1>Sobre mim</h1>
          {text.map((te, index) => (
            <div key={index + 1}>
              <p>{te}</p>
              <br />
            </div>
          ))}
        </div>
        <div className={styles.skills}>

          <section className={styles.hardSkills}>
            <h2>Hard Skills:</h2>
            {focus.map(({ name, img }) => (
              <section key={name}>
                <p>{name}</p>
                <img src={img} alt={name} />
              </section>
            ))}
          </section>
          {/* <section className={styles.softSkills}>
            sofSkills
          </section> */}

        </div>
        <Footer />
      </div>
    )
  }
}
