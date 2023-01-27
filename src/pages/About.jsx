import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { data } from '../data/infos'
import styles from './styles/about.module.css';

export default class About extends Component {
  render() {
    const { text, skills: { hardSkills } } = data.about;
    return (
      <div className={ styles.about }>
        <Header />
        <div className={ styles.aboutContainer }>
          <h1>Sobre mim</h1>
          {text.map((te, index) => (
            <div key={ index+1 }>
              <p>{te}</p>
              <br />
            </div>
          ))}
        </div>
        <div className={ styles.skills }>
          <section className={ styles.hardSkills }>
            {hardSkills.map((hard) => (
              <p>{hard}</p>
            ))}
          </section>
          <section>
            sofSkills
          </section>

        </div>
        <Footer />
      </div>
    )
  }
}
